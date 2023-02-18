[NibiJS Documentation - v0.19.0](../intro.md) / [Exports](../modules.md) / IQueryCmd

# Interface: IQueryCmd

## Implemented by

- [`QueryCmd`](../classes/QueryCmd.md)

## Table of contents

### Properties

- [chain](IQueryCmd.md#chain)
- [client](IQueryCmd.md#client)
- [disconnect](IQueryCmd.md#disconnect)
- [tmClient](IQueryCmd.md#tmclient)

## Properties

### chain

• **chain**: [`Chain`](Chain.md)

The chain to which this query client corresponds.
E.g. nibiru-testnet-1, nibiru-localnet-42

#### Defined in

[query/query.ts:36](https://github.com/NibiruChain/ts-sdk/blob/2097480/packages/nibijs/src/query/query.ts#L36)

___

### client

• **client**: [`ExtendedQueryClient`](../modules.md#extendedqueryclient)

An ExtendedQueryClient is the closest analogy to the query command of nibid CLI.
It contains queries for all of the active modules of Nibiru Chain.

#### Defined in

[query/query.ts:32](https://github.com/NibiruChain/ts-sdk/blob/2097480/packages/nibijs/src/query/query.ts#L32)

___

### disconnect

• **disconnect**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[query/query.ts:37](https://github.com/NibiruChain/ts-sdk/blob/2097480/packages/nibijs/src/query/query.ts#L37)

___

### tmClient

• **tmClient**: `Tendermint34Client`

#### Defined in

[query/query.ts:33](https://github.com/NibiruChain/ts-sdk/blob/2097480/packages/nibijs/src/query/query.ts#L33)
