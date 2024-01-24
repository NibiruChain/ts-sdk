import type { Config } from "jest"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { compilerOptions } = require("./tsconfig")

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const config: Config = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/index.*.ts",
    "!**/index.ts",
  ],
  coveragePathIgnorePatterns: [
    "/docs/",
    "/node_modules/",
    "/build/",
    "/coverage/",
    "/dist/",
    "/src/protojs/",
    "/nibiru",
  ],
  testPathIgnorePatterns: [
    "/docs/",
    "/node_modules/",
    "/build/",
    "/coverage/",
    "/dist/",
    "/src/protojs/",
    "/nibiru",
  ],
  coverageReporters: ["json-summary", "text", "html", "lcov"],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
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
