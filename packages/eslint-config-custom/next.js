module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    "./base.js",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "next",
  ],
  parserOptions: {
    babelOptions: {
      caller: {
        // Eslint supports top level await when a parser for it is included. We enable the parser by default for Babel.
        supportsTopLevelAwait: true,
      },
    },
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", `${__dirname}/src`]],
        extensions: [".js", ".jsx", ".ts", ".d.ts", ".tsx", ".css"],
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
};
