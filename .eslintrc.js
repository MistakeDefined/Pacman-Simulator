module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    // 'prettier/prettier': ['error', { singleQuote: true, semi: true }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
