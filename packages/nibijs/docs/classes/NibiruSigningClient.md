[NibiJS Documentation - v0.19.11](../intro.md) / [Exports](../modules.md) / NibiruSigningClient

# Class: NibiruSigningClient

## Hierarchy

- `SigningStargateClient`

  ↳ **`NibiruSigningClient`**

## Table of contents

### Constructors

- [constructor](NibiruSigningClient.md#constructor)

### Properties

- [nibiruExtensions](NibiruSigningClient.md#nibiruextensions)
- [wasmClient](NibiruSigningClient.md#wasmclient)

### Methods

- [waitForHeight](NibiruSigningClient.md#waitforheight)
- [waitForNextBlock](NibiruSigningClient.md#waitfornextblock)
- [connectWithSigner](NibiruSigningClient.md#connectwithsigner)

## Constructors

### constructor

• `Protected` **new NibiruSigningClient**(`tmClient`, `signer`, `options`, `wasm`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tmClient` | `Tendermint34Client` |
| `signer` | `OfflineSigner` |
| `options` | `SigningStargateClientOptions` |
| `wasm` | `SigningCosmWasmClient` |

#### Overrides

SigningStargateClient.constructor

#### Defined in

[tx/signingClient.ts:64](https://github.com/NibiruChain/ts-sdk/blob/0c8ff7c/packages/nibijs/src/tx/signingClient.ts#L64)

## Properties

### nibiruExtensions

• `Readonly` **nibiruExtensions**: [`NibiruExtensions`](../modules.md#nibiruextensions)

#### Defined in

[tx/signingClient.ts:37](https://github.com/NibiruChain/ts-sdk/blob/0c8ff7c/packages/nibijs/src/tx/signingClient.ts#L37)

___

### wasmClient

• `Readonly` **wasmClient**: `SigningCosmWasmClient`

#### Defined in

[tx/signingClient.ts:38](https://github.com/NibiruChain/ts-sdk/blob/0c8ff7c/packages/nibijs/src/tx/signingClient.ts#L38)

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

[tx/signingClient.ts:89](https://github.com/NibiruChain/ts-sdk/blob/0c8ff7c/packages/nibijs/src/tx/signingClient.ts#L89)

___

### waitForNextBlock

▸ **waitForNextBlock**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[tx/signingClient.ts:97](https://github.com/NibiruChain/ts-sdk/blob/0c8ff7c/packages/nibijs/src/tx/signingClient.ts#L97)

___

### connectWithSigner

▸ `Static` **connectWithSigner**(`endpoint`, `signer`, `options?`, `wasmOptions?`): `Promise`<[`NibiruSigningClient`](NibiruSigningClient.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `signer` | `OfflineSigner` |
| `options` | `SigningStargateClientOptions` |
| `wasmOptions` | `SigningCosmWasmClientOptions` |

#### Returns

`Promise`<[`NibiruSigningClient`](NibiruSigningClient.md)\>

#### Overrides

SigningStargateClient.connectWithSigner

#### Defined in

[tx/signingClient.ts:40](https://github.com/NibiruChain/ts-sdk/blob/0c8ff7c/packages/nibijs/src/tx/signingClient.ts#L40)
