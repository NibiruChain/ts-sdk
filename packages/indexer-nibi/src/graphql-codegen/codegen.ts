import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: {
    "indexer-nibi": {
      loader: "./src/graphql-codegen/codegen-loader.js",
    },
  },
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
  generates: {
    "./src/gql/schema.graphql": {
      plugins: ["schema-ast"],
    },
    "./src/gql/generated.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        immutableTypes: true,
        scalars: {
          DateTime: {
            input: "string",
            output: "string",
          },
          Decimal: {
            input: "string",
            output: "string",
          },
          Long: {
            input: "number",
            output: "number",
          },
        },
      },
    },
  },
}

export default config
