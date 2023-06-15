[NibiJS Documentation - v0.19.14](../intro.md) / [Exports](../modules.md) / CustomChain

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

| Name | Type |
| :------ | :------ |
| `chainIdParts` | [`ChainIdParts`](../interfaces/ChainIdParts.md) |

#### Defined in

[chain/chain.ts:67](https://github.com/NibiruChain/ts-sdk/blob/14e4ebf/packages/nibijs/src/chain/chain.ts#L67)

## Properties

### chainId

• `Readonly` **chainId**: `string`

chainId: identifier for the chain

#### Implementation of

[Chain](../interfaces/Chain.md).[chainId](../interfaces/Chain.md#chainid)

#### Defined in

[chain/chain.ts:58](https://github.com/NibiruChain/ts-sdk/blob/14e4ebf/packages/nibijs/src/chain/chain.ts#L58)

___

### chainIdParts

• `Private` `Readonly` **chainIdParts**: [`ChainIdParts`](../interfaces/ChainIdParts.md)

#### Defined in

[chain/chain.ts:65](https://github.com/NibiruChain/ts-sdk/blob/14e4ebf/packages/nibijs/src/chain/chain.ts#L65)

___

### chainName

• `Readonly` **chainName**: `string`

chainName: the name of the chain to display to the user

#### Implementation of

[Chain](../interfaces/Chain.md).[chainName](../interfaces/Chain.md#chainname)

#### Defined in

[chain/chain.ts:59](https://github.com/NibiruChain/ts-sdk/blob/14e4ebf/packages/nibijs/src/chain/chain.ts#L59)

___

### endptGrpc

• `Readonly` **endptGrpc**: `string`

endptGrpc: endpoint for the gRPC gateway. Usually on port 9090.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptGrpc](../interfaces/Chain.md#endptgrpc)

#### Defined in

[chain/chain.ts:62](https://github.com/NibiruChain/ts-sdk/blob/14e4ebf/packages/nibijs/src/chain/chain.ts#L62)

___

### endptRest

• `Readonly` **endptRest**: `string`

endptRest: endpoint for the REST server. Also, the LCD endpoint.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptRest](../interfaces/Chain.md#endptrest)

#### Defined in

[chain/chain.ts:61](https://github.com/NibiruChain/ts-sdk/blob/14e4ebf/packages/nibijs/src/chain/chain.ts#L61)

___

### endptTm

• `Readonly` **endptTm**: `string`

endptTm: endpoint for the Tendermint RPC server. Usually on port 26657.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptTm](../interfaces/Chain.md#endpttm)

#### Defined in

[chain/chain.ts:60](https://github.com/NibiruChain/ts-sdk/blob/14e4ebf/packages/nibijs/src/chain/chain.ts#L60)

___

### feeDenom

• `Readonly` **feeDenom**: `string` = `"unibi"`

feeDenom: the denomination of the fee to be paid for transactions.

#### Implementation of

[Chain](../interfaces/Chain.md).[feeDenom](../interfaces/Chain.md#feedenom)

#### Defined in

[chain/chain.ts:63](https://github.com/NibiruChain/ts-sdk/blob/14e4ebf/packages/nibijs/src/chain/chain.ts#L63)

## Methods

### initChainId

▸ `Private` **initChainId**(): `string`

#### Returns

`string`

#### Defined in

[chain/chain.ts:77](https://github.com/NibiruChain/ts-sdk/blob/14e4ebf/packages/nibijs/src/chain/chain.ts#L77)

___

### initGrpcEndpoint

▸ **initGrpcEndpoint**(): `string`

#### Returns

`string`

#### Defined in

[chain/chain.ts:92](https://github.com/NibiruChain/ts-sdk/blob/14e4ebf/packages/nibijs/src/chain/chain.ts#L92)

___

### initRestEndpoint

▸ **initRestEndpoint**(): `string`

#### Returns

`string`

#### Defined in

[chain/chain.ts:87](https://github.com/NibiruChain/ts-sdk/blob/14e4ebf/packages/nibijs/src/chain/chain.ts#L87)

___

### initTendermintEndpoint

▸ **initTendermintEndpoint**(): `string`

#### Returns

`string`

#### Defined in

[chain/chain.ts:82](https://github.com/NibiruChain/ts-sdk/blob/14e4ebf/packages/nibijs/src/chain/chain.ts#L82)
