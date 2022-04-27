const withBundleAnalyzer = require("@next/bundle-analyzer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.ProgressPlugin({ profile: true }));
    return config;
  },
};

module.exports = withBundleAnalyzer({ enabled: true })(nextConfig);
