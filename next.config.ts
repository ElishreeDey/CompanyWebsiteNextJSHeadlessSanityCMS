import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // .next/standalone — this is what the Docker runner stage copies into the final image.
  output: "standalone",
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
