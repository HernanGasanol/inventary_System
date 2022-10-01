/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_JWT_SIGN:process.env.NEXT_PUBLIC_JWT_SIGN
  }
}

module.exports = nextConfig
