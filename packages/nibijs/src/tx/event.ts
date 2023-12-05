import { DeliverTxResponse } from "@cosmjs/stargate"

/** EventAttribute: A single key-value pair of event data for an ABCI event. */
export interface EventAttribute {
  key: string
  value: string
}

/** EventMapAttribute: A single key-value pair of event data for an ABCI event.
 * This data structure is the like 'EventAttribute' for the 'EventMap' type. */
export interface EventMapAttribute {
  [key: string]: string
}

/** An event as defined by the CometBFT consensus algorithm's
 * ABCI (application blockchain interface) specification.
 * Events are non-merklized JSON payloads emitted during transaction
 * execution on the network. Each event has a type and a list of
 * key-value strings of arbitrary data.
 * */
export interface ABCIEvent {
  type: string
  attributes: EventAttribute[]
}

/** EventMap: An ABCIEvent abstracted as a map. This structure provides
 * a convenient way to access event data using keys or to create custom
 * event types from an extended interface.
 *
 * @see ABCIEvent - For the raw event type from CometBFT consensus (Tendermint).
 *
 * @example
 * export interface EventTransfer extends EventMap {
 *   type: "wasm-tranfer-event"
 *   from: string
 *   to: string
 *   amount: string // number as string
 * }
 * */
export interface EventMap extends EventMapAttribute {
  type: string
}
/** eventToMap: Converts an ABCIEvent into an EventMap. */
export const eventToMap = (event: ABCIEvent): EventMap => {
  const eventMap: EventMap = { type: event.type }
  event.attributes.forEach((attr: EventAttribute) => {
    eventMap[attr.key] = attr.value
  })
  return eventMap
}

/** findEvent: Filter 'events' by type. This is useful for checking if
 * events of known type are present. */
export const findEvent = (
  events: ABCIEvent[],
  eventType: string,
): ABCIEvent | undefined => events.find((e) => e.type === eventType)

/** parseEventLogs: Returns a mutable and typed version of the events payload
 * from a tx response.
 *
 * @example
 * let txResp: DeliverTxResponse // assume this is given
 * const eventLogs = parseEventLogs(txResp)
 *
 * */
export const parseEventLogs = (txResp: DeliverTxResponse): EventMap[] =>
  (txResp.events as ABCIEvent[]).map(eventToMap)
