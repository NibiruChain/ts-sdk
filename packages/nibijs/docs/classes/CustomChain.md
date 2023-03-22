[NibiJS Documentation - v0.19.4](../intro.md) / [Exports](../modules.md) / CustomChain

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

- [\_endptRest](CustomChain.md#_endptrest)
- [\_endptTm](CustomChain.md#_endpttm)
- [initChainId](CustomChain.md#initchainid)
- [initChainIdParts](CustomChain.md#initchainidparts)

## Constructors

### constructor

• **new CustomChain**(`args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ChainIdParts`](../interfaces/ChainIdParts.md) |

#### Defined in

[chain/chain.ts:55](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L55)

## Properties

### chainId

• **chainId**: `string`

chainId: identifier for the chain

#### Implementation of

[Chain](../interfaces/Chain.md).[chainId](../interfaces/Chain.md#chainid)

#### Defined in

[chain/chain.ts:47](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L47)

___

### chainIdParts

• **chainIdParts**: [`ChainIdParts`](../interfaces/ChainIdParts.md)

#### Defined in

[chain/chain.ts:48](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L48)

___

### chainName

• **chainName**: `string`

#### Implementation of

[Chain](../interfaces/Chain.md).[chainName](../interfaces/Chain.md#chainname)

#### Defined in

[chain/chain.ts:53](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L53)

___

### endptGrpc

• **endptGrpc**: `string` = `""`

endptGrpc: endpoint for the gRPC gateway. Usually on port 9090.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptGrpc](../interfaces/Chain.md#endptgrpc)

#### Defined in

[chain/chain.ts:51](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L51)

___

### endptRest

• **endptRest**: `string`

endptRest: endpoint for the REST server. Also, the LCD endpoint.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptRest](../interfaces/Chain.md#endptrest)

#### Defined in

[chain/chain.ts:50](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L50)

___

### endptTm

• **endptTm**: `string`

endptTm: endpoint for the Tendermint RPC server. Usually on port 26657.

#### Implementation of

[Chain](../interfaces/Chain.md).[endptTm](../interfaces/Chain.md#endpttm)

#### Defined in

[chain/chain.ts:49](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L49)

___

### feeDenom

• **feeDenom**: `string` = `"unibi"`

#### Implementation of

[Chain](../interfaces/Chain.md).[feeDenom](../interfaces/Chain.md#feedenom)

#### Defined in

[chain/chain.ts:52](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L52)

## Methods

### \_endptRest

▸ **_endptRest**(): `string`

#### Returns

`string`

#### Defined in

[chain/chain.ts:80](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L80)

___

### \_endptTm

▸ **_endptTm**(): `string`

#### Returns

`string`

#### Defined in

[chain/chain.ts:75](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L75)

___

### initChainId

▸ **initChainId**(): `string`

#### Returns

`string`

#### Defined in

[chain/chain.ts:70](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L70)

___

### initChainIdParts

▸ **initChainIdParts**(`parts`): [`ChainIdParts`](../interfaces/ChainIdParts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parts` | [`ChainIdParts`](../interfaces/ChainIdParts.md) |

#### Returns

[`ChainIdParts`](../interfaces/ChainIdParts.md)

#### Defined in

[chain/chain.ts:63](https://github.com/NibiruChain/ts-sdk/blob/12058a2/packages/nibijs/src/chain/chain.ts#L63)
