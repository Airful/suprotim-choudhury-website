import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All images are local (public/images) — no remote image patterns needed.

  // Videos and images in /public are static and content-addressed by filename
  // (a changed asset gets a new filename), so it's safe to let browsers cache
  // them for a year instead of re-validating on every page load/refresh.
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
