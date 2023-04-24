/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dsvvxmin4/image/upload/",
  },
};

module.exports = nextConfig;
