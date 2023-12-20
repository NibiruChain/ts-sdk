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

[chain/chain.ts:45](https://github.com/NibiruChain/ts-sdk/blob/c7f0580/packages/nibijs/src/chain/chain.ts#L45)

---

### number

• **number**: `number`

#### Defined in

[chain/chain.ts:44](https://github.com/NibiruChain/ts-sdk/blob/c7f0580/packages/nibijs/src/chain/chain.ts#L44)

---

### prefix

• `Optional` **prefix**: `string`

#### Defined in

[chain/chain.ts:42](https://github.com/NibiruChain/ts-sdk/blob/c7f0580/packages/nibijs/src/chain/chain.ts#L42)

---

### shortName

• **shortName**: `string`

#### Defined in

[chain/chain.ts:43](https://github.com/NibiruChain/ts-sdk/blob/c7f0580/packages/nibijs/src/chain/chain.ts#L43)
