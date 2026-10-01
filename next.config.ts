import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next's default ladder tops out at 3840w, so a full-bleed image on a
  // mid-size screen can ask for a candidate larger than any source we ship.
  // Our longest edge is 2400px, so cap the ladder just above it.
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2400, 2560],
  },
};

export default nextConfig;
