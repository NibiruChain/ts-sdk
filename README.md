<p align="center">
<img src="https://raw.githubusercontent.com/NibiruChain/ts-sdk/main/img/nibijs.png" width="100%">
</p>

<!-- NOTE: Use direct links for external sites that copy these files. -->

<p align="center">
The official TypeScript SDK for the Nibiru blockchain
</p>

<div style="display: flex; flex-direction: row; gap: 4px;">
<!-- Badge | NPM version -->
<a target="_blank" href="https://www.npmjs.com/package/@nibiruchain/nibijs">
  <img src="https://img.shields.io/npm/v/@nibiruchain/nibijs.svg?color=AE8CCD" style="height: 20px">
</a>

<!-- Badge | Test workflows -->
<a target="_blank" href="https://github.com/NibiruChain/ts-sdk/actions/workflows/test-ts-sdk.yaml" alt="⛓️ Tests @nibiruchain/nibijs">
  <img src="https://github.com/NibiruChain/ts-sdk/actions/workflows/test-ts-sdk.yaml/badge.svg?branch=releases%2Fv0.21.x" style="height: 20px">
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

The `nibijs` source code can be found in the ["packages" directory](https://github.com/NibiruChain/ts-sdk/tree/main/packages). The types and classes generated from Nibiru's `.proto` files are inside a separate `npm` package called `@nibiruchain/protojs`.

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
import {
  NibiruQueryClient,
  NibiruSigningClient,
  Localnet,
} from "@nibiruchain/nibijs"

export const CHAIN: Chain = Localnet
const queryClient = await NibiruQueryClient.connect(CHAIN.endptTm)

const perpParamsResp = await queryClient.nibiruExtensions.perp.params()
console.log("perpParams: %o", perpParamsResp)

const allMarkets = await queryClient.nibiruExtensions.perp.markets({
  pair: "ueth:unusd",
})
console.log("allMarkets: %o", allMarkets)

const blockHeight = 1
const block = await queryClient.getBlock(blockHeight)
```

### Example: Sending funds

```js
import {
  Coin,
  NibiruSigningClient,
  newSignerFromMnemonic,
  Localnet
} from "@nibiruchain/nibijs"
import { coins } from "@cosmjs/proto-signing"

export const CHAIN: Chain = Localnet
const signer = await newSignerFromMnemonic(mnemonic!)
const signingClient = await NibiruSigningClient.connectWithSigner(
  CHAIN.endptTm,
  signer,
)
const [{ address: fromAddr }] = await signer.getAccounts()

const tokens: Coin[] = coins(5, "unibi")
const toAddr: string = "..." // bech32 address of the receiving party
const txResp = await signingClient.sendTokens(fromAddr, toAddr, tokens, "auto")
```

### Example: Transaction with arbitrary messages

```js
import {
  NibiruSigningClient,
  newSignerFromMnemonic,
  Msg,
  TxMessage,
  StdFee,
  toSdkInt,
  parseEventLogs,
  Localnet
} from "@nibiruchain/nibijs"
import { Msg, TxMessage } from "@nibiruchain/nibijs/dist/msg"
import { coin } from "@cosmjs/proto-signing"

// const mnemonic = "..." <--
export const CHAIN: Chain = Localnet
const signer = await newSignerFromMnemonic(mnemonic!)
signer.getAccounts()
const signingClient = await NibiruSigningClient.connectWithSigner(
  CHAIN.endptTm,
  signer,
)
const [{ address: fromAddr }] = await signer.getAccounts()
const pair = "ubtc:unusd"

// ------------------------------------
// Construct tx msgs
// ------------------------------------
const msgs: TxMessage[] = [
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

// ------------------------------------
// Broadcast tx
// ------------------------------------
const txResp = await signingClient.signAndBroadcast(fromAddr, msgs, "auto")
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

4. Lastly, compile the code in each package.

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
