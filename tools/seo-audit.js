import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve(process.argv[2] || './out');
const baseUrl = 'https://axolotlhub.com';
const assetExt = /\.(jpg|jpeg|png|gif|webp|svg|css|js|map|ico|txt|xml|json|webmanifest)$/i;

function listHtmlFiles(dir) {
  const results = [];
  const stack = [dir];
  while (stack.length) {
    const d = stack.pop();
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, entry.name);
      if (entry.isDirectory()) stack.push(p);
      else if (entry.isFile() && entry.name.endsWith('.html')) results.push(p);
    }
  }
  return results;
}

function urlFromFile(file) {
  let rel = file.replace(OUT_DIR, '').replace(/\\/g, '/');
  if (rel.endsWith('/index.html')) rel = rel.slice(0, -'/index.html'.length) || '/';
  else rel = rel.replace(/\.html$/, '');
  return rel;
}

function readFile(p) {
  return fs.readFileSync(p, 'utf8');
}

function extractTag(html, regex) {
  const m = html.match(regex);
  return m ? m[1].trim() : '';
}

function extractLinks(html) {
  const links = [];
  const re = /href=["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(html))) {
    links.push(m[1]);
  }
  return links;
}

function normalizePath(href) {
  if (!href) return null;
  if (href.startsWith('http://') || href.startsWith('https://')) return href;
  if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return null;
  if (href.startsWith('/_next/')) return null;
  if (assetExt.test(href)) return null;
  if (href.startsWith(baseUrl)) return href.replace(baseUrl, '') || '/';
  if (!href.startsWith('/')) return '/' + href;
  return href;
}

function fileExistsForRoute(route) {
  if (route === '/') return fs.existsSync(path.join(OUT_DIR, 'index.html'));
  const idx = path.join(OUT_DIR, route, 'index.html');
  if (fs.existsSync(idx)) return true;
  const html = path.join(OUT_DIR, route + '.html');
  if (fs.existsSync(html)) return true;
  return false;
}

const files = listHtmlFiles(OUT_DIR);
const pages = files.map((f) => {
  const html = readFile(f);
  return {
    file: f,
    route: urlFromFile(f),
    title: extractTag(html, /<title>([^<]*)<\/title>/i),
    description: extractTag(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i),
    canonical: extractTag(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i),
    links: extractLinks(html),
  };
});

const missingTitle = pages.filter((p) => !p.title || p.title === '');
const missingDesc = pages.filter((p) => !p.description || p.description === '');
const missingCanonical = pages.filter((p) => !p.canonical || p.canonical === '');

const brokenLinks = [];
for (const p of pages) {
  for (const href of p.links) {
    const route = normalizePath(href);
    if (!route || route.startsWith('http')) continue;
    if (!fileExistsForRoute(route)) {
      brokenLinks.push({ from: p.route, href: route });
    }
  }
}

const uniqueRoutes = Array.from(new Set(pages.map((p) => p.route))).sort();

const report = {
  totalPages: pages.length,
  routes: uniqueRoutes,
  missingTitle: missingTitle.map((p) => p.route),
  missingDescription: missingDesc.map((p) => p.route),
  missingCanonical: missingCanonical.map((p) => p.route),
  brokenLinks,
};

fs.writeFileSync(path.join(process.cwd(), 'seo-report.json'), JSON.stringify(report, null, 2));
console.log('SEO report written to seo-report.json');
console.log('Total pages:', report.totalPages);
console.log('Missing title:', report.missingTitle.length);
console.log('Missing description:', report.missingDescription.length);
console.log('Missing canonical:', report.missingCanonical.length);
console.log('Broken links:', report.brokenLinks.length);
