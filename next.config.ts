import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/impact", destination: "/cohi", permanent: true },
      { source: "/partnerships", destination: "/#partner", permanent: true },
      { source: "/resources", destination: "/blog", permanent: true },
      { source: "/resources/:slug", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
