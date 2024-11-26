import { writeFileSync } from "fs";
import { resolve } from "path";

const pages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/webbdesign", priority: "0.9", changefreq: "weekly" },
  { url: "/sociala-medier", priority: "0.9", changefreq: "weekly" },
  { url: "/bestall", priority: "0.8", changefreq: "weekly" },
  { url: "/varfor-almfors", priority: "0.8", changefreq: "weekly" },
  { url: "/om-oss", priority: "0.7", changefreq: "weekly" },
  { url: "/kundservice", priority: "0.7", changefreq: "weekly" },
  { url: "/blogg", priority: "0.8", changefreq: "daily" },
  { url: "/integritetspolicy", priority: "0.4", changefreq: "monthly" },
  { url: "/villkor", priority: "0.4", changefreq: "monthly" },
  { url: "/logga-in", priority: "0.3", changefreq: "monthly" },
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>https://almfors.se${page.url}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
    )
    .join("")}
</urlset>`;

  writeFileSync(resolve("public", "sitemap.xml"), sitemap.trim());
  console.log("Sitemap generated successfully!");
};

generateSitemap();
