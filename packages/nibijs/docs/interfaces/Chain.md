[NibiJS Documentation - v0.19.2](../intro.md) / [Exports](../modules.md) / Chain

# Interface: Chain

Specifies chain information for all endpoints a node exposes such as the
gRPC server, Tendermint RPC endpoint, and REST server.

**`See`**

https://docs.cosmos.network/master/core/grpc_rest.html

**`Export`**

**`Interface`**

Chain

## Implemented by

- [`CustomChain`](../classes/CustomChain.md)

## Table of contents

### Properties

- [chainId](Chain.md#chainid)
- [chainName](Chain.md#chainname)
- [endptGrpc](Chain.md#endptgrpc)
- [endptRest](Chain.md#endptrest)
- [endptTm](Chain.md#endpttm)
- [feeDenom](Chain.md#feedenom)

## Properties

### chainId

• **chainId**: `string`

chainId: identifier for the chain

#### Defined in

[chain/chain.ts:25](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/chain/chain.ts#L25)

___

### chainName

• **chainName**: `string`

#### Defined in

[chain/chain.ts:26](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/chain/chain.ts#L26)

___

### endptGrpc

• `Optional` **endptGrpc**: `string`

endptGrpc: endpoint for the gRPC gateway. Usually on port 9090.

#### Defined in

[chain/chain.ts:23](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/chain/chain.ts#L23)

___

### endptRest

• **endptRest**: `string`

endptRest: endpoint for the REST server. Also, the LCD endpoint.

#### Defined in

[chain/chain.ts:21](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/chain/chain.ts#L21)

___

### endptTm

• **endptTm**: `string`

endptTm: endpoint for the Tendermint RPC server. Usually on port 26657.

#### Defined in

[chain/chain.ts:19](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/chain/chain.ts#L19)

___

### feeDenom

• **feeDenom**: `string`

#### Defined in

[chain/chain.ts:27](https://github.com/NibiruChain/ts-sdk/blob/3ddfae4/packages/nibijs/src/chain/chain.ts#L27)
