[NibiJS Documentation - v0.8.2](../intro.md) / [Exports](../modules.md) / PricefeedExtension

# Interface: PricefeedExtension

## Table of contents

### Properties

- [pricefeed](PricefeedExtension.md#pricefeed)

## Properties

### pricefeed

• **pricefeed**: `Readonly`<{ `markets`: () => `Promise`<`QueryMarketsResponse`\> ; `oracles`: (`args`: { `pairId`: `string`  }) => `Promise`<`QueryOraclesResponse`\> ; `params`: () => `Promise`<`QueryParamsResponse`\> ; `price`: (`args`: { `pairId`: `string`  }) => `Promise`<`QueryPriceResponse`\> ; `prices`: () => `Promise`<`QueryPricesResponse`\> ; `pricesRaw`: (`args`: { `pairId`: `string`  }) => `Promise`<`QueryRawPricesResponse`\>  }\>

#### Defined in

[query/pricefeed.ts:9](https://github.com/NibiruChain/ts-sdk/blob/338fbe5/packages/nibijs/src/query/pricefeed.ts#L9)
