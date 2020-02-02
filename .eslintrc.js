module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'eslint-config-airbnb',
  ],
  plugins: [
    'jsx-a11y',
    'import',
    'react',
    'react-hooks',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": 0,
    "react/prefer-stateless-function": 0,
    "import/no-cycle": 0,
    "arrow-parens": 0,
    "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "react/state-in-constructor": 0,
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "only-multiline"
    }]
  },
};
