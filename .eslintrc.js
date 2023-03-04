module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'airbnb-base',
      'airbnb-typescript/base',
      'prettier',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
    plugins: ['@typescript-eslint', 'prettier',],
    rules: {
      'prettier/prettier': ['error', { singleQuote: true }],
      "import/prefer-default-export": "off",
    },
  };
  