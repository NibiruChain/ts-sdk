import type { CodegenConfig } from "@graphql-codegen/cli"
const { pascalCase } = require("change-case-all")

const changeQueryName = (str: string) => `GQL${pascalCase(str)}`

export default {
  schema: {
    "indexer-nibi": {
      loader: "./src/indexer-nibi/graphql-codegen/codegen-loader.js",
    },
  },
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
  config: { namingConvention: changeQueryName },
  generates: {
    "./src/indexer-nibi/gql/schema.graphql": {
      plugins: ["schema-ast"],
    },
    "./src/indexer-nibi/gql/generated.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        immutableTypes: true,
        scalars: {
          Time: {
            input: "string",
            output: "string",
          },
        },
      },
    },
  },
} as CodegenConfig
