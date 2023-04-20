import {
  IncentivizedTestent,
  NibiruQueryClient,
  NibiruSigningClient,
} from "@nibiruchain/nibijs"

const TEST_CHAIN = IncentivizedTestent(1)

async function runExample() {
  const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)

  const perpParamsResp = await queryClient.nibiruExtensions.perp.params()
  console.log("perpParams: %o", perpParamsResp)

  const allPools = await queryClient.nibiruExtensions.vpool.allPools()
  console.log("allPools: %o", allPools)

  const blockHeight = 1
  const block = await queryClient.getBlock(blockHeight)
  console.log("block: %o", block)

  // Use your address instead here.
  const address = "nibi1fm80fe48g0tp2aztltr6q9g987ejtnllt75qsm"
  const signingClient = await NibiruSigningClient.connect(TEST_CHAIN.endptTm)
  const allBalances = await signingClient.getAllBalances(address)
  console.log("allBalances: %o", allBalances)
}

runExample().then(async () => {
  console.log("Completed example: 02_queries.ts")
})
