# 🌟 Nibiru's TypeScript Monorepo

Nibiru Protocol is an integrated system that allows users to trade perpetual futures, swap and LP on AMM pools, and mint or burn stable assets.

`sdk-ts` is a TypeScript monorepo that contains packages which can be used to interact with Nibiru from a Node.js or browser environment and which provide simple abstractions over core data structures, serialization, key management, and API request generation, etc. The packages can be found in the `packages` folder and each package is a `npm` module that is published on the `npm` registry.

---

## 📚 Overview

To get a sense of the packages and their functionality, we are going to list them a provide a simple explanation about their core functionality and how they can be used by developers to build applications on top Nibiru.

**Detailed documentation and usage can be found within each package's respective folder in the `packages` folder**

- `@nibiruchain/api` provides all the available types from Cosmos and Nibiru Chain. Interaction with this layer directly should be kept to a minimum.


- `@nibiruchain/common` is home to several commonly needed types, constants and configurations such as Network.

- `@nibiruchain/query` contains abstractions to query state from Cosmos and Nibiru modules.

- `@nibiruchain/tx` contains abstractions to submit transactions to the various Cosmos and Nibiru modules.

---

## 📜 Contribution and Development Instructions

First install yarn.
```sh
npm install -g yarn
```

Use `yarn` at the root of the repository. Then, compile the code in each package using the following.
```sh
yarn build
```

---

## 🔓 License

This software is licensed under the MIT license. See [LICENSE](./LICENSE) for full disclosure.
