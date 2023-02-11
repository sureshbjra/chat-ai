/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    disableStaticImages: false,
  },
};

module.exports = nextConfig;
