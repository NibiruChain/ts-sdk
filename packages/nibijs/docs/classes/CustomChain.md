[NibiJS Documentation - v0.21.45](../intro.md) / [Exports](../modules.md) / CustomChain

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
- [endptHm](CustomChain.md#endpthm)
- [endptRest](CustomChain.md#endptrest)
- [endptTm](CustomChain.md#endpttm)
- [endptWs](CustomChain.md#endptws)
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

[src/chain/chain.ts:72](https://github.com/NibiruChain/ts-sdk/blob/89f4b6e/packages/nibijs/src/chain/chain.ts#L72)

## Properties

### chainId

• `Readonly` **chainId**: `string`

chainId: identifier for the chain

#### Implementation of

[Chain](../interfaces/Chain.md).[chainId](../interfaces/Chain.md#chainid)

#### Defined in

[src/chain/chain.ts:61](https://github.com/NibiruChain/ts-sdk/blob/89f4b6e/packages/nibijs/src/chain/chain.ts#L61)

---

### chainIdParts

• `Private` `Readonly` **chainIdParts**: [`ChainIdParts`](../interfaces/ChainIdParts.md)

#### Defined in

[src/chain/chain.ts:70](https://github.com/NibiruChain/ts-sdk/blob/89f4b6e/packages/nibijs/src/chain/chain.ts#L70)

---

### chainName

• `Readonly` **chainName**: `string`

chainName: the name of the chain to display to the user

#### Implementation of

[Chain](../interfaces/Chain.md).[chainName](../interfaces/Chain.md#chainname)

#### Defined in

[src/chain/chain.ts:62](https://github.com/NibiruChain/ts-sdk/blob/89f4b6e/packages/nibijs/src/chain/chain.ts#L62)

---

### endptGrpc

• `Readonly` **endptGrpc**: `string`

endptGrpc: endpoint for the gRPC gateway. Usually on port 9090.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptGrpc](../interfaces/Chain.md#endptgrpc)

#### Defined in

[src/chain/chain.ts:65](https://github.com/NibiruChain/ts-sdk/blob/89f4b6e/packages/nibijs/src/chain/chain.ts#L65)

---

### endptHm

• `Readonly` **endptHm**: `string`

endptHm: endpoint for the heart monitor.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptHm](../interfaces/Chain.md#endpthm)

#### Defined in

[src/chain/chain.ts:66](https://github.com/NibiruChain/ts-sdk/blob/89f4b6e/packages/nibijs/src/chain/chain.ts#L66)

---

### endptRest

• `Readonly` **endptRest**: `string`

endptRest: endpoint for the REST server. Also, the LCD endpoint.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptRest](../interfaces/Chain.md#endptrest)

#### Defined in

[src/chain/chain.ts:64](https://github.com/NibiruChain/ts-sdk/blob/89f4b6e/packages/nibijs/src/chain/chain.ts#L64)

---

### endptTm

• `Readonly` **endptTm**: `string`

endptTm: endpoint for the Tendermint RPC server. Usually on port 26657.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptTm](../interfaces/Chain.md#endpttm)

#### Defined in

[src/chain/chain.ts:63](https://github.com/NibiruChain/ts-sdk/blob/89f4b6e/packages/nibijs/src/chain/chain.ts#L63)

---

### endptWs

• `Readonly` **endptWs**: `string`

endptWs: endpoint for the web socket.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptWs](../interfaces/Chain.md#endptws)

#### Defined in

[src/chain/chain.ts:67](https://github.com/NibiruChain/ts-sdk/blob/89f4b6e/packages/nibijs/src/chain/chain.ts#L67)

---

### feeDenom

• `Readonly` **feeDenom**: `"unibi"`

feeDenom: the denomination of the fee to be paid for transactions.

#### Implementation of

[Chain](../interfaces/Chain.md).[feeDenom](../interfaces/Chain.md#feedenom)

#### Defined in

[src/chain/chain.ts:68](https://github.com/NibiruChain/ts-sdk/blob/89f4b6e/packages/nibijs/src/chain/chain.ts#L68)

## Methods

### initChainId

▸ `Private` **initChainId**(): `string`

#### Returns

`string`

#### Defined in

[src/chain/chain.ts:98](https://github.com/NibiruChain/ts-sdk/blob/89f4b6e/packages/nibijs/src/chain/chain.ts#L98)

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

[src/chain/chain.ts:88](https://github.com/NibiruChain/ts-sdk/blob/89f4b6e/packages/nibijs/src/chain/chain.ts#L88)
