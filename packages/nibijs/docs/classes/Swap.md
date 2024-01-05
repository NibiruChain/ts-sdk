[NibiJS Documentation - v0.21.45](../intro.md) / [Exports](../modules.md) / Swap

# Class: Swap

Swap contains the result of a swap

**`Export`**

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

| Name        | Type                              |
| :---------- | :-------------------------------- |
| `poolStart` | [`BalancerPool`](BalancerPool.md) |
| `poolEnd`   | [`BalancerPool`](BalancerPool.md) |

#### Defined in

[src/balancer/balancer.ts:28](https://github.com/NibiruChain/ts-sdk/blob/c5e4f87/packages/nibijs/src/balancer/balancer.ts#L28)

## Properties

### dxAmm

• **dxAmm**: `BigNumber`

the amount of x added to the pool

#### Defined in

[src/balancer/balancer.ts:22](https://github.com/NibiruChain/ts-sdk/blob/c5e4f87/packages/nibijs/src/balancer/balancer.ts#L22)

---

### dxUser

• **dxUser**: `BigNumber`

the amount of x removed from the pool

#### Defined in

[src/balancer/balancer.ts:23](https://github.com/NibiruChain/ts-sdk/blob/c5e4f87/packages/nibijs/src/balancer/balancer.ts#L23)

---

### dyAmm

• **dyAmm**: `BigNumber`

the amount of y removed from the pool

#### Defined in

[src/balancer/balancer.ts:24](https://github.com/NibiruChain/ts-sdk/blob/c5e4f87/packages/nibijs/src/balancer/balancer.ts#L24)

---

### dyUser

• **dyUser**: `BigNumber`

the amount of y added to the pool

#### Defined in

[src/balancer/balancer.ts:25](https://github.com/NibiruChain/ts-sdk/blob/c5e4f87/packages/nibijs/src/balancer/balancer.ts#L25)

---

### poolEnd

• **poolEnd**: [`BalancerPool`](BalancerPool.md)

the pool after the swap

#### Defined in

[src/balancer/balancer.ts:20](https://github.com/NibiruChain/ts-sdk/blob/c5e4f87/packages/nibijs/src/balancer/balancer.ts#L20)

---

### poolStart

• **poolStart**: [`BalancerPool`](BalancerPool.md)

the pool before the swap

#### Defined in

[src/balancer/balancer.ts:19](https://github.com/NibiruChain/ts-sdk/blob/c5e4f87/packages/nibijs/src/balancer/balancer.ts#L19)

---

### priceImpact

• **priceImpact**: `BigNumber`

the price impact of the swap

#### Defined in

[src/balancer/balancer.ts:26](https://github.com/NibiruChain/ts-sdk/blob/c5e4f87/packages/nibijs/src/balancer/balancer.ts#L26)
