import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['mui-tel-input'],
  images: {
    domains: ["example.com", "www.shutterstock.com"],
  },
  transpilePackages: ["react-phone-input-2"],
};

export default nextConfig;
