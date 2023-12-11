[NibiJS Documentation - v0.21.42](intro.md) / Exports

# NibiJS Documentation - v0.21.42

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
- [Result](classes/Result.md)
- [SpotMsgFactory](classes/SpotMsgFactory.md)
- [StableSwap](classes/StableSwap.md)

### Interfaces

- [ABCIEvent](interfaces/ABCIEvent.md)
- [Chain](interfaces/Chain.md)
- [ChainIdParts](interfaces/ChainIdParts.md)
- [CoinMap](interfaces/CoinMap.md)
- [EpochsExtension](interfaces/EpochsExtension.md)
- [EventAttribute](interfaces/EventAttribute.md)
- [EventMap](interfaces/EventMap.md)
- [EventMapAttribute](interfaces/EventMapAttribute.md)
- [InflationExtension](interfaces/InflationExtension.md)
- [MsgAddMarginEncodeObject](interfaces/MsgAddMarginEncodeObject.md)
- [MsgClosePositionEncodeObject](interfaces/MsgClosePositionEncodeObject.md)
- [MsgCreatePoolEncodeObject](interfaces/MsgCreatePoolEncodeObject.md)
- [MsgDonateToEcosystemFundEncodeObject](interfaces/MsgDonateToEcosystemFundEncodeObject.md)
- [MsgExitPoolEncodeObject](interfaces/MsgExitPoolEncodeObject.md)
- [MsgJoinPoolEncodeObject](interfaces/MsgJoinPoolEncodeObject.md)
- [MsgMultiLiquidateEncodeObject](interfaces/MsgMultiLiquidateEncodeObject.md)
- [MsgOpenPositionEncodeObject](interfaces/MsgOpenPositionEncodeObject.md)
- [MsgPartialCloseEncodeObject](interfaces/MsgPartialCloseEncodeObject.md)
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

- [ERR](modules.md#err)
- [INT_MULT](modules.md#int_mult)
- [Localnet](modules.md#localnet)
- [Msg](modules.md#msg)
- [PERP_MSG_TYPE_URLS](modules.md#perp_msg_type_urls)
- [SPOT_MSG_TYPE_URLS](modules.md#spot_msg_type_urls)
- [TEST_ADDRESS](modules.md#test_address)
- [TEST_CHAIN](modules.md#test_chain)
- [TEST_MNEMONIC](modules.md#test_mnemonic)
- [nibiruRegistryTypes](modules.md#nibiruregistrytypes)
- [perpTypes](modules.md#perptypes)
- [spotTypes](modules.md#spottypes)

### Functions

- [Devnet](modules.md#devnet)
- [IncentivizedTestnet](modules.md#incentivizedtestnet)
- [Testnet](modules.md#testnet)
- [assert](modules.md#assert)
- [assertExpectedError](modules.md#assertexpectederror)
- [assertHasEventType](modules.md#asserthaseventtype)
- [assertHasMsgType](modules.md#asserthasmsgtype)
- [assertValidBlock](modules.md#assertvalidblock)
- [assertValidBlockFromJsonRpc](modules.md#assertvalidblockfromjsonrpc)
- [bytesToHex](modules.md#bytestohex)
- [chainToParts](modules.md#chaintoparts)
- [eventToMap](modules.md#eventtomap)
- [faucetUrlFromChain](modules.md#fauceturlfromchain)
- [findEvent](modules.md#findevent)
- [fromSdkDec](modules.md#fromsdkdec)
- [fromSdkInt](modules.md#fromsdkint)
- [getRegistry](modules.md#getregistry)
- [hexToBytes](modules.md#hextobytes)
- [isMsgAddMarginEncodeObject](modules.md#ismsgaddmarginencodeobject)
- [isMsgClosePositionEncodeObject](modules.md#ismsgclosepositionencodeobject)
- [isMsgCreatePoolEncodeObject](modules.md#ismsgcreatepoolencodeobject)
- [isMsgDonateToEcosystemFundEncodeObject](modules.md#ismsgdonatetoecosystemfundencodeobject)
- [isMsgExitPoolEncodeObject](modules.md#ismsgexitpoolencodeobject)
- [isMsgJoinPoolEncodeObject](modules.md#ismsgjoinpoolencodeobject)
- [isMsgMultiLiquidateEncodeObject](modules.md#ismsgmultiliquidateencodeobject)
- [isMsgOpenPositionEncodeObject](modules.md#ismsgopenpositionencodeobject)
- [isMsgPartialCloseEncodeObject](modules.md#ismsgpartialcloseencodeobject)
- [isMsgRemoveMarginEncodeObject](modules.md#ismsgremovemarginencodeobject)
- [isMsgSwapAssetsEncodeObject](modules.md#ismsgswapassetsencodeobject)
- [isRestEndptLive](modules.md#isrestendptlive)
- [newCoinMapFromCoins](modules.md#newcoinmapfromcoins)
- [newRandomWallet](modules.md#newrandomwallet)
- [newSignerFromMnemonic](modules.md#newsignerfrommnemonic)
- [parseError](modules.md#parseerror)
- [parseEventLogs](modules.md#parseeventlogs)
- [queryChainIdWithRest](modules.md#querychainidwithrest)
- [setupEpochsExtension](modules.md#setupepochsextension)
- [setupInflationExtension](modules.md#setupinflationextension)
- [setupOracleExtension](modules.md#setuporacleextension)
- [setupPerpExtension](modules.md#setupperpextension)
- [setupSpotExtension](modules.md#setupspotextension)
- [setupSudoExtension](modules.md#setupsudoextension)
- [toSdkDec](modules.md#tosdkdec)
- [toSdkInt](modules.md#tosdkint)
- [transformPool](modules.md#transformpool)
- [transformPoolParams](modules.md#transformpoolparams)
- [useFaucet](modules.md#usefaucet)

## Type Aliases

### NibiruExtensions

Ƭ **NibiruExtensions**: `StargateQueryClient` & [`SpotExtension`](interfaces/SpotExtension.md) & [`PerpExtension`](interfaces/PerpExtension.md) & [`SudoExtension`](interfaces/SudoExtension.md) & [`InflationExtension`](interfaces/InflationExtension.md) & [`OracleExtension`](interfaces/OracleExtension.md) & [`EpochsExtension`](interfaces/EpochsExtension.md) & `DistributionExtension` & `GovExtension` & `StakingExtension` & `IbcExtension` & `WasmExtension` & `AuthExtension`

#### Defined in

[query/query.ts:32](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/query/query.ts#L32)

## Variables

### ERR

• `Const` **ERR**: `Object`

#### Type declaration

| Name          | Type     |
| :------------ | :------- |
| `collections` | `string` |
| `noPrices`    | `string` |
| `sequence`    | `string` |

#### Defined in

[testutil.ts:19](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/testutil.ts#L19)

---

### INT_MULT

• `Const` **INT_MULT**: `1000000`

#### Defined in

[chain/parse.ts:2](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/chain/parse.ts#L2)

---

### Localnet

• `Const` **Localnet**: [`Chain`](interfaces/Chain.md)

Localnet: "Chain" configuration for a local Nibiru network. A local
environment is no different from a real one, except that it has a single
validator running on your host machine. Localnet is primarily used as a
controllable, isolated development environment for testing purposes.

#### Defined in

[chain/chain.ts:85](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/chain/chain.ts#L85)

---

### Msg

• `Const` **Msg**: [`MsgFactory`](classes/MsgFactory.md)

#### Defined in

[msg/index.ts:9](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/msg/index.ts#L9)

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
| `MsgPartialClose`          | `string` |
| `MsgRemoveMargin`          | `string` |

#### Defined in

[msg/perp.ts:16](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/msg/perp.ts#L16)

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

[msg/spot.ts:12](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/msg/spot.ts#L12)

---

### TEST_ADDRESS

• `Const` **TEST_ADDRESS**: `string`

Address for the wallet of the default validator on localnet"

#### Defined in

[testutil.ts:16](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/testutil.ts#L16)

---

### TEST_CHAIN

• `Const` **TEST_CHAIN**: [`Chain`](interfaces/Chain.md) = `Localnet`

TEST_CHAIN: Alias for Localnet.

**`See`**

Localnet

#### Defined in

[testutil.ts:8](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/testutil.ts#L8)

---

### TEST_MNEMONIC

• `Const` **TEST_MNEMONIC**: `string`

Mnemonic for the wallet of the default validator on localnet"

#### Defined in

[testutil.ts:11](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/testutil.ts#L11)

---

### nibiruRegistryTypes

• `Const` **nibiruRegistryTypes**: `ReadonlyArray`<[`string`, `GeneratedType`]\>

#### Defined in

[tx/signingClient.ts:31](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/tx/signingClient.ts#L31)

---

### perpTypes

• `Const` **perpTypes**: `ReadonlyArray`<[`string`, `GeneratedType`]\>

#### Defined in

[msg/perp.ts:26](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/msg/perp.ts#L26)

---

### spotTypes

• `Const` **spotTypes**: `ReadonlyArray`<[`string`, `GeneratedType`]\>

#### Defined in

[msg/spot.ts:19](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/msg/spot.ts#L19)

## Functions

### Devnet

▸ **Devnet**(`chainNumber`): [`CustomChain`](classes/CustomChain.md)

Devnet: "Chain" configuration for a Nibiru "devnet". These networks
are more ephemeral than "Testnet" and used internally by the core Nibiru
dev team to live-test new features before official public release.

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `chainNumber` | `number` |

#### Returns

[`CustomChain`](classes/CustomChain.md)

#### Defined in

[chain/chain.ts:124](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/chain/chain.ts#L124)

---

### IncentivizedTestnet

▸ **IncentivizedTestnet**(`chainNumber?`): [`CustomChain`](classes/CustomChain.md)

#### Parameters

| Name          | Type     | Default value |
| :------------ | :------- | :------------ |
| `chainNumber` | `number` | `1`           |

#### Returns

[`CustomChain`](classes/CustomChain.md)

**`Deprecated`**

Incentivized testnet is no longer active. This variable exists
for backwards compatibility, but "Testnet" should be used instead.

**`See`**

Testnet - Permanent Nibiru public test network.

#### Defined in

[chain/chain.ts:106](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/chain/chain.ts#L106)

---

### Testnet

▸ **Testnet**(`chainNumber?`): [`CustomChain`](classes/CustomChain.md)

Testnet: "Chain" configuration for a Nibiru testnet. These are public
networks that are upgraded in advance of Nibiru's mainnet network as a
beta-testing environments.

For an updated list of active networks, see:
TODO: Add networks link

- <a href="https://nibiru.fi/docs/">Networks | Nibiru Docs (Recommended)</a>
- <a href="https://github.com/NibiruChain/Networks/tree/main">NibiruChain/Networks (GitHub)</a>

By default, the "Testnet" function returns the permanent testnet if no
arguments are passed.

#### Parameters

| Name          | Type     | Default value |
| :------------ | :------- | :------------ |
| `chainNumber` | `number` | `1`           |

#### Returns

[`CustomChain`](classes/CustomChain.md)

#### Defined in

[chain/chain.ts:106](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/chain/chain.ts#L106)

---

### assert

▸ **assert**(`condition`, `message?`): `string` \| `boolean`

Asserts that a given condition is true. If the condition evaluates to false,
an "AssertionError" is thrown with an optional custom message.

#### Parameters

| Name        | Type      | Description                                                         |
| :---------- | :-------- | :------------------------------------------------------------------ |
| `condition` | `boolean` | The condition to test.                                              |
| `message?`  | `string`  | Optional. A custom error message to display if the assertion fails. |

#### Returns

`string` \| `boolean`

- Returns true if the assertion is successful.

#### Defined in

[chain/types.ts:14](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/chain/types.ts#L14)

---

### assertExpectedError

▸ **assertExpectedError**(`err`, `okErrors`): `void`

Asserts that the given error matches one of the expected error messages.

This function parses the error object to extract its message and checks if
it includes any of the specified acceptable error messages. It sets a test
expectation that the error message is contained within the list of acceptable errors.

#### Parameters

| Name       | Type       | Description                                   |
| :--------- | :--------- | :-------------------------------------------- |
| `err`      | `unknown`  | The error object to be tested.                |
| `okErrors` | `string`[] | An array of acceptable error message strings. |

#### Returns

`void`

#### Defined in

[testutil.ts:100](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/testutil.ts#L100)

---

### assertHasEventType

▸ **assertHasEventType**(`eventType`, `events`): `void`

Asserts that an array of ABCIEvent objects contains an event with a specified
type. This runs a test expectation that the specified `eventType` is
contained in `events`.

#### Parameters

| Name        | Type                                     | Description                                        |
| :---------- | :--------------------------------------- | :------------------------------------------------- |
| `eventType` | `string`                                 | The event type to look for in the array of events. |
| `events`    | [`ABCIEvent`](interfaces/ABCIEvent.md)[] | An array of ABCIEvent objects to be tested.        |

#### Returns

`void`

#### Defined in

[testutil.ts:82](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/testutil.ts#L82)

---

### assertHasMsgType

▸ **assertHasMsgType**(`msgType`, `events`): `void`

Asserts that a list of ABCIEvents contains a specific type of `TxMsg`. This
`TxMsg` type is read from a "message" event's "action" attribute.

#### Parameters

| Name      | Type                                     | Description                                         |
| :-------- | :--------------------------------------- | :-------------------------------------------------- |
| `msgType` | `string`                                 | TxMsg type to look for within the event attributes. |
| `events`  | [`ABCIEvent`](interfaces/ABCIEvent.md)[] | set of events over which we're searching.           |

#### Returns

`void`

#### Defined in

[testutil.ts:63](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/testutil.ts#L63)

---

### assertValidBlock

▸ **assertValidBlock**(`block`, `chain`): `void`

assertValidBlock: Performs runtime type validation on a CometBFT "Block".

#### Parameters

| Name    | Type                           |
| :------ | :----------------------------- |
| `block` | `Block`                        |
| `chain` | [`Chain`](interfaces/Chain.md) |

#### Returns

`void`

#### Defined in

[testutil.ts:49](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/testutil.ts#L49)

---

### assertValidBlockFromJsonRpc

▸ **assertValidBlockFromJsonRpc**(`blockJson`): `void`

Validates that block queried via the JSON RPC client has the expected fields.

#### Parameters

| Name        | Type  |
| :---------- | :---- |
| `blockJson` | `any` |

#### Returns

`void`

#### Defined in

[testutil.ts:26](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/testutil.ts#L26)

---

### bytesToHex

▸ **bytesToHex**(`bz`): `string`

Converts an 8-bit byte array (Uint8Array) into a hexadecimal (hex) string.

Each 8-bit byte ranges from 0 to 255 and is represented by a 2-tuple of
hex digits (0-9, A-F). Values from 0-15 (0x0 to 0xF)
are indeed single-digit in hex, but in the context of hex strings, these
values are padded with a leading zero to maintain a consistent two-character
representation for each byte.

Thus, a byte value of 9 is represented as "09".

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `bz` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[hash.ts:14](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/hash.ts#L14)

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

[chain/chain.ts:158](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/chain/chain.ts#L158)

---

### eventToMap

▸ **eventToMap**(`event`): [`EventMap`](interfaces/EventMap.md)

eventToMap: Converts an ABCIEvent into an EventMap.

#### Parameters

| Name    | Type                                   |
| :------ | :------------------------------------- |
| `event` | [`ABCIEvent`](interfaces/ABCIEvent.md) |

#### Returns

[`EventMap`](interfaces/EventMap.md)

#### Defined in

[tx/event.ts:44](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/tx/event.ts#L44)

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

[chain/useFaucet.ts:59](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/chain/useFaucet.ts#L59)

---

### findEvent

▸ **findEvent**(`events`, `eventType`): `undefined` \| [`ABCIEvent`](interfaces/ABCIEvent.md)

findEvent: Filter 'events' by type. This is useful for checking if
events of known type are present.

#### Parameters

| Name        | Type                                     |
| :---------- | :--------------------------------------- |
| `events`    | [`ABCIEvent`](interfaces/ABCIEvent.md)[] |
| `eventType` | `string`                                 |

#### Returns

`undefined` \| [`ABCIEvent`](interfaces/ABCIEvent.md)

#### Defined in

[tx/event.ts:54](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/tx/event.ts#L54)

---

### fromSdkDec

▸ **fromSdkDec**(`sdkDec`): `number`

fromSdkDec: Converts a string representation of the "sdk.Dec", a shorthand
name for the "cosmossdk.io/math".LegacyDec type in Golang. An Sdk Dec is a
decimal/float implemented by "big.Int" with 18 decimals of precision
an abstraction for 18 decimals of precision big.Int.

Sdk Dec is a custom protobuf type encoded as a string.
NOTE: The string for the raw protobuf value is not the human-readable one
that can include decimal points and negative signs. It's actually a string
holding the underlying "big.Int" value from which the concrete Dec type is
created.

This is why we implement the functions `fromSdkDec` and `toSdkDec`. When
'TxMessages' include SdkDec types, they need the protobuf string form, not
the human-readbale Dec.

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `sdkDec` | `string` |

#### Returns

`number`

**`See`**

- TxMessage // from nibijs/src/tx
- toSdkDec

#### Defined in

[chain/parse.ts:113](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/chain/parse.ts#L113)

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

[chain/parse.ts:166](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/chain/parse.ts#L166)

---

### getRegistry

▸ **getRegistry**(): `Registry`

#### Returns

`Registry`

#### Defined in

[tx/signer.ts:19](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/tx/signer.ts#L19)

---

### hexToBytes

▸ **hexToBytes**(`hex`): [`Result`](classes/Result.md)<`Uint8Array`\>

Converts a hexadecimal-encoded string into a Uint8Array.

The hexadecimal string must have an even length, as each byte is represented
by two hex digits. Each of hex digit 2-tuples (ranging from 00 to FF) is
converted to a single byte ranging from 0 to 255.

#### Parameters

| Name  | Type     | Description                                                                                                                                                                                  |
| :---- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hex` | `string` | The hexadecimal string to be decoded. If the string has an odd length or contains non-hexadecimal characters, the function returns an error wrapped in a Result object rather than throwing. |

#### Returns

[`Result`](classes/Result.md)<`Uint8Array`\>

The decoded Uint8Array if successful or an
error result if the input is invalid.

**`Example`**

```ts
// Successful decoding
const result = hexToBytes("7A919F2CC9A51B139444F7D8E84A46EE")
if (result.isOk()) {
  console.log(result.ok) // Uint8Array of bytes
} else {
  console.error(result.err) // Error
}
```

**`Example`**

```ts
// Error handling for invalid hex string
const result = hexToBytes("7G919F")
if (result.isOk()) {
  console.log(result.ok)
} else {
  console.error(result.err.message)
  // "HexError: non-hex characters detected in hex: 7G919F"
}
```

#### Defined in

[hash.ts:51](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/hash.ts#L51)

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

[msg/perp.ts:41](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/msg/perp.ts#L41)

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

[msg/perp.ts:77](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/msg/perp.ts#L77)

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

[msg/spot.ts:31](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/msg/spot.ts#L31)

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

[msg/perp.ts:86](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/msg/perp.ts#L86)

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

[msg/spot.ts:47](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/msg/spot.ts#L47)

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

[msg/spot.ts:39](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/msg/spot.ts#L39)

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

[msg/perp.ts:59](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/msg/perp.ts#L59)

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

[msg/perp.ts:68](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/msg/perp.ts#L68)

---

### isMsgPartialCloseEncodeObject

▸ **isMsgPartialCloseEncodeObject**(`encodeObject`): `boolean`

#### Parameters

| Name           | Type           |
| :------------- | :------------- |
| `encodeObject` | `EncodeObject` |

#### Returns

`boolean`

#### Defined in

[msg/perp.ts:97](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/msg/perp.ts#L97)

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

[msg/perp.ts:50](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/msg/perp.ts#L50)

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

[msg/spot.ts:55](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/msg/spot.ts#L55)

---

### isRestEndptLive

▸ **isRestEndptLive**(`chain`): `Promise`<`boolean`\>

isRestEndptLive: Makes a request using the chain's REST endpoint to see if
the network and endpoint are active.

#### Parameters

| Name    | Type                           |
| :------ | :----------------------------- |
| `chain` | [`Chain`](interfaces/Chain.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[chain/chain.ts:148](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/chain/chain.ts#L148)

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

[chain/types.ts:32](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/chain/types.ts#L32)

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

[tx/signer.ts:45](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/tx/signer.ts#L45)

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

[tx/signer.ts:29](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/tx/signer.ts#L29)

---

### parseError

▸ **parseError**(`err`): `Error`

parseError: Guarantees runtime strong error typing since this isn't
guaranteed in JS by default. The error that comes out of a try-catch may not
have type "Error" since it's perfectly valid to throw strings or `undefined`.

#### Parameters

| Name  | Type      |
| :---- | :-------- |
| `err` | `unknown` |

#### Returns

`Error`

#### Defined in

[result.ts:77](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/result.ts#L77)

---

### parseEventLogs

▸ **parseEventLogs**(`txResp`): [`EventMap`](interfaces/EventMap.md)[]

parseEventLogs: Returns a mutable and typed version of the events payload
from a tx response.

#### Parameters

| Name     | Type                |
| :------- | :------------------ |
| `txResp` | `DeliverTxResponse` |

#### Returns

[`EventMap`](interfaces/EventMap.md)[]

**`Example`**

```ts
let txResp: DeliverTxResponse // assume this is given
const eventLogs = parseEventLogs(txResp)
```

#### Defined in

[tx/event.ts:67](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/tx/event.ts#L67)

---

### queryChainIdWithRest

▸ **queryChainIdWithRest**(`chain`): `Promise`<[`Result`](classes/Result.md)<`string`\>\>

#### Parameters

| Name    | Type                           |
| :------ | :----------------------------- |
| `chain` | [`Chain`](interfaces/Chain.md) |

#### Returns

`Promise`<[`Result`](classes/Result.md)<`string`\>\>

#### Defined in

[chain/chain.ts:131](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/chain/chain.ts#L131)

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

[query/epochs.ts:19](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/query/epochs.ts#L19)

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

[query/inflation.ts:29](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/query/inflation.ts#L29)

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

[query/oracle.ts:91](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/query/oracle.ts#L91)

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

[query/perp.ts:45](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/query/perp.ts#L45)

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

[query/spot.ts:102](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/query/spot.ts#L102)

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

[query/sudo.ts:14](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/query/sudo.ts#L14)

---

### toSdkDec

▸ **toSdkDec**(`dec`): `string`

toSdkDec converts the input float string to an sdk.Dec.
The maximum number of decimal places for an sdk.Dec is 18.
NOTE: An error is console loggedd if more decimal digits are
provided than the precision, 18.

ref: Reimplementation of cosmos-sdk/types/decimal.go

Valid inputs must come in the form:
(-) integer digits (.) fractional digits
Examples of acceptable input include:
-123.456
456.7890
345
-456789

CONTRACT - This function does not mutate the input str.

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `dec` | `string` |

#### Returns

`string`

- Protobuf string for an sdk.Dec, which is
  represented by its underlying "big.Int".

**`See`**

fromSdkDec - The inverse of this function that converts an
sdk.Dec protobuf string into a number.

**`Export`**

#### Defined in

[chain/parse.ts:30](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/chain/parse.ts#L30)

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

[chain/parse.ts:164](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/chain/parse.ts#L164)

---

### transformPool

▸ **transformPool**(`p?`): `undefined` \| `Pool`

#### Parameters

| Name | Type   |
| :--- | :----- |
| `p?` | `Pool` |

#### Returns

`undefined` \| `Pool`

#### Defined in

[query/spot.ts:49](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/query/spot.ts#L49)

---

### transformPoolParams

▸ **transformPoolParams**(`pp?`): `undefined` \| `PoolParams`

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `pp?` | `PoolParams` |

#### Returns

`undefined` \| `PoolParams`

#### Defined in

[query/spot.ts:41](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/query/spot.ts#L41)

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

[chain/useFaucet.ts:7](https://github.com/NibiruChain/ts-sdk/blob/77efda7/packages/nibijs/src/chain/useFaucet.ts#L7)
