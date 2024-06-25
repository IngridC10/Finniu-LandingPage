import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
