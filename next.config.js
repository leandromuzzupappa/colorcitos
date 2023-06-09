const path = require("node:path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["market-assets.fra1.cdn.digitaloceanspaces.com"],
  },
};

module.exports = nextConfig;
