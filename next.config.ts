import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/soft-cream-profile",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
