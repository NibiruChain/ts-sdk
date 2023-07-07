[NibiJS Documentation - v0.21.1](../intro.md) / [Exports](../modules.md) / StableSwap

# Class: StableSwap

StableSwap contains the logic for exchanging tokens

Based on: https://github.com/NibiruChain/nibiru/blob/master/contrib/scripts/testing/stableswap_model.py

Constructor:

**`Param`**

**`Param`**

**`Param`**

**`Param`**

**`Export`**

## Table of contents

### Constructors

- [constructor](StableSwap.md#constructor)

### Properties

- [Amplification](StableSwap.md#amplification)
- [fee](StableSwap.md#fee)
- [tokenPrices](StableSwap.md#tokenprices)
- [totalTokenSupply](StableSwap.md#totaltokensupply)
- [totalTokensInPool](StableSwap.md#totaltokensinpool)

### Methods

- [D](StableSwap.md#d)
- [exchange](StableSwap.md#exchange)
- [xp](StableSwap.md#xp)
- [y](StableSwap.md#y)

## Constructors

### constructor

• **new StableSwap**(`Amplification`, `totalTokenSupply`, `tokenPrices`, `fee`)

#### Parameters

| Name               | Type          |
| :----------------- | :------------ |
| `Amplification`    | `BigNumber`   |
| `totalTokenSupply` | `BigNumber`[] |
| `tokenPrices`      | `BigNumber`[] |
| `fee`              | `BigNumber`   |

#### Defined in

[stableswap/stableswap.ts:26](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/stableswap/stableswap.ts#L26)

## Properties

### Amplification

• **Amplification**: `BigNumber`

#### Defined in

[stableswap/stableswap.ts:20](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/stableswap/stableswap.ts#L20)

---

### fee

• **fee**: `BigNumber`

#### Defined in

[stableswap/stableswap.ts:24](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/stableswap/stableswap.ts#L24)

---

### tokenPrices

• **tokenPrices**: `BigNumber`[]

#### Defined in

[stableswap/stableswap.ts:23](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/stableswap/stableswap.ts#L23)

---

### totalTokenSupply

• **totalTokenSupply**: `BigNumber`[]

#### Defined in

[stableswap/stableswap.ts:21](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/stableswap/stableswap.ts#L21)

---

### totalTokensInPool

• **totalTokensInPool**: `BigNumber`

#### Defined in

[stableswap/stableswap.ts:22](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/stableswap/stableswap.ts#L22)

## Methods

### D

▸ **D**(): `BigNumber`

D()

D invariant calculation in non-overflowing integer operations iteratively
A _ sum(x_i) _ n**n + D = A _ D _ n**n + D**(n+1) / (n**n \* prod(x_i))

**`Memberof`**

StableSwap

#### Returns

`BigNumber`

#### Defined in

[stableswap/stableswap.ts:61](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/stableswap/stableswap.ts#L61)

---

### exchange

▸ **exchange**(`fromIndex`, `toIndex`, `dx`): `BigNumber`

exchange() runs a theorhetical Curve StableSwap model to determine impact on token price

**`Memberof`**

StableSwap

#### Parameters

| Name        | Type        |
| :---------- | :---------- |
| `fromIndex` | `number`    |
| `toIndex`   | `number`    |
| `dx`        | `BigNumber` |

#### Returns

`BigNumber`

#### Defined in

[stableswap/stableswap.ts:150](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/stableswap/stableswap.ts#L150)

---

### xp

▸ **xp**(): `BigNumber`[]

xp() gives an array of total token cap per token

**`Memberof`**

StableSwap

#### Returns

`BigNumber`[]

#### Defined in

[stableswap/stableswap.ts:44](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/stableswap/stableswap.ts#L44)

---

### y

▸ **y**(`fromIndex`, `toIndex`, `x`): `BigNumber`

y()

Calculate x[j] if one makes x[i] = x

Done by solving quadratic equation iteratively.
x*1\*\*2 + x1 * (sum' - (A*n\*\*n - 1) * D / (A _ n**n)) = D ** (n+1)/(n \*\* (2 _ n) \_ prod' \* A)
x_1\*\*2 + b\*x_1 = c

x_1 = (x_1\**2 + c) / (2*x_1 + b)

**`Memberof`**

StableSwap

#### Parameters

| Name        | Type        |
| :---------- | :---------- |
| `fromIndex` | `number`    |
| `toIndex`   | `number`    |
| `x`         | `BigNumber` |

#### Returns

`BigNumber`

#### Defined in

[stableswap/stableswap.ts:111](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/stableswap/stableswap.ts#L111)