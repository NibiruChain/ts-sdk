[NibiJS Documentation - v0.19.6](../intro.md) / [Exports](../modules.md) / CustomChain

# Class: CustomChain

Specifies chain information for all endpoints a node exposes such as the
gRPC server, Tendermint RPC endpoint, and REST server.

**`See`**

https://docs.cosmos.network/master/core/grpc_rest.html

**`Export`**

**`Interface`**

Chain

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

[chain/chain.ts:55](https://github.com/NibiruChain/ts-sdk/blob/ad3194a/packages/nibijs/src/chain/chain.ts#L55)

## Properties

### chainId

• `Readonly` **chainId**: `string`

chainId: identifier for the chain

#### Implementation of

[Chain](../interfaces/Chain.md).[chainId](../interfaces/Chain.md#chainid)

#### Defined in

[chain/chain.ts:46](https://github.com/NibiruChain/ts-sdk/blob/ad3194a/packages/nibijs/src/chain/chain.ts#L46)

___

### chainIdParts

• `Private` `Readonly` **chainIdParts**: [`ChainIdParts`](../interfaces/ChainIdParts.md)

#### Defined in

[chain/chain.ts:53](https://github.com/NibiruChain/ts-sdk/blob/ad3194a/packages/nibijs/src/chain/chain.ts#L53)

___

### chainName

• `Readonly` **chainName**: `string`

chainName: the name of the chain to display to the user

#### Implementation of

[Chain](../interfaces/Chain.md).[chainName](../interfaces/Chain.md#chainname)

#### Defined in

[chain/chain.ts:47](https://github.com/NibiruChain/ts-sdk/blob/ad3194a/packages/nibijs/src/chain/chain.ts#L47)

___

### endptGrpc

• `Readonly` **endptGrpc**: `string`

endptGrpc: endpoint for the gRPC gateway. Usually on port 9090.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptGrpc](../interfaces/Chain.md#endptgrpc)

#### Defined in

[chain/chain.ts:50](https://github.com/NibiruChain/ts-sdk/blob/ad3194a/packages/nibijs/src/chain/chain.ts#L50)

___

### endptRest

• `Readonly` **endptRest**: `string`

endptRest: endpoint for the REST server. Also, the LCD endpoint.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptRest](../interfaces/Chain.md#endptrest)

#### Defined in

[chain/chain.ts:49](https://github.com/NibiruChain/ts-sdk/blob/ad3194a/packages/nibijs/src/chain/chain.ts#L49)

___

### endptTm

• `Readonly` **endptTm**: `string`

endptTm: endpoint for the Tendermint RPC server. Usually on port 26657.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptTm](../interfaces/Chain.md#endpttm)

#### Defined in

[chain/chain.ts:48](https://github.com/NibiruChain/ts-sdk/blob/ad3194a/packages/nibijs/src/chain/chain.ts#L48)

___

### feeDenom

• `Readonly` **feeDenom**: `string` = `"unibi"`

feeDenom: the denomination of the fee to be paid for transactions.

#### Implementation of

[Chain](../interfaces/Chain.md).[feeDenom](../interfaces/Chain.md#feedenom)

#### Defined in

[chain/chain.ts:51](https://github.com/NibiruChain/ts-sdk/blob/ad3194a/packages/nibijs/src/chain/chain.ts#L51)

## Methods

### initChainId

▸ `Private` **initChainId**(): `string`

#### Returns

`string`

#### Defined in

[chain/chain.ts:65](https://github.com/NibiruChain/ts-sdk/blob/ad3194a/packages/nibijs/src/chain/chain.ts#L65)

___

### initGrpcEndpoint

▸ **initGrpcEndpoint**(): `string`

#### Returns

`string`

#### Defined in

[chain/chain.ts:80](https://github.com/NibiruChain/ts-sdk/blob/ad3194a/packages/nibijs/src/chain/chain.ts#L80)

___

### initRestEndpoint

▸ **initRestEndpoint**(): `string`

#### Returns

`string`

#### Defined in

[chain/chain.ts:75](https://github.com/NibiruChain/ts-sdk/blob/ad3194a/packages/nibijs/src/chain/chain.ts#L75)

___

### initTendermintEndpoint

▸ **initTendermintEndpoint**(): `string`

#### Returns

`string`

#### Defined in

[chain/chain.ts:70](https://github.com/NibiruChain/ts-sdk/blob/ad3194a/packages/nibijs/src/chain/chain.ts#L70)
