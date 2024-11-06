/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isProd = process.env.NODE_ENV === 'production';
const DIRECTORY = '/type-quick';

const nextConfig = {
  assetPrefix: isProd ? DIRECTORY : '',
  trailingSlash: true,
  output: 'export',
  images: { loader: 'custom' },
  transpilePackages: ['next-image-export-optimizer'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  publicRuntimeConfig: {
    basePath: isProd ? DIRECTORY : '',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
          },
        },
      ],
    });

    return config;
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
