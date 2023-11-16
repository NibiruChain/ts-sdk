[NibiJS Documentation - v0.21.40](intro.md) / Exports

# NibiJS Documentation - v0.21.40

## Table of contents

### Enumerations

- [BECH32_PREFIX](enums/BECH32_PREFIX.md)
- [Signer](enums/Signer.md)

### Classes

- [CustomChain](classes/CustomChain.md)
- [NibiruQueryClient](classes/NibiruQueryClient.md)
- [NibiruSigningClient](classes/NibiruSigningClient.md)
- [StableSwap](classes/StableSwap.md)

### Interfaces

- [Attribute](interfaces/Attribute.md)
- [Chain](interfaces/Chain.md)
- [ChainIdParts](interfaces/ChainIdParts.md)
- [CoinMap](interfaces/CoinMap.md)
- [EpochsExtension](interfaces/EpochsExtension.md)
- [Event](interfaces/Event.md)
- [InflationExtension](interfaces/InflationExtension.md)
- [MsgTypeUrls](interfaces/MsgTypeUrls.md)
- [OracleExtension](interfaces/OracleExtension.md)
- [SudoExtension](interfaces/SudoExtension.md)
- [TxLog](interfaces/TxLog.md)
- [TxMessage](interfaces/TxMessage.md)

### Type Aliases

- [NibiruExtensions](modules.md#nibiruextensions)

### Variables

- [INT_MULT](modules.md#int_mult)
- [Localnet](modules.md#localnet)
- [nibiruRegistryTypes](modules.md#nibiruregistrytypes)

### Functions

- [Devnet](modules.md#devnet)
- [IncentivizedTestnet](modules.md#incentivizedtestnet)
- [assert](modules.md#assert)
- [chainToParts](modules.md#chaintoparts)
- [faucetUrlFromChain](modules.md#fauceturlfromchain)
- [fromSdkDec](modules.md#fromsdkdec)
- [fromSdkInt](modules.md#fromsdkint)
- [getRegistry](modules.md#getregistry)
- [go](modules.md#go)
- [isRestEndptLive](modules.md#isrestendptlive)
- [newCoinMapFromCoins](modules.md#newcoinmapfromcoins)
- [newRandomWallet](modules.md#newrandomwallet)
- [newSignerFromMnemonic](modules.md#newsignerfrommnemonic)
- [queryChainIdWithRest](modules.md#querychainidwithrest)
- [setupEpochsExtension](modules.md#setupepochsextension)
- [setupInflationExtension](modules.md#setupinflationextension)
- [setupOracleExtension](modules.md#setuporacleextension)
- [setupSudoExtension](modules.md#setupsudoextension)
- [toSdkDec](modules.md#tosdkdec)
- [toSdkInt](modules.md#tosdkint)
- [useFaucet](modules.md#usefaucet)

## Type Aliases

### NibiruExtensions

Ƭ **NibiruExtensions**: `QueryClient` & [`SudoExtension`](interfaces/SudoExtension.md) & [`InflationExtension`](interfaces/InflationExtension.md) & [`OracleExtension`](interfaces/OracleExtension.md) & [`EpochsExtension`](interfaces/EpochsExtension.md) & `DistributionExtension` & `GovExtension` & `StakingExtension` & `IbcExtension` & `WasmExtension` & `AuthExtension`

#### Defined in

[query/query.ts:29](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/query/query.ts#L29)

## Variables

### INT_MULT

• `Const` **INT_MULT**: `1000000`

#### Defined in

[chain/parse.ts:2](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/chain/parse.ts#L2)

---

### Localnet

• `Const` **Localnet**: [`Chain`](interfaces/Chain.md)

#### Defined in

[chain/chain.ts:82](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/chain/chain.ts#L82)

---

### nibiruRegistryTypes

• `Const` **nibiruRegistryTypes**: `ReadonlyArray`<[`string`, `GeneratedType`]\>

#### Defined in

[tx/signingClient.ts:31](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/tx/signingClient.ts#L31)

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

[chain/chain.ts:98](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/chain/chain.ts#L98)

---

### IncentivizedTestnet

▸ **IncentivizedTestnet**(`chainNumber`): [`CustomChain`](classes/CustomChain.md)

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `chainNumber` | `number` |

#### Returns

[`CustomChain`](classes/CustomChain.md)

#### Defined in

[chain/chain.ts:91](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/chain/chain.ts#L91)

---

### assert

▸ **assert**(`condition`, `message?`): `string` \| `true`

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `condition` | `boolean` |
| `message?`  | `string`  |

#### Returns

`string` \| `true`

#### Defined in

[chain/types.ts:12](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/chain/types.ts#L12)

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

[chain/chain.ts:129](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/chain/chain.ts#L129)

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

[chain/useFaucet.ts:59](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/chain/useFaucet.ts#L59)

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

[chain/parse.ts:94](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/chain/parse.ts#L94)

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

[chain/parse.ts:145](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/chain/parse.ts#L145)

---

### getRegistry

▸ **getRegistry**(): `Registry`

#### Returns

`Registry`

#### Defined in

[tx/signer.ts:19](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/tx/signer.ts#L19)

---

### go

▸ **go**<`T`\>(`promise`): `Promise`<{ `err`: `undefined` = undefined; `res`: `Awaited`<`T`\> } \| { `err`: `string` ; `res`: `undefined` = undefined }\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type            |
| :-------- | :-------------- |
| `promise` | `Promise`<`T`\> |

#### Returns

`Promise`<{ `err`: `undefined` = undefined; `res`: `Awaited`<`T`\> } \| { `err`: `string` ; `res`: `undefined` = undefined }\>

#### Defined in

[chain/types.ts:4](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/chain/types.ts#L4)

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

[chain/chain.ts:119](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/chain/chain.ts#L119)

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

[chain/types.ts:26](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/chain/types.ts#L26)

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

[tx/signer.ts:42](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/tx/signer.ts#L42)

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

[tx/signer.ts:29](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/tx/signer.ts#L29)

---

### queryChainIdWithRest

▸ **queryChainIdWithRest**(`chain`): `Promise`<(`undefined` \| `string`)[]\>

#### Parameters

| Name    | Type                           |
| :------ | :----------------------------- |
| `chain` | [`Chain`](interfaces/Chain.md) |

#### Returns

`Promise`<(`undefined` \| `string`)[]\>

#### Defined in

[chain/chain.ts:105](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/chain/chain.ts#L105)

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

[query/epochs.ts:19](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/query/epochs.ts#L19)

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

[query/inflation.ts:29](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/query/inflation.ts#L29)

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

[query/oracle.ts:91](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/query/oracle.ts#L91)

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

[query/sudo.ts:14](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/query/sudo.ts#L14)

---

### toSdkDec

▸ **toSdkDec**(`dec`): `string`

toSdkDec converts the input float string to an sdk.Dec.
The maximum number of decimal places for an sdk.Dec is 18.
NOTE: An error is console'd if more decimal digits are provided than the
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

[chain/parse.ts:16](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/chain/parse.ts#L16)

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

[chain/parse.ts:143](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/chain/parse.ts#L143)

---

### useFaucet

▸ **useFaucet**(`«destructured»`): `Promise`<`Response` \| `undefined`\>

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

`Promise`<`Response` \| `undefined`\>

#### Defined in

[chain/useFaucet.ts:7](https://github.com/NibiruChain/ts-sdk/blob/6ab8616/packages/nibijs/src/chain/useFaucet.ts#L7)
