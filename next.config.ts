import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All images are local (public/images) — no remote image patterns needed.

  images: {
    // Default quality (75) visibly softens photos; 90 keeps them sharp while
    // still getting the size benefit of webp re-encoding.
    qualities: [90],
    // Optimized image variants are immutable per source file, so cache them
    // at the edge for a year instead of Next's 4-hour default.
    minimumCacheTTL: 31536000,
  },

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
