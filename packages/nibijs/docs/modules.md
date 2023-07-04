[NibiJS Documentation - v0.21.1](intro.md) / Exports

# NibiJS Documentation - v0.21.1

## Table of contents

### Enumerations

- [BECH32_PREFIX](enums/BECH32_PREFIX.md)
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

- [INT_MULT](modules.md#int_mult)
- [Localnet](modules.md#localnet)
- [Msg](modules.md#msg)
- [PERP_MSG_TYPE_URLS](modules.md#perp_msg_type_urls)
- [SPOT_MSG_TYPE_URLS](modules.md#spot_msg_type_urls)
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

Ƭ **NibiruExtensions**: `QueryClient` & `SpotExtension` & `PerpExtension` & `OracleExtension` & `EpochsExtension` & `DistributionExtension` & `GovExtension` & `StakingExtension` & `IbcExtension` & `WasmExtension` & `AuthExtension`

#### Defined in

[query/query.ts:27](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/query/query.ts#L27)

## Variables

### INT_MULT

• `Const` **INT_MULT**: `1000000`

#### Defined in

[chain/parse.ts:2](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/chain/parse.ts#L2)

---

### Localnet

• `Const` **Localnet**: [`Chain`](interfaces/Chain.md)

#### Defined in

[chain/chain.ts:104](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/chain/chain.ts#L104)

---

### Msg

• `Const` **Msg**: [`MsgFactory`](classes/MsgFactory.md)

#### Defined in

[msg/index.ts:10](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/index.ts#L10)

---

### PERP_MSG_TYPE_URLS

• `Const` **PERP_MSG_TYPE_URLS**: `Object`

#### Type declaration

| Name                       | Type     |
| :------------------------- | :------- |
| `MsgAddMargin`             | `string` |
| `MsgClosePosition`         | `string` |
| `MsgDonateToEcosystemFund` | `string` |
| `MsgMultiLiquidate`        | `string` |
| `MsgOpenPosition`          | `string` |
| `MsgRemoveMargin`          | `string` |

#### Defined in

[msg/perp.ts:15](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/perp.ts#L15)

---

### SPOT_MSG_TYPE_URLS

• `Const` **SPOT_MSG_TYPE_URLS**: `Object`

#### Type declaration

| Name            | Type     |
| :-------------- | :------- |
| `MsgCreatePool` | `string` |
| `MsgExitPool`   | `string` |
| `MsgJoinPool`   | `string` |
| `MsgSwapAssets` | `string` |

#### Defined in

[msg/spot.ts:12](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/spot.ts#L12)

---

### nibiruRegistryTypes

• `Const` **nibiruRegistryTypes**: `ReadonlyArray`<[`string`, `GeneratedType`]\>

#### Defined in

[tx/signingClient.ts:28](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/tx/signingClient.ts#L28)

---

### perpTypes

• `Const` **perpTypes**: `ReadonlyArray`<[`string`, `GeneratedType`]\>

#### Defined in

[msg/perp.ts:24](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/perp.ts#L24)

---

### spotTypes

• `Const` **spotTypes**: `ReadonlyArray`<[`string`, `GeneratedType`]\>

#### Defined in

[msg/spot.ts:19](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/spot.ts#L19)

## Functions

### Devnet

▸ **Devnet**(`chainNumber`): [`CustomChain`](classes/CustomChain.md)

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `chainNumber` | `number` |

#### Returns

[`CustomChain`](classes/CustomChain.md)

#### Defined in

[chain/chain.ts:120](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/chain/chain.ts#L120)

---

### IncentivizedTestent

▸ **IncentivizedTestent**(`chainNumber`): [`CustomChain`](classes/CustomChain.md)

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `chainNumber` | `number` |

#### Returns

[`CustomChain`](classes/CustomChain.md)

#### Defined in

[chain/chain.ts:113](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/chain/chain.ts#L113)

---

### assert

▸ **assert**(`condition`, `message?`): `void`

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `condition` | `boolean` |
| `message?`  | `string`  |

#### Returns

`void`

#### Defined in

[chain/types.ts:25](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/chain/types.ts#L25)

---

### fromSdkDec

▸ **fromSdkDec**(`sdkDec`): `number`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `sdkDec` | `string` |

#### Returns

`number`

#### Defined in

[chain/parse.ts:97](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/chain/parse.ts#L97)

---

### fromSdkDecSafe

▸ **fromSdkDecSafe**(`inStr`): `number`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `inStr` | `string` |

#### Returns

`number`

#### Defined in

[chain/parse.ts:152](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/chain/parse.ts#L152)

---

### fromSdkInt

▸ **fromSdkInt**(`intStr`): `number`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `intStr` | `string` |

#### Returns

`number`

#### Defined in

[chain/parse.ts:148](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/chain/parse.ts#L148)

---

### getKeplr

▸ **getKeplr**(`chain`): `Promise`<`Keplr`\>

#### Parameters

| Name    | Type                           |
| :------ | :----------------------------- |
| `chain` | [`Chain`](interfaces/Chain.md) |

#### Returns

`Promise`<`Keplr`\>

#### Defined in

[wallet/keplr.ts:9](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/wallet/keplr.ts#L9)

---

### getRegistry

▸ **getRegistry**(): `Registry`

#### Returns

`Registry`

#### Defined in

[tx/signer.ts:20](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/tx/signer.ts#L20)

---

### go

▸ **go**<`T`\>(`promise`): `Promise`<{ `err`: `undefined` = undefined; `res`: `Awaited`<`T`\> } \| { `err`: `Error` ; `res`: `undefined` = undefined }\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type            |
| :-------- | :-------------- |
| `promise` | `Promise`<`T`\> |

#### Returns

`Promise`<{ `err`: `undefined` = undefined; `res`: `Awaited`<`T`\> } \| { `err`: `Error` ; `res`: `undefined` = undefined }\>

#### Defined in

[chain/types.ts:13](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/chain/types.ts#L13)

---

### instanceOfChain

▸ **instanceOfChain**(`obj`): obj is Chain

A function for strongly typing. Returns true if the input object satisfies
the Chain interface.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `obj` | `any` |

#### Returns

obj is Chain

#### Defined in

[chain/chain.ts:41](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/chain/chain.ts#L41)

---

### isMsgAddMarginEncodeObject

▸ **isMsgAddMarginEncodeObject**(`encodeObject`): `boolean`

#### Parameters

| Name           | Type           |
| :------------- | :------------- |
| `encodeObject` | `EncodeObject` |

#### Returns

`boolean`

#### Defined in

[msg/perp.ts:38](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/perp.ts#L38)

---

### isMsgClosePositionEncodeObject

▸ **isMsgClosePositionEncodeObject**(`encodeObject`): `boolean`

#### Parameters

| Name           | Type           |
| :------------- | :------------- |
| `encodeObject` | `EncodeObject` |

#### Returns

`boolean`

#### Defined in

[msg/perp.ts:73](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/perp.ts#L73)

---

### isMsgCreatePoolEncodeObject

▸ **isMsgCreatePoolEncodeObject**(`encodeObject`): `boolean`

#### Parameters

| Name           | Type           |
| :------------- | :------------- |
| `encodeObject` | `EncodeObject` |

#### Returns

`boolean`

#### Defined in

[msg/spot.ts:31](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/spot.ts#L31)

---

### isMsgDonateToEcosystemFundEncodeObject

▸ **isMsgDonateToEcosystemFundEncodeObject**(`encodeObject`): `boolean`

#### Parameters

| Name           | Type           |
| :------------- | :------------- |
| `encodeObject` | `EncodeObject` |

#### Returns

`boolean`

#### Defined in

[msg/perp.ts:82](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/perp.ts#L82)

---

### isMsgExitPoolEncodeObject

▸ **isMsgExitPoolEncodeObject**(`encodeObject`): `boolean`

#### Parameters

| Name           | Type           |
| :------------- | :------------- |
| `encodeObject` | `EncodeObject` |

#### Returns

`boolean`

#### Defined in

[msg/spot.ts:47](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/spot.ts#L47)

---

### isMsgJoinPoolEncodeObject

▸ **isMsgJoinPoolEncodeObject**(`encodeObject`): `boolean`

#### Parameters

| Name           | Type           |
| :------------- | :------------- |
| `encodeObject` | `EncodeObject` |

#### Returns

`boolean`

#### Defined in

[msg/spot.ts:39](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/spot.ts#L39)

---

### isMsgMultiLiquidateEncodeObject

▸ **isMsgMultiLiquidateEncodeObject**(`encodeObject`): `boolean`

#### Parameters

| Name           | Type           |
| :------------- | :------------- |
| `encodeObject` | `EncodeObject` |

#### Returns

`boolean`

#### Defined in

[msg/perp.ts:55](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/perp.ts#L55)

---

### isMsgOpenPositionEncodeObject

▸ **isMsgOpenPositionEncodeObject**(`encodeObject`): `boolean`

#### Parameters

| Name           | Type           |
| :------------- | :------------- |
| `encodeObject` | `EncodeObject` |

#### Returns

`boolean`

#### Defined in

[msg/perp.ts:64](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/perp.ts#L64)

---

### isMsgRemoveMarginEncodeObject

▸ **isMsgRemoveMarginEncodeObject**(`encodeObject`): `boolean`

#### Parameters

| Name           | Type           |
| :------------- | :------------- |
| `encodeObject` | `EncodeObject` |

#### Returns

`boolean`

#### Defined in

[msg/perp.ts:46](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/perp.ts#L46)

---

### isMsgSwapAssetsEncodeObject

▸ **isMsgSwapAssetsEncodeObject**(`encodeObject`): `boolean`

#### Parameters

| Name           | Type           |
| :------------- | :------------- |
| `encodeObject` | `EncodeObject` |

#### Returns

`boolean`

#### Defined in

[msg/spot.ts:55](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/spot.ts#L55)

---

### isRestEndptLive

▸ **isRestEndptLive**(`chain`): `Promise`<`boolean`\>

#### Parameters

| Name    | Type                           |
| :------ | :----------------------------- |
| `chain` | [`Chain`](interfaces/Chain.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[chain/chain.ts:138](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/chain/chain.ts#L138)

---

### newCoinMapFromCoins

▸ **newCoinMapFromCoins**(`coins`): [`CoinMap`](interfaces/CoinMap.md)

#### Parameters

| Name    | Type              |
| :------ | :---------------- |
| `coins` | readonly `Coin`[] |

#### Returns

[`CoinMap`](interfaces/CoinMap.md)

#### Defined in

[chain/types.ts:37](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/chain/types.ts#L37)

---

### newRandomWallet

▸ **newRandomWallet**(`length?`, `prefix?`): `Promise`<`DirectSecp256k1HdWallet`\>

Generates a new wallet with a BIP39 mnemonic of length 24.

**`Export`**

#### Parameters

| Name      | Type                                      | Default value        | Description                                                            |
| :-------- | :---------------------------------------- | :------------------- | :--------------------------------------------------------------------- |
| `length?` | `12` \| `15` \| `18` \| `21` \| `24`      | `undefined`          | (optional) The number of words in the mnemonic (12, 15, 18, 21 or 24). |
| `prefix`  | [`BECH32_PREFIX`](enums/BECH32_PREFIX.md) | `BECH32_PREFIX.ADDR` | (optional) Bech32 address prefix. Defaults to "nibi".                  |

#### Returns

`Promise`<`DirectSecp256k1HdWallet`\>

A wallet for protobuf based signing using SIGN_MODE_DIRECT.

#### Defined in

[tx/signer.ts:46](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/tx/signer.ts#L46)

---

### newSignerFromKeplr

▸ **newSignerFromKeplr**(`keplr`, `chainId`): `OfflineAminoSigner` & `OfflineDirectSigner`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `keplr`   | `Keplr`  |
| `chainId` | `string` |

#### Returns

`OfflineAminoSigner` & `OfflineDirectSigner`

#### Defined in

[tx/signer.ts:35](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/tx/signer.ts#L35)

---

### newSignerFromMnemonic

▸ **newSignerFromMnemonic**(`mnemonic`, `prefix?`): `Promise`<`DirectSecp256k1HdWallet`\>

Creates a wallet from the given BIP39 mnemonic.

**`Export`**

#### Parameters

| Name       | Type                                      | Default value        | Description                                           |
| :--------- | :---------------------------------------- | :------------------- | :---------------------------------------------------- |
| `mnemonic` | `string`                                  | `undefined`          |                                                       |
| `prefix`   | [`BECH32_PREFIX`](enums/BECH32_PREFIX.md) | `BECH32_PREFIX.ADDR` | (optional) Bech32 address prefix. Defaults to "nibi". |

#### Returns

`Promise`<`DirectSecp256k1HdWallet`\>

A wallet for protobuf based signing using SIGN_MODE_DIRECT

#### Defined in

[tx/signer.ts:30](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/tx/signer.ts#L30)

---

### queryChainIdWithRest

▸ **queryChainIdWithRest**(`chain`): `Promise`<(`undefined` \| `string` \| `Error`)[]\>

#### Parameters

| Name    | Type                           |
| :------ | :----------------------------- |
| `chain` | [`Chain`](interfaces/Chain.md) |

#### Returns

`Promise`<(`undefined` \| `string` \| `Error`)[]\>

#### Defined in

[chain/chain.ts:127](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/chain/chain.ts#L127)

---

### toSdkDec

▸ **toSdkDec**(`dec`): `string`

toSdkDec converts the input float string to an sdk.Dec.
The maximum number of decimal places for an sdk.Dec is 18.
NOTE: An error is thrown if more decimal digits are provided than the
precision, 18.

ref: Reimplementation of cosmos-sdk/types/decimal.go

**`Export`**

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `dec` | `string` |

#### Returns

`string`

#### Defined in

[chain/parse.ts:23](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/chain/parse.ts#L23)

---

### toSdkInt

▸ **toSdkInt**(`i`): `string`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `i`  | `number` |

#### Returns

`string`

#### Defined in

[chain/parse.ts:146](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/chain/parse.ts#L146)

---

### useFaucet

▸ **useFaucet**(`«destructured»`): `Promise`<`Response`\>

Sends 10 NIBI and 100 NUSD to the given address from the testnet faucet.

#### Parameters

| Name             | Type                                       |
| :--------------- | :----------------------------------------- |
| `«destructured»` | `Object`                                   |
| › `address`      | `string`                                   |
| › `amts?`        | `Object`                                   |
| › `amts.nibi`    | `number`                                   |
| › `amts.nusd`    | `number`                                   |
| › `amts.usdt`    | `number`                                   |
| › `chain?`       | `string` \| [`Chain`](interfaces/Chain.md) |
| › `faucetUrl?`   | `string` \| `Error`                        |

#### Returns

`Promise`<`Response`\>

#### Defined in

[chain/useFaucet.ts:15](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/chain/useFaucet.ts#L15)
