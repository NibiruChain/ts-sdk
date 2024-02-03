import {
  convertObjectToPropertiesString,
  defaultLike,
  defaultRetweet,
  defaultTweet,
  defaultTwitterUser,
  doGqlQuery,
  GQLLike,
  GQLMarketingQueryGqlLikesArgs,
  GQLMarketingQueryGqlRetweetsArgs,
  GQLMarketingQueryGqlTweetsArgs,
  GQLMarketingQueryGqlTwitterUserArgs,
  gqlQuery,
  GQLQuery,
  GQLRetweet,
  GQLTask,
  GQLTweet,
  GQLTwitterUser,
} from ".."

export type QueryMarketingArgs = {
  twitterUser?: Partial<GQLMarketingQueryGqlTwitterUserArgs>
  tweets?: Partial<GQLMarketingQueryGqlTweetsArgs>
  retweets?: Partial<GQLMarketingQueryGqlRetweetsArgs>
  likes?: Partial<GQLMarketingQueryGqlLikesArgs>
}

export interface GqlOutMarketingQuery {
  marketing?: GQLQuery["marketing"]
}

export type MarketingFields = Partial<{
  twitterUser?: Partial<GQLTwitterUser>
  tweets?: Partial<GQLTweet>
  retweets?: Partial<GQLRetweet>
  likes?: Partial<GQLLike>
  tasks?: Partial<GQLTask>
}>

export const marketingQueryString = (
  args: QueryMarketingArgs,
  fields?: MarketingFields
) => {
  const marketingQuery: string[] = []

  if (fields?.twitterUser) {
    marketingQuery.push(
      gqlQuery(
        "twitterUser",
        args.twitterUser ?? {},
        convertObjectToPropertiesString(fields.twitterUser),
        true
      )
    )
  }

  if (fields?.tweets) {
    marketingQuery.push(
      gqlQuery(
        "tweets",
        args.tweets ?? {},
        convertObjectToPropertiesString(fields.tweets),
        true
      )
    )
  }

  if (fields?.retweets) {
    marketingQuery.push(
      gqlQuery(
        "retweets",
        args.retweets ?? {},
        convertObjectToPropertiesString(fields.retweets),
        true
      )
    )
  }

  if (fields?.likes) {
    marketingQuery.push(
      gqlQuery(
        "likes",
        args.likes ?? {},
        convertObjectToPropertiesString(fields.likes),
        true
      )
    )
  }

  // No args
  if (fields?.tasks) {
    marketingQuery.push(
      gqlQuery(
        "tasks",
        {},
        convertObjectToPropertiesString(defaultRetweet),
        true
      )
    )
  }

  // Default Objects

  if (args.likes && !fields?.likes) {
    marketingQuery.push(
      gqlQuery(
        "likes",
        args.likes,
        convertObjectToPropertiesString(defaultLike),
        true
      )
    )
  }

  if (args.retweets && !fields?.retweets) {
    marketingQuery.push(
      gqlQuery(
        "retweets",
        args.retweets,
        convertObjectToPropertiesString(defaultRetweet),
        true
      )
    )
  }

  if (args.tweets && !fields?.tweets) {
    marketingQuery.push(
      gqlQuery(
        "tweets",
        args.tweets,
        convertObjectToPropertiesString(defaultTweet),
        true
      )
    )
  }

  if (args.twitterUser && !fields?.twitterUser) {
    marketingQuery.push(
      gqlQuery(
        "twitterUser",
        args.twitterUser,
        convertObjectToPropertiesString(defaultTwitterUser),
        true
      )
    )
  }

  return `
        marketing {
          ${marketingQuery.join("\n")}
        }
      `
}

export const marketingQuery = async (
  args: QueryMarketingArgs,
  endpt: string,
  fields?: MarketingFields
): Promise<GqlOutMarketingQuery> =>
  doGqlQuery(
    `{
        ${marketingQueryString(args, fields)}
      }`,
    endpt
  )
