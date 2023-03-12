[NibiJS Documentation - v0.19.2](../intro.md) / [Exports](../modules.md) / TxCmd

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

• **new TxCmd**(`client`, `directSigner`, `chain`, `gasPrice?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `SigningStargateClient` |
| `directSigner` | `OfflineDirectSigner` |
| `chain` | [`Chain`](../interfaces/Chain.md) |
| `gasPrice?` | `Coin` |

#### Defined in

[tx/tx.ts:49](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/tx/tx.ts#L49)

## Properties

### chain

• **chain**: [`Chain`](../interfaces/Chain.md)

#### Defined in

[tx/tx.ts:41](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/tx/tx.ts#L41)

___

### client

• **client**: `SigningStargateClient`

#### Defined in

[tx/tx.ts:39](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/tx/tx.ts#L39)

___

### directSigner

• **directSigner**: `OfflineDirectSigner`

#### Defined in

[tx/tx.ts:45](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/tx/tx.ts#L45)

___

### fee

• `Optional` **fee**: `StdFee`

#### Defined in

[tx/tx.ts:43](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/tx/tx.ts#L43)

___

### gasPrice

• **gasPrice**: `string`

#### Defined in

[tx/tx.ts:47](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/tx/tx.ts#L47)

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

[tx/tx.ts:108](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/tx/tx.ts#L108)

___

### getAccounts

▸ **getAccounts**(): `Promise`<readonly `AccountData`[]\>

#### Returns

`Promise`<readonly `AccountData`[]\>

#### Defined in

[tx/tx.ts:137](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/tx/tx.ts#L137)

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

[tx/tx.ts:99](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/tx/tx.ts#L99)

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

[tx/tx.ts:131](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/tx/tx.ts#L131)

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

[tx/tx.ts:80](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/tx/tx.ts#L80)

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

[tx/tx.ts:75](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/tx/tx.ts#L75)

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

[tx/tx.ts:62](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/tx/tx.ts#L62)
