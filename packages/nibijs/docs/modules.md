[NibiJS Documentation - v0.21.17](intro.md) / Exports

# NibiJS Documentation - v0.21.17

## Table of contents

### Enumerations

- [BECH32_PREFIX](enums/BECH32_PREFIX.md)
- [Signer](enums/Signer.md)

### Classes

- [CustomChain](classes/CustomChain.md)
- [ErrorTxBroadcast](classes/ErrorTxBroadcast.md)
- [ErrorTxSimulation](classes/ErrorTxSimulation.md)
- [MsgFactory](classes/MsgFactory.md)
- [NibiruQueryClient](classes/NibiruQueryClient.md)
- [NibiruSigningClient](classes/NibiruSigningClient.md)
- [PerpMsgFactory](classes/PerpMsgFactory.md)
- [SpotMsgFactory](classes/SpotMsgFactory.md)
- [StableSwap](classes/StableSwap.md)

### Interfaces

- [Attribute](interfaces/Attribute.md)
- [Chain](interfaces/Chain.md)
- [ChainIdParts](interfaces/ChainIdParts.md)
- [CoinMap](interfaces/CoinMap.md)
- [EpochsExtension](interfaces/EpochsExtension.md)
- [Event](interfaces/Event.md)
- [InflationExtension](interfaces/InflationExtension.md)
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
- [OracleExtension](interfaces/OracleExtension.md)
- [PageRequest](interfaces/PageRequest.md)
- [PerpExtension](interfaces/PerpExtension.md)
- [SpotExtension](interfaces/SpotExtension.md)
- [SudoExtension](interfaces/SudoExtension.md)
- [TxLog](interfaces/TxLog.md)
- [TxMessage](interfaces/TxMessage.md)

### Type Aliases

- [NibiruExtensions](modules.md#nibiruextensions)

### Variables

- [INT_MULT](modules.md#int_mult)
- [Localnet](modules.md#localnet)
- [Msg](modules.md#msg)
- [PERP_MSG_TYPE_URLS](modules.md#perp_msg_type_urls)
- [PerpErrors](modules.md#perperrors)
- [SPOT_MSG_TYPE_URLS](modules.md#spot_msg_type_urls)
- [nibiruRegistryTypes](modules.md#nibiruregistrytypes)
- [perpTypes](modules.md#perptypes)
- [spotTypes](modules.md#spottypes)

### Functions

- [Devnet](modules.md#devnet)
- [IncentivizedTestent](modules.md#incentivizedtestent)
- [assert](modules.md#assert)
- [chainToParts](modules.md#chaintoparts)
- [faucetUrlFromChain](modules.md#fauceturlfromchain)
- [fromSdkDec](modules.md#fromsdkdec)
- [fromSdkDecSafe](modules.md#fromsdkdecsafe)
- [fromSdkInt](modules.md#fromsdkint)
- [getKeplr](modules.md#getkeplr)
- [getRegistry](modules.md#getregistry)
- [go](modules.md#go)
- [instanceOfError](modules.md#instanceoferror)
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
- [raises](modules.md#raises)
- [setupEpochsExtension](modules.md#setupepochsextension)
- [setupInflationExtension](modules.md#setupinflationextension)
- [setupOracleExtension](modules.md#setuporacleextension)
- [setupPerpExtension](modules.md#setupperpextension)
- [setupSpotExtension](modules.md#setupspotextension)
- [setupSudoExtension](modules.md#setupsudoextension)
- [toSdkDec](modules.md#tosdkdec)
- [toSdkInt](modules.md#tosdkint)
- [useFaucet](modules.md#usefaucet)

## Type Aliases

### NibiruExtensions

Ƭ **NibiruExtensions**: `QueryClient` & [`SpotExtension`](interfaces/SpotExtension.md) & [`PerpExtension`](interfaces/PerpExtension.md) & [`SudoExtension`](interfaces/SudoExtension.md) & [`InflationExtension`](interfaces/InflationExtension.md) & [`OracleExtension`](interfaces/OracleExtension.md) & [`EpochsExtension`](interfaces/EpochsExtension.md) & `DistributionExtension` & `GovExtension` & `StakingExtension` & `IbcExtension` & `WasmExtension` & `AuthExtension`

#### Defined in

[query/query.ts:29](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/query/query.ts#L29)

## Variables

### INT_MULT

• `Const` **INT_MULT**: `1000000`

#### Defined in

[chain/parse.ts:2](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/parse.ts#L2)

---

### Localnet

• `Const` **Localnet**: [`Chain`](interfaces/Chain.md)

#### Defined in

[chain/chain.ts:90](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/chain.ts#L90)

---

### Msg

• `Const` **Msg**: [`MsgFactory`](classes/MsgFactory.md)

#### Defined in

[msg/index.ts:10](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/msg/index.ts#L10)

---

### PERP_MSG_TYPE_URLS

• `Const` **PERP_MSG_TYPE_URLS**: `Object`

#### Type declaration

| Name                       | Type     |
| :------------------------- | :------- |
| `MsgAddMargin`             | `string` |
| `MsgClosePosition`         | `string` |
| `MsgDonateToEcosystemFund` | `string` |
| `MsgMarketOrder`           | `string` |
| `MsgMultiLiquidate`        | `string` |
| `MsgRemoveMargin`          | `string` |

#### Defined in

[msg/perp.ts:15](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/msg/perp.ts#L15)

---

### PerpErrors

• `Const` **PerpErrors**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[chain/error.ts:40](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/error.ts#L40)

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

[msg/spot.ts:12](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/msg/spot.ts#L12)

---

### nibiruRegistryTypes

• `Const` **nibiruRegistryTypes**: `ReadonlyArray`<[`string`, `GeneratedType`]\>

#### Defined in

[tx/signingClient.ts:31](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/tx/signingClient.ts#L31)

---

### perpTypes

• `Const` **perpTypes**: `ReadonlyArray`<[`string`, `GeneratedType`]\>

#### Defined in

[msg/perp.ts:24](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/msg/perp.ts#L24)

---

### spotTypes

• `Const` **spotTypes**: `ReadonlyArray`<[`string`, `GeneratedType`]\>

#### Defined in

[msg/spot.ts:19](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/msg/spot.ts#L19)

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

[chain/chain.ts:106](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/chain.ts#L106)

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

[chain/chain.ts:99](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/chain.ts#L99)

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

[chain/types.ts:26](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/types.ts#L26)

---

### chainToParts

▸ **chainToParts**(`chain`): [`ChainIdParts`](interfaces/ChainIdParts.md)

Converts a Chain object to its constituent parts.

#### Parameters

| Name    | Type                           | Description    |
| :------ | :----------------------------- | :------------- |
| `chain` | [`Chain`](interfaces/Chain.md) | a Chain object |

#### Returns

[`ChainIdParts`](interfaces/ChainIdParts.md)

a ChainIdParts object

#### Defined in

[chain/chain.ts:134](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/chain.ts#L134)

---

### faucetUrlFromChain

▸ **faucetUrlFromChain**(`chain`): `string`

Constructs a faucet URL from a Chain object.

#### Parameters

| Name    | Type                           | Description    |
| :------ | :----------------------------- | :------------- |
| `chain` | [`Chain`](interfaces/Chain.md) | a Chain object |

#### Returns

`string`

#### Defined in

[chain/useFaucet.ts:60](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/useFaucet.ts#L60)

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

[chain/parse.ts:99](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/parse.ts#L99)

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

[chain/parse.ts:154](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/parse.ts#L154)

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

[chain/parse.ts:150](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/parse.ts#L150)

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

[wallet/keplr.ts:8](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/wallet/keplr.ts#L8)

---

### getRegistry

▸ **getRegistry**(): `Registry`

#### Returns

`Registry`

#### Defined in

[tx/signer.ts:20](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/tx/signer.ts#L20)

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

[chain/types.ts:14](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/types.ts#L14)

---

### instanceOfError

▸ **instanceOfError**(`obj`): obj is Error

A function for strongly typing errors. The errors given in
catch blocks are not typed by default. This means they may not
have the message and name attributes.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `obj` | `any` |

#### Returns

obj is Error

**`Example`**

```js
try {
  functionThatThrowsError()
} catch (err) {
  if (!instanceOfError(err)) {
    throw err
  }
  alert(err.message)
}
```

**`Export`**

#### Defined in

[chain/error.ts:21](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/error.ts#L21)

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

[msg/perp.ts:38](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/msg/perp.ts#L38)

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

[msg/perp.ts:74](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/msg/perp.ts#L74)

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

[msg/spot.ts:31](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/msg/spot.ts#L31)

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

[msg/perp.ts:83](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/msg/perp.ts#L83)

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

[msg/spot.ts:47](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/msg/spot.ts#L47)

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

[msg/spot.ts:39](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/msg/spot.ts#L39)

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

[msg/perp.ts:56](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/msg/perp.ts#L56)

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

[msg/perp.ts:65](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/msg/perp.ts#L65)

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

[msg/perp.ts:47](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/msg/perp.ts#L47)

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

[msg/spot.ts:55](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/msg/spot.ts#L55)

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

[chain/chain.ts:124](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/chain.ts#L124)

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

[chain/types.ts:38](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/types.ts#L38)

---

### newRandomWallet

▸ **newRandomWallet**(`length?`, `prefix?`): `Promise`<`DirectSecp256k1HdWallet`\>

Generates a new wallet with a BIP39 mnemonic of length 24.

#### Parameters

| Name      | Type                                      | Default value        | Description                                                            |
| :-------- | :---------------------------------------- | :------------------- | :--------------------------------------------------------------------- |
| `length?` | `12` \| `15` \| `18` \| `21` \| `24`      | `undefined`          | (optional) The number of words in the mnemonic (12, 15, 18, 21 or 24). |
| `prefix`  | [`BECH32_PREFIX`](enums/BECH32_PREFIX.md) | `BECH32_PREFIX.ADDR` | (optional) Bech32 address prefix. Defaults to "nibi".                  |

#### Returns

`Promise`<`DirectSecp256k1HdWallet`\>

A wallet for protobuf based signing using SIGN_MODE_DIRECT.

**`Export`**

#### Defined in

[tx/signer.ts:46](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/tx/signer.ts#L46)

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

[tx/signer.ts:35](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/tx/signer.ts#L35)

---

### newSignerFromMnemonic

▸ **newSignerFromMnemonic**(`mnemonic`, `prefix?`): `Promise`<`DirectSecp256k1HdWallet`\>

Creates a wallet from the given BIP39 mnemonic.

#### Parameters

| Name       | Type                                      | Default value        | Description                                           |
| :--------- | :---------------------------------------- | :------------------- | :---------------------------------------------------- |
| `mnemonic` | `string`                                  | `undefined`          |                                                       |
| `prefix`   | [`BECH32_PREFIX`](enums/BECH32_PREFIX.md) | `BECH32_PREFIX.ADDR` | (optional) Bech32 address prefix. Defaults to "nibi". |

#### Returns

`Promise`<`DirectSecp256k1HdWallet`\>

A wallet for protobuf based signing using SIGN_MODE_DIRECT

**`Export`**

#### Defined in

[tx/signer.ts:30](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/tx/signer.ts#L30)

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

[chain/chain.ts:113](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/chain.ts#L113)

---

### raises

▸ **raises**(`errs`, `err`): `boolean`

Makes sure one of the errors in 'errs' is contained in 'err'. If none of the
given exceptions are raised, it returns false.

#### Parameters

| Name   | Type       |
| :----- | :--------- |
| `errs` | `string`[] |
| `err`  | `Error`    |

#### Returns

`boolean`

#### Defined in

[chain/error.ts:53](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/error.ts#L53)

---

### setupEpochsExtension

▸ **setupEpochsExtension**(`base`): [`EpochsExtension`](interfaces/EpochsExtension.md)

#### Parameters

| Name   | Type          |
| :----- | :------------ |
| `base` | `QueryClient` |

#### Returns

[`EpochsExtension`](interfaces/EpochsExtension.md)

#### Defined in

[query/epochs.ts:19](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/query/epochs.ts#L19)

---

### setupInflationExtension

▸ **setupInflationExtension**(`base`): [`InflationExtension`](interfaces/InflationExtension.md)

#### Parameters

| Name   | Type          |
| :----- | :------------ |
| `base` | `QueryClient` |

#### Returns

[`InflationExtension`](interfaces/InflationExtension.md)

#### Defined in

[query/inflation.ts:29](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/query/inflation.ts#L29)

---

### setupOracleExtension

▸ **setupOracleExtension**(`base`): [`OracleExtension`](interfaces/OracleExtension.md)

#### Parameters

| Name   | Type          |
| :----- | :------------ |
| `base` | `QueryClient` |

#### Returns

[`OracleExtension`](interfaces/OracleExtension.md)

#### Defined in

[query/oracle.ts:91](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/query/oracle.ts#L91)

---

### setupPerpExtension

▸ **setupPerpExtension**(`base`): [`PerpExtension`](interfaces/PerpExtension.md)

#### Parameters

| Name   | Type          |
| :----- | :------------ |
| `base` | `QueryClient` |

#### Returns

[`PerpExtension`](interfaces/PerpExtension.md)

#### Defined in

[query/perp.ts:35](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/query/perp.ts#L35)

---

### setupSpotExtension

▸ **setupSpotExtension**(`base`): [`SpotExtension`](interfaces/SpotExtension.md)

#### Parameters

| Name   | Type          |
| :----- | :------------ |
| `base` | `QueryClient` |

#### Returns

[`SpotExtension`](interfaces/SpotExtension.md)

#### Defined in

[query/spot.ts:101](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/query/spot.ts#L101)

---

### setupSudoExtension

▸ **setupSudoExtension**(`base`): [`SudoExtension`](interfaces/SudoExtension.md)

#### Parameters

| Name   | Type          |
| :----- | :------------ |
| `base` | `QueryClient` |

#### Returns

[`SudoExtension`](interfaces/SudoExtension.md)

#### Defined in

[query/sudo.ts:14](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/query/sudo.ts#L14)

---

### toSdkDec

▸ **toSdkDec**(`dec`): `string`

toSdkDec converts the input float string to an sdk.Dec.
The maximum number of decimal places for an sdk.Dec is 18.
NOTE: An error is thrown if more decimal digits are provided than the
precision, 18.

ref: Reimplementation of cosmos-sdk/types/decimal.go

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `dec` | `string` |

#### Returns

`string`

**`Export`**

#### Defined in

[chain/parse.ts:23](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/parse.ts#L23)

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

[chain/parse.ts:148](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/parse.ts#L148)

---

### useFaucet

▸ **useFaucet**(`«destructured»`): `Promise`<`Response`\>

Sends 11 NIBI, 100 NUSD, and 100 USDT to the given address from the testnet faucet.

#### Parameters

| Name             | Type                           |
| :--------------- | :----------------------------- |
| `«destructured»` | `Object`                       |
| › `address`      | `string`                       |
| › `amts?`        | `Object`                       |
| › `amts.nibi`    | `number`                       |
| › `amts.nusd`    | `number`                       |
| › `amts.usdt`    | `number`                       |
| › `chain`        | [`Chain`](interfaces/Chain.md) |
| › `grecaptcha`   | `string`                       |

#### Returns

`Promise`<`Response`\>

#### Defined in

[chain/useFaucet.ts:6](https://github.com/NibiruChain/ts-sdk/blob/0d44203/packages/nibijs/src/chain/useFaucet.ts#L6)
