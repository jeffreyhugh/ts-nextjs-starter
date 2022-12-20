/* eslint-disable @typescript-eslint/no-var-requires */

import MDX from '@next/mdx';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const withMDX = MDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    providerImportSource: '@mdx-js/react',
  },
});

export default withMDX({
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  pageExtensions: ['js', 'ts', 'jsx', 'tsx', 'md', 'mdx'],

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
});
