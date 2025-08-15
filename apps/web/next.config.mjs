/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: process.env.GITHUB_ACTIONS ? '/TheWolfBook' : undefined,
  assetPrefix: process.env.GITHUB_ACTIONS ? '/TheWolfBook/' : undefined,
};

export default nextConfig;
