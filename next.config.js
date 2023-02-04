// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;
//

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log(" ******** D E V ******** ", phase);
    return {
      // compact: false,
      reactStrictMode: true,
      webpack(config) {
        config.module.rules.push({
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ["@svgr/webpack"],
        });
        return config;
      },
      images: {
        domains: [
          process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0],
          "0.gravatar.com",
          "1.gravatar.com",
          "2.gravatar.com",
          "secure.gravatar.com",
          "www.davestryker.net",
          "www.davestryker.com",
        ],
      },
    };
  }

  console.log(" ******** P R O D ******** ", phase);
  return {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    // basePath: '/out',
    // distDir: "build",
    //
    // webpack(config) {
    //   config.module.rules.push({
    //     test: /\.svg$/i,
    //     issuer: /\.[jt]sx?$/,
    //     use: ["@svgr/webpack"],
    //   });
    //   return config;
    // },
    //
    // images: {
    //   loader: "imgix",
    //   path: "https://data-visual.imgix.net/",
    // },
    //
    images: {
      unoptimized: true,
      //
      // domains: [
      //   process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0],
      //   "0.gravatar.com",
      //   "1.gravatar.com",
      //   "2.gravatar.com",
      //   "secure.gravatar.com",
      //   "www.stage2.davestryker.com",
      //   "www.stage1.davestryker.com",
      //   "www.davestryker.com",
      // ],
      //
      remotePatterns: [
        {
          protocol: "https",
          hostname: "www.davestryker.net",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "davestryker.net",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "www.davestryker.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "davestryker.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "**.gravatar.com",
        },
      ],
      //
      // loader: 'custom',
      // loaderFile: './imgloader/loader.js',
    },
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        "/": { page: "/" },
        "/biography": { page: "/biography" },
        "/shows": { page: "/shows" },
        "/music": { page: "/music" },
        "/media": { page: "/media" },
        "/api/allshows": { page: "/api/allshows" },
      };
    },
  };
};
