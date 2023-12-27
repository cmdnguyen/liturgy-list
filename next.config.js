/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Exclude fs module from being bundled
        config.resolve.fallback = {
          fs: false,
        };
      }
  
      return config;
    },
  };