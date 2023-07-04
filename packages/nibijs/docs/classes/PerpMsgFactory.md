[NibiJS Documentation - v0.21.1](../intro.md) / [Exports](../modules.md) / PerpMsgFactory

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

**`Static`**

#### Parameters

| Name  | Type           | Description           |
| :---- | :------------- | :-------------------- |
| `msg` | `MsgAddMargin` | Message to add margin |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

- formatted version of MsgAddMargin

#### Defined in

[msg/perp.ts:103](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/perp.ts#L103)

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

[msg/perp.ts:140](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/perp.ts#L140)

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

[msg/perp.ts:147](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/perp.ts#L147)

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

[msg/perp.ts:110](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/perp.ts#L110)

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

[msg/perp.ts:117](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/perp.ts#L117)

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

[msg/perp.ts:89](https://github.com/NibiruChain/ts-sdk/blob/552089e/packages/nibijs/src/msg/perp.ts#L89)
