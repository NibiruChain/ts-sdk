# CHANGELOG.md - @nibiruchain/indexer-nibi

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## Unreleased

- .

## v0.21.9

- BigNumber, V21 introspection

## v0.21.8

- Latest build, fix test

## v0.21.7

- Latest build

## v0.21.6

- V21 introspection

## v0.21.4

- Actually fix build

## v0.21.3

- Fix build

## v0.21.2

- Aligning package versions

## v0.21.1

- V21

## v0.19.20

- Update fetch polyfill

## v0.19.19

- Update nibijs

## v0.19.18

- Fix func part 2

## v0.19.17

- Fix func

## v0.19.16

- Update leaderboard

## v0.19.15

- Match version and fix publish script

## v0.19.14

- Match version

## v0.6.1

- feat(perpLeaderboard): Add perp leaderboard query

## v0.6.0

- [[#143]](https://github.com/NibiruChain/ts-sdk/pull/143) refactor(dependencies): Remove unused dependencies. Add husky, commitlint, lint-staged
- [[#142]](https://github.com/NibiruChain/ts-sdk/pull/142) refactor(dependencies): Use lts/gallium with fresh install, and upgrade cosmjs-types

## v0.5.8

- [[#141]](https://github.com/NibiruChain/ts-sdk/pull/141) feat(indexer-nibi): update pair param of vpoolConfigs query to non-required field

## v0.5.7

- [[#139]](https://github.com/NibiruChain/ts-sdk/pull/139) feat(indexer-nibi): update pair param of positions query to non-required field

## v0.5.2

- [[#130]](https://github.com/NibiruChain/ts-sdk/pull/130) feat(indexer-nibi): query delegations
- [[#133]](https://github.com/NibiruChain/ts-sdk/pull/133) feat(indexer-nibi): query stakingPool

## v0.5.1

- [[#128]](https://github.com/NibiruChain/ts-sdk/pull/128) feat(indexer-nibi): query ammPools, ammTotalLiquidity

## v0.5.0

- [[#123]](https://github.com/NibiruChain/ts-sdk/pull/123) feat(indexer-nibi): query transfers
- [[#123]](https://github.com/NibiruChain/ts-sdk/pull/123) feat(indexer-nibi): query markPrices
- [[#123]](https://github.com/NibiruChain/ts-sdk/pull/123) feat(indexer-nibi): query fundingRates
- [[#123]](https://github.com/NibiruChain/ts-sdk/pull/123) feat(indexer-nibi): query liquidations
- [[#123]](https://github.com/NibiruChain/ts-sdk/pull/123) feat(indexer-nibi): query oraclePrices
- [[#123]](https://github.com/NibiruChain/ts-sdk/pull/123) feat(indexer-nibi): query positions
- [[#124]](https://github.com/NibiruChain/ts-sdk/pull/124) feat(indexer-nibi): query positionChanges
- [[#124]](https://github.com/NibiruChain/ts-sdk/pull/124) feat(indexer-nibi): query balances
- [[#124]](https://github.com/NibiruChain/ts-sdk/pull/124) feat(indexer-nibi): query statsVolume
- [[#124]](https://github.com/NibiruChain/ts-sdk/pull/124) feat(indexer-nibi): query unbondings
- [[#124]](https://github.com/NibiruChain/ts-sdk/pull/124) feat(indexer-nibi): query validators
- [[#124]](https://github.com/NibiruChain/ts-sdk/pull/124) feat(indexer-nibi): query vpoolConfigs

## v0.4.0

- [[#99]](https://github.com/NibiruChain/ts-sdk/pull/99) feat: add `markPriceCandles` query

## v0.3.4

- [[#79]](https://github.com/NibiruChain/ts-sdk/pull/79) feat: add `CandleStickPeriod` enums

## v0.3.2

- [[#55]](https://github.com/NibiruChain/ts-sdk/pull/54) fix: Add `useQueryRecentTrades` definition in `IHeartMonitor`

## v0.3.1

- [[#54]](https://github.com/NibiruChain/ts-sdk/pull/54) feat: Add `recentTrades` GraphQL query from a heart monitor
- test: Unit test added for `useQueryRecentTrades` query hook.

## v0.2.0

- [[#53]](https://github.com/NibiruChain/ts-sdk/pull/53) feat: Implement HeartMonitor class that enables usage of custom GQL endpoints
- feat: GraphQL queries from a heart monitor DB with dummy data
- docs: function-level documentation and usage examples
- test: Unit tests added for all useQuery hooks

* [[#51]](https://github.com/NibiruChain/ts-sdk/pull/51) fix: type hints for indexer-nibi
* [[#49]](https://github.com/NibiruChain/ts-sdk/pull/49) feat: GraphQL client for heart monitor DB
* [[#50]](https://github.com/NibiruChain/ts-sdk/pull/50) refactor!(indexer-nibi): GraphQL API improvemenets
