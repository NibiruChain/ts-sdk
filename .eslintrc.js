module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    "jest/globals": true,
  },
  rules: {
    "no-unused-vars": [
      "off",
      { args: "none", argsIgnorePattern: "^_", vars: "local" },
    ],
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
  ],
}
