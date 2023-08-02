[NibiJS Documentation - v0.19.26](../intro.md) / [Exports](../modules.md) / SpotMsgFactory

# Class: SpotMsgFactory

## Table of contents

### Constructors

- [constructor](SpotMsgFactory.md#constructor)

### Methods

- [createPool](SpotMsgFactory.md#createpool)
- [exitPool](SpotMsgFactory.md#exitpool)
- [joinPool](SpotMsgFactory.md#joinpool)
- [swapAssets](SpotMsgFactory.md#swapassets)

## Constructors

### constructor

• **new SpotMsgFactory**()

## Methods

### createPool

▸ `Static` **createPool**(`msg`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `MsgCreatePool` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/spot.ts:61](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/msg/spot.ts#L61)

___

### exitPool

▸ `Static` **exitPool**(`«destructured»`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `MsgExitPool` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/spot.ts:91](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/msg/spot.ts#L91)

___

### joinPool

▸ `Static` **joinPool**(`«destructured»`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `MsgJoinPool` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/spot.ts:74](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/msg/spot.ts#L74)

___

### swapAssets

▸ `Static` **swapAssets**(`«destructured»`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `MsgSwapAssets` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/spot.ts:102](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/msg/spot.ts#L102)
