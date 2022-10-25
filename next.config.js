/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],

    // To use `MDXProvider`
    providerImportSource: '@mdx-js/react',
  },
})

module.exports = withMDX({
  ...nextConfig,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})
