import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/experimental',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
