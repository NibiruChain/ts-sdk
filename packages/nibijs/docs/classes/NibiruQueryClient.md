[NibiJS Documentation - v0.19.5](../intro.md) / [Exports](../modules.md) / NibiruQueryClient

# Class: NibiruQueryClient

## Hierarchy

- `StargateClient`

  ↳ **`NibiruQueryClient`**

## Table of contents

### Constructors

- [constructor](NibiruQueryClient.md#constructor)

### Properties

- [nibiruExtensions](NibiruQueryClient.md#nibiruextensions)

### Methods

- [waitForHeight](NibiruQueryClient.md#waitforheight)
- [waitForNextBlock](NibiruQueryClient.md#waitfornextblock)
- [connect](NibiruQueryClient.md#connect)

## Constructors

### constructor

• `Protected` **new NibiruQueryClient**(`tmClient`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tmClient` | `Tendermint34Client` |
| `options` | `StargateClientOptions` |

#### Overrides

StargateClient.constructor

#### Defined in

[query/query.ts:42](https://github.com/NibiruChain/ts-sdk/blob/90e82a7/packages/nibijs/src/query/query.ts#L42)

## Properties

### nibiruExtensions

• `Readonly` **nibiruExtensions**: [`NibiruExtensions`](../modules.md#nibiruextensions)

#### Defined in

[query/query.ts:32](https://github.com/NibiruChain/ts-sdk/blob/90e82a7/packages/nibijs/src/query/query.ts#L32)

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

[query/query.ts:58](https://github.com/NibiruChain/ts-sdk/blob/90e82a7/packages/nibijs/src/query/query.ts#L58)

___

### waitForNextBlock

▸ **waitForNextBlock**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[query/query.ts:66](https://github.com/NibiruChain/ts-sdk/blob/90e82a7/packages/nibijs/src/query/query.ts#L66)

___

### connect

▸ `Static` **connect**(`endpoint`, `options?`): `Promise`<[`NibiruQueryClient`](NibiruQueryClient.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `options` | `StargateClientOptions` |

#### Returns

`Promise`<[`NibiruQueryClient`](NibiruQueryClient.md)\>

#### Overrides

StargateClient.connect

#### Defined in

[query/query.ts:34](https://github.com/NibiruChain/ts-sdk/blob/90e82a7/packages/nibijs/src/query/query.ts#L34)
