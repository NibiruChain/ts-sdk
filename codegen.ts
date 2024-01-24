import type { CodegenConfig } from "@graphql-codegen/cli"
import { pascalCase } from "change-case-all"

const changeQueryName = (str: string) => `GQL${pascalCase(str)}`

export default {
  schema: {
    "indexer-nibi": {
      loader: "./src/gql/graphql-codegen/codegen-loader.js",
    },
  },
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
  config: { namingConvention: changeQueryName },
  generates: {
    "./src/gql/utils/schema.graphql": {
      plugins: ["schema-ast"],
    },
    "./src/gql/utils/generated.ts": {
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
