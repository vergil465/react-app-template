module.exports = (api) => {
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/react"];

  const plugins = [
    [
      "module-resolver",
      {
        root: ["./src/module", "assets"],
        alias: {
          "@common": "./src/common",
          "@generic": "./src/generic",
          "@modules": "./src/modules",
        },
      },
    ],
    [
      "@babel/plugin-proposal-object-rest-spread",
      {
        useBuiltIns: true,
      },
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true,
      },
    ],
    "@babel/plugin-transform-runtime",
  ];

  return {
    presets,
    plugins,
  };
};
