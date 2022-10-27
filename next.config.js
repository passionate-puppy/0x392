const { remarkCodeHike } = require('@code-hike/mdx')
const theme = require('shiki/themes/nord.json')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [remarkCodeHike, { theme }],
    ],
    rehypePlugins: [],
  },
})

module.exports = withMDX({
  ...nextConfig,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})
