// import type { NextConfig } from 'next';

// const repo = 'CurriculumVitaeAndhikaWahyu';

// const nextConfig: NextConfig = {
//   output: 'export',
//   basePath: process.env.PAGES_BASE_PATH || `/${repo}`,
//   assetPrefix: process.env.PAGES_BASE_PATH || `/${repo}/`,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const repo = 'CurriculumVitaeAndhikaWahyu';
const nextConfig = {
 output: 'export',
  basePath: process.env.PAGES_BASE_PATH || `/${repo}`,
  assetPrefix: process.env.PAGES_BASE_PATH || `/${repo}/`,
};

module.exports = nextConfig;
