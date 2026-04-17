import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Netlify free tier
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
