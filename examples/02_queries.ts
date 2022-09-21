import { Testnet } from "@nibiruchain/nibijs" // nibijs v0.6.1
import { initQueryCmd } from "@nibiruchain/nibijs/dist/query"

async function runExample() {
  const { client: query } = await initQueryCmd(Testnet)

  const perpParamsResp = await query.perp.params()
  console.log("perpParams: %o", perpParamsResp)

  // Use your address instead here.
  const address = "nibi1fm80fe48g0tp2aztltr6q9g987ejtnllt75qsm"
  const balances = await query.bank.allBalances(address)
  console.log("balances: %o", balances)

  const allPools = await query.vpool.allPools()
  console.log("allPools: %o", allPools)
}

runExample().then(async () => {
  console.log("Completed example: 02_queries.ts")
})
