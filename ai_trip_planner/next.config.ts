import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    domains: ["images.unsplash.com"], // ✅ allow Unsplash images
  },
};

export default nextConfig;
