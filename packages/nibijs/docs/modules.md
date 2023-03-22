[NibiJS Documentation - v0.19.4](intro.md) / Exports

# NibiJS Documentation - v0.19.4

## Table of contents

### Enumerations

- [BECH32\_PREFIX](enums/BECH32_PREFIX.md)
- [Signer](enums/Signer.md)

### Classes

- [CustomChain](classes/CustomChain.md)
- [MsgFactory](classes/MsgFactory.md)
- [NibiruQueryClient](classes/NibiruQueryClient.md)
- [Sdk](classes/Sdk.md)
- [TxCmd](classes/TxCmd.md)

### Interfaces

- [Chain](interfaces/Chain.md)
- [ChainIdParts](interfaces/ChainIdParts.md)
- [CoinMap](interfaces/CoinMap.md)
- [IEventLog](interfaces/IEventLog.md)
- [ISdk](interfaces/ISdk.md)
- [MsgTypeUrls](interfaces/MsgTypeUrls.md)
- [TxMessage](interfaces/TxMessage.md)

### Type Aliases

- [Address](modules.md#address)
- [CosmosSigner](modules.md#cosmossigner)
- [NibiruExtensions](modules.md#nibiruextensions)

### Variables

- [INT\_MULT](modules.md#int_mult)
- [Localnet](modules.md#localnet)
- [Msg](modules.md#msg)

### Functions

- [assert](modules.md#assert)
- [event2KeyValue](modules.md#event2keyvalue)
- [fromSdkDec](modules.md#fromsdkdec)
- [fromSdkDecSafe](modules.md#fromsdkdecsafe)
- [fromSdkInt](modules.md#fromsdkint)
- [getKeplr](modules.md#getkeplr)
- [getRegistry](modules.md#getregistry)
- [go](modules.md#go)
- [instanceOfChain](modules.md#instanceofchain)
- [isRestEndptLive](modules.md#isrestendptlive)
- [isRestEndptValid](modules.md#isrestendptvalid)
- [newCoinMapFromCoins](modules.md#newcoinmapfromcoins)
- [newDevnet](modules.md#newdevnet)
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

## Type Aliases

### Address

Ƭ **Address**: `string`

#### Defined in

[tx/tx.ts:26](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/tx/tx.ts#L26)

___

### CosmosSigner

Ƭ **CosmosSigner**: `OfflineSigner` & `OfflineDirectSigner` \| `DirectSecp256k1HdWallet`

#### Defined in

[tx/tx.ts:27](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/tx/tx.ts#L27)

___

### NibiruExtensions

Ƭ **NibiruExtensions**: `QueryClient` & `SpotExtension` & `PerpExtension` & `VpoolExtension` & `OracleExtension` & `EpochsExtension` & `DistributionExtension` & `GovExtension`

#### Defined in

[query/query.ts:17](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/query/query.ts#L17)

## Variables

### INT\_MULT

• `Const` **INT\_MULT**: ``1000000``

#### Defined in

[chain/parse.ts:4](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/parse.ts#L4)

___

### Localnet

• `Const` **Localnet**: [`Chain`](interfaces/Chain.md)

#### Defined in

[chain/chain.ts:86](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L86)

___

### Msg

• `Const` **Msg**: [`MsgFactory`](classes/MsgFactory.md)

#### Defined in

[msg/index.ts:19](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/msg/index.ts#L19)

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

[chain/types.ts:27](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/types.ts#L27)

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

[chain/parse.ts:176](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/parse.ts#L176)

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

[chain/parse.ts:99](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/parse.ts#L99)

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

[chain/parse.ts:158](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/parse.ts#L158)

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

[chain/parse.ts:152](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/parse.ts#L152)

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

[wallet/keplr.ts:9](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/wallet/keplr.ts#L9)

___

### getRegistry

▸ **getRegistry**(): `Registry`

#### Returns

`Registry`

#### Defined in

[tx/signer.ts:28](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/tx/signer.ts#L28)

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

[chain/types.ts:13](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/types.ts#L13)

___

### instanceOfChain

▸ **instanceOfChain**(`obj`): obj is Chain

A function for strongly typing. Returns true if the input object satisfies
the Chain interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

obj is Chain

#### Defined in

[chain/chain.ts:34](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L34)

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

[chain/chain.ts:113](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L113)

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

[chain/chain.ts:122](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L122)

___

### newCoinMapFromCoins

▸ **newCoinMapFromCoins**(`coins`): [`CoinMap`](interfaces/CoinMap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coins` | readonly `Coin`[] |

#### Returns

[`CoinMap`](interfaces/CoinMap.md)

#### Defined in

[chain/types.ts:39](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/types.ts#L39)

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

[chain/chain.ts:98](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L98)

___

### newRandomWallet

▸ **newRandomWallet**(`length?`, `prefix?`): `Promise`<`DirectSecp256k1HdWallet`\>

Generates a new wallet with a BIP39 mnemonic of length 24.

**`Export`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `length?` | ``12`` \| ``15`` \| ``18`` \| ``21`` \| ``24`` | `undefined` | (optional) The number of words in the mnemonic (12, 15, 18, 21 or 24). |
| `prefix` | [`BECH32_PREFIX`](enums/BECH32_PREFIX.md) | `BECH32_PREFIX.ADDR` | (optional) Bech32 address prefix. Defaults to "nibi". |

#### Returns

`Promise`<`DirectSecp256k1HdWallet`\>

A wallet for protobuf based signing using SIGN_MODE_DIRECT.

#### Defined in

[tx/signer.ts:62](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/tx/signer.ts#L62)

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

[sdk.ts:20](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/sdk.ts#L20)

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

[tx/signer.ts:47](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/tx/signer.ts#L47)

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

[tx/signer.ts:40](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/tx/signer.ts#L40)

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

[chain/chain.ts:94](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L94)

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

[tx/tx.ts:148](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/tx/tx.ts#L148)

___

### queryChainIdWithRest

▸ **queryChainIdWithRest**(`chain`): `Promise`<[`string`, Error?]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | [`Chain`](interfaces/Chain.md) |

#### Returns

`Promise`<[`string`, Error?]\>

#### Defined in

[chain/chain.ts:102](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L102)

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

[chain/parse.ts:25](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/parse.ts#L25)

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

[chain/parse.ts:148](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/parse.ts#L148)

___

### useFaucet

▸ **useFaucet**(`«destructured»`): `Promise`<`Response`\>

Sends 10 NIBI and 100 NUSD to the given address from the testnet faucet.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `address` | `string` |
| › `amts?` | `Object` |
| › `amts.nibi` | `number` |
| › `amts.nusd` | `number` |
| › `amts.usdt` | `number` |
| › `chain?` | `string` \| [`Chain`](interfaces/Chain.md) |
| › `faucetUrl?` | `string` |

#### Returns

`Promise`<`Response`\>

#### Defined in

[chain/useFaucet.ts:7](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/useFaucet.ts#L7)
