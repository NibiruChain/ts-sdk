[NibiJS Documentation - v0.21.45](../intro.md) / [Exports](../modules.md) / PerpExtension

# Interface: PerpExtension

## Table of contents

### Properties

- [perp](PerpExtension.md#perp)

## Properties

### perp

• **perp**: `Readonly`<{ `markets`: () => `Promise`<`QueryMarketsResponse`\> ; `moduleAccounts`: () => `Promise`<`QueryModuleAccountsResponse`\> ; `position`: (`args`: { `pair`: `string` ; `trader`: `string` }) => `Promise`<`QueryPositionResponse`\> ; `positions`: (`args`: { `trader`: `string` }) => `Promise`<`QueryPositionsResponse`\> }\>

#### Defined in

[src/query/perp.ts:24](https://github.com/NibiruChain/ts-sdk/blob/c5e4f87/packages/nibijs/src/query/perp.ts#L24)
