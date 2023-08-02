[NibiJS Documentation - v0.19.26](../intro.md) / [Exports](../modules.md) / PerpExtension

# Interface: PerpExtension

## Table of contents

### Properties

- [perp](PerpExtension.md#perp)

## Properties

### perp

• **perp**: `Readonly`<{ `metrics`: (`args`: { `pair`: `string`  }) => `Promise`<`QueryMetricsResponse`\> ; `params`: () => `Promise`<`QueryParamsResponse`\> ; `position`: (`args`: { `pair`: `string` ; `trader`: `string`  }) => `Promise`<`QueryPositionResponse`\> ; `positions`: (`args`: { `trader`: `string`  }) => `Promise`<`QueryPositionsResponse`\> ; `premiumFractions`: (`args`: { `pair`: `string`  }) => `Promise`<`QueryCumulativePremiumFractionResponse`\>  }\>

#### Defined in

[query/perp.ts:23](https://github.com/NibiruChain/ts-sdk/blob/24aeea9/packages/nibijs/src/query/perp.ts#L23)
