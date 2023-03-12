[NibiJS Documentation - v0.19.1](../intro.md) / [Exports](../modules.md) / QueryCmd

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

[query/query.ts:79](https://github.com/NibiruChain/ts-sdk/blob/692b3bf/packages/nibijs/src/query/query.ts#L79)

## Properties

### chain

• **chain**: [`Chain`](../interfaces/Chain.md)

The chain to which this query client corresponds.
E.g. nibiru-testnet-1, nibiru-localnet-42

#### Implementation of

[IQueryCmd](../interfaces/IQueryCmd.md).[chain](../interfaces/IQueryCmd.md#chain)

#### Defined in

[query/query.ts:77](https://github.com/NibiruChain/ts-sdk/blob/692b3bf/packages/nibijs/src/query/query.ts#L77)

___

### client

• **client**: [`ExtendedQueryClient`](../modules.md#extendedqueryclient)

An ExtendedQueryClient is the closest analogy to the query command of nibid CLI.
It contains queries for all of the active modules of Nibiru Chain.

#### Implementation of

[IQueryCmd](../interfaces/IQueryCmd.md).[client](../interfaces/IQueryCmd.md#client)

#### Defined in

[query/query.ts:73](https://github.com/NibiruChain/ts-sdk/blob/692b3bf/packages/nibijs/src/query/query.ts#L73)

___

### tmClient

• **tmClient**: `Tendermint34Client`

#### Implementation of

[IQueryCmd](../interfaces/IQueryCmd.md).[tmClient](../interfaces/IQueryCmd.md#tmclient)

#### Defined in

[query/query.ts:75](https://github.com/NibiruChain/ts-sdk/blob/692b3bf/packages/nibijs/src/query/query.ts#L75)

## Methods

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Implementation of

IQueryCmd.disconnect

#### Defined in

[query/query.ts:96](https://github.com/NibiruChain/ts-sdk/blob/692b3bf/packages/nibijs/src/query/query.ts#L96)
