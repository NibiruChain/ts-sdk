import type { Config } from "jest"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { compilerOptions } = require("./tsconfig")

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const config: Config = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/docs/**",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/dist/**",
    "!**/nibiru/**",
    "!**/index.*.ts",
    "!**/index.ts",
    "!**/src/protojs/**",
    "!jest.config.ts",
    "!**/src/gql/utils/generated.ts",
    "!**/src/sdk/utils/testutil.ts",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/nibiru/"],
  coverageReporters: ["json-summary", "text", "html", "lcov"],
  globals: {
    window: {
      location: {},
    },
  },
  moduleDirectories: ["<rootDir>", "node_modules", "src"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  roots: ["<rootDir>"],
  preset: "ts-jest",
  testEnvironment: "node",
  reporters: ["default"],
  testTimeout: 120000,
}

export default config
