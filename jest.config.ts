import type { Config } from "jest"
const { pathsToModuleNameMapper } = require("ts-jest")
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
    "!**/sdk/test/helpers.ts",
  ],
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/", "/src/protojs/"],
  coverageReporters: ["json-summary", "text", "html", "lcov"],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  coverageProvider: "v8",
  globals: {
    window: {
      location: {},
    },
  },
  moduleDirectories: ["<rootDir>", "node_modules", "src"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
    ...pathsToModuleNameMapper(compilerOptions.paths),
  },
  roots: ["<rootDir>"],
  modulePathIgnorePatterns: ["examples"],
  preset: "ts-jest",
  testEnvironment: "node",
  reporters: ["default"],
  testPathIgnorePatterns: ["/node_modules/", "/build/", "/coverage/", "/dist/"],
  testTimeout: 120000,
}

export default config
