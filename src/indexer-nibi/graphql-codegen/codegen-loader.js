const { fetch } = require("cross-fetch")
const { getIntrospectionQuery, buildClientSchema } = require("graphql")

module.exports = async () => {
  // Logic for loading the GraphQLSchema
  try {
    const response = await fetch(
      "https://hm-graphql.devnet-2.nibiru.fi/query",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: getIntrospectionQuery() }),
      }
    )
    const { data } = await response.json()

    return buildClientSchema(data)
  } catch (error) {
    console.error(error)
    return undefined
  }
}
