import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Optional: Disable image optimization since we are using static export
  // images: { unoptimized: true }
};

export default nextConfig;
