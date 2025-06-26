function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
         <loc>https://zverse.vercel.app</loc>
         <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
         <changefreq>weekly</changefreq>
         <priority>1.0</priority>
       </url>
       <url>
         <loc>https://zverse.vercel.app/about</loc>
         <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
         <changefreq>monthly</changefreq>
         <priority>0.8</priority>
       </url>
       <url>
         <loc>https://zverse.vercel.app/projects</loc>
         <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
         <changefreq>monthly</changefreq>
         <priority>0.8</priority>
       </url>
     </urlset>
   `;
  }
  
  function SiteMap() {
    // getServerSideProps will do the heavy lifting
  }
  
  export async function getServerSideProps({ res }) {
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap();
  
    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  }
  
  export default SiteMap;