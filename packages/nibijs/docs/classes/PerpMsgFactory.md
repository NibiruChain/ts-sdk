[NibiJS Documentation - v0.21.21](../intro.md) / [Exports](../modules.md) / PerpMsgFactory

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

[msg/perp.ts:106](https://github.com/NibiruChain/ts-sdk/blob/9375f67/packages/nibijs/src/msg/perp.ts#L106)

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

[msg/perp.ts:143](https://github.com/NibiruChain/ts-sdk/blob/9375f67/packages/nibijs/src/msg/perp.ts#L143)

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

[msg/perp.ts:150](https://github.com/NibiruChain/ts-sdk/blob/9375f67/packages/nibijs/src/msg/perp.ts#L150)

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

[msg/perp.ts:113](https://github.com/NibiruChain/ts-sdk/blob/9375f67/packages/nibijs/src/msg/perp.ts#L113)

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

[msg/perp.ts:120](https://github.com/NibiruChain/ts-sdk/blob/9375f67/packages/nibijs/src/msg/perp.ts#L120)

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

[msg/perp.ts:92](https://github.com/NibiruChain/ts-sdk/blob/9375f67/packages/nibijs/src/msg/perp.ts#L92)
