[NibiJS Documentation - v0.19.18](../intro.md) / [Exports](../modules.md) / PerpMsgFactory

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | `MsgAddMargin` | Message to add margin |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

- formatted version of MsgAddMargin

#### Defined in

[msg/perp.ts:134](https://github.com/NibiruChain/ts-sdk/blob/f41d022/packages/nibijs/src/msg/perp.ts#L134)

___

### closePosition

▸ `Static` **closePosition**(`msg`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `MsgClosePosition` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/perp.ts:171](https://github.com/NibiruChain/ts-sdk/blob/f41d022/packages/nibijs/src/msg/perp.ts#L171)

___

### donateToPerpEF

▸ `Static` **donateToPerpEF**(`msg`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `MsgDonateToEcosystemFund` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/perp.ts:178](https://github.com/NibiruChain/ts-sdk/blob/f41d022/packages/nibijs/src/msg/perp.ts#L178)

___

### liquidate

▸ `Static` **liquidate**(`msg`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `MsgMultiLiquidate` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/perp.ts:141](https://github.com/NibiruChain/ts-sdk/blob/f41d022/packages/nibijs/src/msg/perp.ts#L141)

___

### openPosition

▸ `Static` **openPosition**(`msg`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `Object` |
| `msg.baseAssetAmountLimit?` | `number` |
| `msg.goLong` | `boolean` |
| `msg.leverage` | `number` |
| `msg.pair` | `string` |
| `msg.quoteAssetAmount` | `number` |
| `msg.sender` | `string` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/perp.ts:148](https://github.com/NibiruChain/ts-sdk/blob/f41d022/packages/nibijs/src/msg/perp.ts#L148)

___

### removeMargin

▸ `Static` **removeMargin**(`msg`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `MsgRemoveMargin` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/perp.ts:120](https://github.com/NibiruChain/ts-sdk/blob/f41d022/packages/nibijs/src/msg/perp.ts#L120)
