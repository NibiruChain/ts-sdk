import { ABCIEvent, eventToMap, findEvent, parseEventLogs } from "."

const wasmEventType = "wasm-tranfer-event"
const eventAttributes = [{ key: "key", value: "value" }]

const wasmEvent: ABCIEvent = {
  type: wasmEventType,
  attributes: eventAttributes,
}
const mockEvent: ABCIEvent = {
  type: "mock-event",
  attributes: eventAttributes,
}

describe("event tests", () => {
  test("eventToMap", () => {
    const result = eventToMap(wasmEvent)
    expect(result).toEqual({
      key: "value",
      type: wasmEventType,
    })
  })

  test("findEvent", () => {
    const result = findEvent([wasmEvent, mockEvent], wasmEventType)
    expect(result).toEqual(wasmEvent)
  })

  test("parseEventLogs", () => {
    const result = parseEventLogs({
      events: [wasmEvent],
      height: 0,
      transactionHash: "",
      txIndex: 0,
      code: 0,
      gasUsed: BigInt(0),
      gasWanted: BigInt(0),
      msgResponses: [],
    })
    expect(result).toEqual([eventToMap(wasmEvent)])
  })
})
