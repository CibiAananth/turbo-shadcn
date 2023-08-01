module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'turbo',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:css/recommended',
    'plugin:prettier/recommended',
    'stylelint',
  ],
  plugins: ['@typescript-eslint', 'import', 'css', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['test/**/*.js', 'test/**/*.ts', '**/*.test.ts'],
      extends: ['plugin:jest/recommended'],
      rules: {
        'jest/expect-expect': 'off',
        'jest/no-disabled-tests': 'off',
        'jest/no-conditional-expect': 'off',
        'jest/valid-title': 'off',
        'jest/no-interpolation-in-snapshots': 'off',
        'jest/no-export': 'off',
      },
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: { jest: true },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
  ignorePatterns: [
    '/*',
    '!/src',
    '!/test',
    '!/node_modules',
    '!/dist',
    '!/coverage',
    '!/public',
    '!/app',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
  },
  rules: {
    'n/no-missing-import': 'off', // to disable path alias errors
    'node/no-missing-import': 'off', // to disable path alias errors
    'n/no-unpublished-import': 'off', // to disable no unpublished errors
    'node/no-unpublished-import': 'off', // to disable no unpublished errors

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'prettier/prettier': 'error',

    'import/no-unresolved': 'error',
    'import/extensions': [
      'error',
      'always',
      { ts: 'never', tsx: 'never', js: 'ignorePackages' },
    ],
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'warn',
    'import/no-mutable-exports': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error',

    'sort-imports': 'off',

    'no-confusing-arrow': 'off',

    // Note: you must disable the base rule as it can report incorrect errors
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',

    // Note: you must disable the base rule as it can report incorrect errors
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',

    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
  },
};
