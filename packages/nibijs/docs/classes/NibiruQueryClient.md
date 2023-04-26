[NibiJS Documentation - v0.19.7](../intro.md) / [Exports](../modules.md) / NibiruQueryClient

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

[query/query.ts:45](https://github.com/NibiruChain/ts-sdk/blob/a2bfc29/packages/nibijs/src/query/query.ts#L45)

## Properties

### nibiruExtensions

• `Readonly` **nibiruExtensions**: [`NibiruExtensions`](../modules.md#nibiruextensions)

#### Defined in

[query/query.ts:35](https://github.com/NibiruChain/ts-sdk/blob/a2bfc29/packages/nibijs/src/query/query.ts#L35)

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

[query/query.ts:62](https://github.com/NibiruChain/ts-sdk/blob/a2bfc29/packages/nibijs/src/query/query.ts#L62)

___

### waitForNextBlock

▸ **waitForNextBlock**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[query/query.ts:70](https://github.com/NibiruChain/ts-sdk/blob/a2bfc29/packages/nibijs/src/query/query.ts#L70)

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

[query/query.ts:37](https://github.com/NibiruChain/ts-sdk/blob/a2bfc29/packages/nibijs/src/query/query.ts#L37)
