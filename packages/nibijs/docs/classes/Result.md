[NibiJS Documentation - v0.21.42](../intro.md) / [Exports](../modules.md) / Result

# Class: Result<T\>

Poor-man's Result type from Rust.

The Result type forces you to explicitly handle erros in contrast to allowing
errors to propagate up the call stack implicitly. Handling potential errors
explicitly leads to more robust and reliable code.

**`Example`**

```ts
// ---------------------------------------
// Most common use-case: Result.ofSafeExec
// ---------------------------------------
res = Result.ofSafeExec(somethingDangerous) // without args

// with args
res = Result.ofSafeExec(() => somethingDangerous(arg0, arg1))
```

**`Example`**

```ts
// ---------------------------------------
// Direct constructor
// ---------------------------------------
let res = new Result({ ok: "Operation successful!" })
if (res.isOk()) {
  happyPath(res.ok)
} else {
  handleGracefully(res.err!) // throws impossible based on constructor args
}
```

## Type parameters

| Name |
| :--- |
| `T`  |

## Table of contents

### Constructors

- [constructor](Result.md#constructor)

### Properties

- [err](Result.md#err)
- [ok](Result.md#ok)

### Methods

- [isErr](Result.md#iserr)
- [isOk](Result.md#isok)
- [ofSafeExec](Result.md#ofsafeexec)
- [ofSafeExecAsync](Result.md#ofsafeexecasync)

## Constructors

### constructor

• **new Result**<`T`\>(`«destructured»`)

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name             | Type      |
| :--------------- | :-------- |
| `«destructured»` | `Object`  |
| › `err?`         | `unknown` |
| › `ok?`          | `T`       |

#### Defined in

[result.ts:31](https://github.com/NibiruChain/ts-sdk/blob/2993dce/packages/nibijs/src/result.ts#L31)

## Properties

### err

• **err**: `undefined` \| `Error`

#### Defined in

[result.ts:30](https://github.com/NibiruChain/ts-sdk/blob/2993dce/packages/nibijs/src/result.ts#L30)

---

### ok

• **ok**: `undefined` \| `T`

#### Defined in

[result.ts:29](https://github.com/NibiruChain/ts-sdk/blob/2993dce/packages/nibijs/src/result.ts#L29)

## Methods

### isErr

▸ **isErr**(): `boolean`

#### Returns

`boolean`

#### Defined in

[result.ts:44](https://github.com/NibiruChain/ts-sdk/blob/2993dce/packages/nibijs/src/result.ts#L44)

---

### isOk

▸ **isOk**(): `boolean`

#### Returns

`boolean`

#### Defined in

[result.ts:45](https://github.com/NibiruChain/ts-sdk/blob/2993dce/packages/nibijs/src/result.ts#L45)

---

### ofSafeExec

▸ `Static` **ofSafeExec**<`Y`\>(`fn`): [`Result`](Result.md)<`Y`\>

Result.ofSafeExec

#### Type parameters

| Name |
| :--- |
| `Y`  |

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `fn` | () => `Y` |

#### Returns

[`Result`](Result.md)<`Y`\>

#### Defined in

[result.ts:48](https://github.com/NibiruChain/ts-sdk/blob/2993dce/packages/nibijs/src/result.ts#L48)

---

### ofSafeExecAsync

▸ `Static` **ofSafeExecAsync**<`Y`\>(`fn`): `Promise`<[`Result`](Result.md)<`Y`\>\>

#### Type parameters

| Name |
| :--- |
| `Y`  |

#### Parameters

| Name | Type                  |
| :--- | :-------------------- |
| `fn` | () => `Promise`<`Y`\> |

#### Returns

`Promise`<[`Result`](Result.md)<`Y`\>\>

#### Defined in

[result.ts:56](https://github.com/NibiruChain/ts-sdk/blob/2993dce/packages/nibijs/src/result.ts#L56)
