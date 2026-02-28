export const dynamic = 'force-static';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/random-axolotl?*'],
        crawlDelay: 1,
      },
      {
        userAgent: 'GPTBot',
        allow: ['/blog/', '/axolotl-facts/'],
        disallow: ['/tools/', '/api/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/blog/', '/axolotl-facts/'],
        disallow: ['/tools/', '/api/', '/personalized/'],
      },
    ],
    sitemap: 'https://axolotlhub.com/sitemap.xml',
    host: 'https://axolotlhub.com',
  };
}
