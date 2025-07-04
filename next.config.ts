import type { NextConfig } from 'next';

const repo = 'CurriculumVitaeAndhikaWahyu';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: isProd ? 'export' : undefined,
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '/',
};

export default nextConfig;
