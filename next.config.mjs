import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.shutterstock.com", "finniu-statics.s3.amazonaws.com", "finniu-statics-qa.s3.amazonaws.com"],
  },
};

export default nextConfig;
