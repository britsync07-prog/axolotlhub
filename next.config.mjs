/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // unoptimized: true removed — Cloudflare Images (IMAGES binding in wrangler.jsonc)
    // will automatically serve optimized WebP/Avif formats
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'axoltlapi.herokuapp.com',
      },
    ],
  },
};

export default nextConfig;



