import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Keep resolution inside this app when parent lockfiles exist
    root: path.join(__dirname),
  },
};

export default nextConfig;
