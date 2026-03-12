import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  transpilePackages: ["geist"],
  output: "standalone",
  // Sin badge "N" de Next en desarrollo; en producción no aparece
  devIndicators: false,
};

export default nextConfig;
