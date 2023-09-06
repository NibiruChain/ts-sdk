[NibiJS Documentation - v0.21.20](../intro.md) / [Exports](../modules.md) / InflationExtension

# Interface: InflationExtension

## Table of contents

### Properties

- [inflation](InflationExtension.md#inflation)

## Properties

### inflation

• `Readonly` **inflation**: `Readonly`<{ `circulatingSupply`: () => `Promise`<`QueryCirculatingSupplyResponse`\> ; `epochMintProvision`: () => `Promise`<`QueryEpochMintProvisionResponse`\> ; `inflationRate`: () => `Promise`<`QueryInflationRateResponse`\> ; `params`: () => `Promise`<`QueryParamsResponse`\> ; `period`: () => `Promise`<`QueryPeriodResponse`\> ; `skippedEpochs`: () => `Promise`<`QuerySkippedEpochsResponse`\> }\>

#### Defined in

[query/inflation.ts:19](https://github.com/NibiruChain/ts-sdk/blob/6ba46d6/packages/nibijs/src/query/inflation.ts#L19)
