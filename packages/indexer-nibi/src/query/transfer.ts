import { doGqlQuery, arg } from "../gql"

// ------------------------------------------------
// Transfer
// ------------------------------------------------

/**
 * Transfer: A single transfer data.
 */
export interface Transfer {
  block: number
  blockTs: string
  sender: string
  recipient: string
  amount: string
}

/** GqlOutTransfer: Output response for the Transfer query  */
export interface GqlOutTransfer {
  transfers: Transfer[]
}

/** GqlInMarkPrice: Input arguments for the MarkPrice query  */
export interface GqlInTransfer {
  limit: number
  block?: string
  startTs?: string
  endTs?: string
  sender?: string
  recipient?: string
  orderBy?: TransferOrderBy | string
  orderDescending?: boolean // defaults to true
}

export enum TransferOrderBy {
  block = "block",
  block_ts = "block_ts",
  sender = "sender",
  recipient = "recipient",
}

export const transfers = async (
  args: GqlInTransfer,
  endpt: string,
): Promise<GqlOutTransfer> => {
  if (args.orderDescending === undefined) args.orderDescending = true
  if (args.orderBy === undefined) args.orderBy = TransferOrderBy.block_ts

  const gqlQuery = ({
    block,
    startTs,
    endTs,
    sender,
    recipient,
    limit,
    orderBy,
    orderDescending,
  }: GqlInTransfer): string => {
    const argWhere = (): string => {
      const whereConditions: string[] = []
      if (block) whereConditions.push(`blockEq: "${block}"`)
      if (startTs) whereConditions.push(`blockTsGte: "${startTs}"`)
      if (endTs) whereConditions.push(`blockTsLt: "${endTs}"`)
      if (sender) whereConditions.push(`senderEq: "${sender}"`)
      if (recipient) whereConditions.push(`recipientEq: "${recipient}"`)
      const argWhereBody: string = whereConditions.join(", ")
      return `where: { ${argWhereBody} }`
    }

    const queryArgList: string[] = [
      argWhere(),
      arg("limit", limit),
      arg("order", orderBy),
      arg("orderDesc", orderDescending),
    ]
    const queryArgs: string = queryArgList.join(", ")
    return `{
        transfers(${queryArgs}) {
          block
          blockTs
          recipient
          sender
          amount
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
