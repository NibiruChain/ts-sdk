[NibiJS Documentation - v0.21.26](../intro.md) / [Exports](../modules.md) / Chain

# Interface: Chain

Specifies chain information for all endpoints a node exposes such as the
gRPC server, Tendermint RPC endpoint, and REST server.

**`See`**

https://docs.cosmos.network/master/core/grpc_rest.html

**`Export`**

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

[chain/chain.ts:22](https://github.com/NibiruChain/ts-sdk/blob/43c20f4/packages/nibijs/src/chain/chain.ts#L22)

---

### chainName

• **chainName**: `string`

chainName: the name of the chain to display to the user

#### Defined in

[chain/chain.ts:24](https://github.com/NibiruChain/ts-sdk/blob/43c20f4/packages/nibijs/src/chain/chain.ts#L24)

---

### endptGrpc

• **endptGrpc**: `string`

endptGrpc: endpoint for the gRPC gateway. Usually on port 9090.

#### Defined in

[chain/chain.ts:20](https://github.com/NibiruChain/ts-sdk/blob/43c20f4/packages/nibijs/src/chain/chain.ts#L20)

---

### endptRest

• **endptRest**: `string`

endptRest: endpoint for the REST server. Also, the LCD endpoint.

#### Defined in

[chain/chain.ts:18](https://github.com/NibiruChain/ts-sdk/blob/43c20f4/packages/nibijs/src/chain/chain.ts#L18)

---

### endptTm

• **endptTm**: `string`

endptTm: endpoint for the Tendermint RPC server. Usually on port 26657.

#### Defined in

[chain/chain.ts:16](https://github.com/NibiruChain/ts-sdk/blob/43c20f4/packages/nibijs/src/chain/chain.ts#L16)

---

### feeDenom

• **feeDenom**: `string`

feeDenom: the denomination of the fee to be paid for transactions.

#### Defined in

[chain/chain.ts:26](https://github.com/NibiruChain/ts-sdk/blob/43c20f4/packages/nibijs/src/chain/chain.ts#L26)
