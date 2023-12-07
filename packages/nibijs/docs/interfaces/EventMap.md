[NibiJS Documentation - v0.21.42](../intro.md) / [Exports](../modules.md) / EventMap

# Interface: EventMap

EventMap: An ABCIEvent abstracted as a map. This structure provides
a convenient way to access event data using keys or to create custom
event types from an extended interface.

**`See`**

ABCIEvent - For the raw event type from CometBFT consensus (Tendermint).

**`Example`**

```ts
export interface EventTransfer extends EventMap {
  type: "wasm-tranfer-event"
  from: string
  to: string
  amount: string // number as string
}
```

## Hierarchy

- [`EventMapAttribute`](EventMapAttribute.md)

  ↳ **`EventMap`**

## Table of contents

### Properties

- [type](EventMap.md#type)

## Properties

### type

• **type**: `string`

#### Defined in

[tx/event.ts:41](https://github.com/NibiruChain/ts-sdk/blob/3e2dcd7/packages/nibijs/src/tx/event.ts#L41)
