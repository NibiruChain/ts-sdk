[NibiJS Documentation - v0.8.1](../intro.md) / [Exports](../modules.md) / VpoolExtension

# Interface: VpoolExtension

## Table of contents

### Properties

- [vpool](VpoolExtension.md#vpool)

## Properties

### vpool

• **vpool**: `Readonly`<{ `allPools`: () => `Promise`<`QueryAllPoolsResponse`\> ; `basePrice`: (`args`: { `baseAssetAmount`: `number` ; `goLong`: `boolean` ; `pair`: `string`  }) => `Promise`<`QueryBaseAssetPriceResponse`\> ; `reserves`: (`args`: { `pair`: `string`  }) => `Promise`<`QueryReserveAssetsResponse`\>  }\>

#### Defined in

[query/vpool.ts:7](https://github.com/NibiruChain/ts-sdk/blob/d8a9441/packages/nibijs/src/query/vpool.ts#L7)
