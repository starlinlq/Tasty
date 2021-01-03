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
    customKey: "pk_test_20839fa05df464b0e134957e835e1d7025ef24010fd13",
  },
  y,
};
