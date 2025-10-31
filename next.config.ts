import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/sarah',
  assetPrefix: '/sarah',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
