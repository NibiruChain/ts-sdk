[NibiJS Documentation - v0.8.0](../intro.md) / [Exports](../modules.md) / PerpExtension

# Interface: PerpExtension

## Table of contents

### Properties

- [perp](PerpExtension.md#perp)

## Properties

### perp

• **perp**: `Readonly`<{ `params`: () => `Promise`<`QueryParamsResponse`\> ; `position`: (`args`: { `tokenPair`: `string` ; `trader`: `string`  }) => `Promise`<`QueryPositionResponse`\> ; `positions`: (`args`: { `trader`: `string`  }) => `Promise`<`QueryPositionsResponse`\> ; `premiumFractions`: (`args`: { `pair`: `string`  }) => `Promise`<`QueryCumulativePremiumFractionResponse`\>  }\>

#### Defined in

[query/perp.ts:23](https://github.com/NibiruChain/ts-sdk/blob/e7479e8/packages/nibijs/src/query/perp.ts#L23)
