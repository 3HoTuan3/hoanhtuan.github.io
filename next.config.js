/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoBase = '/hoanhtuan.github.io'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? repoBase : '',
  assetPrefix: isProd ? repoBase : '',
}

export default nextConfig
