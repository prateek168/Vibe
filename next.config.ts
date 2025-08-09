import type { NextConfig } from "next";

// next.config.js
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

module.exports = nextConfig

export default nextConfig;
  