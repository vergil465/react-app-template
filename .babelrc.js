module.exports = (api) => {
  api.cache(true);

  const presets = [
    '@babel/preset-env',
    '@babel/react'
  ];

  const plugins = [
    [
      "@babel/plugin-proposal-object-rest-spread",
      {
        useBuiltIns: true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true
      }
    ],
  ];

  return {
    presets,
    plugins
  };
}