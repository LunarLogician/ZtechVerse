export async function GET() {
  const urls = [
    {
      loc: 'https://zubairverse.vercel.app/',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      loc: 'https://zubairverse.vercel.app/#about',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://zubairverse.vercel.app/#projects',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://zubairverse.vercel.app/#blog',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  ${urls
    .map(
      (url) => `\n    <url>\n      <loc>${url.loc}</loc>\n      <lastmod>${url.lastmod}</lastmod>\n      <changefreq>${url.changefreq}</changefreq>\n      <priority>${url.priority}</priority>\n    </url>\n  `
    )
    .join('')}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}