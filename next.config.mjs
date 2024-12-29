/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.dummyjson.com',
          pathname: '/products/images/**', 
        },
      ],
    },
    eslint: {
      // Disable eslint during builds
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;
  