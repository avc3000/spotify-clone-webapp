/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictModeEnabled: true,
  images: {
    domains: ["storage.googleapis.com","upload.wikimedia.org"]
  }
}

module.exports = nextConfig
