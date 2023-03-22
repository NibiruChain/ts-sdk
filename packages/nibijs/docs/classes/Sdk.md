[NibiJS Documentation - v0.19.4](../intro.md) / [Exports](../modules.md) / Sdk

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
- [queryClient](Sdk.md#queryclient)
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
| `args.queryClient` | [`NibiruQueryClient`](NibiruQueryClient.md) |
| `args.txCmd` | [`TxCmd`](TxCmd.md) |

#### Defined in

[sdk.ts:67](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/sdk.ts#L67)

## Properties

### chain

• **chain**: [`Chain`](../interfaces/Chain.md)

#### Implementation of

[ISdk](../interfaces/ISdk.md).[chain](../interfaces/ISdk.md#chain)

#### Defined in

[sdk.ts:55](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/sdk.ts#L55)

___

### queryClient

• **queryClient**: [`NibiruQueryClient`](NibiruQueryClient.md)

#### Implementation of

[ISdk](../interfaces/ISdk.md).[queryClient](../interfaces/ISdk.md#queryclient)

#### Defined in

[sdk.ts:59](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/sdk.ts#L59)

___

### tx

• **tx**: [`TxCmd`](TxCmd.md)

#### Implementation of

[ISdk](../interfaces/ISdk.md).[tx](../interfaces/ISdk.md#tx)

#### Defined in

[sdk.ts:57](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/sdk.ts#L57)
