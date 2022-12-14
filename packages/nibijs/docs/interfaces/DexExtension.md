[NibiJS Documentation - v0.8.3](../intro.md) / [Exports](../modules.md) / DexExtension

# Interface: DexExtension

## Table of contents

### Properties

- [dex](DexExtension.md#dex)

## Properties

### dex

• **dex**: `Readonly`<{ `estimateExitExactAmountIn`: (`poolId`: `number`, `poolSharesIn`: `number`) => `Promise`<`QueryExitExactAmountInResponse`\> ; `estimateExitExactAmountOut`: (`poolId`: `number`) => `Promise`<`QueryExitExactAmountOutResponse`\> ; `estimateJoinExactAmountIn`: (`poolId`: `number`, `tokensIn`: `Coin`[]) => `Promise`<`QueryJoinExactAmountInResponse`\> ; `estimateJoinExactAmountOut`: (`poolId`: `number`) => `Promise`<`QueryJoinExactAmountOutResponse`\> ; `estimateSwapExactAmountIn`: (`poolId`: `number`, `tokeOutDenom`: `string`, `tokenIn?`: `Coin`) => `Promise`<`QuerySwapExactAmountInResponse`\> ; `estimateSwapExactAmountOut`: (`poolId`: `number`, `tokenInDenom`: `string`, `tokenOut?`: `Coin`) => `Promise`<`QuerySwapExactAmountOutResponse`\> ; `numPools`: () => `Promise`<`QueryNumPoolsResponse`\> ; `params`: () => `Promise`<`QueryParamsResponse`\> ; `pool`: (`poolId`: `number`) => `Promise`<`QueryPoolResponse`\> ; `poolNumber`: () => `Promise`<`QueryPoolNumberResponse`\> ; `poolParams`: (`poolId`: `number`) => `Promise`<`QueryPoolParamsResponse`\> ; `pools`: (`pagination?`: `PageRequest`) => `Promise`<`QueryPoolsResponse`\> ; `spotPrice`: (`poolId`: `number`, `tokenInDenom`: `string`, `tokenOutDenom`: `string`) => `Promise`<`QuerySpotPriceResponse`\> ; `totalLiquidity`: () => `Promise`<`QueryTotalLiquidityResponse`\> ; `totalPoolLiquidity`: (`poolId`: `number`) => `Promise`<`QueryTotalPoolLiquidityResponse`\> ; `totalShares`: (`poolId`: `number`) => `Promise`<`QueryTotalSharesResponse`\>  }\>

#### Defined in

[query/dex.ts:23](https://github.com/NibiruChain/ts-sdk/blob/fb8286f/packages/nibijs/src/query/dex.ts#L23)
