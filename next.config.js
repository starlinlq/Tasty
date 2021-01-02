module.exports = {
  images: {
    domains: ["firebasestorage.googleapis.com", "cdn.chec.io"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    customKey: "pk_208399fa8626cfe4938fc3f6e5ab756d0465b6ce7c2e6",
  },
};
