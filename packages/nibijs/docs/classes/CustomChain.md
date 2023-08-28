[NibiJS Documentation - v0.21.15](../intro.md) / [Exports](../modules.md) / CustomChain

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

## Constructors

### constructor

• **new CustomChain**(`chainIdParts`)

#### Parameters

| Name           | Type                                            |
| :------------- | :---------------------------------------------- |
| `chainIdParts` | [`ChainIdParts`](../interfaces/ChainIdParts.md) |

#### Defined in

[chain/chain.ts:65](https://github.com/NibiruChain/ts-sdk/blob/630f9e9/packages/nibijs/src/chain/chain.ts#L65)

## Properties

### chainId

• `Readonly` **chainId**: `string`

chainId: identifier for the chain

#### Implementation of

[Chain](../interfaces/Chain.md).[chainId](../interfaces/Chain.md#chainid)

#### Defined in

[chain/chain.ts:56](https://github.com/NibiruChain/ts-sdk/blob/630f9e9/packages/nibijs/src/chain/chain.ts#L56)

---

### chainIdParts

• `Private` `Readonly` **chainIdParts**: [`ChainIdParts`](../interfaces/ChainIdParts.md)

#### Defined in

[chain/chain.ts:63](https://github.com/NibiruChain/ts-sdk/blob/630f9e9/packages/nibijs/src/chain/chain.ts#L63)

---

### chainName

• `Readonly` **chainName**: `string`

chainName: the name of the chain to display to the user

#### Implementation of

[Chain](../interfaces/Chain.md).[chainName](../interfaces/Chain.md#chainname)

#### Defined in

[chain/chain.ts:57](https://github.com/NibiruChain/ts-sdk/blob/630f9e9/packages/nibijs/src/chain/chain.ts#L57)

---

### endptGrpc

• `Readonly` **endptGrpc**: `string`

endptGrpc: endpoint for the gRPC gateway. Usually on port 9090.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptGrpc](../interfaces/Chain.md#endptgrpc)

#### Defined in

[chain/chain.ts:60](https://github.com/NibiruChain/ts-sdk/blob/630f9e9/packages/nibijs/src/chain/chain.ts#L60)

---

### endptRest

• `Readonly` **endptRest**: `string`

endptRest: endpoint for the REST server. Also, the LCD endpoint.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptRest](../interfaces/Chain.md#endptrest)

#### Defined in

[chain/chain.ts:59](https://github.com/NibiruChain/ts-sdk/blob/630f9e9/packages/nibijs/src/chain/chain.ts#L59)

---

### endptTm

• `Readonly` **endptTm**: `string`

endptTm: endpoint for the Tendermint RPC server. Usually on port 26657.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptTm](../interfaces/Chain.md#endpttm)

#### Defined in

[chain/chain.ts:58](https://github.com/NibiruChain/ts-sdk/blob/630f9e9/packages/nibijs/src/chain/chain.ts#L58)

---

### feeDenom

• `Readonly` **feeDenom**: `"unibi"`

feeDenom: the denomination of the fee to be paid for transactions.

#### Implementation of

[Chain](../interfaces/Chain.md).[feeDenom](../interfaces/Chain.md#feedenom)

#### Defined in

[chain/chain.ts:61](https://github.com/NibiruChain/ts-sdk/blob/630f9e9/packages/nibijs/src/chain/chain.ts#L61)

## Methods

### initChainId

▸ `Private` **initChainId**(): `string`

#### Returns

`string`

#### Defined in

[chain/chain.ts:74](https://github.com/NibiruChain/ts-sdk/blob/630f9e9/packages/nibijs/src/chain/chain.ts#L74)
