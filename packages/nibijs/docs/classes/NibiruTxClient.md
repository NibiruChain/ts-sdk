[NibiJS Documentation - v0.21.44](../intro.md) / [Exports](../modules.md) / NibiruTxClient

# Class: NibiruTxClient

## Hierarchy

- `SigningStargateClient`

  ↳ **`NibiruTxClient`**

## Table of contents

### Constructors

- [constructor](NibiruTxClient.md#constructor)

### Properties

- [nibiruExtensions](NibiruTxClient.md#nibiruextensions)
- [wasmClient](NibiruTxClient.md#wasmclient)

### Methods

- [waitForHeight](NibiruTxClient.md#waitforheight)
- [waitForNextBlock](NibiruTxClient.md#waitfornextblock)
- [connectWithSigner](NibiruTxClient.md#connectwithsigner)

## Constructors

### constructor

• `Protected` **new NibiruTxClient**(`tmClient`, `signer`, `options`, `wasm`)

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

[tx/txClient.ts:41](https://github.com/NibiruChain/ts-sdk/blob/e2ebd40/packages/nibijs/src/tx/txClient.ts#L41)

## Properties

### nibiruExtensions

• `Readonly` **nibiruExtensions**: [`NibiruExtensions`](../modules.md#nibiruextensions)

#### Defined in

[tx/txClient.ts:38](https://github.com/NibiruChain/ts-sdk/blob/e2ebd40/packages/nibijs/src/tx/txClient.ts#L38)

---

### wasmClient

• `Readonly` **wasmClient**: `SigningCosmWasmClient`

#### Defined in

[tx/txClient.ts:39](https://github.com/NibiruChain/ts-sdk/blob/e2ebd40/packages/nibijs/src/tx/txClient.ts#L39)

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

[tx/txClient.ts:94](https://github.com/NibiruChain/ts-sdk/blob/e2ebd40/packages/nibijs/src/tx/txClient.ts#L94)

---

### waitForNextBlock

▸ **waitForNextBlock**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[tx/txClient.ts:102](https://github.com/NibiruChain/ts-sdk/blob/e2ebd40/packages/nibijs/src/tx/txClient.ts#L102)

---

### connectWithSigner

▸ `Static` **connectWithSigner**(`endpoint`, `signer`, `options?`, `wasmOptions?`): `Promise`<[`NibiruTxClient`](NibiruTxClient.md)\>

#### Parameters

| Name          | Type                           |
| :------------ | :----------------------------- |
| `endpoint`    | `string`                       |
| `signer`      | `OfflineSigner`                |
| `options`     | `SigningStargateClientOptions` |
| `wasmOptions` | `SigningCosmWasmClientOptions` |

#### Returns

`Promise`<[`NibiruTxClient`](NibiruTxClient.md)\>

#### Overrides

SigningStargateClient.connectWithSigner

#### Defined in

[tx/txClient.ts:66](https://github.com/NibiruChain/ts-sdk/blob/e2ebd40/packages/nibijs/src/tx/txClient.ts#L66)
