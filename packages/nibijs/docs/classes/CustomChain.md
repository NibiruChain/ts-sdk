[NibiJS Documentation - v0.21.43](../intro.md) / [Exports](../modules.md) / CustomChain

# Class: CustomChain

CustomChain is a convenience class for intializing the endpoints of a chain
based on its chain ID.

**`Example`**

```ts
export const chain = new CustomChain({
  prefix: "nibiru",
  shortName: "testnet",
  number: 1,
})
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
- [fromChainId](CustomChain.md#fromchainid)

## Constructors

### constructor

• **new CustomChain**(`chainIdParts`)

#### Parameters

| Name           | Type                                            |
| :------------- | :---------------------------------------------- |
| `chainIdParts` | [`ChainIdParts`](../interfaces/ChainIdParts.md) |

#### Defined in

[chain/chain.ts:66](https://github.com/NibiruChain/ts-sdk/blob/cacf9b9/packages/nibijs/src/chain/chain.ts#L66)

## Properties

### chainId

• `Readonly` **chainId**: `string`

chainId: identifier for the chain

#### Implementation of

[Chain](../interfaces/Chain.md).[chainId](../interfaces/Chain.md#chainid)

#### Defined in

[chain/chain.ts:57](https://github.com/NibiruChain/ts-sdk/blob/cacf9b9/packages/nibijs/src/chain/chain.ts#L57)

---

### chainIdParts

• `Private` `Readonly` **chainIdParts**: [`ChainIdParts`](../interfaces/ChainIdParts.md)

#### Defined in

[chain/chain.ts:64](https://github.com/NibiruChain/ts-sdk/blob/cacf9b9/packages/nibijs/src/chain/chain.ts#L64)

---

### chainName

• `Readonly` **chainName**: `string`

chainName: the name of the chain to display to the user

#### Implementation of

[Chain](../interfaces/Chain.md).[chainName](../interfaces/Chain.md#chainname)

#### Defined in

[chain/chain.ts:58](https://github.com/NibiruChain/ts-sdk/blob/cacf9b9/packages/nibijs/src/chain/chain.ts#L58)

---

### endptGrpc

• `Readonly` **endptGrpc**: `string`

endptGrpc: endpoint for the gRPC gateway. Usually on port 9090.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptGrpc](../interfaces/Chain.md#endptgrpc)

#### Defined in

[chain/chain.ts:61](https://github.com/NibiruChain/ts-sdk/blob/cacf9b9/packages/nibijs/src/chain/chain.ts#L61)

---

### endptRest

• `Readonly` **endptRest**: `string`

endptRest: endpoint for the REST server. Also, the LCD endpoint.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptRest](../interfaces/Chain.md#endptrest)

#### Defined in

[chain/chain.ts:60](https://github.com/NibiruChain/ts-sdk/blob/cacf9b9/packages/nibijs/src/chain/chain.ts#L60)

---

### endptTm

• `Readonly` **endptTm**: `string`

endptTm: endpoint for the Tendermint RPC server. Usually on port 26657.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptTm](../interfaces/Chain.md#endpttm)

#### Defined in

[chain/chain.ts:59](https://github.com/NibiruChain/ts-sdk/blob/cacf9b9/packages/nibijs/src/chain/chain.ts#L59)

---

### feeDenom

• `Readonly` **feeDenom**: `"unibi"`

feeDenom: the denomination of the fee to be paid for transactions.

#### Implementation of

[Chain](../interfaces/Chain.md).[feeDenom](../interfaces/Chain.md#feedenom)

#### Defined in

[chain/chain.ts:62](https://github.com/NibiruChain/ts-sdk/blob/cacf9b9/packages/nibijs/src/chain/chain.ts#L62)

## Methods

### initChainId

▸ `Private` **initChainId**(): `string`

#### Returns

`string`

#### Defined in

[chain/chain.ts:90](https://github.com/NibiruChain/ts-sdk/blob/cacf9b9/packages/nibijs/src/chain/chain.ts#L90)

---

### fromChainId

▸ `Static` **fromChainId**(`chainId`): [`Chain`](../interfaces/Chain.md)

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `chainId` | `string` |

#### Returns

[`Chain`](../interfaces/Chain.md)

#### Defined in

[chain/chain.ts:80](https://github.com/NibiruChain/ts-sdk/blob/cacf9b9/packages/nibijs/src/chain/chain.ts#L80)
