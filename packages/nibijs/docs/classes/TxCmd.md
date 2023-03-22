[NibiJS Documentation - v0.19.4](../intro.md) / [Exports](../modules.md) / TxCmd

# Class: TxCmd

TxCmd is analagous to the 'nibid tx' command of the nibid CLI.

**`Export`**

## Table of contents

### Constructors

- [constructor](TxCmd.md#constructor)

### Properties

- [chain](TxCmd.md#chain)
- [client](TxCmd.md#client)
- [directSigner](TxCmd.md#directsigner)
- [fee](TxCmd.md#fee)
- [gasPrice](TxCmd.md#gasprice)
- [queryClient](TxCmd.md#queryclient)

### Methods

- [ensureFee](TxCmd.md#ensurefee)
- [getAccounts](TxCmd.md#getaccounts)
- [mustSignAndBroadcast](TxCmd.md#mustsignandbroadcast)
- [sendTokens](TxCmd.md#sendtokens)
- [signAndBroadcast](TxCmd.md#signandbroadcast)
- [simulate](TxCmd.md#simulate)
- [withFee](TxCmd.md#withfee)

## Constructors

### constructor

• **new TxCmd**(`client`, `directSigner`, `chain`, `queryClient`, `gasPrice?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `SigningStargateClient` |
| `directSigner` | `OfflineDirectSigner` |
| `chain` | [`Chain`](../interfaces/Chain.md) |
| `queryClient` | [`NibiruQueryClient`](NibiruQueryClient.md) |
| `gasPrice?` | `Coin` |

#### Defined in

[tx/tx.ts:46](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/tx/tx.ts#L46)

## Properties

### chain

• **chain**: [`Chain`](../interfaces/Chain.md)

#### Defined in

[tx/tx.ts:40](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/tx/tx.ts#L40)

___

### client

• **client**: `SigningStargateClient`

#### Defined in

[tx/tx.ts:39](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/tx/tx.ts#L39)

___

### directSigner

• **directSigner**: `OfflineDirectSigner`

#### Defined in

[tx/tx.ts:41](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/tx/tx.ts#L41)

___

### fee

• `Optional` **fee**: `StdFee`

#### Defined in

[tx/tx.ts:44](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/tx/tx.ts#L44)

___

### gasPrice

• **gasPrice**: `string`

#### Defined in

[tx/tx.ts:42](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/tx/tx.ts#L42)

___

### queryClient

• **queryClient**: [`NibiruQueryClient`](NibiruQueryClient.md)

#### Defined in

[tx/tx.ts:43](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/tx/tx.ts#L43)

## Methods

### ensureFee

▸ **ensureFee**(`...msgs`): `Promise`<`undefined` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msgs` | [`TxMessage`](../interfaces/TxMessage.md)[] |

#### Returns

`Promise`<`undefined` \| `Error`\>

#### Defined in

[tx/tx.ts:107](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/tx/tx.ts#L107)

___

### getAccounts

▸ **getAccounts**(): `Promise`<readonly `AccountData`[]\>

#### Returns

`Promise`<readonly `AccountData`[]\>

#### Defined in

[tx/tx.ts:136](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/tx/tx.ts#L136)

___

### mustSignAndBroadcast

▸ **mustSignAndBroadcast**(`...msgs`): `Promise`<`DeliverTxResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msgs` | [`TxMessage`](../interfaces/TxMessage.md)[] |

#### Returns

`Promise`<`DeliverTxResponse`\>

#### Defined in

[tx/tx.ts:98](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/tx/tx.ts#L98)

___

### sendTokens

▸ **sendTokens**(`to`, `coins`): `Promise`<`Error` \| `DeliverTxResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `coins` | `Coin`[] |

#### Returns

`Promise`<`Error` \| `DeliverTxResponse`\>

#### Defined in

[tx/tx.ts:130](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/tx/tx.ts#L130)

___

### signAndBroadcast

▸ **signAndBroadcast**(`...msgs`): `Promise`<`Error` \| `DeliverTxResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msgs` | [`TxMessage`](../interfaces/TxMessage.md)[] |

#### Returns

`Promise`<`Error` \| `DeliverTxResponse`\>

#### Defined in

[tx/tx.ts:79](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/tx/tx.ts#L79)

___

### simulate

▸ **simulate**(`...msgs`): `Promise`<`number`\>

Simulates a transaction containing the given list of tx messages, 'msgs' and
returns an estimate of how many gas units are required.

**`Async`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msgs` | [`TxMessage`](../interfaces/TxMessage.md)[] |

#### Returns

`Promise`<`number`\>

- expected gas cost (units of unibi)

#### Defined in

[tx/tx.ts:74](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/tx/tx.ts#L74)

___

### withFee

▸ **withFee**(`gasLimit`, `gasPrice?`): [`TxCmd`](TxCmd.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gasLimit` | `number` | `undefined` |
| `gasPrice` | `string` \| `GasPrice` | `"1unibi"` |

#### Returns

[`TxCmd`](TxCmd.md)

#### Defined in

[tx/tx.ts:61](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/tx/tx.ts#L61)
