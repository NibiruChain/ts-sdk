import { HeartMonitor } from "./heart-monitor"
;(async () => {
  const hm = new HeartMonitor()
  const test = await hm.markPriceCandlesSubscription({})
  if (test) {
    for await (const event of test) {
      console.log(event)

      // complete a running subscription by breaking the iterator loop
      // break
    }
  }
})()
