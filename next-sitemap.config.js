/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3000'
  : 'https://shardlyromelus.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/server-sitemap.xml'], // Exclude server-side sitemap if you have one
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/server-sitemap.xml`, // Add server-side sitemap to robots.txt if needed
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  // Transform function for custom URL handling if needed
  transform: async (config, path) => {
    // Custom priority for specific routes
    let priority = config.priority;
    
    // Set higher priority for home page
    if (path === '/') {
      priority = 1.0;
    }
    // Set higher priority for blog index
    else if (path === '/blogs') {
      priority = 0.8;
    }
    // Set higher priority for project index
    else if (path === '/projects') {
      priority = 0.8;
    }
    // Lower priority for individual blog posts
    else if (path.startsWith('/blogs/')) {
      priority = 0.7;
    }

    return {
      loc: path, // URL
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
}; 