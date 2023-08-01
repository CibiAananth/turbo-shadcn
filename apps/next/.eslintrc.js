module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: ['custom', 'next'],
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
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
          jsx: true, // Allows for the parsing of JSX
        },
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', `${__dirname}/src`]],
        extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx', '.css'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
};
