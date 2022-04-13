/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // env: {
  // REACT_APP_BASE_URL: "https://api.igdb.com/v4",
  //   customKey: "my-value",
  // },
  images: {
    domains: ["https://dev.twitch.tv/"],
  },
};

module.exports = nextConfig;
