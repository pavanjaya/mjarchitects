import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Turbopack's persistent dev cache has repeatedly served stale CSS/output
    // after edits in this environment; disable it so `next dev` always
    // reflects the current source.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
