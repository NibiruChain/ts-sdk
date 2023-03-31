[NibiJS Documentation - v0.19.5](../intro.md) / [Exports](../modules.md) / NibiruSigningClient

# Class: NibiruSigningClient

## Hierarchy

- `SigningStargateClient`

  ↳ **`NibiruSigningClient`**

## Table of contents

### Constructors

- [constructor](NibiruSigningClient.md#constructor)

### Properties

- [nibiruExtensions](NibiruSigningClient.md#nibiruextensions)

### Methods

- [waitForHeight](NibiruSigningClient.md#waitforheight)
- [waitForNextBlock](NibiruSigningClient.md#waitfornextblock)
- [connectWithSigner](NibiruSigningClient.md#connectwithsigner)

## Constructors

### constructor

• `Protected` **new NibiruSigningClient**(`tmClient`, `signer`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tmClient` | `Tendermint34Client` |
| `signer` | `OfflineSigner` |
| `options` | `SigningStargateClientOptions` |

#### Overrides

SigningStargateClient.constructor

#### Defined in

[tx/signingClient.ts:46](https://github.com/NibiruChain/ts-sdk/blob/4e080fd/packages/nibijs/src/tx/signingClient.ts#L46)

## Properties

### nibiruExtensions

• `Readonly` **nibiruExtensions**: [`NibiruExtensions`](../modules.md#nibiruextensions)

#### Defined in

[tx/signingClient.ts:30](https://github.com/NibiruChain/ts-sdk/blob/4e080fd/packages/nibijs/src/tx/signingClient.ts#L30)

## Methods

### waitForHeight

▸ **waitForHeight**(`height`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[tx/signingClient.ts:66](https://github.com/NibiruChain/ts-sdk/blob/4e080fd/packages/nibijs/src/tx/signingClient.ts#L66)

___

### waitForNextBlock

▸ **waitForNextBlock**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[tx/signingClient.ts:74](https://github.com/NibiruChain/ts-sdk/blob/4e080fd/packages/nibijs/src/tx/signingClient.ts#L74)

___

### connectWithSigner

▸ `Static` **connectWithSigner**(`endpoint`, `signer`, `options?`): `Promise`<[`NibiruSigningClient`](NibiruSigningClient.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `signer` | `OfflineSigner` |
| `options` | `SigningStargateClientOptions` |

#### Returns

`Promise`<[`NibiruSigningClient`](NibiruSigningClient.md)\>

#### Overrides

SigningStargateClient.connectWithSigner

#### Defined in

[tx/signingClient.ts:32](https://github.com/NibiruChain/ts-sdk/blob/4e080fd/packages/nibijs/src/tx/signingClient.ts#L32)
