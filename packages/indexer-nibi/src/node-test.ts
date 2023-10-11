import { HeartMonitor } from "./heart-monitor"

;(async () => {
  const nibiruUrl = "itn-3"
  const hm = new HeartMonitor(
    {
      endptTm: `https://hm-graphql.${nibiruUrl}.nibiru.fi`,
    },
    `wss://hm-graphql.itn-3.nibiru.fi/query`
  )
  const test = await hm.markPriceCandlesSubscription({})
  try {
    if (test) {
      console.log(await test.next())
      for await (const event of test) {
        console.log(event)

        // complete a running subscription by breaking the iterator loop
        // break
      }
    }
  } catch (e) {
    console.log(e)
  }
})()
