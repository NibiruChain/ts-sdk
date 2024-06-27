<p align="center">
<img src="https://raw.githubusercontent.com/NibiruChain/ts-sdk/develop/img/nibijs.png" width="100%">
</p>

<!-- NOTE: Use direct links for external sites that copy these files. -->

<p align="center">
The official TypeScript SDK for the Nibiru blockchain!
</p>

<div style="display: flex; flex-direction: row; gap: 4px;">
<!-- Badge | NPM version -->
<a target="_blank" href="https://www.npmjs.com/package/@nibiruchain/nibijs">
  <img src="https://img.shields.io/npm/v/@nibiruchain/nibijs.svg?color=AE8CCD" style="height: 20px">
</a>

<!-- Badge | Test workflows -->
<a target="_blank" href="https://github.com/NibiruChain/ts-sdk/actions/workflows/test-ts-sdk.yaml" alt="⛓️ Tests @nibiruchain/nibijs">
  <img src="https://github.com/NibiruChain/ts-sdk/actions/workflows/test-ts-sdk.yaml/badge.svg?branch=main" style="height: 20px">
</a>

<!-- Badge | NPM downloads -->
<a target="_blank" href="https://www.npmjs.com/package/@nibiruchain/nibijs">
  <img src="https://img.shields.io/npm/dm/@nibiruchain/nibijs.svg?color=FFF3CD" style="height: 20px">
</a>

<!-- Badge | NPM license -->
<a target="_blank" href="https://github.com/NibiruChain/ts-sdk/blob/main/LICENSE">
  <img src="https://img.shields.io/npm/l/express.svg?color=050505" style="height: 20px">
</a>

<!-- Badge | Discord members -->
<a target="_blank" href="https://discord.gg/nibirufi">
  <img src="https://dcbadge.vercel.app/api/server/nibirufi?style=flat" style="height: 20px">
</a>
</div>

The NibiJS (`@nibiruchain/nibijs`) package makes it possible to interact with Nibiru from a Node.js or browser environment. `nibijs` provides simple abstractions for core data structures, serialization, key management, API requests, and the submission of transactions.

The `nibijs` source code can be found in the `src` directory.

#### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Example: Creating a wallet](#example-creating-a-wallet)
  - [Example: Querying](#example-querying)
  - [Example: Sending funds](#example-sending-funds)
  - [Example: Transaction with arbitrary messages](#example-transaction-with-arbitrary-messages)
- [Codebase structure](#codebase-structure)
- [Development Quick Start](#development-quick-start)
- [🔓 License](#%F0%9F%94%93-license)

To learn more about Nibiru, see [nibiru.fi/docs](https://nibiru.fi/docs)

---

## Installation

[@nibiruchain/nibijs][npm-nibijs] is available on the npm registry.

[npm-nibijs]: https://www.npmjs.com/package/@nibiruchain/nibijs

```
npm install @nibiruchain/nibijs # or yarn add
```

## Usage

The entrypoint for `nibijs` is the `Sdk` object, which is meant to mimic the root of a command line interface. It can be used for both queries and transactions.

### Example: Creating a wallet

```js
import { newRandomWallet } from "@nibiruchain/nibijs"

// Create a new Nibiru wallet
const wallet = await newRandomWallet()
const [{ address }] = await wallet.getAccounts()

// Save the mnemonic somewhere to re-use the account
console.log("mnemonic: ", wallet.mnemonic)
console.log("address: ", address)
```

### Example: Querying

```js
import { NibiruQuerier, Testnet } from "@nibiruchain/nibijs"

export const CHAIN = Testnet(2)
const querier = await NibiruQuerier.connect(CHAIN.endptTm)

// Query balances
const exampleAddress = "nibi17dz4cdw5fmm2cxd4ht9xvjmpw3ycmpkpcc6js9"
const balances = await querier.getAllBalances(exampleAddress)
console.log("balances: %o", balances)

// Query block
const blockHeight = 200000
const block = await querier.getBlock(blockHeight)
console.log("block: %o", block)

// Query PERP markets
const perpMarkets = await querier.nibiruExtensions.perp.markets()
console.log("perpMarkets: %o", perpMarkets)

// Query SPOT pools
const spotPools = await querier.nibiruExtensions.spot.pools()
console.log("spotPools: %o", spotPools)
```

### Example: Sending funds

```js
import {
  NibiruTxClient,
  newSignerFromMnemonic,
  Testnet,
  NibiruQuerier,
} from "@nibiruchain/nibijs"
import { coins } from "@cosmjs/proto-signing"

export const CHAIN = Testnet(2)
const mnemonic = "your mnemonic here..."
const signer = await newSignerFromMnemonic(mnemonic)
const querier = await NibiruQuerier.connect(CHAIN.endptTm)
const txClient = await NibiruTxClient.connectWithSigner(CHAIN.endptTm, signer)
const [{ address: fromAddr }] = await signer.getAccounts()

// Check balance before sending tokens
const exampleAddress = "nibi1mzjkw9z5ugajxchl884y0c28lk2627hpuljuw4"
let balances = await querier.getAllBalances(exampleAddress)
console.log("balances: %o", balances)

const tokens = coins(5, "unibi")
const txResp = await txClient.sendTokens(
  fromAddr,
  exampleAddress,
  tokens,
  5000 // gas fee 5000 unibi
)
console.log(txResp)

// Execution could take several seconds
const delay = (ms) => new Promise((res) => setTimeout(res, ms))
await delay(10000)

// Check balance after send tokens
balances = await querier.getAllBalances(exampleAddress)
console.log("balances: %o", balances)
```

### Example: Transaction with arbitrary messages

```js
import {
  NibiruTxClient,
  newSignerFromMnemonic,
  Msg,
  Testnet,
  NibiruQuerier,
} from "@nibiruchain/nibijs"
import { coin } from "@cosmjs/proto-signing"

const mnemonic = "Your mnemonic here"
export const CHAIN = Testnet(2)
const signer = await newSignerFromMnemonic(mnemonic)
const querier = await NibiruQuerier.connect(CHAIN.endptTm)
const txClient = await NibiruTxClient.connectWithSigner(CHAIN.endptTm, signer)
const [{ address: fromAddr }] = await signer.getAccounts()
const pair = "ubtc:unusd"

// Construct tx msgs
const msgs = [
  Msg.perp.openPosition({
    sender: fromAddr,
    pair: pair,
    quoteAssetAmount: 10,
    leverage: 1,
    goLong: true,
    baseAssetAmountLimit: 0,
  }),
  Msg.perp.addMargin({
    sender: fromAddr,
    pair: pair,
    margin: coin("20", "unusd"),
  }),
  Msg.perp.removeMargin({
    sender: fromAddr,
    pair: pair,
    margin: coin("5", "unusd"),
  }),
  // final margin value of 10 (open) + 20 (add) - 5 (remove) = 25
]

// Broadcast tx
const txResp = await txClient.signAndBroadcast(fromAddr, msgs, "auto")
console.log(txResp)

// Check your open PERP positions
const delay = (ms) => new Promise((res) => setTimeout(res, ms))
await delay(5000)

const perpPositions = await querier.nibiruExtensions.perp.positions({
  trader: fromAddr,
})
console.log("perpPositions: %o", perpPositions)
```

## Codebase structure

| Directories of `@nibiruchain/nibijs` | Purpose/Utility                                                                                                                          |
| :----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `common`                             | home to several commonly needed types, constants and configurations such as Network.                                                     |
| `msg`                                | Implements functions for creating messages (`Msg`s). These are objects that trigger state-transitions and get wrapped into transactions. |
| `query`                              | For querying state via the consensus engine of a full-node and the application blockchain interface (ABCI).                              |
| `tx`                                 | For signing and to submitting transactions given a set of `Msg` objects.                                                                 |
| `wallet`                             | A simple wrapper around the Keplr wallet. This module will grow as support is added for other wallets (like MetaMask).                   |

`@nibiruchain/protojs` provides types generated from the protocol buffers of the Cosmos-SDK, Tendermint Core, and Nibiru Chain. For most use cases, it won't be necessary to interact with this layer.

---

<!-- TODO: ## 📜 Contribution Guidelines -->

## Development Quick Start

1. Install and use `nvm`.

   ```bash
   wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash
   nvm use
   ```

2. Install yarn.

   ```sh
   npm install -g yarn
   ```

3. Then, install package dependencies. At the root of the repository, run

   ```sh
   yarn
   ```

4. Initialize git submodules

   ```sh
   git submodule init
   git submodule update
   ```

5. Lastly, compile the code in each package.

   ```sh
   yarn build
   ```

See [HACKING.md](https://github.com/NibiruChain/ts-sdk/blob/main/HACKING.md) for the full development guide. It includes instructions on:

1. Running tests
2. Generating code for the @nibiruchain/protojs package
3. Generating documentation in HTML or Markdown from the comments of @nibiruchain/nibijs

---

## 🔓 License

This software is licensed under the MIT license. See [LICENSE](https://github.com/NibiruChain/ts-sdk/blob/main/LICENSE) for full disclosure.

© 2023 Nibi, Inc.

<p align="center">
<img src="https://raw.githubusercontent.com/NibiruChain/ts-sdk/main/img/nibi-logo-onwhite.png" style="width:200px">
</p>
