[NibiJS Documentation - v0.8.0](intro.md) / Exports

# NibiJS Documentation - v0.8.0

## Table of contents

### Enumerations

- [BECH32\_PREFIX](enums/BECH32_PREFIX.md)
- [Signer](enums/Signer.md)

### Classes

- [MsgFactory](classes/MsgFactory.md)
- [QueryCmd](classes/QueryCmd.md)
- [Sdk](classes/Sdk.md)
- [TxCmd](classes/TxCmd.md)

### Interfaces

- [Chain](interfaces/Chain.md)
- [CoinMap](interfaces/CoinMap.md)
- [DexExtension](interfaces/DexExtension.md)
- [EpochsExtension](interfaces/EpochsExtension.md)
- [IEventLog](interfaces/IEventLog.md)
- [IQueryCmd](interfaces/IQueryCmd.md)
- [ISdk](interfaces/ISdk.md)
- [MsgTypeUrls](interfaces/MsgTypeUrls.md)
- [PerpExtension](interfaces/PerpExtension.md)
- [PricefeedExtension](interfaces/PricefeedExtension.md)
- [TxMessage](interfaces/TxMessage.md)
- [VpoolExtension](interfaces/VpoolExtension.md)

### Type Aliases

- [Address](modules.md#address)
- [CosmosSigner](modules.md#cosmossigner)
- [ExtendedQueryClient](modules.md#extendedqueryclient)

### Variables

- [CHAOSNET\_CONFIG](modules.md#chaosnet_config)
- [Chaosnet](modules.md#chaosnet)
- [Devnet](modules.md#devnet)
- [INT\_MULT](modules.md#int_mult)
- [Localnet](modules.md#localnet)
- [Msg](modules.md#msg)
- [Testnet](modules.md#testnet)

### Functions

- [assert](modules.md#assert)
- [event2KeyValue](modules.md#event2keyvalue)
- [fromSdkDec](modules.md#fromsdkdec)
- [fromSdkDecSafe](modules.md#fromsdkdecsafe)
- [fromSdkInt](modules.md#fromsdkint)
- [getKeplr](modules.md#getkeplr)
- [getRegistry](modules.md#getregistry)
- [go](modules.md#go)
- [isRestEndptLive](modules.md#isrestendptlive)
- [isRestEndptValid](modules.md#isrestendptvalid)
- [newCoinMapFromCoins](modules.md#newcoinmapfromcoins)
- [newDevnet](modules.md#newdevnet)
- [newQueryCmd](modules.md#newquerycmd)
- [newRandomWallet](modules.md#newrandomwallet)
- [newSdk](modules.md#newsdk)
- [newSignerFromKeplr](modules.md#newsignerfromkeplr)
- [newSignerFromMnemonic](modules.md#newsignerfrommnemonic)
- [newTestnet](modules.md#newtestnet)
- [newTxCmd](modules.md#newtxcmd)
- [queryChainIdWithRest](modules.md#querychainidwithrest)
- [toSdkDec](modules.md#tosdkdec)
- [toSdkInt](modules.md#tosdkint)
- [useFaucet](modules.md#usefaucet)
- [waitForBlockHeight](modules.md#waitforblockheight)
- [waitForNextBlock](modules.md#waitfornextblock)

## Type Aliases

### Address

Ƭ **Address**: `string`

#### Defined in

[tx/tx.ts:26](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/tx/tx.ts#L26)

___

### CosmosSigner

Ƭ **CosmosSigner**: `OfflineSigner` & `OfflineDirectSigner` \| `DirectSecp256k1HdWallet`

#### Defined in

[tx/tx.ts:27](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/tx/tx.ts#L27)

___

### ExtendedQueryClient

Ƭ **ExtendedQueryClient**: `BankExtension` & `QueryClient` & `AuthExtension` & [`DexExtension`](interfaces/DexExtension.md) & [`PerpExtension`](interfaces/PerpExtension.md) & [`VpoolExtension`](interfaces/VpoolExtension.md) & [`PricefeedExtension`](interfaces/PricefeedExtension.md) & [`EpochsExtension`](interfaces/EpochsExtension.md)

#### Defined in

[query/query.ts:16](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/query/query.ts#L16)

## Variables

### CHAOSNET\_CONFIG

• `Const` **CHAOSNET\_CONFIG**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `grpcPort` | `number` |
| `host` | `undefined` \| `string` |
| `lcdPort` | `number` |
| `tmPort` | `number` |

#### Defined in

[chain/chain.ts:64](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/chain.ts#L64)

___

### Chaosnet

• `Const` **Chaosnet**: [`Chain`](interfaces/Chain.md)

Chaosnet is a private chain with trading bots, an oracle, and a node
running an updated version of Nibiru. This environment is useful for live
testing.

#### Defined in

[chain/chain.ts:76](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/chain.ts#L76)

___

### Devnet

• `Const` **Devnet**: [`Chain`](interfaces/Chain.md)

#### Defined in

[chain/chain.ts:62](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/chain.ts#L62)

___

### INT\_MULT

• `Const` **INT\_MULT**: ``1000000``

#### Defined in

[chain/parse.ts:4](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/parse.ts#L4)

___

### Localnet

• `Const` **Localnet**: [`Chain`](interfaces/Chain.md)

#### Defined in

[chain/chain.ts:30](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/chain.ts#L30)

___

### Msg

• `Const` **Msg**: [`MsgFactory`](classes/MsgFactory.md)

#### Defined in

[msg/index.ts:16](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/msg/index.ts#L16)

___

### Testnet

• `Const` **Testnet**: [`Chain`](interfaces/Chain.md)

#### Defined in

[chain/chain.ts:60](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/chain.ts#L60)

## Functions

### assert

▸ **assert**(`condition`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `boolean` |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[chain/types.ts:27](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/types.ts#L27)

___

### event2KeyValue

▸ **event2KeyValue**(`event`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IEventLog`](interfaces/IEventLog.md) |

#### Returns

`Object`

#### Defined in

[chain/parse.ts:176](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/parse.ts#L176)

___

### fromSdkDec

▸ **fromSdkDec**(`sdkDec`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sdkDec` | `string` |

#### Returns

`number`

#### Defined in

[chain/parse.ts:99](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/parse.ts#L99)

___

### fromSdkDecSafe

▸ **fromSdkDecSafe**(`inStr`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inStr` | `string` |

#### Returns

`number`

#### Defined in

[chain/parse.ts:158](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/parse.ts#L158)

___

### fromSdkInt

▸ **fromSdkInt**(`intStr`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `intStr` | `string` |

#### Returns

`number`

#### Defined in

[chain/parse.ts:152](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/parse.ts#L152)

___

### getKeplr

▸ **getKeplr**(`chain`): `Promise`<`Keplr`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | [`Chain`](interfaces/Chain.md) |

#### Returns

`Promise`<`Keplr`\>

#### Defined in

[wallet/keplr.ts:9](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/wallet/keplr.ts#L9)

___

### getRegistry

▸ **getRegistry**(): `Registry`

#### Returns

`Registry`

#### Defined in

[tx/signer.ts:30](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/tx/signer.ts#L30)

___

### go

▸ **go**<`T`\>(`promise`): `Promise`<{ `err`: `undefined` \| `Error` ; `res`: `T` \| `undefined`  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`<`T`\> |

#### Returns

`Promise`<{ `err`: `undefined` \| `Error` ; `res`: `T` \| `undefined`  }\>

#### Defined in

[chain/types.ts:13](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/types.ts#L13)

___

### isRestEndptLive

▸ **isRestEndptLive**(`chain`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | [`Chain`](interfaces/Chain.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[chain/chain.ts:140](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/chain.ts#L140)

___

### isRestEndptValid

▸ **isRestEndptValid**(`chain`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | [`Chain`](interfaces/Chain.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[chain/chain.ts:149](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/chain.ts#L149)

___

### newCoinMapFromCoins

▸ **newCoinMapFromCoins**(`coins`): [`CoinMap`](interfaces/CoinMap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coins` | `Coin`[] |

#### Returns

[`CoinMap`](interfaces/CoinMap.md)

#### Defined in

[chain/types.ts:39](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/types.ts#L39)

___

### newDevnet

▸ **newDevnet**(`chainNumber`): [`Chain`](interfaces/Chain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainNumber` | `number` |

#### Returns

[`Chain`](interfaces/Chain.md)

#### Defined in

[chain/chain.ts:49](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/chain.ts#L49)

___

### newQueryCmd

▸ **newQueryCmd**(`chain`): `Promise`<[`QueryCmd`](classes/QueryCmd.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | [`Chain`](interfaces/Chain.md) |

#### Returns

`Promise`<[`QueryCmd`](classes/QueryCmd.md)\>

#### Defined in

[query/query.ts:100](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/query/query.ts#L100)

___

### newRandomWallet

▸ **newRandomWallet**(`length?`, `prefix?`): `Promise`<`DirectSecp256k1HdWallet`\>

Generates a new wallet with a BIP39 mnemonic of length 24.

**`Export`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `length?` | ``18`` \| ``12`` \| ``15`` \| ``21`` \| ``24`` | `undefined` | (optional) The number of words in the mnemonic (12, 15, 18, 21 or 24). |
| `prefix` | [`BECH32_PREFIX`](enums/BECH32_PREFIX.md) | `BECH32_PREFIX.ADDR` | (optional) Bech32 address prefix. Defaults to "nibi". |

#### Returns

`Promise`<`DirectSecp256k1HdWallet`\>

A wallet for protobuf based signing using SIGN_MODE_DIRECT.

#### Defined in

[tx/signer.ts:64](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/tx/signer.ts#L64)

___

### newSdk

▸ **newSdk**(`chain`, `signer`): `Promise`<[`Sdk`](classes/Sdk.md)\>

Assembles an all-purpose SDK for interacting with the Nibiru blockchain.

If transaction signing is not needed, simply pass an empty string for the
mnemonic. The querier and Tendermint client will still function normally.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | [`Chain`](interfaces/Chain.md) |
| `signer` | [`CosmosSigner`](modules.md#cosmossigner) |

#### Returns

`Promise`<[`Sdk`](classes/Sdk.md)\>

#### Defined in

[sdk.ts:21](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/sdk.ts#L21)

___

### newSignerFromKeplr

▸ **newSignerFromKeplr**(`keplr`, `chainId`): `OfflineSigner` & `OfflineDirectSigner`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keplr` | `Keplr` |
| `chainId` | `string` |

#### Returns

`OfflineSigner` & `OfflineDirectSigner`

#### Defined in

[tx/signer.ts:49](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/tx/signer.ts#L49)

___

### newSignerFromMnemonic

▸ **newSignerFromMnemonic**(`mnemonic`, `prefix?`): `Promise`<`DirectSecp256k1HdWallet`\>

Creates a wallet from the given BIP39 mnemonic.

**`Export`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `mnemonic` | `string` | `undefined` |  |
| `prefix` | [`BECH32_PREFIX`](enums/BECH32_PREFIX.md) | `BECH32_PREFIX.ADDR` | (optional) Bech32 address prefix. Defaults to "nibi". |

#### Returns

`Promise`<`DirectSecp256k1HdWallet`\>

A wallet for protobuf based signing using SIGN_MODE_DIRECT

#### Defined in

[tx/signer.ts:42](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/tx/signer.ts#L42)

___

### newTestnet

▸ **newTestnet**(`chainNumber`): [`Chain`](interfaces/Chain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainNumber` | `number` |

#### Returns

[`Chain`](interfaces/Chain.md)

#### Defined in

[chain/chain.ts:38](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/chain.ts#L38)

___

### newTxCmd

▸ **newTxCmd**(`chain`, `signer`, `gasPriceCoin?`): `Promise`<[`TxCmd`](classes/TxCmd.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | [`Chain`](interfaces/Chain.md) |
| `signer` | `DirectSecp256k1HdWallet` \| `Object` |
| `gasPriceCoin?` | `Coin` |

#### Returns

`Promise`<[`TxCmd`](classes/TxCmd.md)\>

#### Defined in

[tx/tx.ts:138](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/tx/tx.ts#L138)

___

### queryChainIdWithRest

▸ **queryChainIdWithRest**(`chain`): `Promise`<[`string` \| `undefined`, `Error` \| `undefined`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | [`Chain`](interfaces/Chain.md) |

#### Returns

`Promise`<[`string` \| `undefined`, `Error` \| `undefined`]\>

#### Defined in

[chain/chain.ts:127](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/chain.ts#L127)

___

### toSdkDec

▸ **toSdkDec**(`dec`): `string`

toSdkDec converts the input float string to an sdk.Dec.
The maximum number of decimal places for an sdk.Dec is 18.
NOTE: An error is thrown if more decimal digits are provided than the
precision, 18.

ref: Reimplementation of cosmos-sdk/types/decimal.go

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `dec` | `string` |

#### Returns

`string`

#### Defined in

[chain/parse.ts:25](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/parse.ts#L25)

___

### toSdkInt

▸ **toSdkInt**(`i`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |

#### Returns

`string`

#### Defined in

[chain/parse.ts:148](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/parse.ts#L148)

___

### useFaucet

▸ **useFaucet**(`«destructured»`): `Promise`<`Response`\>

Sends 10 NIBI and 100 NUSD to the given address from the testnet faucet.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `address` | `string` |
| › `amtNibi?` | `number` |
| › `amtNusd?` | `number` |
| › `faucetUrl?` | `string` |

#### Returns

`Promise`<`Response`\>

#### Defined in

[chain/chain.ts:88](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/chain/chain.ts#L88)

___

### waitForBlockHeight

▸ **waitForBlockHeight**(`args`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.chain` | [`Chain`](interfaces/Chain.md) |
| `args.height` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[query/query.ts:55](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/query/query.ts#L55)

___

### waitForNextBlock

▸ **waitForNextBlock**(`chain`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | [`Chain`](interfaces/Chain.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[query/query.ts:43](https://github.com/NibiruChain/ts-sdk/blob/6e399c2/packages/nibijs/src/query/query.ts#L43)
