import { doGqlQuery } from "../gql"

export const queryBatchHandler = async (
  queryQueryString: string[],
  endpt: string
) => doGqlQuery(queryQueryString.join("\n"), endpt)
