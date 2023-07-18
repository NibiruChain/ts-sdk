import { arg } from "./gql"
import { InputMaybe, Scalars } from "./gql/generated"

export interface QueryField {
  [key: string]: string | QueryField
}

export interface GraphQLQuery {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<any>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<any>
}

export const getWhereArgArr = (whereArgs: any) =>
  `where: { ${Object.keys(whereArgs)
    .map((key) => `${key}: "${whereArgs[key]}"`)
    .join(", ")} }`

export const gqlQuery = (
  name: string,
  { where, limit, order, orderDesc }: GraphQLQuery,
  properties: string
) => {
  const queryArgList = [
    getWhereArgArr(where),
    arg("limit", limit),
    arg("order", order),
    arg("orderDesc", orderDesc),
  ]
  const queryArgs = queryArgList.join(", ")

  return `{
      ${name}(${queryArgs}) {
        ${properties}
      }
    }`
}
