module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    project: ['server/src/tsconfig.json'],
    ecmaVersion: 'latest'
  },
  rules: {
  }
}
