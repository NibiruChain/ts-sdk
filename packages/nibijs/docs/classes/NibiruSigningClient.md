[NibiJS Documentation - v0.21.38](../intro.md) / [Exports](../modules.md) / NibiruSigningClient

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

| Name       | Type                           |
| :--------- | :----------------------------- |
| `tmClient` | `Tendermint37Client`           |
| `signer`   | `OfflineSigner`                |
| `options`  | `SigningStargateClientOptions` |
| `wasm`     | `SigningCosmWasmClient`        |

#### Overrides

SigningStargateClient.constructor

#### Defined in

[tx/signingClient.ts:41](https://github.com/NibiruChain/ts-sdk/blob/7a9e071/packages/nibijs/src/tx/signingClient.ts#L41)

## Properties

### nibiruExtensions

• `Readonly` **nibiruExtensions**: [`NibiruExtensions`](../modules.md#nibiruextensions)

#### Defined in

[tx/signingClient.ts:38](https://github.com/NibiruChain/ts-sdk/blob/7a9e071/packages/nibijs/src/tx/signingClient.ts#L38)

---

### wasmClient

• `Readonly` **wasmClient**: `SigningCosmWasmClient`

#### Defined in

[tx/signingClient.ts:39](https://github.com/NibiruChain/ts-sdk/blob/7a9e071/packages/nibijs/src/tx/signingClient.ts#L39)

## Methods

### waitForHeight

▸ **waitForHeight**(`height`): `Promise`<`void`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `height` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[tx/signingClient.ts:94](https://github.com/NibiruChain/ts-sdk/blob/7a9e071/packages/nibijs/src/tx/signingClient.ts#L94)

---

### waitForNextBlock

▸ **waitForNextBlock**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[tx/signingClient.ts:102](https://github.com/NibiruChain/ts-sdk/blob/7a9e071/packages/nibijs/src/tx/signingClient.ts#L102)

---

### connectWithSigner

▸ `Static` **connectWithSigner**(`endpoint`, `signer`, `options?`, `wasmOptions?`): `Promise`<[`NibiruSigningClient`](NibiruSigningClient.md)\>

#### Parameters

| Name          | Type                           |
| :------------ | :----------------------------- |
| `endpoint`    | `string`                       |
| `signer`      | `OfflineSigner`                |
| `options`     | `SigningStargateClientOptions` |
| `wasmOptions` | `SigningCosmWasmClientOptions` |

#### Returns

`Promise`<[`NibiruSigningClient`](NibiruSigningClient.md)\>

#### Overrides

SigningStargateClient.connectWithSigner

#### Defined in

[tx/signingClient.ts:66](https://github.com/NibiruChain/ts-sdk/blob/7a9e071/packages/nibijs/src/tx/signingClient.ts#L66)
