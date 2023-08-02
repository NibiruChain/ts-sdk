[NibiJS Documentation - v0.19.26](../intro.md) / [Exports](../modules.md) / BalancerPool

# Class: BalancerPool

Balancer contains the logic for exchanging tokens in a traditional xy=k AMM pool

Constructor:

**`Param`**

**`Param`**

**`Param`**

**`Export`**

**`Property`**

the amount of x in the pool

**`Property`**

the amount of y in the pool

**`Property`**

the swap fee expressed as a ratio

## Table of contents

### Constructors

- [constructor](BalancerPool.md#constructor)

### Properties

- [swapFee](BalancerPool.md#swapfee)
- [x](BalancerPool.md#x)
- [y](BalancerPool.md#y)

### Methods

- [k](BalancerPool.md#k)
- [spotPrice](BalancerPool.md#spotprice)
- [swapX](BalancerPool.md#swapx)
- [swapY](BalancerPool.md#swapy)

## Constructors

### constructor

• **new BalancerPool**(`x`, `y`, `fee`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `BigNumber` |
| `y` | `BigNumber` |
| `fee` | `BigNumber` |

#### Defined in

[balancer/balancer.ts:61](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/balancer/balancer.ts#L61)

## Properties

### swapFee

• **swapFee**: `BigNumber`

#### Defined in

[balancer/balancer.ts:59](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/balancer/balancer.ts#L59)

___

### x

• **x**: `BigNumber`

#### Defined in

[balancer/balancer.ts:57](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/balancer/balancer.ts#L57)

___

### y

• **y**: `BigNumber`

#### Defined in

[balancer/balancer.ts:58](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/balancer/balancer.ts#L58)

## Methods

### k

▸ **k**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[balancer/balancer.ts:67](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/balancer/balancer.ts#L67)

___

### spotPrice

▸ **spotPrice**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[balancer/balancer.ts:71](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/balancer/balancer.ts#L71)

___

### swapX

▸ **swapX**(`dxAmm`): `undefined` \| [`Swap`](Swap.md)

Calculates the result of adding x to the pool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dxAmm` | `BigNumber` | the amount of x to add to the pool. Could be negative. |

#### Returns

`undefined` \| [`Swap`](Swap.md)

a Swap object representing the result of the swap

#### Defined in

[balancer/balancer.ts:81](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/balancer/balancer.ts#L81)

___

### swapY

▸ **swapY**(`dyAmm`): `undefined` \| [`Swap`](Swap.md)

Calculates the result of adding y to the pool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dyAmm` | `BigNumber` | the amount of y to add to the pool. Could be negative. |

#### Returns

`undefined` \| [`Swap`](Swap.md)

a Swap object representing the result of the swap

#### Defined in

[balancer/balancer.ts:117](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/balancer/balancer.ts#L117)
