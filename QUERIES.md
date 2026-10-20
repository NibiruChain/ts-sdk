# Queries

Heart Monitor indexes Nibiru and exposes the data as GraphQL. These examples
use the mainnet endpoint, `https://hm-graphql.nibiru.fi/query`.
`Mainnet().endptHm` (and `Testnet(n).endptHm`) point at the same path for each
network. Sample rows below are live data, so heights, amounts, and addresses
move as the chain produces blocks.

```ts
import { HeartMonitor, Mainnet, doGqlQuery } from "@nibiruchain/nibijs"

const hm = new HeartMonitor(Mainnet().endptHm)
```

`HeartMonitor` methods cover the root fields except `messages` and `internal`.
Transaction history is a raw GraphQL document passed to `doGqlQuery`. Field selection is
the object you pass as the last argument: each key you include is requested,
and nested objects select nested fields.

## Where the 2023 queries went

| 2023 name | Current query |
| --- | --- |
| `balances` | [`user`](#balances), [`users`](#listing-accounts) |
| `transfers` | [`ibc.ibcTransfers`](#ibc) |
| `txMessages` | [`messages`](#transaction-history) |
| `txMessagesFailed` | No separate query. [`messages`](#transaction-history) returns `txCode` (0 is success) and has no filter on that code |
| `oraclePrices` | [`oracle.oraclePrices`](#oracle-prices) |
| `delegations` | [`staking.delegations`](#delegations) |
| `unbondings` | [`staking.unbondings`](#unbondings) |
| `validators` | [`staking.validators`](#validators) |
| `fundingRates`, `liquidations`, `markPriceCandles`, `markPrices`, `positionChanges`, `positions`, `vpoolConfigs`, `statsVolume` | Not on the current Heart Monitor schema |

## Arguments shared by list queries

Most lists take `limit` and `offset`.

Two names are used for sort direction:

- `order_by` and `order_desc` on `users`, `messages`, `ibcTransfers`, `oraclePrices`, staking lists, inflation, and `communityPool`
- `order` and `orderDesc` on wasm and governance

Enum values are unquoted in GraphQL (`order_by: sequence`, `status: BONDED`).

`block.block_ts` on every row is Unix time in milliseconds.

## WHERE clauses

Filters come in three shapes. Passing a bare value where the schema wants an
object (or the reverse) is the usual mistake.

**Comparison object.** `IntFilter`, `FloatFilter`, and `TimeFilter` accept
`eq`, `gt`, `gte`, `lt`, and `lte`. `StringFilter` accepts `eq` and `like`.

```graphql
where: { block: { gte: 48190000, lte: 48199000 } }
where: { pair: { eq: "ubtc:uusd" } }
where: { pair: { like: "btc" } }
where: { delegator: { like: "nibi1" } }
```

`like` is a partial match. `delegator: { like: "nibi1" }` returns addresses
that start with that prefix.

**Bare string or enum.** These fields do not take `{ eq: ... }`:

- `messages`: `senderAddr`, `txHash`, `type`
- `ibcTransfers`: `sender`, `receiver`
- `user` / `users`: `address`
- `communityPool`: `denom`
- staking address filters: `delegator_address`, `validator_address`, `operator_address`
- `validators`: `status` (`BONDED`, `UNBONDING`, `UNBONDED`), `jailed`, `moniker`

**Flattened range on `users`.** Account creation height is three integer
fields, `created_block_eq`, `created_block_gte`, and `created_block_lte`,
rather than an `IntFilter`.

```graphql
users(limit: 1, where: { created_block_gte: 48170000 }) {
  address
  created_block { block }
  balances { denom amount }
}
```

`wasm.contractEvents` is the strict case: `where` is required, and
`where.block` is a required `IntFilter`. A call with no block range is
rejected.

```graphql
{
  wasm {
    contractEvents(limit: 1, where: { block: { gte: 48190000, lte: 48199000 } }) {
      type
      contractAddress
      txHash
      attributes { key value }
      block { block }
    }
  }
}
```

```json
{
  "data": {
    "wasm": {
      "contractEvents": [
        {
          "type": "wasm",
          "contractAddress": "nibi1xfwyfwtdame6645lgcs4xvf4u0hpsuvxrcelfwtztu0pv7n4l6hqw5a8gj",
          "txHash": "E0FD4C56FC45D0C68F3ED7501738EC1ECB78B1B9342EEDD152336720FFE04373",
          "attributes": [
            { "key": "_contract_address", "value": "nibi1xfwyfwtdame6645lgcs4xvf4u0hpsuvxrcelfwtztu0pv7n4l6hqw5a8gj" },
            { "key": "app", "value": "sai_perps" }
          ],
          "block": { "block": 48190000 }
        }
      ]
    }
  }
}
```

`type` is the Tendermint event type. `attributes` are the event's key/value
pairs. `contractAddress` is empty when the event is not from a contract.

Oracle has a second trap: the **query** filter is a `StringFilter`, and the
**subscription** filter is a raw pair string. See [Oracle prices](#oracle-prices).

## Balances

`user` returns one account. `where.address` is required. `balances` is the
bank balances as `{ denom, amount }`. `all_balances` adds display metadata
(`symbol`, `decimals`, `price`, `verified`) for the same coins.

`amount` is a string of base units so large integers stay exact. NIBI has
`decimals: 6`, so `"2984214"` is 2.984214 NIBI. `price` is the indexed price
of one whole token.

```graphql
{
  user(where: { address: "nibi18mc0mm3jnwcr3e8e89ct3twxxghqxwr82vk3xa" }) {
    address
    is_blocked
    created_block { block block_ts num_txs }
    balances { denom amount }
    all_balances {
      amount
      token_info { symbol name decimals bank_denom type verified price }
    }
  }
}
```

```json
{
  "data": {
    "user": {
      "address": "nibi18mc0mm3jnwcr3e8e89ct3twxxghqxwr82vk3xa",
      "is_blocked": false,
      "created_block": { "block": 48179502, "block_ts": 1792469839223, "num_txs": 3 },
      "balances": [{ "denom": "unibi", "amount": "2984214" }],
      "all_balances": [
        {
          "amount": "2984214",
          "token_info": {
            "symbol": "NIBI",
            "name": "Nibiru",
            "decimals": 6,
            "bank_denom": "unibi",
            "type": "bank",
            "verified": true,
            "price": 0.0004376
          }
        }
      ]
    }
  }
}
```

`is_blocked: false` means the account is not on the block list. The list
query can return `null` for the same field when that flag was never written.

```ts
const balances = await hm.user(
  { where: { address: "nibi18mc0mm3jnwcr3e8e89ct3twxxghqxwr82vk3xa" } },
  {
    address: "",
    is_blocked: false,
    balances: { denom: "", amount: "" },
    all_balances: {
      amount: "",
      token_info: { symbol: "", decimals: 0, price: 0, bank_denom: "" },
    },
  }
)
```

### Listing accounts

`users` pages accounts. `where.address` is an optional exact match.

`HeartMonitor.users` fills in defaults when you omit them: `limit` 100,
`order_by: created_block`, `order_desc: true`. `order_desc: false` does not
stick, because the helper treats `false` as missing and writes `true`. Send
the GraphQL document with `doGqlQuery` when you need ascending order.

```graphql
{
  users(limit: 2, order_by: created_block, order_desc: true) {
    address
    is_blocked
    created_block { block block_ts }
    balances { denom amount }
  }
}
```

```json
{
  "data": {
    "users": [
      {
        "address": "nibi18mc0mm3jnwcr3e8e89ct3twxxghqxwr82vk3xa",
        "is_blocked": null,
        "created_block": { "block": 48179502, "block_ts": 1792469839223 },
        "balances": [{ "denom": "unibi", "amount": "2984214" }]
      },
      {
        "address": "nibi1ln8uff5nq8qq85ec0yeq087hcew58rq5vlpfgx",
        "is_blocked": null,
        "created_block": { "block": 48148756, "block_ts": 1792423528084 },
        "balances": [{ "denom": "unibi", "amount": "0" }]
      }
    ]
  }
}
```

## Transaction history

`messages` is one row per transaction message, newest first when ordered by
`sequence`. `where.type` is the protobuf message name. `where.senderAddr` and
`where.txHash` are exact strings. `where.block` is an `IntFilter`.

```graphql
{
  messages(
    limit: 2
    order_by: sequence
    order_desc: true
    where: { type: "/cosmos.bank.v1beta1.MsgSend" }
  ) {
    txHash
    txCode
    type
    senderAddr
    action
    funds { denom amount }
    block { block block_ts }
  }
}
```

```json
{
  "data": {
    "messages": [
      {
        "txHash": "0B27AAADEF69032BF665AEDC47AE8F5E48C78544FF36F9553FCD057D29A44AE4",
        "txCode": 0,
        "type": "/cosmos.bank.v1beta1.MsgSend",
        "senderAddr": "nibi1fvtppwhg8s6mxlvuj57y2vweplnel5rahfj3pl",
        "action": null,
        "funds": null,
        "block": { "block": 48198876, "block_ts": 1792498969637 }
      },
      {
        "txHash": "DEB6682F49436559923A828762D13E1A85BCA22C5462C0F4B13B715E180F4120",
        "txCode": 0,
        "type": "/cosmos.bank.v1beta1.MsgSend",
        "senderAddr": "nibi1fvtppwhg8s6mxlvuj57y2vweplnel5rahfj3pl",
        "action": null,
        "funds": null,
        "block": { "block": 48192891, "block_ts": 1792489966443 }
      }
    ]
  }
}
```

`txCode` is the Cosmos ABCI code; `0` means the transaction succeeded.
`txHash` is the hex hash. `senderAddr` is the message signer. `action` is set
for CosmWasm executes (the contract method, such as `trigger_trade_batch`)
and is null for a bank send. `funds` lists coins attached to the message;
both bank sends above left it null, so this query is the history of who sent
which message, and the coin amounts for an IBC packet live on
[`ibcTransfers`](#ibc).

Combine a bare sender with a block range:

```graphql
{
  messages(
    limit: 1
    order_by: sequence
    order_desc: true
    where: {
      senderAddr: "nibi1fvtppwhg8s6mxlvuj57y2vweplnel5rahfj3pl"
      block: { gte: 48190000 }
    }
  ) {
    txHash
    txCode
    type
    senderAddr
    block { block block_ts }
  }
}
```

That returns the latest matching message, here a
`/cosmwasm.wasm.v1.MsgExecuteContract` at block 48199790 with `txCode` 0.

```ts
const history = await doGqlQuery(
  `{
    messages(
      limit: 2
      order_by: sequence
      order_desc: true
      where: { type: "/cosmos.bank.v1beta1.MsgSend" }
    ) {
      txHash
      txCode
      type
      senderAddr
      block { block block_ts }
    }
  }`,
  Mainnet().endptHm
)
```

## IBC

`ibc` has two fields. `ibcTransfers` is ICS-20 packet history. `ibcChannels`
is the current channel list and takes no arguments. Transfer filters are bare
strings: `where: { sender, receiver }`.

```graphql
{
  ibc {
    ibcTransfers(limit: 2, order_by: block, order_desc: true) {
      sender
      receiver
      amount
      denom
      memo
      block { block block_ts }
    }
    ibcChannels {
      revision_height
      channels {
        channel_id
        counterparty_channel_id
        chain_id
        chain_name
      }
    }
  }
}
```

```json
{
  "data": {
    "ibc": {
      "ibcTransfers": [
        {
          "sender": "nibi12mvlwequdm23ltcl4utawkfm0ezxt3xhuz0q7d",
          "receiver": "osmo12mvlwequdm23ltcl4utawkfm0ezxt3xhrucfpv",
          "amount": 118606374,
          "denom": "unibi",
          "memo": "",
          "block": { "block": 48194693, "block_ts": 1792492678459 }
        },
        {
          "sender": "osmo172hmzpf0c59tz5sfvmwu9gwsyh8vqdpemnur5c",
          "receiver": "nibi172hmzpf0c59tz5sfvmwu9gwsyh8vqdpeydt2te",
          "amount": 236722000000,
          "denom": "transfer/channel-21113/unibi",
          "memo": "",
          "block": { "block": 48180972, "block_ts": 1792472049962 }
        }
      ],
      "ibcChannels": {
        "revision_height": 48199892,
        "channels": [
          {
            "channel_id": "channel-0",
            "counterparty_channel_id": "channel-21113",
            "chain_id": "osmosis-1",
            "chain_name": "Osmosis"
          },
          {
            "channel_id": "channel-1",
            "counterparty_channel_id": "channel-139",
            "chain_id": "axelar-dojo-1",
            "chain_name": "Axelar"
          }
        ]
      }
    }
  }
}
```

How to read that payload:

- **Direction** is the bech32 prefix. The first row is Nibiru to Osmosis
  (`nibi…` sender, `osmo…` receiver). The second row is Osmosis to Nibiru.
  Bech32 checksums are the last six characters, and those differ by design.
  The shared data before the checksum is `12mvlwequdm23ltcl4utawkfm0ezxt3xh`,
  so the first row is one key shown with the `nibi` prefix and the `osmo`
  prefix.
- **`amount`** is a number of base units, unlike bank balances which are
  strings. `118606374` of `unibi` is 118.606374 NIBI (`unibi` has 6 decimals).
  The second amount, `236722000000`, is 236,722 tokens of whatever
  `denom` names.
- **`denom`** is either a native bank denom (`unibi`) or an IBC trace
  (`transfer/<channel>/<base>`). The second denom,
  `transfer/channel-21113/unibi`, uses Osmosis channel 21113. That is the
  counterparty of Nibiru `channel-0` in `ibcChannels`, so the trace is the
  Nibiru↔Osmosis path.
- **`memo`** is the ICS-20 packet memo. `""` means the packet carried an
  empty memo.
- **`block`** is the Nibiru block that indexed the packet. `block_ts` is
  milliseconds. `1792492678459` is 2026-10-20T10:37:58.459Z.
- **`ibcChannels.revision_height`** is the height at which the channel list
  was read. Each `channels` entry is one open channel: `channel_id` is
  Nibiru's channel, `counterparty_channel_id` is the other chain's channel,
  and `chain_id` / `chain_name` name that chain. `chain_name` can be empty.
  Mainnet returns more than the two channels shown here (Noble, Archway, and
  Neutron are also open).

The same transfer, restricted to one sender:

```graphql
{
  ibc {
    ibcTransfers(
      limit: 1
      order_by: block
      order_desc: true
      where: { sender: "nibi12mvlwequdm23ltcl4utawkfm0ezxt3xhuz0q7d" }
    ) {
      sender
      receiver
      amount
      denom
      memo
      block { block block_ts }
    }
  }
}
```

That returns only the first row above.

```ts
import { GQLIbcTranferOrder } from "@nibiruchain/nibijs"

const ibc = await hm.ibc(
  {
    ibcTransfers: {
      limit: 2,
      order_by: GQLIbcTranferOrder.GQLBlock,
      order_desc: true,
      where: { sender: "nibi12mvlwequdm23ltcl4utawkfm0ezxt3xhuz0q7d" },
    },
  },
  {
    ibcTransfers: {
      sender: "",
      receiver: "",
      amount: 0,
      denom: "",
      memo: "",
      block: { block: 0, block_ts: 0 },
    },
    ibcChannels: {
      revision_height: 0,
      channels: {
        channel_id: "",
        counterparty_channel_id: "",
        chain_id: "",
        chain_name: "",
      },
    },
  }
)
```

The filter input is named `IBCTranferFilter` in the schema (the "s" in
"transfers" is missing). Callers pass `where: { sender, receiver }` and do
not need to spell that type name.

## Oracle prices

`oracle.oraclePrices` stores indexed prices. `where.pair` is a `StringFilter`.
`where.block` is an `IntFilter`.

```graphql
{
  oracle {
    oraclePrices(limit: 2, where: { pair: { like: "btc" } }) {
      pair
      price
      block { block block_ts }
    }
  }
}
```

```json
{
  "data": {
    "oracle": {
      "oraclePrices": [
        { "pair": "b2btc:btc", "price": 1 },
        { "pair": "ubtc:uusd", "price": 77957.7 }
      ]
    }
  }
}
```

`pair` is `base:quote` in the oracle's denom notation (`ubtc:uusd`). `price`
is the quote units per one base unit. Read `block` on the row for when that
price was indexed. An exact match returns the stored row for that pair:

```graphql
oraclePrices(limit: 1, where: { pair: { eq: "ueth:uusd" } }) {
  pair
  price
  block { block block_ts }
}
```

```json
{
  "pair": "ueth:uusd",
  "price": 2324.61,
  "block": { "block": 40510979, "block_ts": 1777283364387 }
}
```

On mainnet, `order_by: sequence` fails with `column "sequence" does not exist`.
Order by `pair` or `price`, or leave `order_by` unset.

The websocket subscription uses a different filter. `pair` there is a raw
string, and `where` only accepts that one field:

```graphql
subscription {
  oraclePrices(where: { pair: "ubtc:uusd" }) {
    pair
    price
    block { block block_ts }
  }
}
```

```ts
import { GQLOraclePricesOrder } from "@nibiruchain/nibijs"

const prices = await hm.oracle(
  {
    oraclePrices: {
      limit: 2,
      where: { pair: { like: "btc" } },
      order_by: GQLOraclePricesOrder.GQLPair,
    },
  },
  { oraclePrices: { pair: "", price: 0, block: { block: 0, block_ts: 0 } } }
)
```

## Validators

`staking.validators` lists the validator set. `where.status` is the enum
`BONDED`, `UNBONDING`, or `UNBONDED`. `where.jailed` is a boolean.
`where.operator_address` and `where.moniker` are exact strings.

`tokens` is the bonded stake in `unibi`. `commission_rates.rate` is a
fraction (`0.05` is 5%). `uptime` is a fraction from 0 to 1 (`0.9988` is
99.88%).

```graphql
{
  staking {
    validators(
      limit: 2
      where: { status: BONDED, jailed: false }
      order_by: tokens
      order_desc: true
    ) {
      operator_address
      status
      jailed
      tokens
      uptime
      description { moniker }
      commission_rates { rate }
    }
  }
}
```

```json
{
  "data": {
    "staking": {
      "validators": [
        {
          "operator_address": "nibivaloper1hvt68he6uvadnk73rjy6hg7a4u2myud5yhj3ae",
          "status": "BONDED",
          "jailed": false,
          "tokens": 36631802658684,
          "uptime": 0.9988,
          "description": { "moniker": "Nodes.Guru" },
          "commission_rates": { "rate": 0.05 }
        },
        {
          "operator_address": "nibivaloper1xwh38k5kulrfglt34qqmnsrrjg788d4azq6e5u",
          "status": "BONDED",
          "jailed": false,
          "tokens": 29133516254228,
          "uptime": 0.9917714285714285,
          "description": { "moniker": "Nibiru" },
          "commission_rates": { "rate": 0.05 }
        }
      ]
    }
  }
}
```

```ts
import { GQLValidatorOrder, GQLValidatorStatus } from "@nibiruchain/nibijs"

const validators = await hm.staking(
  {
    validators: {
      limit: 2,
      where: { status: GQLValidatorStatus.GQLBonded, jailed: false },
      order_by: GQLValidatorOrder.GQLTokens,
      order_desc: true,
    },
  },
  {
    validators: {
      operator_address: "",
      status: GQLValidatorStatus.GQLBonded,
      tokens: 0,
      description: { moniker: "" },
      commission_rates: { rate: 0 },
    },
  }
)
```

## Delegations

`amount` is delegated stake in `unibi`. Filter with bare
`delegator_address` and `validator_address`.

```graphql
{
  staking {
    delegations(
      limit: 2
      where: { validator_address: "nibivaloper1zajzzmgnhlcurtpx9wnyaavr3aw8qggwx3tx8l" }
    ) {
      amount
      delegator { address }
      validator { operator_address description { moniker } }
    }
  }
}
```

```json
{
  "data": {
    "staking": {
      "delegations": [
        {
          "amount": 13978151,
          "delegator": { "address": "nibi1qq84kujmpk23m9cfcs0wzmdrxadsy6v4kdwdjk" },
          "validator": {
            "operator_address": "nibivaloper1zajzzmgnhlcurtpx9wnyaavr3aw8qggwx3tx8l",
            "description": { "moniker": "Stake Village" }
          }
        },
        {
          "amount": 9942439,
          "delegator": { "address": "nibi1qyll2wk3n9jh3c5wqs6qmafgahk508arljj9ku" },
          "validator": {
            "operator_address": "nibivaloper1zajzzmgnhlcurtpx9wnyaavr3aw8qggwx3tx8l",
            "description": { "moniker": "Stake Village" }
          }
        }
      ]
    }
  }
}
```

`13978151` base units is 13.978151 NIBI delegated to Stake Village.

## Unbondings

`amount` is the unbonding stake in `unibi`. `completion_time` is an RFC3339
timestamp. `creation_block` is the block where the unbonding started.

```graphql
{
  staking {
    unbondings(limit: 2, order_by: completion_time, order_desc: true) {
      amount
      completion_time
      delegator { address }
      validator { operator_address }
      creation_block { block block_ts }
    }
  }
}
```

```json
{
  "data": {
    "staking": {
      "unbondings": [
        {
          "amount": 9431300000,
          "completion_time": "2026-11-09T02:34:05Z",
          "delegator": { "address": "nibi1f88yw6ey2820ddz3wa9p785vyqt50yf9wld453" },
          "validator": { "operator_address": "nibivaloper1ew2hw9fakn4m33lzxrhzqhxrwk9na496tpemey" },
          "creation_block": { "block": 48117985, "block_ts": 1792377245488 }
        },
        {
          "amount": 5048749,
          "completion_time": "2026-11-09T01:56:01Z",
          "delegator": { "address": "nibi1cyuwneqwsj2z4knn8cdanea5xjuv5etgaaaepu" },
          "validator": { "operator_address": "nibivaloper1qe8uuf5x69c526h4nzxwv4ltftr73v7q7twm9z" },
          "creation_block": { "block": 48116482, "block_ts": 1792374961225 }
        }
      ]
    }
  }
}
```

The same `where: { delegator_address, validator_address }` shape as
delegations applies. Redelegations use that shape plus
`source_validator_address` and `destination_validator_address`, and each row
has `source_validator`, `destination_validator`, `amount`, and
`completion_time`.

## Staking history

`history` is the delegation event log. `where.actions` is a list of
`delegate`, `unbond`, `unbond_completed`, `cancel`, `redelegate`,
`redelegate_completed`, and `withdraw`. `where.delegator` and
`where.validator` are `StringFilter`s. `where.amount` and `where.block` are
`IntFilter`s. `where.completionTime` is a `TimeFilter`.

```graphql
{
  staking {
    history(
      limit: 2
      order_by: sequence
      order_desc: true
      where: { actions: [delegate], delegator: { like: "nibi1" } }
    ) {
      action
      amount
      delegator { address }
      validator { operator_address description { moniker } }
      block { block block_ts }
    }
  }
}
```

```json
{
  "data": {
    "staking": {
      "history": [
        {
          "action": "delegate",
          "amount": 36890000,
          "delegator": { "address": "nibi1fdu2pm0j2nm0et45p9anefzw5sjrrcx0896d9f" },
          "validator": {
            "operator_address": "nibivaloper1yt8l38xurdl2mcft94lnm9dzsvnat9zuhp8h0w",
            "description": { "moniker": "AKNodes" }
          },
          "block": { "block": 48193633, "block_ts": 1792491085024 }
        },
        {
          "action": "delegate",
          "amount": 33971163406,
          "delegator": { "address": "nibi1udqqx30cw8nwjxtl4l28ym9hhrp933zlq8dqxfjzcdhvl8y24zcqpzmh8m" },
          "validator": {
            "operator_address": "nibivaloper1xwh38k5kulrfglt34qqmnsrrjg788d4azq6e5u",
            "description": { "moniker": "Nibiru" }
          },
          "block": { "block": 48193378, "block_ts": 1792490700416 }
        }
      ]
    }
  }
}
```

`amount` is again `unibi`. The first row is 36.89 NIBI delegated to AKNodes.

## Community pool, governance, and inflation

`communityPool` filters by a bare denom string.

```graphql
{
  communityPool(limit: 2, where: { denom: "unibi" }) {
    denom
    amount
  }
}
```

```json
{ "data": { "communityPool": [{ "denom": "unibi", "amount": "153704882999721.62" }] } }
```

Governance lists use `order` / `orderDesc`. Proposal text filters are
`StringFilter`s, ids and tally counts are `IntFilter`s, and timestamps are
`TimeFilter`s. `proposerEq` on proposals, and `senderEq` on deposits and
votes, are bare address strings.

```graphql
{
  governance {
    govProposals(limit: 1, order: id, orderDesc: true) {
      id
      title
      status
      proposer { address }
    }
  }
}
```

```json
{
  "data": {
    "governance": {
      "govProposals": [
        {
          "id": 38,
          "title": "Nibiru mainnet upgrade to v2.21.0",
          "status": "Passed",
          "proposer": { "address": "nibi1rlvdjfmxkyfj4tzu73p8m4g2h4y89xccf9622l" }
        }
      ]
    }
  }
}
```

`govDeposits` and `govVotes` take the same `limit`, `order`, `orderDesc`, and
`where` arguments. A deposit row is `{ amount, block, proposal, sender }`. A
vote row is `{ option, block, proposal, sender }`.

Inflation exposes the latest epoch mint and the reward totals. `where` on
`inflations` accepts `block` (`IntFilter`), `blockTs` (`TimeFilter`), and
`epochNumber` (`IntFilter`).

```graphql
{
  inflation {
    rewards { annualReward totalStaked }
    inflations(limit: 1, order_desc: true) {
      epochNumber
      amount
      epochProvisions
      block { block block_ts }
    }
  }
}
```

```json
{
  "data": {
    "inflation": {
      "rewards": { "annualReward": 31406813, "totalStaked": 190266837036803 },
      "inflations": [
        {
          "epochNumber": 932,
          "amount": 331884431094,
          "epochProvisions": 331884431094.2386,
          "block": { "block": 48179171, "block_ts": 1792469338440 }
        }
      ]
    }
  }
}
```

`totalStaked` and `amount` are `unibi`. `distributions` on the same
`inflation` object is the per-block split (`communityPool`, `stakingRewards`,
`strategicReserve`) and accepts `where: { block, blockTs }`.

## Wasm contracts

`userContracts` lists contracts a user has touched. `where.userAddress`,
`where.contractAddress`, and `where.contractType` are `StringFilter`s. This
list uses `order` / `orderDesc`, with values `user_address`,
`contract_address`, and `contract_type`.

```graphql
{
  wasm {
    userContracts(limit: 1, order: user_address, orderDesc: true) {
      contractAddress
      contractType
      user { address }
    }
  }
}
```

```json
{
  "data": {
    "wasm": {
      "userContracts": [
        {
          "contractAddress": "nibi1x03jy5tq9cmy5r5gue50hy4gkntkheh00crjkhpmkvf5hnxz8t8qlq9gt7",
          "contractType": "X Airdrop",
          "user": { "address": "nibi1zzz6969qcflm729az4y9skzgzj5wrdz97wt0n7" }
        }
      ]
    }
  }
}
```

Contract events are documented under [WHERE clauses](#where-clauses), because
`where.block` is mandatory there.
