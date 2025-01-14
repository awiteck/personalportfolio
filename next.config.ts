import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Creates static HTML/CSS/JS files
  images: {
    unoptimized: true,  // Required for static export
  },
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  basePath: '/personalportfolio', 
};

export default nextConfig;
