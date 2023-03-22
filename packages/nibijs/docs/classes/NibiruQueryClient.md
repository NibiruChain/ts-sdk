[NibiJS Documentation - v0.19.4](../intro.md) / [Exports](../modules.md) / NibiruQueryClient

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

[query/query.ts:37](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/query/query.ts#L37)

## Properties

### nibiruExtensions

• `Readonly` **nibiruExtensions**: [`NibiruExtensions`](../modules.md#nibiruextensions)

#### Defined in

[query/query.ts:27](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/query/query.ts#L27)

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

[query/query.ts:51](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/query/query.ts#L51)

___

### waitForNextBlock

▸ **waitForNextBlock**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[query/query.ts:59](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/query/query.ts#L59)

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

[query/query.ts:29](https://github.com/NibiruChain/ts-sdk/blob/75f02a4/packages/nibijs/src/query/query.ts#L29)
