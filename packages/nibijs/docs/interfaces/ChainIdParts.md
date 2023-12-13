[NibiJS Documentation - v0.21.43](../intro.md) / [Exports](../modules.md) / ChainIdParts

# Interface: ChainIdParts

ChainIdParts: An object mapping to the standard strucutre of Nibiru Chain
identifier. Generally, the CometBFT RPC, gRPC, and REST endpoints can be
deduced from `ChainIdParts`.

**`Example`**

```ts
let chain: ChainIdParts = {
  shortName: "cataclysm",
  number: 1,
  mainnet: true,
}
chain = { prefix: "nibiru", shortName: "testnet", number: 1 }
```

## Table of contents

### Properties

- [mainnet](ChainIdParts.md#mainnet)
- [number](ChainIdParts.md#number)
- [prefix](ChainIdParts.md#prefix)
- [shortName](ChainIdParts.md#shortname)

## Properties

### mainnet

• `Optional` **mainnet**: `boolean`

#### Defined in

[chain/chain.ts:41](https://github.com/NibiruChain/ts-sdk/blob/6e650cb/packages/nibijs/src/chain/chain.ts#L41)

---

### number

• **number**: `number`

#### Defined in

[chain/chain.ts:40](https://github.com/NibiruChain/ts-sdk/blob/6e650cb/packages/nibijs/src/chain/chain.ts#L40)

---

### prefix

• `Optional` **prefix**: `string`

#### Defined in

[chain/chain.ts:38](https://github.com/NibiruChain/ts-sdk/blob/6e650cb/packages/nibijs/src/chain/chain.ts#L38)

---

### shortName

• **shortName**: `string`

#### Defined in

[chain/chain.ts:39](https://github.com/NibiruChain/ts-sdk/blob/6e650cb/packages/nibijs/src/chain/chain.ts#L39)
