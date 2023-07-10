[NibiJS Documentation - v0.21.1](../intro.md) / [Exports](../modules.md) / CustomChain

# Class: CustomChain

CustomChain is a convenience class for intializing the endpoints of a chain
based on its chain ID.

**`Example`**

```ts
export const TEST_CHAIN = new CustomChain({
  prefix: "nibiru",
  shortName: "itn",
  number: 1,
}) // v0.19.2
```

## Implements

- [`Chain`](../interfaces/Chain.md)

## Table of contents

### Constructors

- [constructor](CustomChain.md#constructor)

### Properties

- [chainId](CustomChain.md#chainid)
- [chainIdParts](CustomChain.md#chainidparts)
- [chainName](CustomChain.md#chainname)
- [endptGrpc](CustomChain.md#endptgrpc)
- [endptRest](CustomChain.md#endptrest)
- [endptTm](CustomChain.md#endpttm)
- [feeDenom](CustomChain.md#feedenom)

### Methods

- [initChainId](CustomChain.md#initchainid)
- [initGrpcEndpoint](CustomChain.md#initgrpcendpoint)
- [initRestEndpoint](CustomChain.md#initrestendpoint)
- [initTendermintEndpoint](CustomChain.md#inittendermintendpoint)

## Constructors

### constructor

• **new CustomChain**(`chainIdParts`)

#### Parameters

| Name           | Type                                            |
| :------------- | :---------------------------------------------- |
| `chainIdParts` | [`ChainIdParts`](../interfaces/ChainIdParts.md) |

#### Defined in

[chain/chain.ts:74](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/chain/chain.ts#L74)

## Properties

### chainId

• `Readonly` **chainId**: `string`

chainId: identifier for the chain

#### Implementation of

[Chain](../interfaces/Chain.md).[chainId](../interfaces/Chain.md#chainid)

#### Defined in

[chain/chain.ts:65](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/chain/chain.ts#L65)

---

### chainIdParts

• `Private` `Readonly` **chainIdParts**: [`ChainIdParts`](../interfaces/ChainIdParts.md)

#### Defined in

[chain/chain.ts:72](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/chain/chain.ts#L72)

---

### chainName

• `Readonly` **chainName**: `string`

chainName: the name of the chain to display to the user

#### Implementation of

[Chain](../interfaces/Chain.md).[chainName](../interfaces/Chain.md#chainname)

#### Defined in

[chain/chain.ts:66](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/chain/chain.ts#L66)

---

### endptGrpc

• `Readonly` **endptGrpc**: `string`

endptGrpc: endpoint for the gRPC gateway. Usually on port 9090.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptGrpc](../interfaces/Chain.md#endptgrpc)

#### Defined in

[chain/chain.ts:69](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/chain/chain.ts#L69)

---

### endptRest

• `Readonly` **endptRest**: `string`

endptRest: endpoint for the REST server. Also, the LCD endpoint.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptRest](../interfaces/Chain.md#endptrest)

#### Defined in

[chain/chain.ts:68](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/chain/chain.ts#L68)

---

### endptTm

• `Readonly` **endptTm**: `string`

endptTm: endpoint for the Tendermint RPC server. Usually on port 26657.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptTm](../interfaces/Chain.md#endpttm)

#### Defined in

[chain/chain.ts:67](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/chain/chain.ts#L67)

---

### feeDenom

• `Readonly` **feeDenom**: `"unibi"`

feeDenom: the denomination of the fee to be paid for transactions.

#### Implementation of

[Chain](../interfaces/Chain.md).[feeDenom](../interfaces/Chain.md#feedenom)

#### Defined in

[chain/chain.ts:70](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/chain/chain.ts#L70)

## Methods

### initChainId

▸ `Private` **initChainId**(): `string`

#### Returns

`string`

#### Defined in

[chain/chain.ts:83](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/chain/chain.ts#L83)

---

### initGrpcEndpoint

▸ **initGrpcEndpoint**(): `string`

#### Returns

`string`

#### Defined in

[chain/chain.ts:98](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/chain/chain.ts#L98)

---

### initRestEndpoint

▸ **initRestEndpoint**(): `string`

#### Returns

`string`

#### Defined in

[chain/chain.ts:93](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/chain/chain.ts#L93)

---

### initTendermintEndpoint

▸ **initTendermintEndpoint**(): `string`

#### Returns

`string`

#### Defined in

[chain/chain.ts:88](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/chain/chain.ts#L88)
