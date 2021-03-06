/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["icons.duckduckgo.com"],
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
