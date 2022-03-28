module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:import/recommended',
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 13,
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
    "no-unused-vars": "warn",
    "no-useless-return": "warn",
    "no-var": "error",
    "prefer-const": "warn",
  },
  ignorePatterns: ["/node_modules/", "/dist/"]
}
