import { ADDR_ERIS_EVM, ADDR_WNIBI, ERIS_CONST } from "../const"
import { ABI_FUNTOKEN_PRECOMPILE, ADDR_FUNTOKEN_PRECOMPILE } from "./funtoken"
import { ABI_ORACLE_PRECOMPILE, ADDR_ORACLE_PRECOMPILE } from "./oracle"
import { ABI_WASM_PRECOMPILE, ADDR_WASM_PRECOMPILE } from "./wasm"

type AbiItem = { readonly type: string; readonly name?: string }

const functionNames = (abi: readonly AbiItem[]) =>
  abi.flatMap((item) =>
    item.type === "function" && item.name ? [item.name] : []
  )

describe("evm precompiles", () => {
  test("uses the reserved Nibiru precompile addresses", () => {
    expect(ADDR_FUNTOKEN_PRECOMPILE).toBe(
      "0x0000000000000000000000000000000000000800"
    )
    expect(ADDR_ORACLE_PRECOMPILE).toBe(
      "0x0000000000000000000000000000000000000801"
    )
    expect(ADDR_WASM_PRECOMPILE).toBe(
      "0x0000000000000000000000000000000000000802"
    )
  })

  test("exposes the FunToken, Oracle, and Wasm methods", () => {
    expect(functionNames(ABI_FUNTOKEN_PRECOMPILE)).toEqual(
      expect.arrayContaining([
        "balance",
        "bankBalance",
        "bankMsgSend",
        "sendToBank",
        "sendToEvm",
        "whoAmI",
      ])
    )
    expect(functionNames(ABI_ORACLE_PRECOMPILE)).toEqual([
      "chainLinkLatestRoundData",
      "queryExchangeRate",
    ])
    expect(functionNames(ABI_WASM_PRECOMPILE)).toEqual(
      expect.arrayContaining([
        "execute",
        "executeMulti",
        "instantiate",
        "query",
      ])
    )
  })

  test("publishes mainnet contract addresses", () => {
    expect(ADDR_WNIBI).toMatch(/^0x[0-9a-fA-F]{40}$/)
    expect(ADDR_ERIS_EVM).toMatch(/^0x[0-9a-fA-F]{40}$/)
    expect(ERIS_CONST.ST_NIBI_ERC20_ADDR).toMatch(/^0x[0-9a-fA-F]{40}$/)
    expect(ERIS_CONST.WASM_HUB_ADDR.startsWith("nibi1")).toBe(true)
    expect(ERIS_CONST.ST_NIBI_BANK_DENOM).toContain(ERIS_CONST.WASM_HUB_ADDR)
  })
})
