[NibiJS Documentation - v0.21.42](../intro.md) / [Exports](../modules.md) / NibiruQueryClient

# Class: NibiruQueryClient

Querier for a Nibiru network.

**`Example`**

```ts
import { NibiruQueryClient, Tesnet } from "@nibiruchain/nibijs"
const chain = Testnet()
const querier = await NibiruQueryClient.connect(chain.endptTm)
```

## Hierarchy

- `StargateClient`

  ↳ **`NibiruQueryClient`**

## Table of contents

### Constructors

- [constructor](NibiruQueryClient.md#constructor)

### Properties

- [nibiruExtensions](NibiruQueryClient.md#nibiruextensions)
- [tm](NibiruQueryClient.md#tm)
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
| `tmClient`   | `Tendermint37Client`    |
| `options`    | `StargateClientOptions` |
| `wasmClient` | `CosmWasmClient`        |

#### Overrides

StargateClient.constructor

#### Defined in

[query/query.ts:63](https://github.com/NibiruChain/ts-sdk/blob/d2a4311/packages/nibijs/src/query/query.ts#L63)

## Properties

### nibiruExtensions

• `Readonly` **nibiruExtensions**: [`NibiruExtensions`](../modules.md#nibiruextensions)

#### Defined in

[query/query.ts:50](https://github.com/NibiruChain/ts-sdk/blob/d2a4311/packages/nibijs/src/query/query.ts#L50)

---

### tm

• `Readonly` **tm**: `Tendermint37Client`

#### Defined in

[query/query.ts:52](https://github.com/NibiruChain/ts-sdk/blob/d2a4311/packages/nibijs/src/query/query.ts#L52)

---

### wasmClient

• `Readonly` **wasmClient**: `CosmWasmClient`

#### Defined in

[query/query.ts:51](https://github.com/NibiruChain/ts-sdk/blob/d2a4311/packages/nibijs/src/query/query.ts#L51)

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

[query/query.ts:89](https://github.com/NibiruChain/ts-sdk/blob/d2a4311/packages/nibijs/src/query/query.ts#L89)

---

### waitForNextBlock

▸ **waitForNextBlock**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[query/query.ts:97](https://github.com/NibiruChain/ts-sdk/blob/d2a4311/packages/nibijs/src/query/query.ts#L97)

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

[query/query.ts:54](https://github.com/NibiruChain/ts-sdk/blob/d2a4311/packages/nibijs/src/query/query.ts#L54)
