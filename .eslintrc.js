module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 'off',
    'import/no-cycle': 'off',
    'consistent-return': 'off',
    'no-alert': 'off',
    'global-require': 'off',
    'no-param-reassign': 0,
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
    'import/extensions': 'off',
    'camelcase': 'off',
    'react/prop-types': 'off',
  },
};
