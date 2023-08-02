[NibiJS Documentation - v0.19.26](../intro.md) / [Exports](../modules.md) / Swap

# Class: Swap

Swap contains the result of a swap

**`Export`**

**`Property`**

the pool before the swap

**`Property`**

the pool after the swap

**`Property`**

the amount of x added to the pool

**`Property`**

the amount of x removed from the pool

**`Property`**

the amount of y removed from the pool

**`Property`**

the amount of y added to the pool

**`Property`**

the price impact of the swap

## Table of contents

### Constructors

- [constructor](Swap.md#constructor)

### Properties

- [dxAmm](Swap.md#dxamm)
- [dxUser](Swap.md#dxuser)
- [dyAmm](Swap.md#dyamm)
- [dyUser](Swap.md#dyuser)
- [poolEnd](Swap.md#poolend)
- [poolStart](Swap.md#poolstart)
- [priceImpact](Swap.md#priceimpact)

## Constructors

### constructor

• **new Swap**(`poolStart`, `poolEnd`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolStart` | [`BalancerPool`](BalancerPool.md) |
| `poolEnd` | [`BalancerPool`](BalancerPool.md) |

#### Defined in

[balancer/balancer.ts:28](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/balancer/balancer.ts#L28)

## Properties

### dxAmm

• **dxAmm**: `BigNumber`

#### Defined in

[balancer/balancer.ts:22](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/balancer/balancer.ts#L22)

___

### dxUser

• **dxUser**: `BigNumber`

#### Defined in

[balancer/balancer.ts:23](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/balancer/balancer.ts#L23)

___

### dyAmm

• **dyAmm**: `BigNumber`

#### Defined in

[balancer/balancer.ts:24](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/balancer/balancer.ts#L24)

___

### dyUser

• **dyUser**: `BigNumber`

#### Defined in

[balancer/balancer.ts:25](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/balancer/balancer.ts#L25)

___

### poolEnd

• **poolEnd**: [`BalancerPool`](BalancerPool.md)

#### Defined in

[balancer/balancer.ts:20](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/balancer/balancer.ts#L20)

___

### poolStart

• **poolStart**: [`BalancerPool`](BalancerPool.md)

#### Defined in

[balancer/balancer.ts:19](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/balancer/balancer.ts#L19)

___

### priceImpact

• **priceImpact**: `BigNumber`

#### Defined in

[balancer/balancer.ts:26](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/balancer/balancer.ts#L26)
