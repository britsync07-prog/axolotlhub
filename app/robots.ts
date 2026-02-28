import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard web crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // OpenAI GPTBot — allow all public content for AI search
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/'],
      },
      // Anthropic ClaudeBot — allow all public content for AI search
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/api/'],
      },
      // Perplexity AI crawler — allow all public content
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/'],
      },
      // Google's AI crawler (for AI Overviews)
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/'],
      },
      // Anthropic's crawler
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://axolotlhub.com/sitemap.xml',
    host: 'https://axolotlhub.com',
  };
}
