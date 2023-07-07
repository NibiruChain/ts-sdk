[NibiJS Documentation - v0.21.1](../intro.md) / [Exports](../modules.md) / PageRequest

# Interface: PageRequest

An offset pagination request.

Pagination is the process of dividing a document into discrete pages.
Pagination in the context of API requests resembles this process.

**`Export`**

**`Interface`**

PageRequest

## Table of contents

### Properties

- [countTotal](PageRequest.md#counttotal)
- [key](PageRequest.md#key)
- [limit](PageRequest.md#limit)
- [offset](PageRequest.md#offset)
- [reverse](PageRequest.md#reverse)

## Properties

### countTotal

• **countTotal**: `boolean`

count_total is set to true to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

#### Defined in

[query/spot.ts:251](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/query/spot.ts#L251)

---

### key

• **key**: `Uint8Array`

key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

#### Defined in

[query/spot.ts:233](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/query/spot.ts#L233)

---

### limit

• **limit**: `number`

limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

#### Defined in

[query/spot.ts:244](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/query/spot.ts#L244)

---

### offset

• **offset**: `number`

offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

#### Defined in

[query/spot.ts:239](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/query/spot.ts#L239)

---

### reverse

• **reverse**: `boolean`

reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

#### Defined in

[query/spot.ts:257](https://github.com/NibiruChain/ts-sdk/blob/c58cf2d/packages/nibijs/src/query/spot.ts#L257)
