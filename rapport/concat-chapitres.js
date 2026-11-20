#!/usr/bin/env node

/**
 * Concaténateur de rapport Markdown — générique.
 *
 * Fonctionne avec n'importe quel projet : aucune liste de chapitres n'est
 * écrite dans le script. Il suffit de déposer des fichiers .md dans le
 * dossier des chapitres, dans l'ordre souhaité.
 *
 * - Détecte automatiquement tous les fichiers Markdown du dossier
 * - Ordre naturel du nom de fichier (préfixe numérique, puis alphabet)
 * - Rédige la table des matières à l'emplacement du marqueur <!-- SOMMAIRE -->
 * - Génère le titre à partir du titre existant ou du nom du fichier
 * - Corrige les chemins d'images et signale les images manquantes
 * - Ignore README.md et les fichiers commençant par « _ » ou « . »
 *
 * Usage :
 *   node concat-chapitres.js
 *   node concat-chapitres.js --chapters chapitres --output rapport.md \
 *     --title "Rapport de Projet : Mon Application"
 *   node concat-chapitres.js --marp
 */

const fs = require('fs');
const path = require('path');

// ======================================
// 1. OPTIONS
// ======================================

const SCRIPT_DIR = __dirname;

/**
 * Lit les options de la ligne de commande.
 *
 * Accepte les deux écritures « --option valeur » et « --option=valeur »,
 * ainsi que les alias courts. Une option inconnue, ou une option attendant
 * une valeur qui n'en a pas, interrompt le script avec le code de sortie 1.
 *
 * @param {string[]} argv Arguments bruts, sans « node » ni le nom du script
 *                        (généralement process.argv.slice(2)).
 * @returns {{chapters: string, output: string, title: string, marp: boolean}}
 *          Options résolues : chemins absolus pour « chapters » et « output »,
 *          titre du rapport et activation de l'en-tête Marp.
 */
function parseArgs(argv) {
    const options = {
        chapters: path.join(SCRIPT_DIR, 'chapitres'),
        output: path.join(SCRIPT_DIR, 'rapport.md'),
        title: 'Rapport de Projet',
        marp: false
    };

    for (let i = 0; i < argv.length; i++) {
        const rawArg = argv[i];
        const separator = rawArg.startsWith('--') ? rawArg.indexOf('=') : -1;
        const arg = separator === -1 ? rawArg : rawArg.slice(0, separator);
        const inlineValue = separator === -1 ? undefined : rawArg.slice(separator + 1);

        const next = () => {
            if (inlineValue) {
                return inlineValue;
            }
            const value = argv[++i];
            if (!value) {
                console.error(`Option ${arg} : valeur manquante.`);
                process.exit(1);
            }
            return value;
        };

        if (arg === '--chapters' || arg === '-c') {
            options.chapters = path.resolve(process.cwd(), next());
        } else if (arg === '--output' || arg === '-o') {
            options.output = path.resolve(process.cwd(), next());
        } else if (arg === '--title' || arg === '-t') {
            options.title = next();
        } else if (arg === '--marp') {
            options.marp = true;
        } else if (arg === '--help' || arg === '-h') {
            console.log(`
Usage : node concat-chapitres.js [options]

  -c, --chapters <dossier>  Dossier des chapitres (défaut : chapitres/)
  -o, --output <fichier>    Fichier généré (défaut : rapport.md)
  -t, --title <texte>       Titre du rapport (défaut : Rapport de Projet)
      --marp                Ajoute l'en-tête Marp au fichier généré
  -h, --help                Affiche cette aide
`);
            process.exit(0);
        } else {
            console.error(`Option inconnue : ${arg}`);
            process.exit(1);
        }
    }

    return options;
}

const OPTIONS = parseArgs(process.argv.slice(2));
const CHAPTERS_DIR = OPTIONS.chapters;
const OUTPUT_FILE = OPTIONS.output;
const OUTPUT_DIR = path.dirname(OUTPUT_FILE);

// Marqueur remplacé par la table des matières générée
const TOC_MARKER = /<!--\s*SOMMAIRE\s*-->/;

/**
 * Met en forme un chemin pour l'affichage dans la console.
 *
 * Le chemin devient relatif au dossier courant et utilise des séparateurs
 * « / » quel que soit le système, pour des messages identiques partout.
 *
 * @param {string} chemin Chemin absolu ou relatif à afficher.
 * @returns {string} Chemin relatif avec des « / », ou « . » pour le dossier
 *                   courant.
 */
function affichage(chemin) {
    return path.relative(process.cwd(), chemin).split(path.sep).join('/') || '.';
}

// ======================================
// 2. VÉRIFICATION DES DOSSIERS
// ======================================

console.log('\n====================================');
console.log(' COMPILATION DU RAPPORT');
console.log('====================================\n');

if (!fs.existsSync(CHAPTERS_DIR) || !fs.statSync(CHAPTERS_DIR).isDirectory()) {
    console.error(`Erreur : dossier des chapitres introuvable (${CHAPTERS_DIR}).`);
    console.error('Utilisez --chapters <dossier> pour indiquer son emplacement.');
    process.exit(1);
}

if (path.resolve(OUTPUT_FILE) === path.resolve(CHAPTERS_DIR)) {
    console.error('Erreur : le fichier de sortie ne peut pas être le dossier des chapitres.');
    process.exit(1);
}

// ======================================
// 3. DÉTECTION AUTOMATIQUE DES CHAPITRES
// ======================================

/**
 * Indique si un fichier est un rapport déjà compilé par ce script.
 *
 * La détection se fait sur la signature présente dans l'en-tête généré
 * (« Document consolidé généré automatiquement ») : un rapport laissé dans le
 * dossier des chapitres ne doit pas être relu comme un chapitre, sinon il
 * s'auto-inclurait à chaque exécution.
 *
 * @param {string} filePath Chemin absolu du fichier Markdown à examiner.
 * @returns {boolean} true si le fichier ressemble à un rapport généré.
 */
function estRapportGenere(filePath) {
    const debut = fs.readFileSync(filePath, 'utf-8').slice(0, 400);
    return debut.includes('Document consolidé généré automatiquement');
}

const chapters = fs.readdirSync(CHAPTERS_DIR, { withFileTypes: true })
    .filter(entry => entry.isFile())
    .map(entry => entry.name)
    .filter(name =>
        name.toLowerCase().endsWith('.md') &&
        name.toLowerCase() !== 'readme.md' &&
        !name.startsWith('_') &&
        !name.startsWith('.') &&
        // Ne jamais relire le rapport généré s'il est placé dans ce dossier
        path.resolve(CHAPTERS_DIR, name) !== path.resolve(OUTPUT_FILE)
    )
    .filter(name => {
        const filePath = path.join(CHAPTERS_DIR, name);

        if (estRapportGenere(filePath)) {
            console.log(`  ⚠ ignoré : ${name} (rapport déjà généré)`);
            return false;
        }

        return true;
    })
    .sort((a, b) =>
        a.localeCompare(b, undefined, {
            numeric: true,
            sensitivity: 'base'
        })
    );

if (chapters.length === 0) {
    console.error(`Aucun chapitre Markdown trouvé dans ${CHAPTERS_DIR}.`);
    process.exit(1);
}

console.log(`Dossier des chapitres : ${affichage(CHAPTERS_DIR)}`);
console.log(`Fichiers détectés     : ${chapters.length}`);

// ======================================
// 4. TITRES DES CHAPITRES
// ======================================

/**
 * Retire un préfixe de numérotation déjà écrit dans un titre.
 *
 * Utile pour les chapitres rédigés avant l'automatisation, dont le titre
 * contient encore « Chapitre N : » : le rapport n'affiche que le titre.
 *
 * @param {string} text Titre brut, par exemple « Chapitre 22 : Réalisation ».
 * @returns {string} Titre sans préfixe (« Réalisation »), ou texte inchangé
 *                   s'il n'en contient pas.
 * @example stripChapterPrefix('Chapitre 3 - Conception') // 'Conception'
 */
function stripChapterPrefix(text) {
    return text.replace(/^(?:chapitre|chapter)\s+\d+\s*[:.\-–—]?\s*/i, '').trim();
}

/**
 * Lit un chapitre et normalise son encodage.
 *
 * Le BOM UTF-8 est retiré et les fins de ligne CRLF sont converties en LF,
 * pour que la détection du titre reste fiable sur les fichiers édités sous
 * Windows.
 *
 * @param {string} filePath Chemin absolu du fichier Markdown.
 * @returns {string} Contenu du chapitre, sans BOM, en LF.
 */
function readChapter(filePath) {
    return fs.readFileSync(filePath, 'utf-8')
        .replace(/^\uFEFF/, '')
        .replace(/\r\n?/g, '\n');
}

/**
 * Déduit un titre lisible à partir du nom de fichier.
 *
 * Le préfixe numérique et les séparateurs sont retirés, puis la première
 * lettre est mise en majuscule. Un nom purement numérique ne fournit aucun
 * titre : le chapitre s'affichera « Sans titre » s'il n'a pas de titre de
 * niveau 1.
 *
 * @param {string} filename Nom du fichier, avec ou sans extension.
 * @returns {string} Titre déduit, ou chaîne vide si le nom ne contient que
 *                   des chiffres.
 * @example titleFromFilename('03-contexte_du-projet.md') // 'Contexte du projet'
 * @example titleFromFilename('12.md')                    // ''
 */
function titleFromFilename(filename) {
    const name = path.basename(filename, path.extname(filename))
        .replace(/^\d+[\s._-]*/, '')
        .replace(/[-_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    if (!name) {
        return '';
    }

    return name.charAt(0).toUpperCase() + name.slice(1);
}

/**
 * Sépare le titre de niveau 1 du reste du chapitre.
 *
 * Le premier bloc non vide du fichier est examiné : s'il s'agit d'un titre
 * « # … », il devient le titre du chapitre (préfixe « Chapitre N : » retiré)
 * et n'est pas répété dans le corps. Sinon, le titre est déduit du nom du
 * fichier et tout le contenu est conservé.
 *
 * @param {string} markdown Contenu du chapitre, déjà normalisé (LF, sans BOM).
 * @param {string} filename Nom du fichier, utilisé comme titre de secours.
 * @returns {{title: string, body: string}} Titre du chapitre et contenu
 *          restant, sans le titre d'origine.
 */
function splitTitle(markdown, filename) {
    const lines = markdown.split('\n');
    const firstIndex = lines.findIndex(line => line.trim() !== '');

    if (firstIndex !== -1 && /^#\s+\S/.test(lines[firstIndex].trim())) {
        const heading = lines[firstIndex].trim().replace(/^#\s+/, '');
        const title = stripChapterPrefix(heading) || titleFromFilename(filename);
        const body = lines.slice(firstIndex + 1).join('\n').trim();

        return { title, body };
    }

    return { title: titleFromFilename(filename), body: markdown.trim() };
}

// ======================================
// 5. CHEMINS D'IMAGES
// ======================================

const imagesManquantes = [];

/**
 * Réécrit les chemins d'images pour qu'ils restent valides après assemblage.
 *
 * Chaque image relative au chapitre est résolue depuis le dossier du
 * chapitre, puis exprimée relativement au dossier du rapport généré. Les URL
 * absolues (http, data, mailto) sont laissées telles quelles, les chemins
 * contenant des espaces ou des parenthèses sont encadrés de « <…> », et les
 * images introuvables sont ajoutées à `imagesManquantes` sans être modifiées.
 *
 * @param {string} markdown Contenu Markdown du chapitre.
 * @param {string} chapterFile Chemin absolu du fichier du chapitre.
 * @returns {string} Markdown avec les chemins d'images corrigés.
 */
function rewriteImages(markdown, chapterFile) {
    const chapterDir = path.dirname(chapterFile);

    return markdown.replace(
        /(!\[[^\]]*\]\()(<[^>]+>|[^\s)]+)([^)]*\))/g,
        (match, prefix, rawTarget, suffix) => {
            if (/^(https?:|data:|mailto:)/i.test(rawTarget)) {
                return match;
            }

            const target = rawTarget.replace(/^<|>$/g, '');

            let decodedTarget = target;
            try {
                decodedTarget = decodeURI(target);
            } catch (error) {
                decodedTarget = target;
            }

            const absolutePath = path.resolve(chapterDir, decodedTarget);

            if (!fs.existsSync(absolutePath)) {
                imagesManquantes.push({
                    chapter: path.basename(chapterFile),
                    image: target
                });
                return match;
            }

            const relativePath = path.relative(OUTPUT_DIR, absolutePath)
                .split(path.sep)
                .join('/');

            const needsBrackets = /[\s()]/.test(relativePath);

            return `${prefix}${needsBrackets ? `<${relativePath}>` : relativePath}${suffix}`;
        }
    );
}

// ======================================
// 6. EN-TÊTE DU RAPPORT
// ======================================

const today = new Date().toISOString().split('T')[0];

let content = '';

if (OPTIONS.marp) {
    content += `---
marp: true
theme: default
size: 16:9
paginate: true
---

`;
}

content += `# ${OPTIONS.title}

> Document consolidé généré automatiquement.

> Date de génération : ${today}

---

`;

// ======================================
// 7. LECTURE DES CHAPITRES ET TABLE DES MATIÈRES
// ======================================

const parsedChapters = chapters.map(file => {
    const filePath = path.join(CHAPTERS_DIR, file);
    const raw = readChapter(filePath);
    const { title, body } = splitTitle(raw, file);

    return {
        file,
        filePath,
        title,
        body,
        isToc: TOC_MARKER.test(body)
    };
});

// La liste reprend uniquement les titres des chapitres : le chapitre
// « Table des matières » ne se cite pas lui-même.
const summary = parsedChapters
    .filter(chapter => !chapter.isToc)
    .map(chapter => chapter.title || 'Sans titre');

const tableDesMatieres = summary
    .map(title => '- ' + title)
    .join('\n') || 'Aucun chapitre.';

// ======================================
// 8. COMPILATION DES CHAPITRES
// ======================================

let chapitresVides = 0;

parsedChapters.forEach((chapter, index) => {
    console.log(`\n[${index + 1}/${parsedChapters.length}] ${chapter.file}`);

    let body = chapter.body;

    if (chapter.isToc) {
        body = body.replace(TOC_MARKER, tableDesMatieres);
    } else if (!body) {
        console.log('  + Chapitre vide : titre seul, aucun contenu');
        chapitresVides++;
    }

    body = rewriteImages(body, chapter.filePath);

    // Titre seul, sans numérotation : « # Réalisation »
    const heading = `# ${chapter.title || (chapter.isToc ? 'Table des matières' : 'Sans titre')}`;

    content += body
        ? `${heading}\n\n${body}\n\n---\n\n`
        : `${heading}\n\n---\n\n`;
});

// ======================================
// 9. ÉCRITURE DU FICHIER FINAL
// ======================================

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(OUTPUT_FILE, content, 'utf-8');

// ======================================
// 10. BILAN
// ======================================

console.log('\n====================================');
console.log('       COMPILATION TERMINÉE');
console.log('====================================');
console.log(`Fichiers ajoutés       : ${chapters.length}`);
console.log(`Chapitres listés       : ${summary.length}`);
console.log(`Chapitres vides        : ${chapitresVides}`);
console.log(`Images manquantes      : ${imagesManquantes.length}`);
console.log('\nSommaire :');
summary.forEach(line => console.log(`  ${line}`));

if (imagesManquantes.length > 0) {
    console.log('\n--- IMAGES MANQUANTES ---');
    imagesManquantes.forEach(item => {
        console.log(`- ${item.image} (chapitre : ${item.chapter})`);
    });
}

console.log(`\n✓ Rapport généré : ${affichage(OUTPUT_FILE)}`);
console.log('====================================\n');