import { NibiruQueryClient, NibiruSigningClient } from "@nibiruchain/nibijs"
import { CHAIN, logSuccess } from "./shared"

async function runExample() {
  const queryClient = await NibiruQueryClient.connect(CHAIN.endptTm)

  // Query a block
  const blockHeight = 1
  const block = await queryClient.getBlock(blockHeight)
  console.log("block: %o", block)

  // Query all markets
  const allMarkets = await queryClient.nibiruExtensions.perp.markets()
  console.log("allMarkets: %o", allMarkets)

  // Use your address instead here.
  const address = "nibi1fm80fe48g0tp2aztltr6q9g987ejtnllt75qsm"
  const signingClient = await NibiruSigningClient.connect(CHAIN.endptTm)
  const allBalances = await signingClient.getAllBalances(address)
  console.log("allBalances: %o", allBalances)
}

runExample().then(() => {
  logSuccess(__filename)
})
