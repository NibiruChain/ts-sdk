[NibiJS Documentation - v0.19.23](../intro.md) / [Exports](../modules.md) / Chain

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

[chain/chain.ts:30](https://github.com/NibiruChain/ts-sdk/blob/b2fc1dc/packages/nibijs/src/chain/chain.ts#L30)

___

### chainName

• **chainName**: `string`

chainName: the name of the chain to display to the user

#### Defined in

[chain/chain.ts:32](https://github.com/NibiruChain/ts-sdk/blob/b2fc1dc/packages/nibijs/src/chain/chain.ts#L32)

___

### endptGrpc

• **endptGrpc**: `string`

endptGrpc: endpoint for the gRPC gateway. Usually on port 9090.

#### Defined in

[chain/chain.ts:28](https://github.com/NibiruChain/ts-sdk/blob/b2fc1dc/packages/nibijs/src/chain/chain.ts#L28)

___

### endptRest

• **endptRest**: `string`

endptRest: endpoint for the REST server. Also, the LCD endpoint.

#### Defined in

[chain/chain.ts:26](https://github.com/NibiruChain/ts-sdk/blob/b2fc1dc/packages/nibijs/src/chain/chain.ts#L26)

___

### endptTm

• **endptTm**: `string`

endptTm: endpoint for the Tendermint RPC server. Usually on port 26657.

#### Defined in

[chain/chain.ts:24](https://github.com/NibiruChain/ts-sdk/blob/b2fc1dc/packages/nibijs/src/chain/chain.ts#L24)

___

### feeDenom

• **feeDenom**: `string`

feeDenom: the denomination of the fee to be paid for transactions.

#### Defined in

[chain/chain.ts:34](https://github.com/NibiruChain/ts-sdk/blob/b2fc1dc/packages/nibijs/src/chain/chain.ts#L34)
