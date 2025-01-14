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
  trailingSlash: true,  // Add this
  // basePath: '',         // Add this if you're using a custom domain
};

export default nextConfig;
