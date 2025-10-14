import {
  doGqlQuery,
  GQLQuery,
  DeepPartial,
  GQLMarketing,
  GQLMarketingGqlIsTaskCompletedArgs,
  arg,
} from ".."

export type QueryMarketingArgs = {
  isTaskCompleted?: GQLMarketingGqlIsTaskCompletedArgs
}

export interface GqlOutMarketing {
  marketing?: GQLQuery["marketing"]
}

export type MarketingFields = DeepPartial<GQLMarketing>

export const marketingQueryString = (
  args: QueryMarketingArgs,
  fields: MarketingFields
) => {
  const marketingQuery: string[] = []

  if (fields.isTaskCompleted !== undefined) {
    const qArgs =
      args.isTaskCompleted ?? ({} as GQLMarketingGqlIsTaskCompletedArgs)
    const argList = [
      arg("taskId", qArgs.taskId),
      arg("userAddress", qArgs.userAddress),
    ]
    marketingQuery.push(`isTaskCompleted(${argList.join(", ")})`)
  }

  return `
      marketing {
          ${marketingQuery.join("\n")}
      }
    `
}

export const marketing = async (
  args: QueryMarketingArgs,
  endpt: string,
  fields: MarketingFields
): Promise<GqlOutMarketing> =>
  doGqlQuery(
    `{
      ${marketingQueryString(args, fields)}
    }`,
    endpt
  )
