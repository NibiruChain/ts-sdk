[NibiJS Documentation - v0.21.35](../intro.md) / [Exports](../modules.md) / PerpMsgFactory

# Class: PerpMsgFactory

## Table of contents

### Constructors

- [constructor](PerpMsgFactory.md#constructor)

### Methods

- [addMargin](PerpMsgFactory.md#addmargin)
- [closePosition](PerpMsgFactory.md#closeposition)
- [donateToPerpEF](PerpMsgFactory.md#donatetoperpef)
- [liquidate](PerpMsgFactory.md#liquidate)
- [openPosition](PerpMsgFactory.md#openposition)
- [partialClosePosition](PerpMsgFactory.md#partialcloseposition)
- [removeMargin](PerpMsgFactory.md#removemargin)

## Constructors

### constructor

• **new PerpMsgFactory**()

## Methods

### addMargin

▸ `Static` **addMargin**(`msg`): [`TxMessage`](../interfaces/TxMessage.md)

Returns a 'TxMessage' for adding margin to a position

#### Parameters

| Name  | Type           | Description           |
| :---- | :------------- | :-------------------- |
| `msg` | `MsgAddMargin` | Message to add margin |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

- formatted version of MsgAddMargin

**`Static`**

#### Defined in

[msg/perp.ts:118](https://github.com/NibiruChain/ts-sdk/blob/1da2942/packages/nibijs/src/msg/perp.ts#L118)

---

### closePosition

▸ `Static` **closePosition**(`msg`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name  | Type               |
| :---- | :----------------- |
| `msg` | `MsgClosePosition` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/perp.ts:155](https://github.com/NibiruChain/ts-sdk/blob/1da2942/packages/nibijs/src/msg/perp.ts#L155)

---

### donateToPerpEF

▸ `Static` **donateToPerpEF**(`msg`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name  | Type                       |
| :---- | :------------------------- |
| `msg` | `MsgDonateToEcosystemFund` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/perp.ts:169](https://github.com/NibiruChain/ts-sdk/blob/1da2942/packages/nibijs/src/msg/perp.ts#L169)

---

### liquidate

▸ `Static` **liquidate**(`msg`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name  | Type                |
| :---- | :------------------ |
| `msg` | `MsgMultiLiquidate` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/perp.ts:125](https://github.com/NibiruChain/ts-sdk/blob/1da2942/packages/nibijs/src/msg/perp.ts#L125)

---

### openPosition

▸ `Static` **openPosition**(`msg`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name                        | Type      |
| :-------------------------- | :-------- |
| `msg`                       | `Object`  |
| `msg.baseAssetAmountLimit?` | `number`  |
| `msg.goLong`                | `boolean` |
| `msg.leverage`              | `number`  |
| `msg.pair`                  | `string`  |
| `msg.quoteAssetAmount`      | `number`  |
| `msg.sender`                | `string`  |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/perp.ts:132](https://github.com/NibiruChain/ts-sdk/blob/1da2942/packages/nibijs/src/msg/perp.ts#L132)

---

### partialClosePosition

▸ `Static` **partialClosePosition**(`msg`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name  | Type              |
| :---- | :---------------- |
| `msg` | `MsgPartialClose` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/perp.ts:162](https://github.com/NibiruChain/ts-sdk/blob/1da2942/packages/nibijs/src/msg/perp.ts#L162)

---

### removeMargin

▸ `Static` **removeMargin**(`msg`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name  | Type              |
| :---- | :---------------- |
| `msg` | `MsgRemoveMargin` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/perp.ts:104](https://github.com/NibiruChain/ts-sdk/blob/1da2942/packages/nibijs/src/msg/perp.ts#L104)
