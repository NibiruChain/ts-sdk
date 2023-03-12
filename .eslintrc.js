const common = {
  env: {
    node: true,
    es6: true,
    browser: true,
    "jest/globals": true,
  },
  plugins: ["prettier", "jest"],
  extends: ["airbnb-base", "prettier", "plugin:jest/recommended"],
  rules: {
    "@typescript-eslint/no-redeclare": ["error"],
    "@typescript-eslint/no-useless-constructor": "error",
    camelcase: "off",
    "consistent-return": "off",
    eqeqeq: "off",
    "no-unreachable-loop": ["off"],
    "import/extensions": "off",
    "lines-between-class-members": "off",
    "no-underscore-dangle": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/no-named-as-default": "off",
    "import/prefer-default-export": "off",
    "jest/consistent-test-it": ["error", { "fn": "test", "withinDescribe": "test" }],
    "jest/disallow-commented-out-tests": "off",
    "jest/expect-expect": "off",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/no-conditional-expect": "off",
    "jest/no-test-return-statement": "off",
    "jest/prefer-expect-assertions": "off",
    "jest/prefer-to-have-length": "warn",
    "jest/require-hook": "off",
    "jest/valid-expect": ["error", { maxArgs: 2 }],
    "guard-for-in": "off",
    "max-classes-per-file": ["off", {}],
    "no-await-in-loop": "off",
    "no-console": "off",
    "no-iterator": "off",
    "no-else-return": "off",
    "no-param-reassign": "off",
    "no-redeclare": "off",
    "no-restricted-syntax": "off",
    "no-shadow": "off",
    "no-unused-vars": ["off", { "args": "none", "argsIgnorePattern": "^_", "vars": "local" }],
    "no-use-before-define": "off",
    "no-useless-constructor": "off",
    "prettier/prettier": "error",
    "quotes": ["off"],
    "quote-props": ["warn", "as-needed" ],
    "radix": "off",
  },
}

module.exports = {
  root: true,
  overrides: [
    {
      /*
      eslint-plugin-markdown only finds javascript code block snippet.
      For specific spec, refer to https://github.com/eslint/eslint-plugin-markdown
      */
      files: ["**/*.js", "**/*.md"],
      ...common,
    },
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      env: common.env,
      plugins: [...common.plugins, "@typescript-eslint"],
      extends: [
        ...common.extends,
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
      ],
      rules: {
        ...common.rules,
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
      settings: {
        "import/resolver": {
          // node: ['.js', '.ts'],
          typescript: {},
        },
      },
    },
  ],
}
