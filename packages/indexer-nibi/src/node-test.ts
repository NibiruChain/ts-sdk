import { HeartMonitor } from "./heart-monitor"
;(async () => {
  const hm = new HeartMonitor()
  const b = await hm.markPriceCandlesSubscription({})

  for await (const event of b) {
    console.log(event)

    // complete a running subscription by breaking the iterator loop
    // break
  }
})()
