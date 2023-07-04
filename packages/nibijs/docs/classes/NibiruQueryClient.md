[NibiJS Documentation - v0.21.1](../intro.md) / [Exports](../modules.md) / NibiruQueryClient

# Class: NibiruQueryClient

## Hierarchy

- `StargateClient`

  ↳ **`NibiruQueryClient`**

## Table of contents

### Constructors

- [constructor](NibiruQueryClient.md#constructor)

### Properties

- [nibiruExtensions](NibiruQueryClient.md#nibiruextensions)
- [wasmClient](NibiruQueryClient.md#wasmclient)

### Methods

- [waitForHeight](NibiruQueryClient.md#waitforheight)
- [waitForNextBlock](NibiruQueryClient.md#waitfornextblock)
- [connect](NibiruQueryClient.md#connect)

## Constructors

### constructor

• `Protected` **new NibiruQueryClient**(`tmClient`, `options`, `wasmClient`)

#### Parameters

| Name         | Type                    |
| :----------- | :---------------------- |
| `tmClient`   | `Tendermint34Client`    |
| `options`    | `StargateClientOptions` |
| `wasmClient` | `CosmWasmClient`        |

#### Overrides

StargateClient.constructor

#### Defined in

[query/query.ts:52](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/query/query.ts#L52)

## Properties

### nibiruExtensions

• `Readonly` **nibiruExtensions**: [`NibiruExtensions`](../modules.md#nibiruextensions)

#### Defined in

[query/query.ts:40](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/query/query.ts#L40)

---

### wasmClient

• `Readonly` **wasmClient**: `CosmWasmClient`

#### Defined in

[query/query.ts:41](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/query/query.ts#L41)

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

[query/query.ts:74](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/query/query.ts#L74)

---

### waitForNextBlock

▸ **waitForNextBlock**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[query/query.ts:82](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/query/query.ts#L82)

---

### connect

▸ `Static` **connect**(`endpoint`, `options?`): `Promise`<[`NibiruQueryClient`](NibiruQueryClient.md)\>

#### Parameters

| Name       | Type                    |
| :--------- | :---------------------- |
| `endpoint` | `string`                |
| `options`  | `StargateClientOptions` |

#### Returns

`Promise`<[`NibiruQueryClient`](NibiruQueryClient.md)\>

#### Overrides

StargateClient.connect

#### Defined in

[query/query.ts:43](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/query/query.ts#L43)
