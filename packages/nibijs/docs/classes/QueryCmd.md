[NibiJS Documentation - v0.8.4](../intro.md) / [Exports](../modules.md) / QueryCmd

# Class: QueryCmd

## Implements

- [`IQueryCmd`](../interfaces/IQueryCmd.md)

## Table of contents

### Constructors

- [constructor](QueryCmd.md#constructor)

### Properties

- [chain](QueryCmd.md#chain)
- [client](QueryCmd.md#client)
- [tmClient](QueryCmd.md#tmclient)

### Methods

- [disconnect](QueryCmd.md#disconnect)

## Constructors

### constructor

• **new QueryCmd**(`tmClient`, `chain`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tmClient` | `Tendermint34Client` |
| `chain` | [`Chain`](../interfaces/Chain.md) |

#### Defined in

[query/query.ts:69](https://github.com/NibiruChain/ts-sdk/blob/fd87694/packages/nibijs/src/query/query.ts#L69)

## Properties

### chain

• **chain**: [`Chain`](../interfaces/Chain.md)

#### Implementation of

[IQueryCmd](../interfaces/IQueryCmd.md).[chain](../interfaces/IQueryCmd.md#chain)

#### Defined in

[query/query.ts:67](https://github.com/NibiruChain/ts-sdk/blob/fd87694/packages/nibijs/src/query/query.ts#L67)

___

### client

• **client**: [`ExtendedQueryClient`](../modules.md#extendedqueryclient)

#### Implementation of

[IQueryCmd](../interfaces/IQueryCmd.md).[client](../interfaces/IQueryCmd.md#client)

#### Defined in

[query/query.ts:63](https://github.com/NibiruChain/ts-sdk/blob/fd87694/packages/nibijs/src/query/query.ts#L63)

___

### tmClient

• **tmClient**: `Tendermint34Client`

#### Implementation of

[IQueryCmd](../interfaces/IQueryCmd.md).[tmClient](../interfaces/IQueryCmd.md#tmclient)

#### Defined in

[query/query.ts:65](https://github.com/NibiruChain/ts-sdk/blob/fd87694/packages/nibijs/src/query/query.ts#L65)

## Methods

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Implementation of

IQueryCmd.disconnect

#### Defined in

[query/query.ts:84](https://github.com/NibiruChain/ts-sdk/blob/fd87694/packages/nibijs/src/query/query.ts#L84)
