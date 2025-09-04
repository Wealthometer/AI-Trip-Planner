import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
    {
      protocol: "https",
      hostname: "**", // allow any https host
    },
    ]
  },
//   images: {
//   remotePatterns: [
//     {
//       protocol: "https",
//       hostname: "**", // allow any https host
//     },
//   ],
// }
};

export default withBundleAnalyzer(nextConfig);