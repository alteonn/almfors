import { writeFileSync } from 'fs';
import { resolve } from 'path';

const pages = [
  { url: '/', priority: '1.0' },
  { url: '/webbdesign', priority: '0.9' },
  { url: '/sociala-medier', priority: '0.9' },
  { url: '/bestall', priority: '0.8' },
  { url: '/varfor-almfors', priority: '0.8' },
  { url: '/om-oss', priority: '0.7' },
  { url: '/kundservice', priority: '0.7' },
  { url: '/logga-in', priority: '0.6' }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>https://almfors.se${page.url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `).join('')}
</urlset>`;

writeFileSync(resolve('public', 'sitemap.xml'), sitemap.trim());
console.log('Sitemap generated successfully!');