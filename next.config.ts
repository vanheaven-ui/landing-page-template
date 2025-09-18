import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add the images property here
  images: {
    // Add remotePatterns to allow specific external image URLs
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  /* other config options here */
};

export default nextConfig;