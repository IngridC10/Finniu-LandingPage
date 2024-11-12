import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['mui-tel-input'],
  images: {
    domains: ["example.com", "www.shutterstock.com"],
  },
};

export default nextConfig;
