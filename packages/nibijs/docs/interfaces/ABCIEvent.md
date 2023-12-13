[NibiJS Documentation - v0.21.42](../intro.md) / [Exports](../modules.md) / ABCIEvent

# Interface: ABCIEvent

An event as defined by the CometBFT consensus algorithm's
ABCI (application blockchain interface) specification.
Events are non-merklized JSON payloads emitted during transaction
execution on the network. Each event has a type and a list of
key-value strings of arbitrary data.

## Table of contents

### Properties

- [attributes](ABCIEvent.md#attributes)
- [type](ABCIEvent.md#type)

## Properties

### attributes

• **attributes**: [`EventAttribute`](EventAttribute.md)[]

#### Defined in

[tx/event.ts:23](https://github.com/NibiruChain/ts-sdk/blob/d8a549e/packages/nibijs/src/tx/event.ts#L23)

---

### type

• **type**: `string`

#### Defined in

[tx/event.ts:22](https://github.com/NibiruChain/ts-sdk/blob/d8a549e/packages/nibijs/src/tx/event.ts#L22)
