// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fetch } = require("cross-fetch")
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getIntrospectionQuery, buildClientSchema } = require("graphql")

module.exports = async () => {
  // Logic for loading the GraphQLSchema

  const response = await fetch("https://hm-graphql.devnet-2.nibiru.fi/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: getIntrospectionQuery() }),
  })
  const { data } = await response.json()

  return buildClientSchema(data)
}
