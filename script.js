// ============================================================
// CONTENU DU PORTFOLIO
// Modifiez ici le contenu par défaut, ou utilisez le terminal admin.
// ============================================================

// Mot de passe du terminal. La vérification se fait dans le navigateur :
// c'est une protection légère, pas une vraie sécurité. Changez-le.
const ADMIN_PASSWORD = 'changez-moi';
const STORAGE_KEY = 'portfolio-content-v1';

const DEFAULT_CONTENT = {
  site: {
    footer: 'Conçu avec HTML, CSS et JavaScript.'
  },
  hero: {
    greeting: 'Bonjour, je suis',
    firstName: 'Patient',
    lastName: 'KOMAYOMBI',
    role: 'Développeur Web Fullstack',
    intro: "Développeur web fullstack, je conçois des applications web et j'assure le support applicatif de niveau 2 et 3 : diagnostic des incidents, analyse des causes profondes et suivi de la disponibilité des applications.",
    photo: 'Profil.jpg',
    ctaPrimaryLabel: 'Voir mes réalisations',
    ctaPrimaryHref: '#projets',
    ctaSecondaryLabel: 'Me contacter',
    ctaSecondaryHref: '#contact',
    cvLabel: 'Télécharger mon CV',
    cvHref: '#'
  },
  nav: [
    { label: 'À propos', href: '#a-propos' },
    { label: 'Compétences', href: '#competences' },
    { label: 'Réalisations', href: '#projets' },
    { label: 'Parcours', href: '#parcours' },
    { label: 'Contact', href: '#contact' }
  ],
  sections: {
    about: { eyebrow: 'À propos', title: 'Qui suis-je ?' },
    skills: {
      eyebrow: 'Compétences',
      title: 'Ce que je maîtrise',
      lead: "Les technologies et outils que j'utilise au quotidien, du développement à l'exploitation."
    },
    projects: {
      eyebrow: 'Réalisations',
      title: 'Missions clés',
      lead: "Quelques missions concrètes tirées de mon parcours professionnel."
    },
    timeline: {
      eyebrow: 'Parcours',
      title: 'Expériences & formations',
      lead: 'Mon parcours académique et professionnel.'
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Travaillons ensemble',
      lead: "Je suis disponible dès la semaine prochaine pour un entretien. Écrivez-moi, je vous réponds rapidement."
    }
  },
  about: {
    paragraphs: [
      "Titulaire d'une licence en informatique de gestion de l'Institut Supérieur de Commerce de Goma, j'ai complété ma formation par un cursus de développement web fullstack à Kadea Academy. Je combine ainsi la conception d'applications et leur exploitation en production.",
      "Chez Nkokwe Digital Solutions, j'assure le support de niveau 2 et 3 sur les applications : je diagnostique les incidents, j'identifie leurs causes profondes et j'escalade les cas complexes vers les équipes ou les éditeurs concernés. Ce poste m'a appris à travailler avec rigueur auprès des équipes de développement, d'infrastructure et des utilisateurs métiers.",
      "Je recherche aujourd'hui un poste où mettre ces compétences au service de la continuité des services informatiques."
    ],
    facts: [
      { label: 'Qualification', value: 'IT Applications Analyst / Développeur web' },
      { label: 'Localisation', value: 'Kinshasa, RDC' },
      { label: 'Disponibilité', value: 'Maintenant' },
      { label: 'Langues', value: 'Français (courant), Anglais (intermédiaire), Swahili (maternelle), Lingala (bon)' },
      { label: 'Permis', value: 'Permis de conduire (voiture)' }
    ]
  },
  skills: [
    { title: 'Développement web', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Laravel', 'Java', '.NET', 'PHP'] },
    { title: 'Données & API', items: ['SQL', 'API REST', 'Modélisation de bases de données', 'Migrations & sauvegardes', 'SPSS'] },
    { title: 'Qualité, DevOps & sécurité', items: ['Git', 'CI/CD', 'Docker', 'Cloud', 'Tests unitaires', 'Authentification & rôles', 'Protection contre les failles (injection SQL, XSS)'] },
    { title: 'Design Web et graphique', items: ['Canva', 'Photoshop', 'Figma', 'gamma.app'] },
    { title: 'Support & systèmes', items: ['Windows/Linux', 'Outils HelpDesk', 'Monitoring', 'Gestion des incidents', 'Applications métiers'] },
    { title: 'Bureautique & Internet', items: ['MS Word (excellent)', 'MS Excel (excellent)', 'Google Sheets (excellent)', 'Google Keep (excellent)', 'Internet (excellent)'] }
  ],
  projects: [
   {
  title: 'Ajira – Dossier de candidature (web et Android)',
  description: "Application web installable (PWA) et Android pour préparer un dossier de candidature : CV avec 14 modèles, import d'un ancien CV et export PDF ou Word, lettre de motivation, signature électronique, pièces jointes et suivi des candidatures. Comptes avec e-mail, téléphone, nom d'utilisateur ou Google, synchronisation dans le cloud, abonnement Premium activé par clés d'accès générées depuis un terminal administrateur. Déploiement sur Vercel, application Android générée avec Bubblewrap.",
  tags: ['JavaScript', 'PWA', 'Supabase', 'Android (TWA)'],
  demo: 'https://dossieremploicomplet.vercel.app/',
  code: 'https://github.com/patientkom97/dossier_emploi_complet'
    },
    {
      title: 'Support applicatif niveau 2 et 3',
      description: "Diagnostic des incidents, identification des causes profondes, escalade vers les équipes et les éditeurs, et rédaction de rapports de suivi fiables.",
      tags: ['Gestion des incidents', 'Helpdesk', 'Analyse'],
      demo: '#',
      code: '#'
    },
    {
      title: "Administration d'un parc informatique",
      description: "Administration de postes et serveurs, sécurisation des accès, application des politiques de mots de passe et de sauvegarde, suivi des contrats de maintenance. Taux de résolution des demandes utilisateurs de 85 %.",
      tags: ['Windows/Linux', 'Sauvegardes', 'Sécurité'],
      demo: '#',
      code: '#'
    }
  ],
  timeline: [
    {
      date: 'Février 2025 – aujourd\'hui',
      title: 'Développeur Web FullStack',
      org: 'Nkokwe Digital Solutions',
      text: 'Analyse des besoins, conception de l\'architecture et de la base de données, développement front-end et back-end, API REST, tests et maintenance en méthode Agile. Support de niveau 2 et 3 sur applications.'
    },
    {
      date: 'Décembre 2024 – en cours',
      title: 'Développement web Fullstack',
      org: 'Kadea Academy',
      text: 'Conception des interfaces web, des bases de données et des outils numériques de collecte, de traitement et d\'analyse des données.'
    },
 
    {
      date: 'Mars 2024',
      title: 'Conception et modélisation des bases de données',
      org: 'Cursa Online',
      text: 'Modélisation et conception de bases de données.'
    },
  ],
  contact: {
    email: 'patientkom@gmail.com',
    phone: '0854656169'
  }
};

// Modèles utilisés par la commande "add"
const TEMPLATES = {
  skills: () => ({ title: 'Nouvelle catégorie', items: ['Élément'] }),
  projects: () => ({ title: 'Nouveau projet', description: 'Description du projet.', tags: ['Tag'], demo: '#', code: '#' }),
  timeline: () => ({ date: '2026', title: 'Nouvelle étape', org: 'Organisme', text: 'Description.' }),
  nav: () => ({ label: 'Nouveau lien', href: '#' }),
  'about.paragraphs': () => 'Nouveau paragraphe.',
  'about.facts': () => ({ label: 'Nouveau champ', value: 'Valeur' })
};

// ============================================================
// UTILITAIRES
// ============================================================
const $ = id => document.getElementById(id);
const clone = obj => JSON.parse(JSON.stringify(obj));
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));
const tagsHtml = list => `<div class="tags">${(list || []).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>`;

function loadContent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...clone(DEFAULT_CONTENT), ...JSON.parse(raw) };
  } catch (e) { /* stockage indisponible : on garde le contenu par défaut */ }
  return clone(DEFAULT_CONTENT);
}

function saveContent() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    return true;
  } catch (e) {
    return false;
  }
}

let content = loadContent();

// Accès par chemin : "projects.0.title"
function getPath(path, root = content) {
  if (!path) return root;
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), root);
}

function setPath(path, value) {
  const keys = path.split('.');
  const last = keys.pop();
  const target = keys.length ? getPath(keys.join('.')) : content;
  target[last] = value;
}

function splitPath(path) {
  const i = path.lastIndexOf('.');
  return i < 0 ? ['', path] : [path.slice(0, i), path.slice(i + 1)];
}

// Liste toutes les valeurs finales (feuilles) avec leur chemin
function leaves(value, path = '') {
  if (value && typeof value === 'object' && Object.keys(value).length) {
    return Object.entries(value).flatMap(([k, v]) => leaves(v, path ? `${path}.${k}` : k));
  }
  return [[path, value]];
}

// ============================================================
// RENDU DE LA PAGE
// ============================================================
function renderNav() {
  $('navList').innerHTML = content.nav
    .map(l => `<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`).join('');
  $('logo').innerHTML = `&lt;<span>${esc(content.hero.firstName)}</span> ${esc(content.hero.lastName)}/&gt;`;
}

function renderHero() {
  const h = content.hero;
  $('heroGreeting').textContent = h.greeting;
  $('heroName').innerHTML = `${esc(h.firstName)} <em>${esc(h.lastName)}</em>`;
  $('heroRole').textContent = h.role;
  $('heroIntro').textContent = h.intro;
  $('heroButtons').innerHTML = `
    <a class="btn primary" href="${esc(h.ctaPrimaryHref)}">${esc(h.ctaPrimaryLabel)}</a>
    <a class="btn ghost" href="${esc(h.ctaSecondaryHref)}">${esc(h.ctaSecondaryLabel)}</a>
    <a class="btn ghost" href="${esc(h.cvHref)}">${esc(h.cvLabel)}</a>`;

  // Accepte une image intégrée (data:) ou un fichier voisin (ex. Profil.jpg)
  const src = /^(data:image\/|[\w.-]+\.(jpe?g|png|webp|gif)$)/i.test(h.photo || '') ? h.photo : '';
  $('heroPhoto').innerHTML = src
    ? `<img src="${src}" alt="Photo de ${esc(h.firstName)} ${esc(h.lastName)}">`
    : `<span>${esc((h.firstName[0] || '') + (h.lastName[0] || ''))}</span>`;
}

function sectionHead(key) {
  const s = content.sections[key];
  ['Eyebrow', 'Title', 'Lead'].forEach(suffix => {
    const el = $(key + suffix);
    if (el) el.textContent = s[suffix.toLowerCase()] ?? '';
  });
}

function renderAbout() {
  $('aboutParagraphs').innerHTML = content.about.paragraphs.map(p => `<p>${esc(p)}</p>`).join('');
  $('aboutFacts').innerHTML = content.about.facts
    .map(f => `<li><strong>${esc(f.label)}</strong><span>${esc(f.value)}</span></li>`).join('');
}

function renderSkills() {
  $('skillsGrid').innerHTML = content.skills.map(s => `
    <article class="skill-card">
      <h3>${esc(s.title)}</h3>
      ${tagsHtml(s.items)}
    </article>`).join('');
}

function renderProjects() {
  $('projectsGrid').innerHTML = content.projects.map((p, i) => {
    // Les liens ne s'affichent que s'ils sont renseignés (pas '#')
    const links = [
      p.demo && p.demo !== '#' ? `<a href="${esc(p.demo)}">Démo</a>` : '',
      p.code && p.code !== '#' ? `<a href="${esc(p.code)}">Code</a>` : ''
    ].join('');
    return `
    <article class="project">
      <div class="project-thumb">${String(i + 1).padStart(2, '0')}</div>
      <div class="project-body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        ${tagsHtml(p.tags)}
        <div class="project-links">${links}</div>
      </div>
    </article>`;
  }).join('');
}

function renderTimeline() {
  $('timelineList').innerHTML = content.timeline.map(t => `
    <div class="timeline-item">
      <p class="date">${esc(t.date)}</p>
      <h3>${esc(t.title)}</h3>
      <p class="org">${esc(t.org)}</p>
      <p>${esc(t.text)}</p>
    </div>`).join('');
}

function renderContact() {
  const c = content.contact;
  $('contactLinks').innerHTML = `
    <a href="mailto:${esc(c.email)}">${esc(c.email)}</a>
    <p>Téléphone : ${esc(c.phone)}</p>`;
}

function renderFooter() {
  const h = content.hero;
  $('footerText').textContent = `© ${new Date().getFullYear()} ${h.firstName} ${h.lastName} — ${content.site.footer}`;
}

function renderAll() {
  renderNav();
  renderHero();
  ['about', 'skills', 'projects', 'timeline', 'contact'].forEach(sectionHead);
  renderAbout();
  renderSkills();
  renderProjects();
  renderTimeline();
  renderContact();
  renderFooter();
  observeReveal();
}

// ============================================================
// INTERFACE PUBLIQUE : menu mobile, apparition au scroll, formulaire
// ============================================================
$('menuBtn').addEventListener('click', () => {
  const open = $('mainNav').classList.toggle('open');
  $('menuBtn').setAttribute('aria-expanded', open);
});

$('mainNav').addEventListener('click', e => {
  if (e.target.closest('a')) {
    $('mainNav').classList.remove('open');
    $('menuBtn').setAttribute('aria-expanded', 'false');
  }
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function observeReveal() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

$('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.currentTarget;
  const msg = $('formMsg');
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const message = String(data.get('message') || '').trim();

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
    msg.style.color = '#f87171';
    msg.textContent = 'Merci de remplir tous les champs avec un email valide.';
    return;
  }
  msg.style.color = '';
  msg.textContent = "Merci ! Connectez un service d'envoi (Formspree, Netlify Forms…) pour recevoir vos messages.";
  form.reset();
});

// ============================================================
// TERMINAL D'ADMINISTRATION
// ============================================================
const term = { authed: false, booted: false };
const PUBLIC_COMMANDS = ['help', 'login', 'clear', 'exit'];

const HELP = [
  'Commandes disponibles :',
  '  login <mot de passe>          Se connecter',
  '  logout                        Se déconnecter',
  '  ls [préfixe]                  Lister les champs modifiables',
  '  get <champ>                   Afficher la valeur d\'un champ',
  '  set <champ> <valeur>          Modifier un champ (listes : valeurs séparées par des virgules)',
  '  add <liste>                   Ajouter un élément : skills, projects, timeline, nav, about.paragraphs, about.facts',
  '  rm <liste.index>              Supprimer un élément, ex. rm projects.2',
  '  move <liste.index> up|down    Réordonner un élément',
  '  photo [clear]                 Choisir ou retirer la photo de profil',
  '  export                        Afficher le contenu complet en JSON',
  '  import <json>                 Importer un contenu JSON (sur une seule ligne)',
  '  reset confirm                 Restaurer le contenu d\'origine',
  '  clear | exit | help',
  'Ctrl + Shift + A ouvre ou ferme ce terminal.'
];

const out = $('termOut');
const input = $('termIn');

function print(text, cls = '') {
  const line = document.createElement('div');
  if (cls) line.className = cls;
  line.textContent = text;
  out.appendChild(line);
  out.scrollTop = out.scrollHeight;
}

function updatePrompt() {
  $('termPrompt').textContent = term.authed ? 'admin@portfolio:~$' : 'visiteur@portfolio:~$';
}

function requireAuth() {
  if (term.authed) return true;
  print('Accès refusé. Tapez : login <mot de passe>', 'err');
  return false;
}

function toggleTerm(force) {
  const terminal = $('terminal');
  const show = force ?? terminal.classList.contains('hidden');
  terminal.classList.toggle('hidden', !show);
  document.body.classList.toggle('term-open', show);
  if (show) {
    if (!term.booted) {
      print("Terminal d'administration. Tapez help pour commencer.");
      term.booted = true;
    }
    input.focus();
  }
}

function cmdLs([prefix = '']) {
  if (!requireAuth()) return;
  leaves(content)
    .filter(([p]) => p.startsWith(prefix))
    .forEach(([p, v]) => {
      const preview = typeof v === 'string' && v.startsWith('data:') ? '(image)' : JSON.stringify(v);
      print(`${p.padEnd(34)} ${preview.length > 70 ? preview.slice(0, 67) + '...' : preview}`);
    });
}

function cmdGet([path]) {
  if (!requireAuth()) return;
  const value = getPath(path || '');
  if (value === undefined) return print(`Chemin introuvable : ${path}`, 'err');
  const shown = typeof value === 'string' && value.startsWith('data:') ? '(image)' : JSON.stringify(value, null, 2);
  print(shown);
}

function cmdSet([path, ...rest]) {
  if (!requireAuth()) return;
  if (!path) return print('Usage : set <champ> <valeur>', 'err');
  if (path === 'hero.photo') return print('Utilisez la commande photo pour la photo de profil.', 'err');

  const current = getPath(path);
  if (current === undefined) return print(`Chemin introuvable : ${path}`, 'err');
  if (current && typeof current === 'object' && !Array.isArray(current)) {
    return print('Ce chemin contient plusieurs champs. Précisez le champ à modifier (ls le liste).', 'err');
  }

  const raw = rest.join(' ');
  const value = Array.isArray(current)
    ? raw.split(',').map(s => s.trim()).filter(Boolean)
    : raw;

  setPath(path, value);
  saveContent();
  renderAll();
  print(`OK : ${path} mis à jour.`, 'ok');
}

function cmdAdd([collection]) {
  if (!requireAuth()) return;
  const template = TEMPLATES[collection];
  if (!template) return print(`Liste inconnue. Listes possibles : ${Object.keys(TEMPLATES).join(', ')}`, 'err');
  const list = getPath(collection);
  list.push(template());
  saveContent();
  renderAll();
  print(`Élément ajouté : ${collection}.${list.length - 1}`, 'ok');
}

function cmdRm([path]) {
  if (!requireAuth()) return;
  const [parentPath, key] = splitPath(path || '');
  const list = getPath(parentPath);
  if (!Array.isArray(list) || !/^\d+$/.test(key) || !list[key]) {
    return print('Usage : rm <liste.index>, ex. rm projects.2', 'err');
  }
  list.splice(Number(key), 1);
  saveContent();
  renderAll();
  print(`Supprimé : ${path}`, 'ok');
}

function cmdMove([path, dir]) {
  if (!requireAuth()) return;
  const [parentPath, key] = splitPath(path || '');
  const list = getPath(parentPath);
  if (!Array.isArray(list) || !/^\d+$/.test(key)) return print('Usage : move <liste.index> up|down', 'err');
  const i = Number(key);
  const j = dir === 'up' ? i - 1 : dir === 'down' ? i + 1 : NaN;
  if (Number.isNaN(j) || j < 0 || j >= list.length) return print('Déplacement impossible.', 'err');
  [list[i], list[j]] = [list[j], list[i]];
  saveContent();
  renderAll();
  print(`Déplacé : ${path} → ${parentPath}.${j}`, 'ok');
}

// Réduit l'image en carré 400 px en JPEG, pour rester léger dans le stockage
function shrinkImage(file, size = 400) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = size;
        const s = Math.min(img.width, img.height);
        canvas.getContext('2d').drawImage(
          img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, size, size
        );
        resolve(canvas.toDataURL('image/jpeg', 0.85));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function cmdPhoto([arg]) {
  if (!requireAuth()) return;
  if (arg === 'clear') {
    content.hero.photo = '';
    saveContent();
    renderAll();
    return print('Photo retirée.', 'ok');
  }
  print('Choisissez une image dans la fenêtre ouverte…');
  $('photoInput').click();
}

$('photoInput').addEventListener('change', async e => {
  const file = e.target.files[0];
  e.target.value = '';
  if (!file) return;
  try {
    content.hero.photo = await shrinkImage(file);
    if (!saveContent()) print('Attention : stockage plein, la photo ne sera pas conservée.', 'err');
    renderAll();
    print('Photo mise à jour.', 'ok');
  } catch (err) {
    print('Impossible de lire cette image.', 'err');
  }
});

function cmdExport() {
  if (!requireAuth()) return;
  const data = clone(content);
  if (data.hero.photo) data.hero.photo = '(image non exportée)';
  print(JSON.stringify(data, null, 2));
}

function cmdImport(args) {
  if (!requireAuth()) return;
  try {
    const parsed = JSON.parse(args.join(' '));
    if (!parsed.hero || !Array.isArray(parsed.skills)) throw new Error('format');
    if (!/^data:image\//.test(parsed.hero.photo)) parsed.hero.photo = content.hero.photo;
    content = { ...clone(DEFAULT_CONTENT), ...parsed };
    saveContent();
    renderAll();
    print('Contenu importé.', 'ok');
  } catch (err) {
    print('JSON invalide ou format non reconnu.', 'err');
  }
}

function cmdReset([confirm]) {
  if (!requireAuth()) return;
  if (confirm !== 'confirm') return print('Pour confirmer : reset confirm', 'err');
  content = clone(DEFAULT_CONTENT);
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
  renderAll();
  print('Contenu d\'origine restauré.', 'ok');
}

const COMMANDS = {
  help: () => HELP.forEach(l => print(l)),
  login: ([pwd]) => {
    if (pwd === ADMIN_PASSWORD) {
      term.authed = true;
      updatePrompt();
      print('Connecté. Tapez help pour la liste des commandes.', 'ok');
    } else {
      print('Mot de passe incorrect.', 'err');
    }
  },
  logout: () => { term.authed = false; updatePrompt(); print('Déconnecté.'); },
  clear: () => { out.innerHTML = ''; },
  exit: () => toggleTerm(false),
  ls: cmdLs,
  get: cmdGet,
  set: cmdSet,
  add: cmdAdd,
  rm: cmdRm,
  move: cmdMove,
  photo: cmdPhoto,
  export: cmdExport,
  import: cmdImport,
  reset: cmdReset
};

function runCommand(line) {
  const [cmd, ...args] = line.trim().split(/\s+/);
  if (!cmd) return;
  const name = cmd.toLowerCase();
  const fn = COMMANDS[name];
  if (!fn) return print(`Commande inconnue : ${cmd}. Tapez help.`, 'err');
  if (!term.authed && !PUBLIC_COMMANDS.includes(name)) return requireAuth();
  fn(args);
}

$('termForm').addEventListener('submit', e => {
  e.preventDefault();
  const line = input.value;
  input.value = '';
  // Le mot de passe n'est pas affiché dans l'historique
  const shown = /^\s*login\s/i.test(line) ? 'login ••••••' : line;
  print(`${$('termPrompt').textContent} ${shown}`, 'cmd');
  runCommand(line);
});

document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
    e.preventDefault();
    toggleTerm();
  } else if (e.key === 'Escape' && !$('terminal').classList.contains('hidden')) {
    toggleTerm(false);
  }
});

$('termClose').addEventListener('click', () => toggleTerm(false));
$('photoBtn').addEventListener('click', () => {
  if (requireAuth()) cmdPhoto([]);
});

// ============================================================
// DÉMARRAGE
// ============================================================
renderAll();
