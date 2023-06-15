[NibiJS Documentation - v0.19.15](intro.md) / Exports

# NibiJS Documentation - v0.19.15

## Table of contents

### Enumerations

- [BECH32\_PREFIX](enums/BECH32_PREFIX.md)
- [Signer](enums/Signer.md)

### Classes

- [CustomChain](classes/CustomChain.md)
- [MsgFactory](classes/MsgFactory.md)
- [NibiruQueryClient](classes/NibiruQueryClient.md)
- [NibiruSigningClient](classes/NibiruSigningClient.md)
- [PerpMsgFactory](classes/PerpMsgFactory.md)
- [SpotMsgFactory](classes/SpotMsgFactory.md)

### Interfaces

- [Attribute](interfaces/Attribute.md)
- [Chain](interfaces/Chain.md)
- [ChainIdParts](interfaces/ChainIdParts.md)
- [CoinMap](interfaces/CoinMap.md)
- [Event](interfaces/Event.md)
- [MsgAddMarginEncodeObject](interfaces/MsgAddMarginEncodeObject.md)
- [MsgClosePositionEncodeObject](interfaces/MsgClosePositionEncodeObject.md)
- [MsgCreatePoolEncodeObject](interfaces/MsgCreatePoolEncodeObject.md)
- [MsgDonateToEcosystemFundEncodeObject](interfaces/MsgDonateToEcosystemFundEncodeObject.md)
- [MsgExitPoolEncodeObject](interfaces/MsgExitPoolEncodeObject.md)
- [MsgJoinPoolEncodeObject](interfaces/MsgJoinPoolEncodeObject.md)
- [MsgMultiLiquidateEncodeObject](interfaces/MsgMultiLiquidateEncodeObject.md)
- [MsgOpenPositionEncodeObject](interfaces/MsgOpenPositionEncodeObject.md)
- [MsgRemoveMarginEncodeObject](interfaces/MsgRemoveMarginEncodeObject.md)
- [MsgSwapAssetsEncodeObject](interfaces/MsgSwapAssetsEncodeObject.md)
- [MsgTypeUrls](interfaces/MsgTypeUrls.md)
- [TxLog](interfaces/TxLog.md)
- [TxMessage](interfaces/TxMessage.md)

### Type Aliases

- [NibiruExtensions](modules.md#nibiruextensions)

### Variables

- [INT\_MULT](modules.md#int_mult)
- [Localnet](modules.md#localnet)
- [Msg](modules.md#msg)
- [PERP\_MSG\_TYPE\_URLS](modules.md#perp_msg_type_urls)
- [SPOT\_MSG\_TYPE\_URLS](modules.md#spot_msg_type_urls)
- [nibiruRegistryTypes](modules.md#nibiruregistrytypes)
- [perpTypes](modules.md#perptypes)
- [spotTypes](modules.md#spottypes)

### Functions

- [Devnet](modules.md#devnet)
- [IncentivizedTestent](modules.md#incentivizedtestent)
- [assert](modules.md#assert)
- [fromSdkDec](modules.md#fromsdkdec)
- [fromSdkDecSafe](modules.md#fromsdkdecsafe)
- [fromSdkInt](modules.md#fromsdkint)
- [getKeplr](modules.md#getkeplr)
- [getRegistry](modules.md#getregistry)
- [go](modules.md#go)
- [instanceOfChain](modules.md#instanceofchain)
- [isMsgAddMarginEncodeObject](modules.md#ismsgaddmarginencodeobject)
- [isMsgClosePositionEncodeObject](modules.md#ismsgclosepositionencodeobject)
- [isMsgCreatePoolEncodeObject](modules.md#ismsgcreatepoolencodeobject)
- [isMsgDonateToEcosystemFundEncodeObject](modules.md#ismsgdonatetoecosystemfundencodeobject)
- [isMsgExitPoolEncodeObject](modules.md#ismsgexitpoolencodeobject)
- [isMsgJoinPoolEncodeObject](modules.md#ismsgjoinpoolencodeobject)
- [isMsgMultiLiquidateEncodeObject](modules.md#ismsgmultiliquidateencodeobject)
- [isMsgOpenPositionEncodeObject](modules.md#ismsgopenpositionencodeobject)
- [isMsgRemoveMarginEncodeObject](modules.md#ismsgremovemarginencodeobject)
- [isMsgSwapAssetsEncodeObject](modules.md#ismsgswapassetsencodeobject)
- [isRestEndptLive](modules.md#isrestendptlive)
- [newCoinMapFromCoins](modules.md#newcoinmapfromcoins)
- [newRandomWallet](modules.md#newrandomwallet)
- [newSignerFromKeplr](modules.md#newsignerfromkeplr)
- [newSignerFromMnemonic](modules.md#newsignerfrommnemonic)
- [queryChainIdWithRest](modules.md#querychainidwithrest)
- [toSdkDec](modules.md#tosdkdec)
- [toSdkInt](modules.md#tosdkint)
- [useFaucet](modules.md#usefaucet)

## Type Aliases

### NibiruExtensions

Ƭ **NibiruExtensions**: `QueryClient` & `SpotExtension` & `PerpExtension` & `VpoolExtension` & `OracleExtension` & `EpochsExtension` & `DistributionExtension` & `GovExtension` & `UtilsExtension` & `StakingExtension` & `IbcExtension` & `WasmExtension` & `AuthExtension`

#### Defined in

[query/query.ts:29](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/query/query.ts#L29)

## Variables

### INT\_MULT

• `Const` **INT\_MULT**: ``1000000``

#### Defined in

[chain/parse.ts:2](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/chain/parse.ts#L2)

___

### Localnet

• `Const` **Localnet**: [`Chain`](interfaces/Chain.md)

#### Defined in

[chain/chain.ts:98](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/chain/chain.ts#L98)

___

### Msg

• `Const` **Msg**: [`MsgFactory`](classes/MsgFactory.md)

#### Defined in

[msg/index.ts:10](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/msg/index.ts#L10)

___

### PERP\_MSG\_TYPE\_URLS

• `Const` **PERP\_MSG\_TYPE\_URLS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MsgAddMargin` | `string` |
| `MsgClosePosition` | `string` |
| `MsgDonateToEcosystemFund` | `string` |
| `MsgMultiLiquidate` | `string` |
| `MsgOpenPosition` | `string` |
| `MsgRemoveMargin` | `string` |

#### Defined in

[msg/perp.ts:15](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/msg/perp.ts#L15)

___

### SPOT\_MSG\_TYPE\_URLS

• `Const` **SPOT\_MSG\_TYPE\_URLS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MsgCreatePool` | `string` |
| `MsgExitPool` | `string` |
| `MsgJoinPool` | `string` |
| `MsgSwapAssets` | `string` |

#### Defined in

[msg/spot.ts:12](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/msg/spot.ts#L12)

___

### nibiruRegistryTypes

• `Const` **nibiruRegistryTypes**: `ReadonlyArray`<[`string`, `GeneratedType`]\>

#### Defined in

[tx/signingClient.ts:30](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/tx/signingClient.ts#L30)

___

### perpTypes

• `Const` **perpTypes**: `ReadonlyArray`<[`string`, `GeneratedType`]\>

#### Defined in

[msg/perp.ts:24](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/msg/perp.ts#L24)

___

### spotTypes

• `Const` **spotTypes**: `ReadonlyArray`<[`string`, `GeneratedType`]\>

#### Defined in

[msg/spot.ts:19](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/msg/spot.ts#L19)

## Functions

### Devnet

▸ **Devnet**(`chainNumber`): [`Chain`](interfaces/Chain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainNumber` | `number` |

#### Returns

[`Chain`](interfaces/Chain.md)

#### Defined in

[chain/chain.ts:115](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/chain/chain.ts#L115)

___

### IncentivizedTestent

▸ **IncentivizedTestent**(`chainNumber`): [`Chain`](interfaces/Chain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainNumber` | `number` |

#### Returns

[`Chain`](interfaces/Chain.md)

#### Defined in

[chain/chain.ts:107](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/chain/chain.ts#L107)

___

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

[chain/types.ts:27](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/chain/types.ts#L27)

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

[chain/parse.ts:97](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/chain/parse.ts#L97)

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

[chain/parse.ts:156](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/chain/parse.ts#L156)

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

[chain/parse.ts:150](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/chain/parse.ts#L150)

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

[wallet/keplr.ts:9](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/wallet/keplr.ts#L9)

___

### getRegistry

▸ **getRegistry**(): `Registry`

#### Returns

`Registry`

#### Defined in

[tx/signer.ts:28](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/tx/signer.ts#L28)

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

[chain/types.ts:13](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/chain/types.ts#L13)

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

[chain/chain.ts:33](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/chain/chain.ts#L33)

___

### isMsgAddMarginEncodeObject

▸ **isMsgAddMarginEncodeObject**(`encodeObject`): encodeObject is MsgAddMarginEncodeObject

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodeObject` | `EncodeObject` |

#### Returns

encodeObject is MsgAddMarginEncodeObject

#### Defined in

[msg/perp.ts:38](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/msg/perp.ts#L38)

___

### isMsgClosePositionEncodeObject

▸ **isMsgClosePositionEncodeObject**(`encodeObject`): encodeObject is MsgClosePositionEncodeObject

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodeObject` | `EncodeObject` |

#### Returns

encodeObject is MsgClosePositionEncodeObject

#### Defined in

[msg/perp.ts:94](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/msg/perp.ts#L94)

___

### isMsgCreatePoolEncodeObject

▸ **isMsgCreatePoolEncodeObject**(`encodeObject`): encodeObject is MsgCreatePoolEncodeObject

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodeObject` | `EncodeObject` |

#### Returns

encodeObject is MsgCreatePoolEncodeObject

#### Defined in

[msg/spot.ts:31](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/msg/spot.ts#L31)

___

### isMsgDonateToEcosystemFundEncodeObject

▸ **isMsgDonateToEcosystemFundEncodeObject**(`encodeObject`): encodeObject is MsgDonateToEcosystemFundEncodeObject

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodeObject` | `EncodeObject` |

#### Returns

encodeObject is MsgDonateToEcosystemFundEncodeObject

#### Defined in

[msg/perp.ts:108](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/msg/perp.ts#L108)

___

### isMsgExitPoolEncodeObject

▸ **isMsgExitPoolEncodeObject**(`encodeObject`): encodeObject is MsgExitPoolEncodeObject

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodeObject` | `EncodeObject` |

#### Returns

encodeObject is MsgExitPoolEncodeObject

#### Defined in

[msg/spot.ts:53](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/msg/spot.ts#L53)

___

### isMsgJoinPoolEncodeObject

▸ **isMsgJoinPoolEncodeObject**(`encodeObject`): encodeObject is MsgJoinPoolEncodeObject

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodeObject` | `EncodeObject` |

#### Returns

encodeObject is MsgJoinPoolEncodeObject

#### Defined in

[msg/spot.ts:42](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/msg/spot.ts#L42)

___

### isMsgMultiLiquidateEncodeObject

▸ **isMsgMultiLiquidateEncodeObject**(`encodeObject`): encodeObject is MsgMultiLiquidateEncodeObject

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodeObject` | `EncodeObject` |

#### Returns

encodeObject is MsgMultiLiquidateEncodeObject

#### Defined in

[msg/perp.ts:66](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/msg/perp.ts#L66)

___

### isMsgOpenPositionEncodeObject

▸ **isMsgOpenPositionEncodeObject**(`encodeObject`): encodeObject is MsgOpenPositionEncodeObject

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodeObject` | `EncodeObject` |

#### Returns

encodeObject is MsgOpenPositionEncodeObject

#### Defined in

[msg/perp.ts:80](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/msg/perp.ts#L80)

___

### isMsgRemoveMarginEncodeObject

▸ **isMsgRemoveMarginEncodeObject**(`encodeObject`): encodeObject is MsgRemoveMarginEncodeObject

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodeObject` | `EncodeObject` |

#### Returns

encodeObject is MsgRemoveMarginEncodeObject

#### Defined in

[msg/perp.ts:52](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/msg/perp.ts#L52)

___

### isMsgSwapAssetsEncodeObject

▸ **isMsgSwapAssetsEncodeObject**(`encodeObject`): encodeObject is MsgSwapAssetsEncodeObject

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodeObject` | `EncodeObject` |

#### Returns

encodeObject is MsgSwapAssetsEncodeObject

#### Defined in

[msg/spot.ts:64](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/msg/spot.ts#L64)

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

[chain/chain.ts:134](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/chain/chain.ts#L134)

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

[chain/types.ts:39](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/chain/types.ts#L39)

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

[tx/signer.ts:62](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/tx/signer.ts#L62)

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

[tx/signer.ts:47](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/tx/signer.ts#L47)

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

[tx/signer.ts:40](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/tx/signer.ts#L40)

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

[chain/chain.ts:123](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/chain/chain.ts#L123)

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

[chain/parse.ts:23](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/chain/parse.ts#L23)

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

[chain/parse.ts:146](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/chain/parse.ts#L146)

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

[chain/useFaucet.ts:7](https://github.com/NibiruChain/ts-sdk/blob/9cf6b52/packages/nibijs/src/chain/useFaucet.ts#L7)
