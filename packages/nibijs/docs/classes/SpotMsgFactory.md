[NibiJS Documentation - v0.21.1](../intro.md) / [Exports](../modules.md) / SpotMsgFactory

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

| Name  | Type            |
| :---- | :-------------- |
| `msg` | `MsgCreatePool` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/spot.ts:61](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/spot.ts#L61)

---

### exitPool

▸ `Static` **exitPool**(`«destructured»`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name             | Type          |
| :--------------- | :------------ |
| `«destructured»` | `MsgExitPool` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/spot.ts:86](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/spot.ts#L86)

---

### joinPool

▸ `Static` **joinPool**(`«destructured»`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name             | Type          |
| :--------------- | :------------ |
| `«destructured»` | `MsgJoinPool` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/spot.ts:74](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/spot.ts#L74)

---

### swapAssets

▸ `Static` **swapAssets**(`«destructured»`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name             | Type            |
| :--------------- | :-------------- |
| `«destructured»` | `MsgSwapAssets` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/spot.ts:97](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/spot.ts#L97)
