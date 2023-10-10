import { doGqlQuery } from "../gql"

export const queryBatchHandler = async (
  queryQueryStrings: string[],
  endpt: string
) => doGqlQuery(`{ ${queryQueryStrings.join("\n")} }`, endpt)
