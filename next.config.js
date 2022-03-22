/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: "my-value",
  },
  images: {
    domains: ["https://dev.twitch.tv/"],
  },
};

module.exports = nextConfig;
