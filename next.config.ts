import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Creates static HTML/CSS/JS files
  images: {
    unoptimized: true,  // Required for static export
  },
  basePath: '/personalportfolio', // Match your repo name
};

export default nextConfig;
