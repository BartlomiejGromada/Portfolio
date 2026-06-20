import type { NextConfig } from "next";

const dbCacheSeconds = process.env.DB_CACHE_SECONDS ? parseInt(process.env.DB_CACHE_SECONDS, 10) : 86400; // 24h default

const nextConfig: NextConfig = {
  cacheComponents: true,
  cacheLife: {
    database: {
      stale: dbCacheSeconds,
      revalidate: dbCacheSeconds,
      expire: dbCacheSeconds + 3600,
    },
  },
};

export default nextConfig;
