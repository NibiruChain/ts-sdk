[NibiJS Documentation - v0.19.0](../intro.md) / [Exports](../modules.md) / Sdk

# Class: Sdk

The 'Sdk' object is the main entrypoint to the Nibiru TypeScript SDK.
It can be used to interact with the Nibiru blockchain from Node or browser
environments.

**`Example`**

querying the block at height 1
```ts
import { Testnet, newSdk } from "@nibiruchain/nibijs"
const sdk = newSdk(Testnet, myMnemonic)
const blockHeight = 1
const block = sdk.tmClient.block(blockHeight)
```

**`Example`**

sending funds
```ts
import { Testnet, newSdk, newCoins, Coin } from "@nibiruchain/nibijs"
const sdk = newSdk(Testnet, myMnemonic)
const tokens: Coin[] = newCoins(5, "unibi")
const toAddr: string = "..." // bech32 address of the receiving party
let txResp = sdk.tx.sendTokens(toAddr, tokens)
```

## Implements

- [`ISdk`](../interfaces/ISdk.md)

## Table of contents

### Constructors

- [constructor](Sdk.md#constructor)

### Properties

- [chain](Sdk.md#chain)
- [query](Sdk.md#query)
- [tmClient](Sdk.md#tmclient)
- [tx](Sdk.md#tx)

## Constructors

### constructor

• **new Sdk**(`args`)

Creates an instance of Sdk.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.chain` | [`Chain`](../interfaces/Chain.md) |
| `args.queryCmd` | [`IQueryCmd`](../interfaces/IQueryCmd.md) |
| `args.txCmd` | [`TxCmd`](TxCmd.md) |

#### Defined in

[sdk.ts:71](https://github.com/NibiruChain/ts-sdk/blob/462c731/packages/nibijs/src/sdk.ts#L71)

## Properties

### chain

• **chain**: [`Chain`](../interfaces/Chain.md)

#### Implementation of

[ISdk](../interfaces/ISdk.md).[chain](../interfaces/ISdk.md#chain)

#### Defined in

[sdk.ts:57](https://github.com/NibiruChain/ts-sdk/blob/462c731/packages/nibijs/src/sdk.ts#L57)

___

### query

• **query**: [`ExtendedQueryClient`](../modules.md#extendedqueryclient)

#### Implementation of

[ISdk](../interfaces/ISdk.md).[query](../interfaces/ISdk.md#query)

#### Defined in

[sdk.ts:61](https://github.com/NibiruChain/ts-sdk/blob/462c731/packages/nibijs/src/sdk.ts#L61)

___

### tmClient

• **tmClient**: `Tendermint34Client`

#### Implementation of

[ISdk](../interfaces/ISdk.md).[tmClient](../interfaces/ISdk.md#tmclient)

#### Defined in

[sdk.ts:63](https://github.com/NibiruChain/ts-sdk/blob/462c731/packages/nibijs/src/sdk.ts#L63)

___

### tx

• **tx**: [`TxCmd`](TxCmd.md)

#### Implementation of

[ISdk](../interfaces/ISdk.md).[tx](../interfaces/ISdk.md#tx)

#### Defined in

[sdk.ts:59](https://github.com/NibiruChain/ts-sdk/blob/462c731/packages/nibijs/src/sdk.ts#L59)
