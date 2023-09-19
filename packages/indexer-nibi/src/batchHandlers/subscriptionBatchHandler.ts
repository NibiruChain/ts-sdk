import { Client } from "graphql-ws"

export const subscriptionBatchHandler = (
  client: Client,
  subscriptionsQueryString: string[]
) =>
  client.iterate({
    query: `subscription {
        ${subscriptionsQueryString.join("\n")}
    }`,
  })
