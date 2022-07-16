module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'new-cap': 0,
    'max-len': 0,
    'valid-jsdoc': 0,
    'require-jsdoc': 1,
    'no-unused-vars': 1,
    'no-trailing-spaces': 0,
    'no-undef': 0,
    'spaced-comment': 0,
    'prefer-const': 0,
  },
};
