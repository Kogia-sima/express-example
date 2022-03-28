module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
    sourceType: "module",
    ecmaVersion: 2018
  },
  rules: {
    camelcase: "warn",
    "comma-dangle": "off",
    complexity: ["warn", 15],
    "eol-last": ["error", "always"],
    "no-alert": "error",
    "no-console": "error",
    "no-constructor-return": "error",
    "no-dupe-class-members": "error",
    "no-octal-escape": "error",
    "no-promise-executor-return": "warn",
    "no-self-compare": "warn",
    "no-useless-return": "warn",
    "no-var": "error",
    "prefer-const": "warn",
  }
}
