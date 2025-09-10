import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    'payload',
    '@payloadcms/richtext-lexical',
    '@payloadcms/next',
    '@payloadcms/db-mongodb',
    '@payloadcms/payload-cloud'
  ],
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: [
      'payload',
      '@payloadcms/richtext-lexical',
      '@payloadcms/next',
      '@payloadcms/db-mongodb',
      '@payloadcms/payload-cloud',
      'sharp'
    ],
  },
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: '/admin/:path*',
      },
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};

export default withPayload(nextConfig);
