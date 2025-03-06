### [6.1.1](https://github.com/NibiruChain/ts-sdk/compare/v6.1.0...v6.1.1) (2025-03-06)

### Bug Fixes

- add missing interface prop ([7aa11ca](https://github.com/NibiruChain/ts-sdk/commit/7aa11caadc4a356f87c91fe1f8e0795a76f30648))

## [6.1.0](https://github.com/NibiruChain/ts-sdk/compare/v6.0.3...v6.1.0) (2025-03-05)

### Features

- subscription batch handler ([86a92a7](https://github.com/NibiruChain/ts-sdk/commit/86a92a7ed37dc3f6b3e87527257eb8ac714eac11))

### Bug Fixes

- testnet-1 to testnet-2 ([f5478d0](https://github.com/NibiruChain/ts-sdk/commit/f5478d0e7c538b4b53917b204a7043c7913aee4b))

### [6.0.3](https://github.com/NibiruChain/ts-sdk/compare/v6.0.2...v6.0.3) (2025-02-27)

### Bug Fixes

- failing tests ([5e4637c](https://github.com/NibiruChain/ts-sdk/commit/5e4637cd5206ecc2d60d3bc08a73f8128b04a077))
- setting eth addresses to raw bytes (uint8array) via proto-gen script ([#396](https://github.com/NibiruChain/ts-sdk/issues/396)) ([7723fd4](https://github.com/NibiruChain/ts-sdk/commit/7723fd4305bf4f6d1005287d6e1592bb57aecd12))

### Miscellaneous Chores

- ran proto-gen on lastest from main nibiru ([9fb431b](https://github.com/NibiruChain/ts-sdk/commit/9fb431bb13df8e0dda272ae26a546b7452e06ec2))
- ran proto-gen on latest v2.0.0-rc.21 ([2654bf0](https://github.com/NibiruChain/ts-sdk/commit/2654bf07365607e27995dc382de0188f03652b3b))
- updating to latest gql schema ([#399](https://github.com/NibiruChain/ts-sdk/issues/399)) ([ffaba86](https://github.com/NibiruChain/ts-sdk/commit/ffaba861cc1c74194655321a8c164c74b8617dbd))

### [6.0.2](https://github.com/NibiruChain/ts-sdk/compare/v6.0.1...v6.0.2) (2025-02-04)

### Miscellaneous Chores

- develop -> main ([#397](https://github.com/NibiruChain/ts-sdk/issues/397)) ([0babc26](https://github.com/NibiruChain/ts-sdk/commit/0babc2641f39923b029ad0d8ec96dc28ebae5bda)), closes [#396](https://github.com/NibiruChain/ts-sdk/issues/396)

### [6.0.1](https://github.com/NibiruChain/ts-sdk/compare/v6.0.0...v6.0.1) (2024-12-03)

### Miscellaneous Chores

- bump nibiru submodule and unhide protojs and gql so we can tra… ([#393](https://github.com/NibiruChain/ts-sdk/issues/393)) ([a4b52d0](https://github.com/NibiruChain/ts-sdk/commit/a4b52d048d07b1b28fac07892f209d6c0008a1b2))

## [6.0.0](https://github.com/NibiruChain/ts-sdk/compare/v5.0.3...v6.0.0) (2024-12-02)

### Bug Fixes

- test ([9d7ff5c](https://github.com/NibiruChain/ts-sdk/commit/9d7ff5c5b2f8c07819d33d9b945542342bfd023a))
- test ([e0b49c9](https://github.com/NibiruChain/ts-sdk/commit/e0b49c9aa23f35fb2cfe9289b35983e1f73f81f7))

### Miscellaneous Chores

- update eth proto to latest ([96014f2](https://github.com/NibiruChain/ts-sdk/commit/96014f26dfc4e85bd3b0dd5c1bf1d2dcc799496e))
- upgrade graphql ([#387](https://github.com/NibiruChain/ts-sdk/issues/387)) ([d707e12](https://github.com/NibiruChain/ts-sdk/commit/d707e129e5d5d42f0203eb6c8aa21f5d8f10cfd1))

### Code Refactors

- adding eth & tokenfactory types ([#389](https://github.com/NibiruChain/ts-sdk/issues/389)) ([8c6c34c](https://github.com/NibiruChain/ts-sdk/commit/8c6c34c8c3b2f2eef47798c10fe91e71b59f5f2a))
- updating to latest graphql schema since featureflags don't include spot & perp ([#385](https://github.com/NibiruChain/ts-sdk/issues/385)) ([cbb36d7](https://github.com/NibiruChain/ts-sdk/commit/cbb36d752d177c6c467175d94463772d56f3e5f6))

### [5.0.3](https://github.com/NibiruChain/ts-sdk/compare/v5.0.2...v5.0.3) (2024-11-20)

### Miscellaneous Chores

- develop -> main ([#388](https://github.com/NibiruChain/ts-sdk/issues/388)) ([24ea6e8](https://github.com/NibiruChain/ts-sdk/commit/24ea6e8172902703f656cb4c83522a272fa50694)), closes [#385](https://github.com/NibiruChain/ts-sdk/issues/385) [#387](https://github.com/NibiruChain/ts-sdk/issues/387) [#389](https://github.com/NibiruChain/ts-sdk/issues/389)

### [5.0.2](https://github.com/NibiruChain/ts-sdk/compare/v5.0.1...v5.0.2) (2024-10-24)

### Miscellaneous Chores

- update eth proto to latest ([#386](https://github.com/NibiruChain/ts-sdk/issues/386)) ([20b645d](https://github.com/NibiruChain/ts-sdk/commit/20b645d23c29cf801b7ca55b0892be25dc7a5c9b)), closes [#385](https://github.com/NibiruChain/ts-sdk/issues/385)

### [5.0.1](https://github.com/NibiruChain/ts-sdk/compare/v5.0.0...v5.0.1) (2024-10-18)

### Bug Fixes

- self reference pathing ([f79e404](https://github.com/NibiruChain/ts-sdk/commit/f79e4043eecfa974025017a5042d8aeeb394d6ab))
- self reference pathing ([2968cbc](https://github.com/NibiruChain/ts-sdk/commit/2968cbc4fc5345824e2a5847ade7d90b625be265))

## [5.0.0](https://github.com/NibiruChain/ts-sdk/compare/v4.5.2...v5.0.0) (2024-10-18)

### ⚠ BREAKING CHANGES

- **faucet:** set default tokens (#369)

### Features

- account parser ([#374](https://github.com/NibiruChain/ts-sdk/issues/374)) ([d7e324d](https://github.com/NibiruChain/ts-sdk/commit/d7e324d9fd48f3a2f407573c0985d88e0b3b8a5f)), closes [#370](https://github.com/NibiruChain/ts-sdk/issues/370) [#362](https://github.com/NibiruChain/ts-sdk/issues/362) [#366](https://github.com/NibiruChain/ts-sdk/issues/366) [#367](https://github.com/NibiruChain/ts-sdk/issues/367) [#369](https://github.com/NibiruChain/ts-sdk/issues/369) [#368](https://github.com/NibiruChain/ts-sdk/issues/368) [#362](https://github.com/NibiruChain/ts-sdk/issues/362) [#366](https://github.com/NibiruChain/ts-sdk/issues/366) [#367](https://github.com/NibiruChain/ts-sdk/issues/367) [#362](https://github.com/NibiruChain/ts-sdk/issues/362) [#366](https://github.com/NibiruChain/ts-sdk/issues/366) [#367](https://github.com/NibiruChain/ts-sdk/issues/367)
- add msg client ([32374dd](https://github.com/NibiruChain/ts-sdk/commit/32374dde25da906a5b2005363313f76832e9e00f))
- cosmwasmclient extension & signingcosmwasmclient implementation ([#379](https://github.com/NibiruChain/ts-sdk/issues/379)) ([b89a700](https://github.com/NibiruChain/ts-sdk/commit/b89a700ce5b919955b66739f387cfc883157fec2))
- eth protos ([#366](https://github.com/NibiruChain/ts-sdk/issues/366)) ([9d496c7](https://github.com/NibiruChain/ts-sdk/commit/9d496c7621cd4c7b280b426c9df6c538e974a02a)), closes [#367](https://github.com/NibiruChain/ts-sdk/issues/367)

### Bug Fixes

- build ([b9b3d74](https://github.com/NibiruChain/ts-sdk/commit/b9b3d746a644e74f5eecc41d6ec3872d93eee481))
- build ([79fcd49](https://github.com/NibiruChain/ts-sdk/commit/79fcd49a59d6b7ffcac8c1c72143f1a36e74a625))
- fixes to pass ([0c3f86a](https://github.com/NibiruChain/ts-sdk/commit/0c3f86a2189767daf60baf862c1a3b862d9d98b3))
- path again ([e5f1ff3](https://github.com/NibiruChain/ts-sdk/commit/e5f1ff34fb706906888fcf2726c9cc2dee01471a))
- paths ([c762665](https://github.com/NibiruChain/ts-sdk/commit/c76266543a4c6109f30d232c994f6fa1a90feccb))
- pull latest ([35eb2d8](https://github.com/NibiruChain/ts-sdk/commit/35eb2d8e85478456433d48c44707159597bc4128))
- try chaosnet ibc ([d66c15c](https://github.com/NibiruChain/ts-sdk/commit/d66c15c160a0d211fe2b5328a6661dd0fb6e31d6))
- try hm ([954f259](https://github.com/NibiruChain/ts-sdk/commit/954f259ffc48ab2aacba382d36a9dbbf7e0d497f))

### Reverts

- cosmos submodule only ([#362](https://github.com/NibiruChain/ts-sdk/issues/362)) ([1d09461](https://github.com/NibiruChain/ts-sdk/commit/1d09461f748696a69ebc349daaa096596d60b1d5))

### Code Refactors

- **faucet:** set default tokens ([#369](https://github.com/NibiruChain/ts-sdk/issues/369)) ([859882a](https://github.com/NibiruChain/ts-sdk/commit/859882a1514170d20542ab9d99755e05252c303c)), closes [#368](https://github.com/NibiruChain/ts-sdk/issues/368) [#362](https://github.com/NibiruChain/ts-sdk/issues/362) [#366](https://github.com/NibiruChain/ts-sdk/issues/366) [#367](https://github.com/NibiruChain/ts-sdk/issues/367) [#362](https://github.com/NibiruChain/ts-sdk/issues/362) [#366](https://github.com/NibiruChain/ts-sdk/issues/366) [#367](https://github.com/NibiruChain/ts-sdk/issues/367)

### Miscellaneous Chores

- develop -> main ([5518ddd](https://github.com/NibiruChain/ts-sdk/commit/5518dddf0f15fca3b53c8653945ea5675db39b17))
- develop -> main (remove stats + update default feature flags) ([#380](https://github.com/NibiruChain/ts-sdk/issues/380)) ([087d569](https://github.com/NibiruChain/ts-sdk/commit/087d56968086e64a0dddecf06f5445586b7bf648)), closes [#362](https://github.com/NibiruChain/ts-sdk/issues/362) [#366](https://github.com/NibiruChain/ts-sdk/issues/366) [#367](https://github.com/NibiruChain/ts-sdk/issues/367) [#369](https://github.com/NibiruChain/ts-sdk/issues/369) [#368](https://github.com/NibiruChain/ts-sdk/issues/368) [#362](https://github.com/NibiruChain/ts-sdk/issues/362) [#366](https://github.com/NibiruChain/ts-sdk/issues/366) [#367](https://github.com/NibiruChain/ts-sdk/issues/367) [#362](https://github.com/NibiruChain/ts-sdk/issues/362) [#366](https://github.com/NibiruChain/ts-sdk/issues/366) [#367](https://github.com/NibiruChain/ts-sdk/issues/367)
- main to develop ([#375](https://github.com/NibiruChain/ts-sdk/issues/375)) ([49b0766](https://github.com/NibiruChain/ts-sdk/commit/49b07664b2fa0b065644e184237ce1193250144c)), closes [#370](https://github.com/NibiruChain/ts-sdk/issues/370) [#362](https://github.com/NibiruChain/ts-sdk/issues/362) [#366](https://github.com/NibiruChain/ts-sdk/issues/366) [#367](https://github.com/NibiruChain/ts-sdk/issues/367) [#369](https://github.com/NibiruChain/ts-sdk/issues/369) [#368](https://github.com/NibiruChain/ts-sdk/issues/368) [#362](https://github.com/NibiruChain/ts-sdk/issues/362) [#366](https://github.com/NibiruChain/ts-sdk/issues/366) [#367](https://github.com/NibiruChain/ts-sdk/issues/367) [#362](https://github.com/NibiruChain/ts-sdk/issues/362) [#366](https://github.com/NibiruChain/ts-sdk/issues/366) [#367](https://github.com/NibiruChain/ts-sdk/issues/367)
- remove stats and update default feature flags ([56bef2a](https://github.com/NibiruChain/ts-sdk/commit/56bef2acb0b35dcce576d5d22d33258454391639))
- trigger release ([d89c408](https://github.com/NibiruChain/ts-sdk/commit/d89c4083fe4361b2a95b20818da95904f448988f))

### [4.5.2](https://github.com/NibiruChain/ts-sdk/compare/v4.5.1...v4.5.2) (2024-09-24)

### Miscellaneous Chores

- develop -> main ([#370](https://github.com/NibiruChain/ts-sdk/issues/370)) ([ec2a25b](https://github.com/NibiruChain/ts-sdk/commit/ec2a25bd3d02cdeb6b56fad1b1a85c9c249dc697)), closes [#362](https://github.com/NibiruChain/ts-sdk/issues/362) [#366](https://github.com/NibiruChain/ts-sdk/issues/366) [#367](https://github.com/NibiruChain/ts-sdk/issues/367) [#369](https://github.com/NibiruChain/ts-sdk/issues/369) [#368](https://github.com/NibiruChain/ts-sdk/issues/368) [#362](https://github.com/NibiruChain/ts-sdk/issues/362) [#366](https://github.com/NibiruChain/ts-sdk/issues/366) [#367](https://github.com/NibiruChain/ts-sdk/issues/367) [#362](https://github.com/NibiruChain/ts-sdk/issues/362) [#366](https://github.com/NibiruChain/ts-sdk/issues/366) [#367](https://github.com/NibiruChain/ts-sdk/issues/367)
- **github:** Add project automation for https://tinyurl.com/25uty9w5 ([c2c27e5](https://github.com/NibiruChain/ts-sdk/commit/c2c27e57a5f94f2180f2df0ad67597790809b143))

### [4.5.1](https://github.com/NibiruChain/ts-sdk/compare/v4.5.0...v4.5.1) (2024-08-09)

### Miscellaneous Chores

- develop -> main ([#368](https://github.com/NibiruChain/ts-sdk/issues/368)) ([c6d6570](https://github.com/NibiruChain/ts-sdk/commit/c6d657009eed49442243c4b0e9021afd34392a98)), closes [#362](https://github.com/NibiruChain/ts-sdk/issues/362) [#366](https://github.com/NibiruChain/ts-sdk/issues/366) [#367](https://github.com/NibiruChain/ts-sdk/issues/367)

## [4.5.0](https://github.com/NibiruChain/ts-sdk/compare/v4.4.0...v4.5.0) (2024-06-28)

### Features

- add gql user query ([#356](https://github.com/NibiruChain/ts-sdk/issues/356)) ([f3dfa3a](https://github.com/NibiruChain/ts-sdk/commit/f3dfa3aed28fa0d5451466eda7ab4e064c2b19e4))
- staking extension and git submodules ([#360](https://github.com/NibiruChain/ts-sdk/issues/360)) ([4251709](https://github.com/NibiruChain/ts-sdk/commit/42517098bba1cebb120e2b397f4ffc03657ea8d4))

### Reverts

- cosmos submodule only ([#362](https://github.com/NibiruChain/ts-sdk/issues/362)) ([#363](https://github.com/NibiruChain/ts-sdk/issues/363)) ([c012a83](https://github.com/NibiruChain/ts-sdk/commit/c012a8342dde79f3f3b23e13d93c5b00de7edfca))

### Miscellaneous Chores

- develop -> main ([#365](https://github.com/NibiruChain/ts-sdk/issues/365)) ([7e513c6](https://github.com/NibiruChain/ts-sdk/commit/7e513c692d4384350dbc0ae728d738d90b8d2315)), closes [#362](https://github.com/NibiruChain/ts-sdk/issues/362)

## [4.4.0](https://github.com/NibiruChain/ts-sdk/compare/v4.3.2...v4.4.0) (2024-05-30)

### Features

- add gql user query ([#356](https://github.com/NibiruChain/ts-sdk/issues/356)) ([#357](https://github.com/NibiruChain/ts-sdk/issues/357)) ([cb65530](https://github.com/NibiruChain/ts-sdk/commit/cb6553004cff98c7925aaa7cd1dbcad5f5fbc50b))

### [4.3.2](https://github.com/NibiruChain/ts-sdk/compare/v4.3.1...v4.3.2) (2024-05-16)

### Miscellaneous Chores

- upgrading cosmjs ([#352](https://github.com/NibiruChain/ts-sdk/issues/352)) ([32739a7](https://github.com/NibiruChain/ts-sdk/commit/32739a70f4d7e39a4fd779199624f78de2bb5779))

### [4.3.1](https://github.com/NibiruChain/ts-sdk/compare/v4.3.0...v4.3.1) (2024-05-13)

### Miscellaneous Chores

- upgrading cosmjs ([#352](https://github.com/NibiruChain/ts-sdk/issues/352)) ([#353](https://github.com/NibiruChain/ts-sdk/issues/353)) ([2f119c5](https://github.com/NibiruChain/ts-sdk/commit/2f119c5e294b07a590fbe3c461023c2a9824fa8d))

## [4.3.0](https://github.com/NibiruChain/ts-sdk/compare/v4.2.0...v4.3.0) (2024-05-13)

### Features

- calc apr ([f66a2ab](https://github.com/NibiruChain/ts-sdk/commit/f66a2ab2c55a8e796b58f79edad11313597aa428))
- inflation rewards ([fcff7ef](https://github.com/NibiruChain/ts-sdk/commit/fcff7ef0b921578726230bc5a50ac4023ab6df58))
- no default objects + staking changes ([#350](https://github.com/NibiruChain/ts-sdk/issues/350)) ([b4e4125](https://github.com/NibiruChain/ts-sdk/commit/b4e41253e7a2a616bb16eb565ceea1cc7545391e))
- proxy prices ([#343](https://github.com/NibiruChain/ts-sdk/issues/343)) ([e5baeed](https://github.com/NibiruChain/ts-sdk/commit/e5baeed0f5ad92b02180a6c2370f23ac2cb7a016))

### Bug Fixes

- comments ([9c60b39](https://github.com/NibiruChain/ts-sdk/commit/9c60b3950b85c34cb039556a320177f73b723e4a))
- latest formula ([ac9e57b](https://github.com/NibiruChain/ts-sdk/commit/ac9e57bc5f90b71f4fea7e18d831a94766c196a6))
- mispell ([10d660f](https://github.com/NibiruChain/ts-sdk/commit/10d660f911cbe89bb7ad904622f6b594a45d53c8))
- name ([84cf8b5](https://github.com/NibiruChain/ts-sdk/commit/84cf8b5a44b61d26a81b5bf977295ebbc0aa08c3))
- optional mystake ([24f4f87](https://github.com/NibiruChain/ts-sdk/commit/24f4f8783c70001503b78cde1d4c56502aff68af))
- simplify ([8015860](https://github.com/NibiruChain/ts-sdk/commit/8015860d079e96dcdb10a95180bac42da183e7c4))
- test ([b52f442](https://github.com/NibiruChain/ts-sdk/commit/b52f44210c73efbc45a88c1291b65510ba55d57b))
- test ([dabe094](https://github.com/NibiruChain/ts-sdk/commit/dabe094fcaafaf5c23668616e10905c960832347))
- test ([eb22f64](https://github.com/NibiruChain/ts-sdk/commit/eb22f64850c60803ad069ddb970f10cd1a185360))
- test ([11c5925](https://github.com/NibiruChain/ts-sdk/commit/11c59253cb91e276fc0a794e23202fd97de89e90))
- test name ([796925f](https://github.com/NibiruChain/ts-sdk/commit/796925f5177b2dcfdaed1321f9152a4a38c0ac0c))
- update formula ([30d9887](https://github.com/NibiruChain/ts-sdk/commit/30d988735e31b074807d18b74fbe0c7bac63c416))
- updates ([4f541d2](https://github.com/NibiruChain/ts-sdk/commit/4f541d2de4656aeafa25bd86ba3c5aa4227b3eac))

### Miscellaneous Chores

- remove spot, perp, and marketing ([41d54d9](https://github.com/NibiruChain/ts-sdk/commit/41d54d935694e554f2d596663e5a9a0a7566b852))

### Documentation

- **math:** explain exported fns more ([6570b32](https://github.com/NibiruChain/ts-sdk/commit/6570b32224f9b3f4dd39144d4f16123ae1966bc3))

## [4.2.0](https://github.com/NibiruChain/ts-sdk/compare/v4.1.0...v4.2.0) (2024-04-22)

### Features

- inflation rewards | remove spot, perp, and marketing ([#346](https://github.com/NibiruChain/ts-sdk/issues/346)) ([bb81957](https://github.com/NibiruChain/ts-sdk/commit/bb81957eab79278c4543b6b6cc9d4dcfbc6a7bc0)), closes [#343](https://github.com/NibiruChain/ts-sdk/issues/343)

## [4.1.0](https://github.com/NibiruChain/ts-sdk/compare/v4.0.0...v4.1.0) (2024-04-01)

### Features

- proxy prices ([#343](https://github.com/NibiruChain/ts-sdk/issues/343)) ([#344](https://github.com/NibiruChain/ts-sdk/issues/344)) ([b4ab83c](https://github.com/NibiruChain/ts-sdk/commit/b4ab83c2d9b4f17ec0f8bad6141bc7b5a9dc1228))

## [4.0.0](https://github.com/NibiruChain/ts-sdk/compare/v3.3.4...v4.0.0) (2024-03-19)

### Features

- trigger latest build ([#340](https://github.com/NibiruChain/ts-sdk/issues/340)) ([866c603](https://github.com/NibiruChain/ts-sdk/commit/866c603be250b06f10ead37bc7859a34b9ad4547))

### Bug Fixes

- tests ([00d98cb](https://github.com/NibiruChain/ts-sdk/commit/00d98cbcfafcc21e9bb32f370be7040c167ab198))

### Code Refactors

- adding contract type to user ([7857b2b](https://github.com/NibiruChain/ts-sdk/commit/7857b2b6fca65a502075f365c5fca4cb235ef78d))

### Tests

- fix ([a12ba71](https://github.com/NibiruChain/ts-sdk/commit/a12ba71fb821c1939a60be978bdc3386a43d7f13))

### [3.3.4](https://github.com/NibiruChain/ts-sdk/compare/v3.3.3...v3.3.4) (2024-03-18)

### Miscellaneous Chores

- develop -> main ([#341](https://github.com/NibiruChain/ts-sdk/issues/341)) ([cae2d15](https://github.com/NibiruChain/ts-sdk/commit/cae2d1560dca5498747672e794dc67bd875e4107)), closes [#340](https://github.com/NibiruChain/ts-sdk/issues/340)

### [3.3.3](https://github.com/NibiruChain/ts-sdk/compare/v3.3.2...v3.3.3) (2024-03-12)

### Miscellaneous Chores

- develop -> main ([#337](https://github.com/NibiruChain/ts-sdk/issues/337)) ([51a9842](https://github.com/NibiruChain/ts-sdk/commit/51a98428d7e441fa7c7758dee9b925e34f126c61))

### [3.3.2](https://github.com/NibiruChain/ts-sdk/compare/v3.3.1...v3.3.2) (2024-03-06)

### Bug Fixes

- fix ([3bb03d8](https://github.com/NibiruChain/ts-sdk/commit/3bb03d8ed8678d9bf522b6e811c96b220e276d16))

### [3.3.1](https://github.com/NibiruChain/ts-sdk/compare/v3.3.0...v3.3.1) (2024-03-06)

### Bug Fixes

- fix build error ([3604410](https://github.com/NibiruChain/ts-sdk/commit/36044105f7691eb75d768736efeaf8086512a9c2))
- fix gql builder ([82b30ae](https://github.com/NibiruChain/ts-sdk/commit/82b30aedd1482768fba3927f77b78e2d381e5c15))

## [3.3.0](https://github.com/NibiruChain/ts-sdk/compare/v3.2.0...v3.3.0) (2024-03-06)

### Features

- deepPartial ([#329](https://github.com/NibiruChain/ts-sdk/issues/329)) ([89f2504](https://github.com/NibiruChain/ts-sdk/commit/89f2504c089ca8ed48dbc2c88bfddba91a3702c2))
- marketing mutation + query ([#331](https://github.com/NibiruChain/ts-sdk/issues/331)) ([61c7fe8](https://github.com/NibiruChain/ts-sdk/commit/61c7fe898b2c23f87b4191cd57e87de16229d02a))

### Bug Fixes

- fix barrel ([599041f](https://github.com/NibiruChain/ts-sdk/commit/599041f2b319405feb9a4f4a6e9683b2f8634557))
- merge ([4e1144d](https://github.com/NibiruChain/ts-sdk/commit/4e1144daac0a609f9332732450eb91ae40e9253d))

### Documentation

- **gql:** add JSDoc comment for DeepPartial ([26176e3](https://github.com/NibiruChain/ts-sdk/commit/26176e383ffb2a34192802bc846dfa68f9d78656))

## [3.2.0](https://github.com/NibiruChain/ts-sdk/compare/v3.1.1...v3.2.0) (2024-03-05)

### Features

- deepPartial ([#329](https://github.com/NibiruChain/ts-sdk/issues/329)) ([#330](https://github.com/NibiruChain/ts-sdk/issues/330)) ([f2bb64d](https://github.com/NibiruChain/ts-sdk/commit/f2bb64dc2dbfd2af356778a01b806db8bbcfa923))

### [3.1.1](https://github.com/NibiruChain/ts-sdk/compare/v3.1.0...v3.1.1) (2024-02-29)

### Bug Fixes

- discord ID chore ([#327](https://github.com/NibiruChain/ts-sdk/issues/327)) ([c3ed699](https://github.com/NibiruChain/ts-sdk/commit/c3ed69921ac6fb1188b9af8a6d8d0fc63f604ef8))

## [3.1.0](https://github.com/NibiruChain/ts-sdk/compare/v3.0.14...v3.1.0) (2024-02-28)

### Features

- devgas query ([#325](https://github.com/NibiruChain/ts-sdk/issues/325)) ([769831a](https://github.com/NibiruChain/ts-sdk/commit/769831afaf31ff1b430058ef5dd8cceac82cde13))

### [3.0.14](https://github.com/NibiruChain/ts-sdk/compare/v3.0.13...v3.0.14) (2024-02-22)

### Bug Fixes

- chore msg factories ([#323](https://github.com/NibiruChain/ts-sdk/issues/323)) ([64e028c](https://github.com/NibiruChain/ts-sdk/commit/64e028c4150ec22754dfd80129f4b39c37a3ecd1))

### Miscellaneous Chores

- updating code owners ([9e7cadf](https://github.com/NibiruChain/ts-sdk/commit/9e7cadf8bf326138f15e793f67003666d30679ce))

### [3.0.13](https://github.com/NibiruChain/ts-sdk/compare/v3.0.12...v3.0.13) (2024-02-15)

### Bug Fixes

- chore schema ([#318](https://github.com/NibiruChain/ts-sdk/issues/318)) ([09b8310](https://github.com/NibiruChain/ts-sdk/commit/09b83107d503a405f89d78f577b586bdf502c718))

### [3.0.12](https://github.com/NibiruChain/ts-sdk/compare/v3.0.11...v3.0.12) (2024-02-06)

### Bug Fixes

- fix last commit ([2651ef8](https://github.com/NibiruChain/ts-sdk/commit/2651ef8516a60dffe61448512bf7e13f7fd97781))
- latest schema ([ec66d50](https://github.com/NibiruChain/ts-sdk/commit/ec66d502f6915d54f6da433376d1cbf2e95f6f7c))

### [3.0.11](https://github.com/NibiruChain/ts-sdk/compare/v3.0.10...v3.0.11) (2024-02-06)

### Bug Fixes

- latest schema ([#316](https://github.com/NibiruChain/ts-sdk/issues/316)) ([3753936](https://github.com/NibiruChain/ts-sdk/commit/37539364eacbedddc9c5f90871f96213831f4579))

### [3.0.10](https://github.com/NibiruChain/ts-sdk/compare/v3.0.9...v3.0.10) (2024-02-06)

### Bug Fixes

- fix build ([fdd2be7](https://github.com/NibiruChain/ts-sdk/commit/fdd2be7f0f446b1876f872cfeb294e2e020849ce))
- pull latest schema ([98be304](https://github.com/NibiruChain/ts-sdk/commit/98be304e8142411c93972d2d09fdc54b8ce197ce))

### [3.0.9](https://github.com/NibiruChain/ts-sdk/compare/v3.0.8...v3.0.9) (2024-02-06)

### Bug Fixes

- fix test failure ([c53ccb9](https://github.com/NibiruChain/ts-sdk/commit/c53ccb9e341a2a3e34b9910057e766b1c9acd36c))
- pull latest schema ([79c481f](https://github.com/NibiruChain/ts-sdk/commit/79c481f4aa75b36436c9e7f275f3618533a42928))
- pull latest schema ([#312](https://github.com/NibiruChain/ts-sdk/issues/312)) ([ea59cd3](https://github.com/NibiruChain/ts-sdk/commit/ea59cd37b7f351fff661027cb86597112b3c5053))

### [3.0.8](https://github.com/NibiruChain/ts-sdk/compare/v3.0.7...v3.0.8) (2024-02-05)

### Bug Fixes

- fix ([bae559b](https://github.com/NibiruChain/ts-sdk/commit/bae559b17a30f1cbc21452e1c729ba917f3b9f4e))

### [3.0.7](https://github.com/NibiruChain/ts-sdk/compare/v3.0.6...v3.0.7) (2024-02-05)

### Bug Fixes

- another fix ([37743c1](https://github.com/NibiruChain/ts-sdk/commit/37743c112851af9098f6d297c6fc75e14ce1a4dc))

### [3.0.6](https://github.com/NibiruChain/ts-sdk/compare/v3.0.5...v3.0.6) (2024-02-05)

### Bug Fixes

- last fix ([15ca846](https://github.com/NibiruChain/ts-sdk/commit/15ca846bfce7ca262edfd074bf9146fec2001490))

### [3.0.5](https://github.com/NibiruChain/ts-sdk/compare/v3.0.4...v3.0.5) (2024-02-05)

### Bug Fixes

- trying again ([83db669](https://github.com/NibiruChain/ts-sdk/commit/83db66903f5edd8c61e0c9322d66ab67d44af43c))

### [3.0.4](https://github.com/NibiruChain/ts-sdk/compare/v3.0.3...v3.0.4) (2024-02-05)

### Bug Fixes

- fix again ([f623432](https://github.com/NibiruChain/ts-sdk/commit/f62343282b3f3d8a60d30e3a141b08b6d3705663))

### [3.0.3](https://github.com/NibiruChain/ts-sdk/compare/v3.0.2...v3.0.3) (2024-02-05)

### Bug Fixes

- fix ([1b6c027](https://github.com/NibiruChain/ts-sdk/commit/1b6c0273f777c868cd58a33c66b25827689fb749))

### [3.0.2](https://github.com/NibiruChain/ts-sdk/compare/v3.0.1...v3.0.2) (2024-02-05)

### Bug Fixes

- fix ([c77f4d3](https://github.com/NibiruChain/ts-sdk/commit/c77f4d37469273906e41507114c78297d8d2152e))
- fix ([2ac3f01](https://github.com/NibiruChain/ts-sdk/commit/2ac3f0128cd568d2ed7bab6cca7d5c74f7c30b42))

### [3.0.1](https://github.com/NibiruChain/ts-sdk/compare/v3.0.0...v3.0.1) (2024-02-05)

### Bug Fixes

- update mutation logic ([#303](https://github.com/NibiruChain/ts-sdk/issues/303)) ([6d9d683](https://github.com/NibiruChain/ts-sdk/commit/6d9d683f2507e0f8130046655faa098dceaf65c8))

## [3.0.0](https://github.com/NibiruChain/ts-sdk/compare/v2.0.1...v3.0.0) (2024-02-05)

### Bug Fixes

- fix merge ([4f93be8](https://github.com/NibiruChain/ts-sdk/commit/4f93be8b4a21b41035336fa08a0bbc6d6c8daf89))
- gql where args ([#298](https://github.com/NibiruChain/ts-sdk/issues/298)) ([b57ef0a](https://github.com/NibiruChain/ts-sdk/commit/b57ef0a0de5f44cf539fb183d8e2c048c6c9dfef))
- more file reorg ([#300](https://github.com/NibiruChain/ts-sdk/issues/300)) ([d6a053a](https://github.com/NibiruChain/ts-sdk/commit/d6a053a1296cb2630e700521357ebb0e03c3988f))

### Miscellaneous Chores

- pr title lint workflow ([#293](https://github.com/NibiruChain/ts-sdk/issues/293)) ([b5dd050](https://github.com/NibiruChain/ts-sdk/commit/b5dd050ac4064203f11b585a059f5db47707ede4))

### Code Refactors

- tests ([#301](https://github.com/NibiruChain/ts-sdk/issues/301)) ([e14b83b](https://github.com/NibiruChain/ts-sdk/commit/e14b83b5a4366713d0b25177b73cbd036300d8c2))

### [2.0.1](https://github.com/NibiruChain/ts-sdk/compare/v2.0.0...v2.0.1) (2024-01-24)

### Miscellaneous Chores

- gql when args fix ([#299](https://github.com/NibiruChain/ts-sdk/issues/299)) ([10776c2](https://github.com/NibiruChain/ts-sdk/commit/10776c28e08e41446e11365da9277fc42a249b1c)), closes [#298](https://github.com/NibiruChain/ts-sdk/issues/298) [#293](https://github.com/NibiruChain/ts-sdk/issues/293)

## [2.0.0](https://github.com/NibiruChain/ts-sdk/compare/v1.0.2...v2.0.0) (2024-01-23)

### Code Refactors

- ../.. instead of src ([#296](https://github.com/NibiruChain/ts-sdk/issues/296)) ([7cfdf7a](https://github.com/NibiruChain/ts-sdk/commit/7cfdf7a2f54b5ddcb529b15685e8a8e99cd6231b))
- ../.. instead of src ([#296](https://github.com/NibiruChain/ts-sdk/issues/296)) ([e51c214](https://github.com/NibiruChain/ts-sdk/commit/e51c2145693c5239a68ab39009b48a0b4b9bfb0a))

### [1.0.2](https://github.com/NibiruChain/ts-sdk/compare/v1.0.1...v1.0.2) (2024-01-23)

### Bug Fixes

- path resolution ([#294](https://github.com/NibiruChain/ts-sdk/issues/294)) ([6c76223](https://github.com/NibiruChain/ts-sdk/commit/6c762237a2436bb909109ff4d4e952b80bc47315))
- path resolution ([#294](https://github.com/NibiruChain/ts-sdk/issues/294)) ([caad35d](https://github.com/NibiruChain/ts-sdk/commit/caad35decb7851c89a93c8214afec20e6159b7a5))

### [1.0.1](https://github.com/NibiruChain/ts-sdk/compare/v1.0.0...v1.0.1) (2024-01-19)

### Bug Fixes

- remove private ([4420e49](https://github.com/NibiruChain/ts-sdk/commit/4420e4917430a738331a565a84bb5c092df2ef1e))
- remove private ([3f67572](https://github.com/NibiruChain/ts-sdk/commit/3f6757247b328387bd8b48fabdf3bcec9f7331b9))

## [1.0.0](https://github.com/NibiruChain/ts-sdk/compare/v0.7.6...v1.0.0) (2024-01-19)

### ⚠ BREAKING CHANGES

- **nibijs:** NibiruSigningClient -> NibiruTxClient, NibiruQueryClient -> NibiruQuerier (#265)
- **tx:** SigningClient instead of TxCmd (#113)
- **nibijs:** inherit from StargateClient directly (#111)
- remove chaosnet config

### Features

- **2:** fix ([1a0d3d6](https://github.com/NibiruChain/ts-sdk/commit/1a0d3d6d07a05bd29614748f63b7b64a84dc1c9c))
- add amm pool queries, update COIN types ([#128](https://github.com/NibiruChain/ts-sdk/issues/128)) ([758d7f0](https://github.com/NibiruChain/ts-sdk/commit/758d7f0a6c06db06be3444da4dbbd5463cdb1eb7))
- add build files ([#136](https://github.com/NibiruChain/ts-sdk/issues/136)) ([cc2e778](https://github.com/NibiruChain/ts-sdk/commit/cc2e778064b6ec625bdbcb4a393fd02ef31d24c8))
- add delegations query with 100 limit as default ([#130](https://github.com/NibiruChain/ts-sdk/issues/130)) ([a5212e6](https://github.com/NibiruChain/ts-sdk/commit/a5212e6ef2c5044b80ded6c463f1e293dc575a8a))
- add max funding rate to perp market objects ([#223](https://github.com/NibiruChain/ts-sdk/issues/223)) ([9375f67](https://github.com/NibiruChain/ts-sdk/commit/9375f67c0787f8bb1cfc13aee4ffd5e852cfa1fa))
- add perp metrics query ([#73](https://github.com/NibiruChain/ts-sdk/issues/73)) ([8e31daa](https://github.com/NibiruChain/ts-sdk/commit/8e31daa496f799520d84ff6e0e220afed6217cd4))
- add staking query extension ([#84](https://github.com/NibiruChain/ts-sdk/issues/84)) ([c16f844](https://github.com/NibiruChain/ts-sdk/commit/c16f844a2918d1506b387635d5369421a38c8696))
- add volume notional to candle chart ([#239](https://github.com/NibiruChain/ts-sdk/issues/239)) ([d147d43](https://github.com/NibiruChain/ts-sdk/commit/d147d43a5d7b569197b9ae944c83b0dd58bc77e2))
- add volume to mark price candles ([#238](https://github.com/NibiruChain/ts-sdk/issues/238)) ([aaee27f](https://github.com/NibiruChain/ts-sdk/commit/aaee27f655ad1bb88d4121a691211dd0335f96a5))
- add wasm extension ([#137](https://github.com/NibiruChain/ts-sdk/issues/137)) ([3af6ade](https://github.com/NibiruChain/ts-sdk/commit/3af6ade6932f405d4f7948c6fd263da50f78da38))
- **editable:** fields ([#208](https://github.com/NibiruChain/ts-sdk/issues/208)) ([fd72328](https://github.com/NibiruChain/ts-sdk/commit/fd723280c8f866d93a8f1ac1bf5044ac059ceb02))
- **feat:** develop/main ([c9950fb](https://github.com/NibiruChain/ts-sdk/commit/c9950fb1b9bc78c29a6278f59089fe5e231e7775))
- **feat:** develop/main ([#255](https://github.com/NibiruChain/ts-sdk/issues/255)) ([ef01afa](https://github.com/NibiruChain/ts-sdk/commit/ef01afa11fd49ed99506b8465728d72e3c856c2b))
- fix positions query typo ([#138](https://github.com/NibiruChain/ts-sdk/issues/138)) ([7ed341b](https://github.com/NibiruChain/ts-sdk/commit/7ed341bc2502481b09fa6cbe22369da54dc2414e))
- gql wasm ([#280](https://github.com/NibiruChain/ts-sdk/issues/280)) ([cfcb9b3](https://github.com/NibiruChain/ts-sdk/commit/cfcb9b35bbde5afdbfedbb20e571f43011f1fe0e))
- **hide:** perp and Spot protojs ([#247](https://github.com/NibiruChain/ts-sdk/issues/247)) ([7a9e071](https://github.com/NibiruChain/ts-sdk/commit/7a9e07193d5fe9d624cdd16a4c028063765f3eaa))
- **ibc:** transfers and channels ([#248](https://github.com/NibiruChain/ts-sdk/issues/248)) ([26d148a](https://github.com/NibiruChain/ts-sdk/commit/26d148a179bfa837c5c1b6b8894a1ce167f8717d))
- **indexer-nibi 99% coverage:** coverage ([#243](https://github.com/NibiruChain/ts-sdk/issues/243)) ([1da2942](https://github.com/NibiruChain/ts-sdk/commit/1da29427d62801d47c46901e5275e92f60fc6971))
- **indexer-nibi:** Add and test query for markPriceCandles ([#99](https://github.com/NibiruChain/ts-sdk/issues/99)) ([3beefb4](https://github.com/NibiruChain/ts-sdk/commit/3beefb40647b7f9f6df2ce8304b0e198e29dc5c6))
- **introspection:** v21 ([#188](https://github.com/NibiruChain/ts-sdk/issues/188)) ([0ef590c](https://github.com/NibiruChain/ts-sdk/commit/0ef590ca29ec1beb7567de7058af2b9e173aec4d))
- **latest:** schema and protojs ([#210](https://github.com/NibiruChain/ts-sdk/issues/210)) ([867defa](https://github.com/NibiruChain/ts-sdk/commit/867defa0a68724ca7276ba315e3c118d3f0efc11))
- **leaderboard:** perp leaderboard ([#160](https://github.com/NibiruChain/ts-sdk/issues/160)) ([b2a8a8d](https://github.com/NibiruChain/ts-sdk/commit/b2a8a8da0b093b6d380171c507575c9363188539))
- **liq price:** price liq ([#205](https://github.com/NibiruChain/ts-sdk/issues/205)) ([40049c7](https://github.com/NibiruChain/ts-sdk/commit/40049c731d6396dee37709bdc86ac2499020987b))
- mustSignAndBroadcast. release nibijs v0.8.2 ([#75](https://github.com/NibiruChain/ts-sdk/issues/75)) ([fb8286f](https://github.com/NibiruChain/ts-sdk/commit/fb8286f4a3ed423e59b4ebda31c50d0c0656cc6b))
- **nibijs:** add fromChainId factory method ([#217](https://github.com/NibiruChain/ts-sdk/issues/217)) ([0d44203](https://github.com/NibiruChain/ts-sdk/commit/0d44203255d7ebbf4255b77b082a48fe3fe06b4a))
- **nibijs:** distribution module txs ([#90](https://github.com/NibiruChain/ts-sdk/issues/90)) ([cfa443b](https://github.com/NibiruChain/ts-sdk/commit/cfa443b7ab470be1cbf2035de276fcd38e58d493))
- **nibijs:** distribution queries ([#89](https://github.com/NibiruChain/ts-sdk/issues/89)) ([d5c3789](https://github.com/NibiruChain/ts-sdk/commit/d5c37894bff5a08c2083d13128cdc1ace27826d5))
- **nibijs:** functions for humans + getTxByHash (exchange integration) ([#260](https://github.com/NibiruChain/ts-sdk/issues/260)) ([b2b4b26](https://github.com/NibiruChain/ts-sdk/commit/b2b4b26d7302b09ad710d5c1a871cdc1015318aa))
- **nibijs:** mainnet custom chain function ([#268](https://github.com/NibiruChain/ts-sdk/issues/268)) ([ae9ace9](https://github.com/NibiruChain/ts-sdk/commit/ae9ace918a04b0d2bd98e464a4f6550ec488ee0b)), closes [#269](https://github.com/NibiruChain/ts-sdk/issues/269)
- **nibijs:** tests ([#244](https://github.com/NibiruChain/ts-sdk/issues/244)) ([1045d4d](https://github.com/NibiruChain/ts-sdk/commit/1045d4d3bd2e28c740e3818ca10c8c9dbdf13982))
- **post:** graphql reqs ([#216](https://github.com/NibiruChain/ts-sdk/issues/216)) ([bccd08e](https://github.com/NibiruChain/ts-sdk/commit/bccd08ecd24b21847ac3adbba234fadcdfd371db))
- **protojs:** add gRPC clients via connect-es ([#171](https://github.com/NibiruChain/ts-sdk/issues/171)) ([7caad78](https://github.com/NibiruChain/ts-sdk/commit/7caad780c13e49675806029738289cf51044c62e))
- **releases:** releases ([2125ac4](https://github.com/NibiruChain/ts-sdk/commit/2125ac4094146aa044c985f1e38d946a2e7eb0ff))
- **release:** v21.10 ([9980707](https://github.com/NibiruChain/ts-sdk/commit/998070784983230a3c4f002ee819f321e1748e2e))
- **sonarqube:** self Hosted + Sonarlint ([#246](https://github.com/NibiruChain/ts-sdk/issues/246)) ([c499aa9](https://github.com/NibiruChain/ts-sdk/commit/c499aa9eb3b9404c4274f73f2b1b27f0352d982a))
- **spot:** add balancer swap predictor ([#181](https://github.com/NibiruChain/ts-sdk/issues/181)) ([c01dc68](https://github.com/NibiruChain/ts-sdk/commit/c01dc680dd00a56b3c1492a839b7a912fc354ea2))
- **stableswap:** StableSwap in TypeScript ([#157](https://github.com/NibiruChain/ts-sdk/issues/157)) ([468d744](https://github.com/NibiruChain/ts-sdk/commit/468d7441a614c97874c18b366e93372a24295fc6))
- **subscription:** subscriptions ([#224](https://github.com/NibiruChain/ts-sdk/issues/224)) ([43c20f4](https://github.com/NibiruChain/ts-sdk/commit/43c20f45f112661e0740833e9fc059670aa0e6f6))
- sync with chain version v0.19.0 + oracle extension ([#86](https://github.com/NibiruChain/ts-sdk/issues/86)) ([0a99491](https://github.com/NibiruChain/ts-sdk/commit/0a994918ce58234efab804bb1466f0d995780946))
- **test enhancements:** enhance ([#241](https://github.com/NibiruChain/ts-sdk/issues/241)) ([f9e55f7](https://github.com/NibiruChain/ts-sdk/commit/f9e55f7cc3fb15e59d8b728ceed1f3718e28bc6a))
- trigger release ([#271](https://github.com/NibiruChain/ts-sdk/issues/271)) ([c7f0580](https://github.com/NibiruChain/ts-sdk/commit/c7f0580176d39af4d2662b6360fa28c25210ca2c)), closes [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)
- **triggering release:** now ([6a924b6](https://github.com/NibiruChain/ts-sdk/commit/6a924b644430bac3a7355aa82bba0f5cf8f99dc7))
- update builds ([#126](https://github.com/NibiruChain/ts-sdk/issues/126)) ([0bc6943](https://github.com/NibiruChain/ts-sdk/commit/0bc694313fe9a89580486de6426a474c4c82a0b7))
- update example scripts with readme ([#129](https://github.com/NibiruChain/ts-sdk/issues/129)) ([54c85dc](https://github.com/NibiruChain/ts-sdk/commit/54c85dc9ddf3ba1a6e77488ffde190c33ae405fa))
- **upgrade:** keplr ([#166](https://github.com/NibiruChain/ts-sdk/issues/166)) ([152b3c1](https://github.com/NibiruChain/ts-sdk/commit/152b3c13292207f2421bbc9d00ee6d48977d4918))
- **v21:** v21.9 ([bac1729](https://github.com/NibiruChain/ts-sdk/commit/bac1729be8575a9e75bf9e04447a63c45e227c8c))

### Bug Fixes

- **21.2:** align ([#175](https://github.com/NibiruChain/ts-sdk/issues/175)) ([10d34bd](https://github.com/NibiruChain/ts-sdk/commit/10d34bd63663c1349158063662664b0883e92a2b))
- align chain id ([#263](https://github.com/NibiruChain/ts-sdk/issues/263)) ([9219a7e](https://github.com/NibiruChain/ts-sdk/commit/9219a7e6bee1ff11e644cc6ed7f99558bd46ed2d))
- **build incorrect:** fix ([#178](https://github.com/NibiruChain/ts-sdk/issues/178)) ([df2649e](https://github.com/NibiruChain/ts-sdk/commit/df2649eea5c5920a48b401d00c02e9b48af5cf1b))
- call fromSdkDec on sdk.Dec values in perp queries ([#78](https://github.com/NibiruChain/ts-sdk/issues/78)) ([1f1bc1d](https://github.com/NibiruChain/ts-sdk/commit/1f1bc1d0eef4ed5545197a350df26f7da6017da3))
- **didn't pass arg:** arg ([#165](https://github.com/NibiruChain/ts-sdk/issues/165)) ([d2376c3](https://github.com/NibiruChain/ts-sdk/commit/d2376c3e97d487dd3a2394d1a6f54cb6e737ffa2))
- **feat:** v21 introspection ([#200](https://github.com/NibiruChain/ts-sdk/issues/200)) ([6e888c2](https://github.com/NibiruChain/ts-sdk/commit/6e888c2a79235a3e1d2450516b50bf42da659d1e))
- **fi:** fix ([5f85c34](https://github.com/NibiruChain/ts-sdk/commit/5f85c34f080684a9e07d91337bf306a500e4a100))
- fix ([c0dea51](https://github.com/NibiruChain/ts-sdk/commit/c0dea51cd1a18c95f8408b00a3822fa2113a704a))
- fix ([b6515f0](https://github.com/NibiruChain/ts-sdk/commit/b6515f001f72a2d99b0d8d9a49c4f0df87a95973))
- fix ([02d4302](https://github.com/NibiruChain/ts-sdk/commit/02d4302e221435ea3128ba295381f5a53a700ecf))
- fix ([fd6747a](https://github.com/NibiruChain/ts-sdk/commit/fd6747a2832aae68c97ba2fca4c194fda7a57c84))
- fix ([b01852d](https://github.com/NibiruChain/ts-sdk/commit/b01852db657ff2ac0d11b83d6cac8bd6fc2dde86))
- fix ([7fc57e8](https://github.com/NibiruChain/ts-sdk/commit/7fc57e8ab9dab4bf3c7e7a34656eb1e9f155bfad))
- fix ([0cb33b9](https://github.com/NibiruChain/ts-sdk/commit/0cb33b9c79556ce2a9746de33dddb22ee4e2cfbb))
- fix ([89f4b6e](https://github.com/NibiruChain/ts-sdk/commit/89f4b6ecb3fbdf418b763940e4c9ccfc46560e24))
- fix ([7891168](https://github.com/NibiruChain/ts-sdk/commit/78911684ccf691d303b8e1899ff8ebb5ce92c038))
- fix ([7c4be1b](https://github.com/NibiruChain/ts-sdk/commit/7c4be1b5dcbc83eed53a066d72a73f027a245283))
- fix ([b69cd4b](https://github.com/NibiruChain/ts-sdk/commit/b69cd4bccffff9730eea2235231a219b7860288e))
- fix ([9249e53](https://github.com/NibiruChain/ts-sdk/commit/9249e5356230f1544b9b12bb91110a3b9ec51787))
- fix ([da1b437](https://github.com/NibiruChain/ts-sdk/commit/da1b4373a97a3e2fd3e2d83f4668054ca29b1232))
- fix ([95e1c36](https://github.com/NibiruChain/ts-sdk/commit/95e1c362ed05992c64d325e39068aeb2ac7123fc))
- fix build issue ([b82a4e2](https://github.com/NibiruChain/ts-sdk/commit/b82a4e28d746956ce41321d80929ae080879ccd9))
- **fix interface:** fix interface ([#179](https://github.com/NibiruChain/ts-sdk/issues/179)) ([51fba6a](https://github.com/NibiruChain/ts-sdk/commit/51fba6a70e4a99573da763c951305f5b8b1009b2))
- fix merge ([47c5677](https://github.com/NibiruChain/ts-sdk/commit/47c5677b5f3c0ca96400c444d3f7d81d263be512))
- fix merge ([e5cb862](https://github.com/NibiruChain/ts-sdk/commit/e5cb862c00cfd46aee08cf7e04bfdebedbb84557))
- fix permissions ([fe4ed01](https://github.com/NibiruChain/ts-sdk/commit/fe4ed01bc196554dbf06100042d1c9125836619e))
- fix permissions ([6ffb343](https://github.com/NibiruChain/ts-sdk/commit/6ffb3436164abca28fe0b084bbd4ec3fb8f23cae))
- **fix type:** fix type ([ac556ed](https://github.com/NibiruChain/ts-sdk/commit/ac556ed576ad70f4379723883a87bd3960fccfbe))
- fix update ([4d3713f](https://github.com/NibiruChain/ts-sdk/commit/4d3713fe25587068ca036585ff4fa61641048361))
- **fix:** bash ([#232](https://github.com/NibiruChain/ts-sdk/issues/232)) ([db58455](https://github.com/NibiruChain/ts-sdk/commit/db58455dd69eaa4da11735a87300860c2b4307f5))
- **fix:** build ([86a157d](https://github.com/NibiruChain/ts-sdk/commit/86a157d805229e0d127b72a50f71140b32373152))
- **fix:** build/publish ([#163](https://github.com/NibiruChain/ts-sdk/issues/163)) ([bd45b49](https://github.com/NibiruChain/ts-sdk/commit/bd45b495550fdcb991f53417ec6840f66c58f187))
- **fix:** editable fields ([#215](https://github.com/NibiruChain/ts-sdk/issues/215)) ([360fd88](https://github.com/NibiruChain/ts-sdk/commit/360fd88c3f613fe7be17666fbdb1cddb339af487))
- **fix:** fix ([a67fc44](https://github.com/NibiruChain/ts-sdk/commit/a67fc44b886b5147e4e58de17b20a5795e4799bb))
- **fix:** githead ([34a34d2](https://github.com/NibiruChain/ts-sdk/commit/34a34d2f8a02eaec36d7cec7756d7eae9b88dc52))
- **fix:** hm ([#236](https://github.com/NibiruChain/ts-sdk/issues/236)) ([424e644](https://github.com/NibiruChain/ts-sdk/commit/424e64466ea1c5b6fb7c6b9c17f7f6f2877a8a97))
- **fix:** hm ([#240](https://github.com/NibiruChain/ts-sdk/issues/240)) ([4a31757](https://github.com/NibiruChain/ts-sdk/commit/4a317575e33d34008d443c7240a6d9f5527247b5))
- **fix:** markdown ([#256](https://github.com/NibiruChain/ts-sdk/issues/256)) ([d2a4311](https://github.com/NibiruChain/ts-sdk/commit/d2a4311e0ce278808e81637ee58e0c8a40f3ef3d))
- **fix:** merge ([3908f41](https://github.com/NibiruChain/ts-sdk/commit/3908f4118de3b0db1b05e6633667268a5228885b))
- **fix:** multi-schema ([#237](https://github.com/NibiruChain/ts-sdk/issues/237)) ([3914891](https://github.com/NibiruChain/ts-sdk/commit/391489184bd1704442a03c6c6220df0c679caedf))
- **fix:** node info ([#219](https://github.com/NibiruChain/ts-sdk/issues/219)) ([9d6af39](https://github.com/NibiruChain/ts-sdk/commit/9d6af39a44e84db0e13cfcb15e11e40d4c7aa470))
- **fix:** prettier ([92f9073](https://github.com/NibiruChain/ts-sdk/commit/92f9073300e49ba5eb9c54726f8ebdf20ef1bcdd))
- **fix:** query arg list ([a26eb08](https://github.com/NibiruChain/ts-sdk/commit/a26eb08b6f3705921e4a7695ada91d19015c3530))
- **fix:** spelling ([#218](https://github.com/NibiruChain/ts-sdk/issues/218)) ([0e252f8](https://github.com/NibiruChain/ts-sdk/commit/0e252f83f259119c6ba80b8d04a15f1c61d4b7d9))
- **fix:** type ([df510f8](https://github.com/NibiruChain/ts-sdk/commit/df510f85c37f2639a58941118f247aee2568f249))
- **fix:** undefined case ([630f9e9](https://github.com/NibiruChain/ts-sdk/commit/630f9e90e558bbcd66897649a5cc1f09dec9d2ad))
- **fix:** unhide spot/perp protojs ([#250](https://github.com/NibiruChain/ts-sdk/issues/250)) ([1723d2b](https://github.com/NibiruChain/ts-sdk/commit/1723d2b41187009dbda1efe997109cb74b6ac953))
- **fix:** window ([#221](https://github.com/NibiruChain/ts-sdk/issues/221)) ([6ba46d6](https://github.com/NibiruChain/ts-sdk/commit/6ba46d6fdac7effc00fec364ced60a1f5fdc130b))
- git push ([e50e6a2](https://github.com/NibiruChain/ts-sdk/commit/e50e6a2384cd3ec5eb7a107ee2a08b7662cc65b4))
- install error ([9c33d1b](https://github.com/NibiruChain/ts-sdk/commit/9c33d1ba64f6e8c2b756e4fa46db1480ea3eb8d2))
- **leaderboard:** query ([#164](https://github.com/NibiruChain/ts-sdk/issues/164)) ([9367a40](https://github.com/NibiruChain/ts-sdk/commit/9367a40307d1b0b45ba515bdf5a54b13af52f207))
- merge ([9168b0a](https://github.com/NibiruChain/ts-sdk/commit/9168b0a3ef50eb01824287aac71691f8f9ca35dd))
- more reverts ([ac0e922](https://github.com/NibiruChain/ts-sdk/commit/ac0e9227d4bbbec7619e4d1dc9a7b96da8104f5f))
- **new:** schema ([#233](https://github.com/NibiruChain/ts-sdk/issues/233)) ([83f95d4](https://github.com/NibiruChain/ts-sdk/commit/83f95d453cca81d325258248beb163a0a513ba4c))
- nibijs query tests ([2477969](https://github.com/NibiruChain/ts-sdk/commit/2477969ee9210cd940a53ae159e18c4db2ad2de7))
- **nibijs:** examples up-to-date + more docs + test examples in CI ([#254](https://github.com/NibiruChain/ts-sdk/issues/254)) ([144216d](https://github.com/NibiruChain/ts-sdk/commit/144216d9f5e048354008119d353d0a24e079cb7f))
- **nibijs:** NibiruQueryClient must expose methods from the Tendermint client ([#257](https://github.com/NibiruChain/ts-sdk/issues/257)) ([4c38b2d](https://github.com/NibiruChain/ts-sdk/commit/4c38b2d677ca437e7d18723331f0fa784d0123fd))
- npm registry update ([5533015](https://github.com/NibiruChain/ts-sdk/commit/55330150f5bf75fb6863da4e8eccd79e49893bb8))
- **polyfill:** fetch ([#169](https://github.com/NibiruChain/ts-sdk/issues/169)) ([933b81b](https://github.com/NibiruChain/ts-sdk/commit/933b81b0ba441b8cd35210dc32a594de1bbdd0c3))
- **precision:** add BigNumber ([#161](https://github.com/NibiruChain/ts-sdk/issues/161)) ([97b5126](https://github.com/NibiruChain/ts-sdk/commit/97b5126aa8fb618692dfb9a7972bdaf7d912e344))
- protojs workflow ([#168](https://github.com/NibiruChain/ts-sdk/issues/168)) ([48172ea](https://github.com/NibiruChain/ts-sdk/commit/48172eab2c251d7cf225cd27e9cfa27be635987c))
- **protojs:** proto gen script + protos for v0.19.2 (nibiru-itn-1) ([#150](https://github.com/NibiruChain/ts-sdk/issues/150)) ([c3fa9bd](https://github.com/NibiruChain/ts-sdk/commit/c3fa9bd3e03e16ca4896d32d33e343a1a0de1d7a))
- readme code examples adjusted ([#278](https://github.com/NibiruChain/ts-sdk/issues/278)) ([113ca01](https://github.com/NibiruChain/ts-sdk/commit/113ca0101faaedc5b82cae9af4d8345da4072e92))
- readme status badge ([a41de73](https://github.com/NibiruChain/ts-sdk/commit/a41de730858cef009bd698a93d922b5640cb7d1d))
- README styles for footer image ([fd87694](https://github.com/NibiruChain/ts-sdk/commit/fd876941455a39c43059f3d31b0f8951d40f12ec))
- **README:** new discord link ([0fa4ba7](https://github.com/NibiruChain/ts-sdk/commit/0fa4ba7f6cde365c48859a5bec5430f853ca5ac0))
- release ([4601fd0](https://github.com/NibiruChain/ts-sdk/commit/4601fd00e02327ad4e9d22afc6d6c2a121af4898))
- release ([ee901c2](https://github.com/NibiruChain/ts-sdk/commit/ee901c2ceaa74013ca14a8a29baf47653be97179))
- release ([f070401](https://github.com/NibiruChain/ts-sdk/commit/f07040138bead6c4d43389b79fb27d0c7b3f6245))
- release ([3407735](https://github.com/NibiruChain/ts-sdk/commit/3407735d00a2e06841db28ea6b46c7678e16966f))
- release ([#284](https://github.com/NibiruChain/ts-sdk/issues/284)) ([6189425](https://github.com/NibiruChain/ts-sdk/commit/618942558a0c2df59428f8ba75b04b3f2457ded0)), closes [#282](https://github.com/NibiruChain/ts-sdk/issues/282) [#283](https://github.com/NibiruChain/ts-sdk/issues/283) [#276](https://github.com/NibiruChain/ts-sdk/issues/276) [#275](https://github.com/NibiruChain/ts-sdk/issues/275) [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)
- release ([#285](https://github.com/NibiruChain/ts-sdk/issues/285)) ([003985a](https://github.com/NibiruChain/ts-sdk/commit/003985a810604624c11afe3f1e1e7d9bdc172f6c)), closes [#282](https://github.com/NibiruChain/ts-sdk/issues/282) [#283](https://github.com/NibiruChain/ts-sdk/issues/283) [#276](https://github.com/NibiruChain/ts-sdk/issues/276) [#275](https://github.com/NibiruChain/ts-sdk/issues/275) [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)
- release ([#286](https://github.com/NibiruChain/ts-sdk/issues/286)) ([273916c](https://github.com/NibiruChain/ts-sdk/commit/273916c57d15d2436e38a07e5429b57d98db19d1)), closes [#282](https://github.com/NibiruChain/ts-sdk/issues/282) [#283](https://github.com/NibiruChain/ts-sdk/issues/283) [#276](https://github.com/NibiruChain/ts-sdk/issues/276) [#275](https://github.com/NibiruChain/ts-sdk/issues/275) [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)
- release ([#288](https://github.com/NibiruChain/ts-sdk/issues/288)) ([4e95aac](https://github.com/NibiruChain/ts-sdk/commit/4e95aac3af4dc70f5211490aa41f7f3fdd76969d)), closes [#282](https://github.com/NibiruChain/ts-sdk/issues/282) [#283](https://github.com/NibiruChain/ts-sdk/issues/283) [#276](https://github.com/NibiruChain/ts-sdk/issues/276) [#275](https://github.com/NibiruChain/ts-sdk/issues/275) [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)
- release version ([#153](https://github.com/NibiruChain/ts-sdk/issues/153)) ([5c67f43](https://github.com/NibiruChain/ts-sdk/commit/5c67f43d2cc93381ba17a1389d09120f628b2072))
- release! ([cf2754e](https://github.com/NibiruChain/ts-sdk/commit/cf2754e8be0bf0cd5cf7729adc104db2610b4d70))
- **release:** please publish ([acf236b](https://github.com/NibiruChain/ts-sdk/commit/acf236bc2f12e04f17bf3f16c6f5819e8c3de011))
- **release:** please publish changes from develop ([#267](https://github.com/NibiruChain/ts-sdk/issues/267)) ([38e463d](https://github.com/NibiruChain/ts-sdk/commit/38e463d5ddb89d3f28d340313f07d3c968faeec4)), closes [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)
- **release:** publish please ([ea490c7](https://github.com/NibiruChain/ts-sdk/commit/ea490c7584690fbda24a50297764e36ed28b97c3))
- releasing with new npm token ([8b18617](https://github.com/NibiruChain/ts-sdk/commit/8b18617217b4da1c13fcceda8edf7e6e2603b8fb))
- **remove:** console ([4a1546c](https://github.com/NibiruChain/ts-sdk/commit/4a1546c43fcb5aa3dce772d6cb8ad439488800bf))
- **remove:** lock file ([#214](https://github.com/NibiruChain/ts-sdk/issues/214)) ([2576445](https://github.com/NibiruChain/ts-sdk/commit/2576445aa4e586a6e091b75707fac6843575c9b5))
- **rem:** throws ([#245](https://github.com/NibiruChain/ts-sdk/issues/245)) ([6e5ea8f](https://github.com/NibiruChain/ts-sdk/commit/6e5ea8f76a454686afe221e13f9402b0118fe91c))
- rev ([5835628](https://github.com/NibiruChain/ts-sdk/commit/583562888c54cc717471d5c716f5dd3b4d7eaf29))
- revert ([7eae536](https://github.com/NibiruChain/ts-sdk/commit/7eae536ed8e111e1b10f8ff97ac962bb957672d2))
- signing client needs utils extension ([90e82a7](https://github.com/NibiruChain/ts-sdk/commit/90e82a7115e91b6010389a50ba56dab4dc309d18))
- test release ([943e8ea](https://github.com/NibiruChain/ts-sdk/commit/943e8ea7fd04db249d98c40f69f37c54057cd7a2))
- test release ([f50126a](https://github.com/NibiruChain/ts-sdk/commit/f50126a09bbc702c6fe6f660a413684c0cf57256))
- **test:** fix ([1bb5a56](https://github.com/NibiruChain/ts-sdk/commit/1bb5a569a9e63bebf306065c34ff44b241021c51))
- tsconfig.json paths field in wrong location ([c58ce2b](https://github.com/NibiruChain/ts-sdk/commit/c58ce2b61ccc076ebf96fad144870e0f12126595))
- update discord url ([bdc974f](https://github.com/NibiruChain/ts-sdk/commit/bdc974ffa23505419baf9eec958ee55c73e13dc4))
- **using bignumber:** using BigNumber instead of number ([#192](https://github.com/NibiruChain/ts-sdk/issues/192)) ([8a5c6ba](https://github.com/NibiruChain/ts-sdk/commit/8a5c6ba1f2bda26d50534a6f96d556b039e176a1))
- yarn merge ([c2a4891](https://github.com/NibiruChain/ts-sdk/commit/c2a48915e8c9c2a1df3cad4f95ac2d79cbfa4be3))
- yarn publish:all script ([68062bd](https://github.com/NibiruChain/ts-sdk/commit/68062bdde61029dbb7ebaa8569ea6e55e7c77052))

### Reverts

- Revert "refactor: adding grecaptcha to useFaucet v21 (#199)" (#201) ([2842c1e](https://github.com/NibiruChain/ts-sdk/commit/2842c1e3c208c539c841b2cdffa83c54648fdd65)), closes [#199](https://github.com/NibiruChain/ts-sdk/issues/199) [#201](https://github.com/NibiruChain/ts-sdk/issues/201)

### Build System

- **deps:** Bump axios from 0.21.1 to 0.21.4 in /examples ([#132](https://github.com/NibiruChain/ts-sdk/issues/132)) ([9c5fd53](https://github.com/NibiruChain/ts-sdk/commit/9c5fd533ac8ad07f8dfc788d0b0a6c080ec9b570))
- **deps:** bump http-cache-semantics from 4.1.0 to 4.1.1 ([12e24c9](https://github.com/NibiruChain/ts-sdk/commit/12e24c9749ddf3fb6858bff7c3b8dd0d01abe29d))
- **deps:** bump json5 from 1.0.1 to 1.0.2 ([#82](https://github.com/NibiruChain/ts-sdk/issues/82)) ([35a6631](https://github.com/NibiruChain/ts-sdk/commit/35a6631cb41fda5c1f93382403893adb3c720af4))

### Documentation

- **docs:** Stableswap ([#159](https://github.com/NibiruChain/ts-sdk/issues/159)) ([deddf21](https://github.com/NibiruChain/ts-sdk/commit/deddf21df7ce120b925d5b9c2b32a6ef8766a959))
- **nibijs:** Adds HTML and MD doc generation based on JS docs ([#71](https://github.com/NibiruChain/ts-sdk/issues/71)) ([97d07b9](https://github.com/NibiruChain/ts-sdk/commit/97d07b91ac818ab45d4353b0ee3b4065cccc6208))
- **nibijs:** run yarn build ([#85](https://github.com/NibiruChain/ts-sdk/issues/85)) ([d8cd31f](https://github.com/NibiruChain/ts-sdk/commit/d8cd31f1871d8128e4587130d4549ee5fa917e22))
- **README:** fix badge ([fd9d9b0](https://github.com/NibiruChain/ts-sdk/commit/fd9d9b0d5fb6dba6d8deded2799c37ed991dd098))

### CI/CD

- check nibid in nibijs tests workflow ([#231](https://github.com/NibiruChain/ts-sdk/issues/231)) ([0715849](https://github.com/NibiruChain/ts-sdk/commit/0715849bae7d09bda2f135c8fd0eb4da0a7a9881))
- fix tests and use a fresh local chain in nibijs tests ([#127](https://github.com/NibiruChain/ts-sdk/issues/127)) ([c8e21f4](https://github.com/NibiruChain/ts-sdk/commit/c8e21f47c2ca54c28f6afd7868def47fee781c93))
- lts/gallium ([b246e0a](https://github.com/NibiruChain/ts-sdk/commit/b246e0a1d00ab4b56b22593de3fa260fb9aeff38))
- packages build check ([015a2a2](https://github.com/NibiruChain/ts-sdk/commit/015a2a2606bd5ed1a74994809d7412ec74415625))
- removing --watchall and --no-cache ([0dc149c](https://github.com/NibiruChain/ts-sdk/commit/0dc149c08484fd5630528a02b8f24b8b2021d0fa))

### Code Refactors

- **.editorconfig:** updating editorconfig file to match standard ([#190](https://github.com/NibiruChain/ts-sdk/issues/190)) ([b6a9410](https://github.com/NibiruChain/ts-sdk/commit/b6a941041d7a8f0ffcda350a2af83f363f504769))
- adding correct msg partial close parameters ([3ca59b8](https://github.com/NibiruChain/ts-sdk/commit/3ca59b8b38058cc60f8a80248a60acbc8bf08b23))
- adding grecaptcha to useFaucet v21 ([#199](https://github.com/NibiruChain/ts-sdk/issues/199)) ([17c8039](https://github.com/NibiruChain/ts-sdk/commit/17c8039eb560d7f19bcc66a7812afe66fb97923f))
- adding semantic release for v21 ([#196](https://github.com/NibiruChain/ts-sdk/issues/196)) ([b4ddc07](https://github.com/NibiruChain/ts-sdk/commit/b4ddc078042322610c6d1006edd758d84dedf7b8))
- clean up nibijs package.json ([34937c0](https://github.com/NibiruChain/ts-sdk/commit/34937c082b9fda09217ccf1c7c09bc5fde93340d))
- clean up package.json ([278a6c6](https://github.com/NibiruChain/ts-sdk/commit/278a6c6cee937206fce705986a600859d97513b3))
- clean up protojs/package.json ([afeba92](https://github.com/NibiruChain/ts-sdk/commit/afeba9289b80620eae44fee7b8b48b1756ab1f65))
- custom chain for mainnet ([#262](https://github.com/NibiruChain/ts-sdk/issues/262)) ([ffc2060](https://github.com/NibiruChain/ts-sdk/commit/ffc2060e38a69951426e6bd82cf110ca37c73586))
- export msg type urls in nibijs ([5d7aeae](https://github.com/NibiruChain/ts-sdk/commit/5d7aeaeb2c1c1545a9e02837a9a970d049b7b497))
- faucet test desccription ([8b0a79d](https://github.com/NibiruChain/ts-sdk/commit/8b0a79d226857e2bf3b11b82a60a0dec9d85b19f))
- grecaptcha v21 ([#204](https://github.com/NibiruChain/ts-sdk/issues/204)) ([08af259](https://github.com/NibiruChain/ts-sdk/commit/08af259012c68dad2986b6ead8bf54cf07e1235a))
- including avg_pct_pnl_rank into leaderboard schema ([#228](https://github.com/NibiruChain/ts-sdk/issues/228)) ([317eea5](https://github.com/NibiruChain/ts-sdk/commit/317eea51ae68ce322f6c2dc9ab487442ee3c2539))
- join only non undefined strings ([#249](https://github.com/NibiruChain/ts-sdk/issues/249)) ([6ab8616](https://github.com/NibiruChain/ts-sdk/commit/6ab8616647f85e20e9de39d5dd4f0eb354d3c682))
- latest nibijs ([7e958cb](https://github.com/NibiruChain/ts-sdk/commit/7e958cb75bb194f0b7180d7561e4c0af9f281877))
- **nibijs:** inherit from StargateClient directly ([#111](https://github.com/NibiruChain/ts-sdk/issues/111)) ([8dede40](https://github.com/NibiruChain/ts-sdk/commit/8dede4081b5befbe027034f2c4d062a107b09c96))
- **nibijs:** NibiruSigningClient -> NibiruTxClient, NibiruQueryClient -> NibiruQuerier ([#265](https://github.com/NibiruChain/ts-sdk/issues/265)) ([779a3cc](https://github.com/NibiruChain/ts-sdk/commit/779a3cc877c2cd53124f3bffc6ee100484dacd5b))
- npm token ([19404d0](https://github.com/NibiruChain/ts-sdk/commit/19404d04ef584a50d9df80b619fe8f9d529b8f82))
- npm token release ([ac8cb1c](https://github.com/NibiruChain/ts-sdk/commit/ac8cb1cc5c6467970c58d03e12b701701cad39b9))
- **proto:** regenerate protos using ts-proto ([#172](https://github.com/NibiruChain/ts-sdk/issues/172)) ([552089e](https://github.com/NibiruChain/ts-sdk/commit/552089e6f76dd6fb9586af7c80f3a3f955c6911c))
- re-arch ([#279](https://github.com/NibiruChain/ts-sdk/issues/279)) ([323334e](https://github.com/NibiruChain/ts-sdk/commit/323334e57637d7cc83bbc492eeee152a228a0c27))
- **refactor:** Remove unused dependencies. Add husky, commitlint, lint-staged ([#143](https://github.com/NibiruChain/ts-sdk/issues/143)) ([5ff9e06](https://github.com/NibiruChain/ts-sdk/commit/5ff9e0613df6d61b2fdaf482d2c2fa226cacd9e9))
- registry update ([ed391cf](https://github.com/NibiruChain/ts-sdk/commit/ed391cf6cd2e097c55d88ce235d0308ac8685d4f))
- release rules update & v18 upgrade ([#209](https://github.com/NibiruChain/ts-sdk/issues/209)) ([9d73ab2](https://github.com/NibiruChain/ts-sdk/commit/9d73ab2061b9da72bed21f7d81b35958fd1f8637))
- remove chaosnet config ([75a7449](https://github.com/NibiruChain/ts-sdk/commit/75a7449876855e0158daee454f2fe62e2924af01))
- rename tsconfig.build.json to tsconfig.json ([4dad6eb](https://github.com/NibiruChain/ts-sdk/commit/4dad6eb387ffd070bd3464729cfe19d5256559e9))
- rename tsconfig.build.json to tsconfig.json ([754d0b4](https://github.com/NibiruChain/ts-sdk/commit/754d0b4ae57e44b618ccb45d7a8eae3e1617e865))
- root level tsconfig ([a8e8310](https://github.com/NibiruChain/ts-sdk/commit/a8e8310062b98e58e0866fbb37ca1284a69c1b22))
- simplify usage of `useFaucet` ([#182](https://github.com/NibiruChain/ts-sdk/issues/182)) ([37e9dcf](https://github.com/NibiruChain/ts-sdk/commit/37e9dcfc7374b45ec436653447b5439f645703a4))
- **stableswap:** remove token prices ([#180](https://github.com/NibiruChain/ts-sdk/issues/180)) ([b81f02e](https://github.com/NibiruChain/ts-sdk/commit/b81f02e5937dc938411a19bd5d4181a91f81437c))
- **tx:** SigningClient instead of TxCmd ([#113](https://github.com/NibiruChain/ts-sdk/issues/113)) ([b926dab](https://github.com/NibiruChain/ts-sdk/commit/b926dabedb096cca3c848113fe1488b1fc0196b7))
- update lerna ([47e9222](https://github.com/NibiruChain/ts-sdk/commit/47e922244ce889602ff8217dd9bd7c5eed3350c9))
- using nibibot gihtub token ([1aeb2e3](https://github.com/NibiruChain/ts-sdk/commit/1aeb2e336403b922f01c5e7e7e87035cfde13d1a))

### Miscellaneous Chores

- add Cameron as codeowner ([d339c43](https://github.com/NibiruChain/ts-sdk/commit/d339c431c969b7ed59fa4905feb717b337db3cfe))
- add partial close position on nibi perp ([#222](https://github.com/NibiruChain/ts-sdk/issues/222)) ([1afbc87](https://github.com/NibiruChain/ts-sdk/commit/1afbc87e40e36ca6772eea79fa2e1102696e2bdc))
- clean up package.json ([692b3bf](https://github.com/NibiruChain/ts-sdk/commit/692b3bf714b7b2154298a6a13cc1f6d51c96d7f7))
- configure lerna.json ([1ca889f](https://github.com/NibiruChain/ts-sdk/commit/1ca889f9e30334bf6a7681eb350caa43759ae65e))
- develop -> main ([#274](https://github.com/NibiruChain/ts-sdk/issues/274)) ([e2ebd40](https://github.com/NibiruChain/ts-sdk/commit/e2ebd40c5df0a0a4126b3aa97709e13b7e2e0ba8)), closes [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)
- develop -> main ([#275](https://github.com/NibiruChain/ts-sdk/issues/275)) ([c5e4f87](https://github.com/NibiruChain/ts-sdk/commit/c5e4f879d49309c9faa389a0ae06e113eeb92c97)), closes [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)
- develop -> main ([#281](https://github.com/NibiruChain/ts-sdk/issues/281)) ([24fa8fa](https://github.com/NibiruChain/ts-sdk/commit/24fa8fa24296623d652533e75d1e1530446f08db)), closes [#276](https://github.com/NibiruChain/ts-sdk/issues/276) [#275](https://github.com/NibiruChain/ts-sdk/issues/275) [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)
- develop to main ([#273](https://github.com/NibiruChain/ts-sdk/issues/273)) ([ad232b7](https://github.com/NibiruChain/ts-sdk/commit/ad232b78f16813af3d61c6ed46f99158cc8572a0)), closes [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)
- import spot and perp into msg module ([#156](https://github.com/NibiruChain/ts-sdk/issues/156)) ([8bd68c1](https://github.com/NibiruChain/ts-sdk/commit/8bd68c1d881483ab7668fad6aaa5bd47c04a909c))
- **proto:** regenerate v0.21.0 protos ([#167](https://github.com/NibiruChain/ts-sdk/issues/167)) ([3362cb9](https://github.com/NibiruChain/ts-sdk/commit/3362cb99c85993bd836aa031766361c9d30a2e8b))
- rebuild docs with v0.21.43 (main) ([6e650cb](https://github.com/NibiruChain/ts-sdk/commit/6e650cbb2128014a6a1b42be9557c83d032cbddc))
- regen documentation ([6dffb4e](https://github.com/NibiruChain/ts-sdk/commit/6dffb4e815581735e7a6d7d7db114c42aac1194e))
- regenerate protojs ([#114](https://github.com/NibiruChain/ts-sdk/issues/114)) ([7360fbb](https://github.com/NibiruChain/ts-sdk/commit/7360fbbdcc4f138a4c61f0587ecc75033822752a))
- release ([#282](https://github.com/NibiruChain/ts-sdk/issues/282)) ([e73cdcb](https://github.com/NibiruChain/ts-sdk/commit/e73cdcb0e8796f2242e9daf5a04d5c2e6d1ac855)), closes [#276](https://github.com/NibiruChain/ts-sdk/issues/276) [#275](https://github.com/NibiruChain/ts-sdk/issues/275) [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)
- release ([#282](https://github.com/NibiruChain/ts-sdk/issues/282)) ([#283](https://github.com/NibiruChain/ts-sdk/issues/283)) ([b743fc0](https://github.com/NibiruChain/ts-sdk/commit/b743fc08fb97d912e5c7e82e567341776fae1b74)), closes [#276](https://github.com/NibiruChain/ts-sdk/issues/276) [#275](https://github.com/NibiruChain/ts-sdk/issues/275) [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)
- **release:** 0.21.12 ([a980142](https://github.com/NibiruChain/ts-sdk/commit/a98014262f9550a6d04a3d7ca4fbbdfd5a3b4c26)), closes [#196](https://github.com/NibiruChain/ts-sdk/issues/196) [#204](https://github.com/NibiruChain/ts-sdk/issues/204) [#209](https://github.com/NibiruChain/ts-sdk/issues/209) [#196](https://github.com/NibiruChain/ts-sdk/issues/196) [#208](https://github.com/NibiruChain/ts-sdk/issues/208) [#196](https://github.com/NibiruChain/ts-sdk/issues/196)
- **release:** 0.21.12 ([0cb41aa](https://github.com/NibiruChain/ts-sdk/commit/0cb41aa49328aa848932b15c520e8f31f942ee28)), closes [#196](https://github.com/NibiruChain/ts-sdk/issues/196)
- **release:** 0.21.12 ([7c3a57d](https://github.com/NibiruChain/ts-sdk/commit/7c3a57deb80f8fde92ec0517cf1d9c1cba35c37a)), closes [#208](https://github.com/NibiruChain/ts-sdk/issues/208) [#196](https://github.com/NibiruChain/ts-sdk/issues/196)
- **release:** 0.21.13 ([2f56d3d](https://github.com/NibiruChain/ts-sdk/commit/2f56d3d4aede354484ec1583f8ec5b8572045279)), closes [#210](https://github.com/NibiruChain/ts-sdk/issues/210) [#210](https://github.com/NibiruChain/ts-sdk/issues/210)
- **release:** 0.21.13 ([352dbb5](https://github.com/NibiruChain/ts-sdk/commit/352dbb59db600694126753e60679d4996f159c42)), closes [#210](https://github.com/NibiruChain/ts-sdk/issues/210)
- **release:** 0.21.13 ([0bd88e6](https://github.com/NibiruChain/ts-sdk/commit/0bd88e6cabf2b7c076674eb00069b629b3c71c41))
- **release:** 0.21.14 ([ffe36b5](https://github.com/NibiruChain/ts-sdk/commit/ffe36b5ed08b17e837067e2695dd722586fa768b)), closes [#245](https://github.com/NibiruChain/ts-sdk/issues/245)
- **release:** 0.21.14 ([b569944](https://github.com/NibiruChain/ts-sdk/commit/b569944846a79613f0d9154fda51f679b14ee053)), closes [#215](https://github.com/NibiruChain/ts-sdk/issues/215)
- **release:** 0.21.14 ([85cf025](https://github.com/NibiruChain/ts-sdk/commit/85cf0257a1888ab997e089cae0127e85d1a0889c)), closes [#210](https://github.com/NibiruChain/ts-sdk/issues/210)
- **release:** 0.21.15 ([73b581c](https://github.com/NibiruChain/ts-sdk/commit/73b581c0f4949f3289e6392d1d426195073825c9)), closes [#247](https://github.com/NibiruChain/ts-sdk/issues/247)
- **release:** 0.21.15 ([94052c2](https://github.com/NibiruChain/ts-sdk/commit/94052c25d9b12ffd6a6e8c531f5225f1877de55a))
- **release:** 0.21.15 ([f83ea63](https://github.com/NibiruChain/ts-sdk/commit/f83ea6385a455fdd276589ddf4b07260b5c99fd2)), closes [#215](https://github.com/NibiruChain/ts-sdk/issues/215)
- **release:** 0.21.16 ([619965e](https://github.com/NibiruChain/ts-sdk/commit/619965ef1a3950fc5816ff98ad61c88458a3b8a8)), closes [#250](https://github.com/NibiruChain/ts-sdk/issues/250)
- **release:** 0.21.16 ([ed609e0](https://github.com/NibiruChain/ts-sdk/commit/ed609e0f9fcd87c4b5ba8376a9d707a610bed0ab))
- **release:** 0.21.16 ([01a2c4e](https://github.com/NibiruChain/ts-sdk/commit/01a2c4ea1bbe8f164311bd883e682e8fc88f6b94))
- **release:** 0.21.17 ([a21ae97](https://github.com/NibiruChain/ts-sdk/commit/a21ae97bcda8df0a2a274871866761bf7200ba6b)), closes [#216](https://github.com/NibiruChain/ts-sdk/issues/216) [#216](https://github.com/NibiruChain/ts-sdk/issues/216)
- **release:** 0.21.17 ([d3c9cf6](https://github.com/NibiruChain/ts-sdk/commit/d3c9cf62b9f8072c1d1fcebb4b8248cc5f7fe09f))
- **release:** 0.21.18 ([b15a382](https://github.com/NibiruChain/ts-sdk/commit/b15a3824bd0db8748edacafc993c60f474215643)), closes [#217](https://github.com/NibiruChain/ts-sdk/issues/217)
- **release:** 0.21.18 ([914ebcd](https://github.com/NibiruChain/ts-sdk/commit/914ebcdf01aba7371893996ba3f28dd700b71e0c)), closes [#216](https://github.com/NibiruChain/ts-sdk/issues/216)
- **release:** 0.21.19 ([d48bf99](https://github.com/NibiruChain/ts-sdk/commit/d48bf99f26984b41ac4c3a114da721e4ec2db4a1)), closes [#221](https://github.com/NibiruChain/ts-sdk/issues/221)
- **release:** 0.21.19 ([0d36024](https://github.com/NibiruChain/ts-sdk/commit/0d3602416aa51b2c861e8ed04e11656f9ed08c95)), closes [#218](https://github.com/NibiruChain/ts-sdk/issues/218)
- **release:** 0.21.20 ([069a137](https://github.com/NibiruChain/ts-sdk/commit/069a137c1a4f64b98196fa13eebc7139d59f46cc)), closes [#223](https://github.com/NibiruChain/ts-sdk/issues/223)
- **release:** 0.21.20 ([cb52229](https://github.com/NibiruChain/ts-sdk/commit/cb522299bbb02977e4424913fc49d35371b7baf6)), closes [#219](https://github.com/NibiruChain/ts-sdk/issues/219)
- **release:** 0.21.21 ([8f851e5](https://github.com/NibiruChain/ts-sdk/commit/8f851e59523e4a4668dea82ce27e1c9537648a6a)), closes [#228](https://github.com/NibiruChain/ts-sdk/issues/228)
- **release:** 0.21.21 ([3bb4cb3](https://github.com/NibiruChain/ts-sdk/commit/3bb4cb367aaadcc6655af1605e4d71273b9bebca)), closes [#221](https://github.com/NibiruChain/ts-sdk/issues/221) [#221](https://github.com/NibiruChain/ts-sdk/issues/221)
- **release:** 0.21.22 ([e72b3f9](https://github.com/NibiruChain/ts-sdk/commit/e72b3f9d65cf3c41fa994622639edc9d52b989b1)), closes [#224](https://github.com/NibiruChain/ts-sdk/issues/224)
- **release:** 0.21.22 ([ea820c5](https://github.com/NibiruChain/ts-sdk/commit/ea820c5eda273c3aba96e3435c0bb58e17b7cfc0)), closes [#223](https://github.com/NibiruChain/ts-sdk/issues/223)
- **release:** 0.21.23 ([c789641](https://github.com/NibiruChain/ts-sdk/commit/c7896412ec390e1be763c519350dfa8ec8cc2c8a)), closes [#233](https://github.com/NibiruChain/ts-sdk/issues/233)
- **release:** 0.21.23 ([f8341c3](https://github.com/NibiruChain/ts-sdk/commit/f8341c364ab77a717ee4d818a30b7a6f1d400650)), closes [#222](https://github.com/NibiruChain/ts-sdk/issues/222)
- **release:** 0.21.24 ([fdc963f](https://github.com/NibiruChain/ts-sdk/commit/fdc963fc3b3510b9867e4c47e20993f054824f59)), closes [#236](https://github.com/NibiruChain/ts-sdk/issues/236)
- **release:** 0.21.24 ([b2c42de](https://github.com/NibiruChain/ts-sdk/commit/b2c42defb880fde8fdf6018bd219d572c258ee95))
- **release:** 0.21.25 ([e5940d6](https://github.com/NibiruChain/ts-sdk/commit/e5940d635aefba6ef9090b08d30b975a5e80a0ae)), closes [#237](https://github.com/NibiruChain/ts-sdk/issues/237)
- **release:** 0.21.25 ([a4ddef5](https://github.com/NibiruChain/ts-sdk/commit/a4ddef56962c3a501303442289c088bcef7ebbc6))
- **release:** 0.21.26 ([2d3c0b4](https://github.com/NibiruChain/ts-sdk/commit/2d3c0b4d98b003265697f57831eee63b4b16f95d)), closes [#238](https://github.com/NibiruChain/ts-sdk/issues/238)
- **release:** 0.21.26 ([b09c708](https://github.com/NibiruChain/ts-sdk/commit/b09c708f6b593aeaf07120a1b04f9fba27b7f18a)), closes [#228](https://github.com/NibiruChain/ts-sdk/issues/228) [#228](https://github.com/NibiruChain/ts-sdk/issues/228)
- **release:** 0.21.27 ([053d2a8](https://github.com/NibiruChain/ts-sdk/commit/053d2a81cdd2fa397039440aaf1ed7c1fe465ac7)), closes [#239](https://github.com/NibiruChain/ts-sdk/issues/239)
- **release:** 0.21.27 ([b2a6738](https://github.com/NibiruChain/ts-sdk/commit/b2a6738a6215bce7a1c1da80214b4299568a172a)), closes [#224](https://github.com/NibiruChain/ts-sdk/issues/224) [#224](https://github.com/NibiruChain/ts-sdk/issues/224)
- **release:** 0.21.28 ([1ec2159](https://github.com/NibiruChain/ts-sdk/commit/1ec2159259a37ecd979f42510d237976065b9f70)), closes [#240](https://github.com/NibiruChain/ts-sdk/issues/240)
- **release:** 0.21.28 ([5867c99](https://github.com/NibiruChain/ts-sdk/commit/5867c993f17812263c58dcb5ed272a5c32d31707)), closes [#231](https://github.com/NibiruChain/ts-sdk/issues/231)
- **release:** 0.21.29 ([761ba67](https://github.com/NibiruChain/ts-sdk/commit/761ba67b4ecb46b5a7a640d2757b8fa4e15792fc)), closes [#241](https://github.com/NibiruChain/ts-sdk/issues/241)
- **release:** 0.21.29 ([981e77b](https://github.com/NibiruChain/ts-sdk/commit/981e77ba00c7cd94543416cef3e8205b3c78ee97)), closes [#233](https://github.com/NibiruChain/ts-sdk/issues/233) [#233](https://github.com/NibiruChain/ts-sdk/issues/233)
- **release:** 0.21.30 ([4bc7dd4](https://github.com/NibiruChain/ts-sdk/commit/4bc7dd44e886057dc6e940167c2364d3fb6fe0d2)), closes [#243](https://github.com/NibiruChain/ts-sdk/issues/243)
- **release:** 0.21.30 ([70b46f3](https://github.com/NibiruChain/ts-sdk/commit/70b46f3d9dfb51f4d9f3fda2bceb0fd5d3d6345b)), closes [#236](https://github.com/NibiruChain/ts-sdk/issues/236) [#236](https://github.com/NibiruChain/ts-sdk/issues/236)
- **release:** 0.21.31 ([2078100](https://github.com/NibiruChain/ts-sdk/commit/20781003112fd041acd97c8ee468f5fa426a7b8d)), closes [#244](https://github.com/NibiruChain/ts-sdk/issues/244)
- **release:** 0.21.31 ([8e41998](https://github.com/NibiruChain/ts-sdk/commit/8e419984902f40eb3862efdc845918ad55105f65)), closes [#237](https://github.com/NibiruChain/ts-sdk/issues/237) [#237](https://github.com/NibiruChain/ts-sdk/issues/237)
- **release:** 0.21.32 ([99d6a54](https://github.com/NibiruChain/ts-sdk/commit/99d6a54c2d2138243b2418c36ef6890f91a19d25)), closes [#245](https://github.com/NibiruChain/ts-sdk/issues/245)
- **release:** 0.21.32 ([010cb95](https://github.com/NibiruChain/ts-sdk/commit/010cb957554bba53b5ab1a42554718d2ab87f866)), closes [#238](https://github.com/NibiruChain/ts-sdk/issues/238) [#238](https://github.com/NibiruChain/ts-sdk/issues/238)
- **release:** 0.21.33 ([1c7114e](https://github.com/NibiruChain/ts-sdk/commit/1c7114e8777a24a73a6ed7f3e355071cb7f25358)), closes [#248](https://github.com/NibiruChain/ts-sdk/issues/248)
- **release:** 0.21.33 ([4bc4fb2](https://github.com/NibiruChain/ts-sdk/commit/4bc4fb25a2b1881aaed053b69ad37f6c882c48fb)), closes [#239](https://github.com/NibiruChain/ts-sdk/issues/239) [#239](https://github.com/NibiruChain/ts-sdk/issues/239)
- **release:** 0.21.34 ([b8e3018](https://github.com/NibiruChain/ts-sdk/commit/b8e3018e2bea199cbc7d93c30b0415d7578d78b7)), closes [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)
- **release:** 0.21.34 ([11c9782](https://github.com/NibiruChain/ts-sdk/commit/11c97826fe8a6987257c0d55ec6439e1bce3ac5a)), closes [#240](https://github.com/NibiruChain/ts-sdk/issues/240) [#240](https://github.com/NibiruChain/ts-sdk/issues/240)
- **release:** 0.21.35 ([7c9ee03](https://github.com/NibiruChain/ts-sdk/commit/7c9ee0321bff268308d7fd74515cc1cf03742a11)), closes [#241](https://github.com/NibiruChain/ts-sdk/issues/241) [#241](https://github.com/NibiruChain/ts-sdk/issues/241)
- **release:** 0.21.36 ([da07309](https://github.com/NibiruChain/ts-sdk/commit/da07309c9afa9cae2b6f61a1ddc4d7440978b697)), closes [#243](https://github.com/NibiruChain/ts-sdk/issues/243) [#243](https://github.com/NibiruChain/ts-sdk/issues/243)
- **release:** 0.21.37 ([6a47609](https://github.com/NibiruChain/ts-sdk/commit/6a47609a1ac16809dfa842de6dd836418736cd38)), closes [#244](https://github.com/NibiruChain/ts-sdk/issues/244) [#244](https://github.com/NibiruChain/ts-sdk/issues/244)
- **release:** 0.21.38 ([679503e](https://github.com/NibiruChain/ts-sdk/commit/679503edb0b353f46b32bf7e14e762a7a47dbef1)), closes [#245](https://github.com/NibiruChain/ts-sdk/issues/245) [#245](https://github.com/NibiruChain/ts-sdk/issues/245) [#245](https://github.com/NibiruChain/ts-sdk/issues/245)
- **release:** 0.21.39 ([7481385](https://github.com/NibiruChain/ts-sdk/commit/7481385adfb0636af06dd3f4c530f9e7cc8a0372)), closes [#247](https://github.com/NibiruChain/ts-sdk/issues/247) [#247](https://github.com/NibiruChain/ts-sdk/issues/247)
- **release:** 0.21.40 ([623b857](https://github.com/NibiruChain/ts-sdk/commit/623b8572aaa491504db2d63b95005250cb1f23a1)), closes [#248](https://github.com/NibiruChain/ts-sdk/issues/248) [#248](https://github.com/NibiruChain/ts-sdk/issues/248)
- **release:** 0.21.41 ([19eb616](https://github.com/NibiruChain/ts-sdk/commit/19eb616aecc380d0d4b987e78b3686d8671334b6)), closes [#249](https://github.com/NibiruChain/ts-sdk/issues/249)
- **release:** 0.21.42 ([8409d2a](https://github.com/NibiruChain/ts-sdk/commit/8409d2aaa593784cad440c52de972947b29e7075)), closes [#250](https://github.com/NibiruChain/ts-sdk/issues/250) [#250](https://github.com/NibiruChain/ts-sdk/issues/250)
- **release:** 0.21.43 ([43d6096](https://github.com/NibiruChain/ts-sdk/commit/43d6096b6ef40319dd260a0d199ea8a8ce09ba1f)), closes [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)
- **release:** 0.21.44 ([2a04acd](https://github.com/NibiruChain/ts-sdk/commit/2a04acd6c70a0c05a0893574a9218ec21013ef3e)), closes [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)
- **release:** 0.21.45 ([f5d0175](https://github.com/NibiruChain/ts-sdk/commit/f5d0175c9b64eff1fe4e3c3281c869bc5fdc7eba)), closes [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)
- remove jest config ([9d040cf](https://github.com/NibiruChain/ts-sdk/commit/9d040cfe74056a34ac55a50b770d3e0afa05f3f6))
- remove tsconfig.build.json ([9182fef](https://github.com/NibiruChain/ts-sdk/commit/9182fefca6ec3321b8d42d7e6f01aa56f14020ec))
- rerun lerna build ([76833d1](https://github.com/NibiruChain/ts-sdk/commit/76833d17d37af5662c8c2fc66272b5eec8f4952a))
- update codeowners ([e7510ef](https://github.com/NibiruChain/ts-sdk/commit/e7510ef449643e5f378e913dcd22b786d38a43be))
- update readme docs ([4e080fd](https://github.com/NibiruChain/ts-sdk/commit/4e080fdb26a0dbb0d1dca18ae27062cc5d79abc4))
- version bump nibijs ([de3e026](https://github.com/NibiruChain/ts-sdk/commit/de3e026fc5efaa95e93467df6bfdce64e9590a3a))

### Tests

- chore release ([9c99aeb](https://github.com/NibiruChain/ts-sdk/commit/9c99aebbdf67956133952b48a6958f0b15d6cb65))
- **nibijs:** fix tests + msg factory ([#149](https://github.com/NibiruChain/ts-sdk/issues/149)) ([f979968](https://github.com/NibiruChain/ts-sdk/commit/f97996850cb7be48f5f2fa518ad42ec401129c8b))
- **nibijs:** make runs more consistent + fix export of dist/msg ([#154](https://github.com/NibiruChain/ts-sdk/issues/154)) ([37bc02f](https://github.com/NibiruChain/ts-sdk/commit/37bc02f6fca5b8553fe7d08fbee5500e60ec0e57))

## [@nibiruchain/nibijs-v0.21.45](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.44...@nibiruchain/nibijs-v0.21.45) (2024-01-04)

### Miscellaneous Chores

- develop -> main ([#274](https://github.com/NibiruChain/ts-sdk/issues/274)) ([e2ebd40](https://github.com/NibiruChain/ts-sdk/commit/e2ebd40c5df0a0a4126b3aa97709e13b7e2e0ba8)), closes [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)

## [@nibiruchain/nibijs-v0.21.44](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.43...@nibiruchain/nibijs-v0.21.44) (2023-12-20)

### Features

- trigger release ([#271](https://github.com/NibiruChain/ts-sdk/issues/271)) ([c7f0580](https://github.com/NibiruChain/ts-sdk/commit/c7f0580176d39af4d2662b6360fa28c25210ca2c)), closes [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)

## [@nibiruchain/nibijs-v0.21.43](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.42...@nibiruchain/nibijs-v0.21.43) (2023-12-13)

### Bug Fixes

- **release:** please publish ([acf236b](https://github.com/NibiruChain/ts-sdk/commit/acf236bc2f12e04f17bf3f16c6f5819e8c3de011))
- **release:** please publish changes from develop ([#267](https://github.com/NibiruChain/ts-sdk/issues/267)) ([38e463d](https://github.com/NibiruChain/ts-sdk/commit/38e463d5ddb89d3f28d340313f07d3c968faeec4)), closes [#254](https://github.com/NibiruChain/ts-sdk/issues/254) [#256](https://github.com/NibiruChain/ts-sdk/issues/256) [#257](https://github.com/NibiruChain/ts-sdk/issues/257) [#262](https://github.com/NibiruChain/ts-sdk/issues/262) [#260](https://github.com/NibiruChain/ts-sdk/issues/260)

## [@nibiruchain/nibijs-v0.21.42](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.41...@nibiruchain/nibijs-v0.21.42) (2023-11-30)

### Bug Fixes

- **fix:** unhide spot/perp protojs ([#250](https://github.com/NibiruChain/ts-sdk/issues/250)) ([1723d2b](https://github.com/NibiruChain/ts-sdk/commit/1723d2b41187009dbda1efe997109cb74b6ac953))

### Miscellaneous Chores

- **release:** 0.21.16 ([619965e](https://github.com/NibiruChain/ts-sdk/commit/619965ef1a3950fc5816ff98ad61c88458a3b8a8)), closes [#250](https://github.com/NibiruChain/ts-sdk/issues/250)

## [@nibiruchain/nibijs-v0.21.41](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.40...@nibiruchain/nibijs-v0.21.41) (2023-11-16)

### Code Refactors

- join only non undefined strings ([#249](https://github.com/NibiruChain/ts-sdk/issues/249)) ([6ab8616](https://github.com/NibiruChain/ts-sdk/commit/6ab8616647f85e20e9de39d5dd4f0eb354d3c682))

## [@nibiruchain/nibijs-v0.21.40](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.39...@nibiruchain/nibijs-v0.21.40) (2023-11-15)

### Features

- **ibc:** transfers and channels ([#248](https://github.com/NibiruChain/ts-sdk/issues/248)) ([26d148a](https://github.com/NibiruChain/ts-sdk/commit/26d148a179bfa837c5c1b6b8894a1ce167f8717d))

### Miscellaneous Chores

- **release:** 0.21.33 ([1c7114e](https://github.com/NibiruChain/ts-sdk/commit/1c7114e8777a24a73a6ed7f3e355071cb7f25358)), closes [#248](https://github.com/NibiruChain/ts-sdk/issues/248)

## [@nibiruchain/nibijs-v0.21.39](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.38...@nibiruchain/nibijs-v0.21.39) (2023-11-08)

### Features

- **hide:** perp and Spot protojs ([#247](https://github.com/NibiruChain/ts-sdk/issues/247)) ([7a9e071](https://github.com/NibiruChain/ts-sdk/commit/7a9e07193d5fe9d624cdd16a4c028063765f3eaa))

### Miscellaneous Chores

- **release:** 0.21.15 ([73b581c](https://github.com/NibiruChain/ts-sdk/commit/73b581c0f4949f3289e6392d1d426195073825c9)), closes [#247](https://github.com/NibiruChain/ts-sdk/issues/247)

## [@nibiruchain/nibijs-v0.21.38](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.37...@nibiruchain/nibijs-v0.21.38) (2023-11-01)

### Bug Fixes

- **rem:** throws ([#245](https://github.com/NibiruChain/ts-sdk/issues/245)) ([6e5ea8f](https://github.com/NibiruChain/ts-sdk/commit/6e5ea8f76a454686afe221e13f9402b0118fe91c))

### Miscellaneous Chores

- **release:** 0.21.14 ([ffe36b5](https://github.com/NibiruChain/ts-sdk/commit/ffe36b5ed08b17e837067e2695dd722586fa768b)), closes [#245](https://github.com/NibiruChain/ts-sdk/issues/245)
- **release:** 0.21.32 ([99d6a54](https://github.com/NibiruChain/ts-sdk/commit/99d6a54c2d2138243b2418c36ef6890f91a19d25)), closes [#245](https://github.com/NibiruChain/ts-sdk/issues/245)

## [@nibiruchain/nibijs-v0.21.37](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.36...@nibiruchain/nibijs-v0.21.37) (2023-11-01)

### Features

- **nibijs:** tests ([#244](https://github.com/NibiruChain/ts-sdk/issues/244)) ([1045d4d](https://github.com/NibiruChain/ts-sdk/commit/1045d4d3bd2e28c740e3818ca10c8c9dbdf13982))

### Miscellaneous Chores

- **release:** 0.21.31 ([2078100](https://github.com/NibiruChain/ts-sdk/commit/20781003112fd041acd97c8ee468f5fa426a7b8d)), closes [#244](https://github.com/NibiruChain/ts-sdk/issues/244)

## [@nibiruchain/nibijs-v0.21.36](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.35...@nibiruchain/nibijs-v0.21.36) (2023-10-20)

### Features

- **indexer-nibi 99% coverage:** coverage ([#243](https://github.com/NibiruChain/ts-sdk/issues/243)) ([1da2942](https://github.com/NibiruChain/ts-sdk/commit/1da29427d62801d47c46901e5275e92f60fc6971))

### Miscellaneous Chores

- **release:** 0.21.30 ([4bc7dd4](https://github.com/NibiruChain/ts-sdk/commit/4bc7dd44e886057dc6e940167c2364d3fb6fe0d2)), closes [#243](https://github.com/NibiruChain/ts-sdk/issues/243)

## [@nibiruchain/nibijs-v0.21.35](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.34...@nibiruchain/nibijs-v0.21.35) (2023-10-13)

### Features

- **test enhancements:** enhance ([#241](https://github.com/NibiruChain/ts-sdk/issues/241)) ([f9e55f7](https://github.com/NibiruChain/ts-sdk/commit/f9e55f7cc3fb15e59d8b728ceed1f3718e28bc6a))

### Miscellaneous Chores

- **release:** 0.21.29 ([761ba67](https://github.com/NibiruChain/ts-sdk/commit/761ba67b4ecb46b5a7a640d2757b8fa4e15792fc)), closes [#241](https://github.com/NibiruChain/ts-sdk/issues/241)

## [@nibiruchain/nibijs-v0.21.34](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.33...@nibiruchain/nibijs-v0.21.34) (2023-10-10)

### Bug Fixes

- **fix:** hm ([#240](https://github.com/NibiruChain/ts-sdk/issues/240)) ([4a31757](https://github.com/NibiruChain/ts-sdk/commit/4a317575e33d34008d443c7240a6d9f5527247b5))

### Miscellaneous Chores

- **release:** 0.21.28 ([1ec2159](https://github.com/NibiruChain/ts-sdk/commit/1ec2159259a37ecd979f42510d237976065b9f70)), closes [#240](https://github.com/NibiruChain/ts-sdk/issues/240)

## [@nibiruchain/nibijs-v0.21.33](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.32...@nibiruchain/nibijs-v0.21.33) (2023-10-06)

### Features

- add volume notional to candle chart ([#239](https://github.com/NibiruChain/ts-sdk/issues/239)) ([d147d43](https://github.com/NibiruChain/ts-sdk/commit/d147d43a5d7b569197b9ae944c83b0dd58bc77e2))

### Miscellaneous Chores

- **release:** 0.21.27 ([053d2a8](https://github.com/NibiruChain/ts-sdk/commit/053d2a81cdd2fa397039440aaf1ed7c1fe465ac7)), closes [#239](https://github.com/NibiruChain/ts-sdk/issues/239)

## [@nibiruchain/nibijs-v0.21.32](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.31...@nibiruchain/nibijs-v0.21.32) (2023-10-06)

### Features

- add volume to mark price candles ([#238](https://github.com/NibiruChain/ts-sdk/issues/238)) ([aaee27f](https://github.com/NibiruChain/ts-sdk/commit/aaee27f655ad1bb88d4121a691211dd0335f96a5))

### Miscellaneous Chores

- **release:** 0.21.26 ([2d3c0b4](https://github.com/NibiruChain/ts-sdk/commit/2d3c0b4d98b003265697f57831eee63b4b16f95d)), closes [#238](https://github.com/NibiruChain/ts-sdk/issues/238)

## [@nibiruchain/nibijs-v0.21.31](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.30...@nibiruchain/nibijs-v0.21.31) (2023-10-04)

### Bug Fixes

- **fix:** multi-schema ([#237](https://github.com/NibiruChain/ts-sdk/issues/237)) ([3914891](https://github.com/NibiruChain/ts-sdk/commit/391489184bd1704442a03c6c6220df0c679caedf))

### Miscellaneous Chores

- **release:** 0.21.25 ([e5940d6](https://github.com/NibiruChain/ts-sdk/commit/e5940d635aefba6ef9090b08d30b975a5e80a0ae)), closes [#237](https://github.com/NibiruChain/ts-sdk/issues/237)

## [@nibiruchain/nibijs-v0.21.30](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.29...@nibiruchain/nibijs-v0.21.30) (2023-10-03)

### Bug Fixes

- **fix:** hm ([#236](https://github.com/NibiruChain/ts-sdk/issues/236)) ([424e644](https://github.com/NibiruChain/ts-sdk/commit/424e64466ea1c5b6fb7c6b9c17f7f6f2877a8a97))

### Miscellaneous Chores

- **release:** 0.21.24 ([fdc963f](https://github.com/NibiruChain/ts-sdk/commit/fdc963fc3b3510b9867e4c47e20993f054824f59)), closes [#236](https://github.com/NibiruChain/ts-sdk/issues/236)

## [@nibiruchain/nibijs-v0.21.29](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.28...@nibiruchain/nibijs-v0.21.29) (2023-10-02)

### Bug Fixes

- **new:** schema ([#233](https://github.com/NibiruChain/ts-sdk/issues/233)) ([83f95d4](https://github.com/NibiruChain/ts-sdk/commit/83f95d453cca81d325258248beb163a0a513ba4c))

### Miscellaneous Chores

- **release:** 0.21.23 ([c789641](https://github.com/NibiruChain/ts-sdk/commit/c7896412ec390e1be763c519350dfa8ec8cc2c8a)), closes [#233](https://github.com/NibiruChain/ts-sdk/issues/233)

## [@nibiruchain/nibijs-v0.21.28](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.27...@nibiruchain/nibijs-v0.21.28) (2023-09-22)

### CI/CD

- check nibid in nibijs tests workflow ([#231](https://github.com/NibiruChain/ts-sdk/issues/231)) ([0715849](https://github.com/NibiruChain/ts-sdk/commit/0715849bae7d09bda2f135c8fd0eb4da0a7a9881))

## [@nibiruchain/nibijs-v0.21.27](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.26...@nibiruchain/nibijs-v0.21.27) (2023-09-21)

### Features

- **subscription:** subscriptions ([#224](https://github.com/NibiruChain/ts-sdk/issues/224)) ([43c20f4](https://github.com/NibiruChain/ts-sdk/commit/43c20f45f112661e0740833e9fc059670aa0e6f6))

### Miscellaneous Chores

- **release:** 0.21.22 ([e72b3f9](https://github.com/NibiruChain/ts-sdk/commit/e72b3f9d65cf3c41fa994622639edc9d52b989b1)), closes [#224](https://github.com/NibiruChain/ts-sdk/issues/224)

## [@nibiruchain/nibijs-v0.21.26](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.25...@nibiruchain/nibijs-v0.21.26) (2023-09-20)

### Code Refactors

- including avg_pct_pnl_rank into leaderboard schema ([#228](https://github.com/NibiruChain/ts-sdk/issues/228)) ([317eea5](https://github.com/NibiruChain/ts-sdk/commit/317eea51ae68ce322f6c2dc9ab487442ee3c2539))

### Miscellaneous Chores

- **release:** 0.21.21 ([8f851e5](https://github.com/NibiruChain/ts-sdk/commit/8f851e59523e4a4668dea82ce27e1c9537648a6a)), closes [#228](https://github.com/NibiruChain/ts-sdk/issues/228)

## [@nibiruchain/nibijs-v0.21.25](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.24...@nibiruchain/nibijs-v0.21.25) (2023-09-18)

### Code Refactors

- adding correct msg partial close parameters ([3ca59b8](https://github.com/NibiruChain/ts-sdk/commit/3ca59b8b38058cc60f8a80248a60acbc8bf08b23))

## [@nibiruchain/nibijs-v0.21.24](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.23...@nibiruchain/nibijs-v0.21.24) (2023-09-18)

### Code Refactors

- latest nibijs ([7e958cb](https://github.com/NibiruChain/ts-sdk/commit/7e958cb75bb194f0b7180d7561e4c0af9f281877))

## [@nibiruchain/nibijs-v0.21.23](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.22...@nibiruchain/nibijs-v0.21.23) (2023-09-14)

### Miscellaneous Chores

- add partial close position on nibi perp ([#222](https://github.com/NibiruChain/ts-sdk/issues/222)) ([1afbc87](https://github.com/NibiruChain/ts-sdk/commit/1afbc87e40e36ca6772eea79fa2e1102696e2bdc))

## [@nibiruchain/nibijs-v0.21.22](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.21...@nibiruchain/nibijs-v0.21.22) (2023-09-13)

### Miscellaneous Chores

- **release:** 0.21.20 ([069a137](https://github.com/NibiruChain/ts-sdk/commit/069a137c1a4f64b98196fa13eebc7139d59f46cc)), closes [#223](https://github.com/NibiruChain/ts-sdk/issues/223)

## [@nibiruchain/nibijs-v0.21.21](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.20...@nibiruchain/nibijs-v0.21.21) (2023-09-06)

### Bug Fixes

- **fix:** window ([#221](https://github.com/NibiruChain/ts-sdk/issues/221)) ([6ba46d6](https://github.com/NibiruChain/ts-sdk/commit/6ba46d6fdac7effc00fec364ced60a1f5fdc130b))

### Miscellaneous Chores

- **release:** 0.21.19 ([d48bf99](https://github.com/NibiruChain/ts-sdk/commit/d48bf99f26984b41ac4c3a114da721e4ec2db4a1)), closes [#221](https://github.com/NibiruChain/ts-sdk/issues/221)

## [@nibiruchain/nibijs-v0.21.20](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.19...@nibiruchain/nibijs-v0.21.20) (2023-08-30)

### Bug Fixes

- **fix:** node info ([#219](https://github.com/NibiruChain/ts-sdk/issues/219)) ([9d6af39](https://github.com/NibiruChain/ts-sdk/commit/9d6af39a44e84db0e13cfcb15e11e40d4c7aa470))

## [@nibiruchain/nibijs-v0.21.19](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.18...@nibiruchain/nibijs-v0.21.19) (2023-08-30)

### Bug Fixes

- **fix:** spelling ([#218](https://github.com/NibiruChain/ts-sdk/issues/218)) ([0e252f8](https://github.com/NibiruChain/ts-sdk/commit/0e252f83f259119c6ba80b8d04a15f1c61d4b7d9))

## [@nibiruchain/nibijs-v0.21.18](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.17...@nibiruchain/nibijs-v0.21.18) (2023-08-30)

### Features

- **nibijs:** add fromChainId factory method ([#217](https://github.com/NibiruChain/ts-sdk/issues/217)) ([0d44203](https://github.com/NibiruChain/ts-sdk/commit/0d44203255d7ebbf4255b77b082a48fe3fe06b4a))

## [@nibiruchain/nibijs-v0.21.17](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.16...@nibiruchain/nibijs-v0.21.17) (2023-08-28)

### Features

- **post:** graphql reqs ([#216](https://github.com/NibiruChain/ts-sdk/issues/216)) ([bccd08e](https://github.com/NibiruChain/ts-sdk/commit/bccd08ecd24b21847ac3adbba234fadcdfd371db))

### Miscellaneous Chores

- **release:** 0.21.18 ([914ebcd](https://github.com/NibiruChain/ts-sdk/commit/914ebcdf01aba7371893996ba3f28dd700b71e0c)), closes [#216](https://github.com/NibiruChain/ts-sdk/issues/216)

## [@nibiruchain/nibijs-v0.21.16](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.15...@nibiruchain/nibijs-v0.21.16) (2023-08-28)

### Bug Fixes

- **fix:** query arg list ([a26eb08](https://github.com/NibiruChain/ts-sdk/commit/a26eb08b6f3705921e4a7695ada91d19015c3530))

### Miscellaneous Chores

- **release:** 0.21.17 ([d3c9cf6](https://github.com/NibiruChain/ts-sdk/commit/d3c9cf62b9f8072c1d1fcebb4b8248cc5f7fe09f))

## [@nibiruchain/nibijs-v0.21.15](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.14...@nibiruchain/nibijs-v0.21.15) (2023-08-28)

### Bug Fixes

- **fix type:** fix type ([ac556ed](https://github.com/NibiruChain/ts-sdk/commit/ac556ed576ad70f4379723883a87bd3960fccfbe))

### Miscellaneous Chores

- **release:** 0.21.16 ([01a2c4e](https://github.com/NibiruChain/ts-sdk/commit/01a2c4ea1bbe8f164311bd883e682e8fc88f6b94))

## [@nibiruchain/nibijs-v0.21.14](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.13...@nibiruchain/nibijs-v0.21.14) (2023-08-28)

### Miscellaneous Chores

- **release:** 0.21.15 ([f83ea63](https://github.com/NibiruChain/ts-sdk/commit/f83ea6385a455fdd276589ddf4b07260b5c99fd2)), closes [#215](https://github.com/NibiruChain/ts-sdk/issues/215)

## [@nibiruchain/nibijs-v0.21.13](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.12...@nibiruchain/nibijs-v0.21.13) (2023-08-28)

### Miscellaneous Chores

- **release:** 0.21.13 ([352dbb5](https://github.com/NibiruChain/ts-sdk/commit/352dbb59db600694126753e60679d4996f159c42)), closes [#210](https://github.com/NibiruChain/ts-sdk/issues/210)
- **release:** 0.21.14 ([85cf025](https://github.com/NibiruChain/ts-sdk/commit/85cf0257a1888ab997e089cae0127e85d1a0889c)), closes [#210](https://github.com/NibiruChain/ts-sdk/issues/210)

## [@nibiruchain/nibijs-v0.21.12](https://github.com/NibiruChain/ts-sdk/compare/@nibiruchain/nibijs-v0.21.11...@nibiruchain/nibijs-v0.21.12) (2023-08-17)

### Bug Fixes

- npm registry update ([5533015](https://github.com/NibiruChain/ts-sdk/commit/55330150f5bf75fb6863da4e8eccd79e49893bb8))

### Code Refactors

- adding semantic release for v21 ([#196](https://github.com/NibiruChain/ts-sdk/issues/196)) ([b4ddc07](https://github.com/NibiruChain/ts-sdk/commit/b4ddc078042322610c6d1006edd758d84dedf7b8))
- faucet test desccription ([8b0a79d](https://github.com/NibiruChain/ts-sdk/commit/8b0a79d226857e2bf3b11b82a60a0dec9d85b19f))
- grecaptcha v21 ([#204](https://github.com/NibiruChain/ts-sdk/issues/204)) ([08af259](https://github.com/NibiruChain/ts-sdk/commit/08af259012c68dad2986b6ead8bf54cf07e1235a))
- registry update ([ed391cf](https://github.com/NibiruChain/ts-sdk/commit/ed391cf6cd2e097c55d88ce235d0308ac8685d4f))
- release rules update & v18 upgrade ([#209](https://github.com/NibiruChain/ts-sdk/issues/209)) ([9d73ab2](https://github.com/NibiruChain/ts-sdk/commit/9d73ab2061b9da72bed21f7d81b35958fd1f8637))

### Miscellaneous Chores

- **release:** 0.21.12 ([0cb41aa](https://github.com/NibiruChain/ts-sdk/commit/0cb41aa49328aa848932b15c520e8f31f942ee28)), closes [#196](https://github.com/NibiruChain/ts-sdk/issues/196)
- **release:** 0.21.12 ([7c3a57d](https://github.com/NibiruChain/ts-sdk/commit/7c3a57deb80f8fde92ec0517cf1d9c1cba35c37a)), closes [#208](https://github.com/NibiruChain/ts-sdk/issues/208) [#196](https://github.com/NibiruChain/ts-sdk/issues/196)
- **release:** 0.21.13 ([0bd88e6](https://github.com/NibiruChain/ts-sdk/commit/0bd88e6cabf2b7c076674eb00069b629b3c71c41))
