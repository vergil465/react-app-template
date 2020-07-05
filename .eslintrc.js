module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "eslint-config-airbnb",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["jsx-a11y", "import", "react", "react-hooks", "jest", "prettier"],
  settings: {
    "import/resolver": {
      "babel-module": {
        root: ["./src/modules", "assets"],
        extensions: [".js", ".json"],
        alias: {
          "@common": "./src/common",
          "@generic": "./src/generic",
          "@modules": "./src/modules",
        },
      },
    },
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": 0,
    "react/prefer-stateless-function": 0,
    "import/no-cycle": 0,
    "arrow-parens": 0,
    "prettier/prettier": "error",
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix",
    ],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "react/state-in-constructor": 0,
    "react/jsx-props-no-spreading": [
      0,
      {
        html: "ignore",
      },
    ],
    quotes: ["error", "double"],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "only-multiline",
      },
    ],
  },
};
