import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from "wagmi/codegen"

import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from "wagmi/codegen"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ErisEvm
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erisEvmAbi = [
  {
    type: "function",
    inputs: [{ name: "amount", internalType: "uint256", type: "uint256" }],
    name: "liquidStake",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "state",
    outputs: [{ name: "respJson", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "stAmount", internalType: "uint256", type: "uint256" }],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const

export const erisEvmAddress =
  "0xF8647cB104e87fFf4B886dC6BB9F2F01596d400D" as const

export const erisEvmConfig = {
  address: erisEvmAddress,
  abi: erisEvmAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IFunToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iFunTokenAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "eventType",
        internalType: "string",
        type: "string",
        indexed: true,
      },
      {
        name: "abciEvent",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "AbciEvent",
  },
  {
    type: "function",
    inputs: [
      { name: "who", internalType: "address", type: "address" },
      { name: "funtoken", internalType: "address", type: "address" },
    ],
    name: "balance",
    outputs: [
      { name: "erc20Balance", internalType: "uint256", type: "uint256" },
      { name: "bankBalance", internalType: "uint256", type: "uint256" },
      {
        name: "token",
        internalType: "struct IFunToken.FunToken",
        type: "tuple",
        components: [
          { name: "erc20", internalType: "address", type: "address" },
          { name: "bankDenom", internalType: "string", type: "string" },
        ],
      },
      {
        name: "whoAddrs",
        internalType: "struct IFunToken.NibiruAccount",
        type: "tuple",
        components: [
          { name: "ethAddr", internalType: "address", type: "address" },
          { name: "bech32Addr", internalType: "string", type: "string" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "who", internalType: "address", type: "address" },
      { name: "bankDenom", internalType: "string", type: "string" },
    ],
    name: "bankBalance",
    outputs: [
      { name: "bankBalance", internalType: "uint256", type: "uint256" },
      {
        name: "whoAddrs",
        internalType: "struct IFunToken.NibiruAccount",
        type: "tuple",
        components: [
          { name: "ethAddr", internalType: "address", type: "address" },
          { name: "bech32Addr", internalType: "string", type: "string" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "string", type: "string" },
      { name: "bankDenom", internalType: "string", type: "string" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "bankMsgSend",
    outputs: [{ name: "success", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "bankDenom", internalType: "string", type: "string" }],
    name: "getErc20Address",
    outputs: [
      { name: "erc20Address", internalType: "address", type: "address" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "erc20", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "to", internalType: "string", type: "string" },
    ],
    name: "sendToBank",
    outputs: [{ name: "sentAmount", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "bankDenom", internalType: "string", type: "string" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "to", internalType: "string", type: "string" },
    ],
    name: "sendToEvm",
    outputs: [{ name: "sentAmount", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "who", internalType: "string", type: "string" }],
    name: "whoAmI",
    outputs: [
      {
        name: "whoAddrs",
        internalType: "struct IFunToken.NibiruAccount",
        type: "tuple",
        components: [
          { name: "ethAddr", internalType: "address", type: "address" },
          { name: "bech32Addr", internalType: "string", type: "string" },
        ],
      },
    ],
    stateMutability: "view",
  },
] as const

export const iFunTokenAddress =
  "0x0000000000000000000000000000000000000800" as const

export const iFunTokenConfig = {
  address: iFunTokenAddress,
  abi: iFunTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IOracle
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iOracleAbi = [
  {
    type: "function",
    inputs: [{ name: "pair", internalType: "string", type: "string" }],
    name: "chainLinkLatestRoundData",
    outputs: [
      { name: "roundId", internalType: "uint80", type: "uint80" },
      { name: "answer", internalType: "int256", type: "int256" },
      { name: "startedAt", internalType: "uint256", type: "uint256" },
      { name: "updatedAt", internalType: "uint256", type: "uint256" },
      { name: "answeredInRound", internalType: "uint80", type: "uint80" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "pair", internalType: "string", type: "string" }],
    name: "queryExchangeRate",
    outputs: [
      { name: "price", internalType: "uint256", type: "uint256" },
      { name: "blockTimeMs", internalType: "uint64", type: "uint64" },
      { name: "blockHeight", internalType: "uint64", type: "uint64" },
    ],
    stateMutability: "view",
  },
] as const

export const iOracleAddress =
  "0x0000000000000000000000000000000000000801" as const

export const iOracleConfig = {
  address: iOracleAddress,
  abi: iOracleAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IWasm
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iWasmAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "eventType",
        internalType: "string",
        type: "string",
        indexed: true,
      },
      {
        name: "abciEvent",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "AbciEvent",
  },
  {
    type: "function",
    inputs: [
      { name: "contractAddr", internalType: "string", type: "string" },
      { name: "msgArgs", internalType: "bytes", type: "bytes" },
      {
        name: "funds",
        internalType: "struct INibiruEvm.BankCoin[]",
        type: "tuple[]",
        components: [
          { name: "denom", internalType: "string", type: "string" },
          { name: "amount", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    name: "execute",
    outputs: [{ name: "response", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "executeMsgs",
        internalType: "struct IWasm.WasmExecuteMsg[]",
        type: "tuple[]",
        components: [
          { name: "contractAddr", internalType: "string", type: "string" },
          { name: "msgArgs", internalType: "bytes", type: "bytes" },
          {
            name: "funds",
            internalType: "struct INibiruEvm.BankCoin[]",
            type: "tuple[]",
            components: [
              { name: "denom", internalType: "string", type: "string" },
              { name: "amount", internalType: "uint256", type: "uint256" },
            ],
          },
        ],
      },
    ],
    name: "executeMulti",
    outputs: [{ name: "responses", internalType: "bytes[]", type: "bytes[]" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "admin", internalType: "string", type: "string" },
      { name: "codeID", internalType: "uint64", type: "uint64" },
      { name: "msgArgs", internalType: "bytes", type: "bytes" },
      { name: "label", internalType: "string", type: "string" },
      {
        name: "funds",
        internalType: "struct INibiruEvm.BankCoin[]",
        type: "tuple[]",
        components: [
          { name: "denom", internalType: "string", type: "string" },
          { name: "amount", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    name: "instantiate",
    outputs: [
      { name: "contractAddr", internalType: "string", type: "string" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "contractAddr", internalType: "string", type: "string" },
      { name: "req", internalType: "bytes", type: "bytes" },
    ],
    name: "query",
    outputs: [{ name: "response", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "contractAddr", internalType: "string", type: "string" },
      { name: "key", internalType: "bytes", type: "bytes" },
    ],
    name: "queryRaw",
    outputs: [{ name: "response", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
] as const

export const iWasmAddress =
  "0x0000000000000000000000000000000000000802" as const

export const iWasmConfig = { address: iWasmAddress, abi: iWasmAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WNIBI
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const wnibiAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "src", internalType: "address", type: "address", indexed: true },
      { name: "guy", internalType: "address", type: "address", indexed: true },
      { name: "wad", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "dst", internalType: "address", type: "address", indexed: true },
      { name: "wad", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "Deposit",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "src", internalType: "address", type: "address", indexed: true },
      { name: "dst", internalType: "address", type: "address", indexed: true },
      { name: "wad", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "Transfer",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "src", internalType: "address", type: "address", indexed: true },
      { name: "wad", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "Withdrawal",
  },
  { type: "fallback", stateMutability: "payable" },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "guy", internalType: "address", type: "address" },
      { name: "wad", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "dst", internalType: "address", type: "address" },
      { name: "wad", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "src", internalType: "address", type: "address" },
      { name: "dst", internalType: "address", type: "address" },
      { name: "wad", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "wad", internalType: "uint256", type: "uint256" }],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
  },
  { type: "receive", stateMutability: "payable" },
] as const

export const wnibiAddress =
  "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97" as const

export const wnibiConfig = { address: wnibiAddress, abi: wnibiAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erisEvmAbi}__
 */
export const readErisEvm = /*#__PURE__*/ createReadContract({
  abi: erisEvmAbi,
  address: erisEvmAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erisEvmAbi}__ and `functionName` set to `"state"`
 */
export const readErisEvmState = /*#__PURE__*/ createReadContract({
  abi: erisEvmAbi,
  address: erisEvmAddress,
  functionName: "state",
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erisEvmAbi}__
 */
export const writeErisEvm = /*#__PURE__*/ createWriteContract({
  abi: erisEvmAbi,
  address: erisEvmAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erisEvmAbi}__ and `functionName` set to `"liquidStake"`
 */
export const writeErisEvmLiquidStake = /*#__PURE__*/ createWriteContract({
  abi: erisEvmAbi,
  address: erisEvmAddress,
  functionName: "liquidStake",
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erisEvmAbi}__ and `functionName` set to `"redeem"`
 */
export const writeErisEvmRedeem = /*#__PURE__*/ createWriteContract({
  abi: erisEvmAbi,
  address: erisEvmAddress,
  functionName: "redeem",
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erisEvmAbi}__ and `functionName` set to `"unstake"`
 */
export const writeErisEvmUnstake = /*#__PURE__*/ createWriteContract({
  abi: erisEvmAbi,
  address: erisEvmAddress,
  functionName: "unstake",
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erisEvmAbi}__
 */
export const simulateErisEvm = /*#__PURE__*/ createSimulateContract({
  abi: erisEvmAbi,
  address: erisEvmAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erisEvmAbi}__ and `functionName` set to `"liquidStake"`
 */
export const simulateErisEvmLiquidStake = /*#__PURE__*/ createSimulateContract({
  abi: erisEvmAbi,
  address: erisEvmAddress,
  functionName: "liquidStake",
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erisEvmAbi}__ and `functionName` set to `"redeem"`
 */
export const simulateErisEvmRedeem = /*#__PURE__*/ createSimulateContract({
  abi: erisEvmAbi,
  address: erisEvmAddress,
  functionName: "redeem",
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erisEvmAbi}__ and `functionName` set to `"unstake"`
 */
export const simulateErisEvmUnstake = /*#__PURE__*/ createSimulateContract({
  abi: erisEvmAbi,
  address: erisEvmAddress,
  functionName: "unstake",
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iFunTokenAbi}__
 */
export const readIFunToken = /*#__PURE__*/ createReadContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"balance"`
 */
export const readIFunTokenBalance = /*#__PURE__*/ createReadContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
  functionName: "balance",
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"bankBalance"`
 */
export const readIFunTokenBankBalance = /*#__PURE__*/ createReadContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
  functionName: "bankBalance",
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"getErc20Address"`
 */
export const readIFunTokenGetErc20Address = /*#__PURE__*/ createReadContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
  functionName: "getErc20Address",
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"whoAmI"`
 */
export const readIFunTokenWhoAmI = /*#__PURE__*/ createReadContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
  functionName: "whoAmI",
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iFunTokenAbi}__
 */
export const writeIFunToken = /*#__PURE__*/ createWriteContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"bankMsgSend"`
 */
export const writeIFunTokenBankMsgSend = /*#__PURE__*/ createWriteContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
  functionName: "bankMsgSend",
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"sendToBank"`
 */
export const writeIFunTokenSendToBank = /*#__PURE__*/ createWriteContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
  functionName: "sendToBank",
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"sendToEvm"`
 */
export const writeIFunTokenSendToEvm = /*#__PURE__*/ createWriteContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
  functionName: "sendToEvm",
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iFunTokenAbi}__
 */
export const simulateIFunToken = /*#__PURE__*/ createSimulateContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"bankMsgSend"`
 */
export const simulateIFunTokenBankMsgSend =
  /*#__PURE__*/ createSimulateContract({
    abi: iFunTokenAbi,
    address: iFunTokenAddress,
    functionName: "bankMsgSend",
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"sendToBank"`
 */
export const simulateIFunTokenSendToBank = /*#__PURE__*/ createSimulateContract(
  { abi: iFunTokenAbi, address: iFunTokenAddress, functionName: "sendToBank" }
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"sendToEvm"`
 */
export const simulateIFunTokenSendToEvm = /*#__PURE__*/ createSimulateContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
  functionName: "sendToEvm",
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iFunTokenAbi}__
 */
export const watchIFunTokenEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iFunTokenAbi}__ and `eventName` set to `"AbciEvent"`
 */
export const watchIFunTokenAbciEventEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iFunTokenAbi,
    address: iFunTokenAddress,
    eventName: "AbciEvent",
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iOracleAbi}__
 */
export const readIOracle = /*#__PURE__*/ createReadContract({
  abi: iOracleAbi,
  address: iOracleAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iOracleAbi}__ and `functionName` set to `"chainLinkLatestRoundData"`
 */
export const readIOracleChainLinkLatestRoundData =
  /*#__PURE__*/ createReadContract({
    abi: iOracleAbi,
    address: iOracleAddress,
    functionName: "chainLinkLatestRoundData",
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iOracleAbi}__ and `functionName` set to `"queryExchangeRate"`
 */
export const readIOracleQueryExchangeRate = /*#__PURE__*/ createReadContract({
  abi: iOracleAbi,
  address: iOracleAddress,
  functionName: "queryExchangeRate",
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iWasmAbi}__
 */
export const readIWasm = /*#__PURE__*/ createReadContract({
  abi: iWasmAbi,
  address: iWasmAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iWasmAbi}__ and `functionName` set to `"query"`
 */
export const readIWasmQuery = /*#__PURE__*/ createReadContract({
  abi: iWasmAbi,
  address: iWasmAddress,
  functionName: "query",
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iWasmAbi}__ and `functionName` set to `"queryRaw"`
 */
export const readIWasmQueryRaw = /*#__PURE__*/ createReadContract({
  abi: iWasmAbi,
  address: iWasmAddress,
  functionName: "queryRaw",
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iWasmAbi}__
 */
export const writeIWasm = /*#__PURE__*/ createWriteContract({
  abi: iWasmAbi,
  address: iWasmAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iWasmAbi}__ and `functionName` set to `"execute"`
 */
export const writeIWasmExecute = /*#__PURE__*/ createWriteContract({
  abi: iWasmAbi,
  address: iWasmAddress,
  functionName: "execute",
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iWasmAbi}__ and `functionName` set to `"executeMulti"`
 */
export const writeIWasmExecuteMulti = /*#__PURE__*/ createWriteContract({
  abi: iWasmAbi,
  address: iWasmAddress,
  functionName: "executeMulti",
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iWasmAbi}__ and `functionName` set to `"instantiate"`
 */
export const writeIWasmInstantiate = /*#__PURE__*/ createWriteContract({
  abi: iWasmAbi,
  address: iWasmAddress,
  functionName: "instantiate",
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iWasmAbi}__
 */
export const simulateIWasm = /*#__PURE__*/ createSimulateContract({
  abi: iWasmAbi,
  address: iWasmAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iWasmAbi}__ and `functionName` set to `"execute"`
 */
export const simulateIWasmExecute = /*#__PURE__*/ createSimulateContract({
  abi: iWasmAbi,
  address: iWasmAddress,
  functionName: "execute",
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iWasmAbi}__ and `functionName` set to `"executeMulti"`
 */
export const simulateIWasmExecuteMulti = /*#__PURE__*/ createSimulateContract({
  abi: iWasmAbi,
  address: iWasmAddress,
  functionName: "executeMulti",
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iWasmAbi}__ and `functionName` set to `"instantiate"`
 */
export const simulateIWasmInstantiate = /*#__PURE__*/ createSimulateContract({
  abi: iWasmAbi,
  address: iWasmAddress,
  functionName: "instantiate",
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iWasmAbi}__
 */
export const watchIWasmEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iWasmAbi,
  address: iWasmAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iWasmAbi}__ and `eventName` set to `"AbciEvent"`
 */
export const watchIWasmAbciEventEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iWasmAbi,
  address: iWasmAddress,
  eventName: "AbciEvent",
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link wnibiAbi}__
 */
export const readWnibi = /*#__PURE__*/ createReadContract({
  abi: wnibiAbi,
  address: wnibiAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"allowance"`
 */
export const readWnibiAllowance = /*#__PURE__*/ createReadContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "allowance",
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readWnibiBalanceOf = /*#__PURE__*/ createReadContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "balanceOf",
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"decimals"`
 */
export const readWnibiDecimals = /*#__PURE__*/ createReadContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "decimals",
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"name"`
 */
export const readWnibiName = /*#__PURE__*/ createReadContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "name",
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"symbol"`
 */
export const readWnibiSymbol = /*#__PURE__*/ createReadContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "symbol",
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readWnibiTotalSupply = /*#__PURE__*/ createReadContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "totalSupply",
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link wnibiAbi}__
 */
export const writeWnibi = /*#__PURE__*/ createWriteContract({
  abi: wnibiAbi,
  address: wnibiAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"approve"`
 */
export const writeWnibiApprove = /*#__PURE__*/ createWriteContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "approve",
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"deposit"`
 */
export const writeWnibiDeposit = /*#__PURE__*/ createWriteContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "deposit",
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"transfer"`
 */
export const writeWnibiTransfer = /*#__PURE__*/ createWriteContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "transfer",
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeWnibiTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "transferFrom",
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"withdraw"`
 */
export const writeWnibiWithdraw = /*#__PURE__*/ createWriteContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "withdraw",
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link wnibiAbi}__
 */
export const simulateWnibi = /*#__PURE__*/ createSimulateContract({
  abi: wnibiAbi,
  address: wnibiAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"approve"`
 */
export const simulateWnibiApprove = /*#__PURE__*/ createSimulateContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "approve",
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"deposit"`
 */
export const simulateWnibiDeposit = /*#__PURE__*/ createSimulateContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "deposit",
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateWnibiTransfer = /*#__PURE__*/ createSimulateContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "transfer",
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateWnibiTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "transferFrom",
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"withdraw"`
 */
export const simulateWnibiWithdraw = /*#__PURE__*/ createSimulateContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "withdraw",
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link wnibiAbi}__
 */
export const watchWnibiEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: wnibiAbi,
  address: wnibiAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link wnibiAbi}__ and `eventName` set to `"Approval"`
 */
export const watchWnibiApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: wnibiAbi,
  address: wnibiAddress,
  eventName: "Approval",
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link wnibiAbi}__ and `eventName` set to `"Deposit"`
 */
export const watchWnibiDepositEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: wnibiAbi,
  address: wnibiAddress,
  eventName: "Deposit",
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link wnibiAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchWnibiTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: wnibiAbi,
  address: wnibiAddress,
  eventName: "Transfer",
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link wnibiAbi}__ and `eventName` set to `"Withdrawal"`
 */
export const watchWnibiWithdrawalEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: wnibiAbi, address: wnibiAddress, eventName: "Withdrawal" }
)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erisEvmAbi}__
 */
export const useReadErisEvm = /*#__PURE__*/ createUseReadContract({
  abi: erisEvmAbi,
  address: erisEvmAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erisEvmAbi}__ and `functionName` set to `"state"`
 */
export const useReadErisEvmState = /*#__PURE__*/ createUseReadContract({
  abi: erisEvmAbi,
  address: erisEvmAddress,
  functionName: "state",
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erisEvmAbi}__
 */
export const useWriteErisEvm = /*#__PURE__*/ createUseWriteContract({
  abi: erisEvmAbi,
  address: erisEvmAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erisEvmAbi}__ and `functionName` set to `"liquidStake"`
 */
export const useWriteErisEvmLiquidStake = /*#__PURE__*/ createUseWriteContract({
  abi: erisEvmAbi,
  address: erisEvmAddress,
  functionName: "liquidStake",
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erisEvmAbi}__ and `functionName` set to `"redeem"`
 */
export const useWriteErisEvmRedeem = /*#__PURE__*/ createUseWriteContract({
  abi: erisEvmAbi,
  address: erisEvmAddress,
  functionName: "redeem",
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erisEvmAbi}__ and `functionName` set to `"unstake"`
 */
export const useWriteErisEvmUnstake = /*#__PURE__*/ createUseWriteContract({
  abi: erisEvmAbi,
  address: erisEvmAddress,
  functionName: "unstake",
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erisEvmAbi}__
 */
export const useSimulateErisEvm = /*#__PURE__*/ createUseSimulateContract({
  abi: erisEvmAbi,
  address: erisEvmAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erisEvmAbi}__ and `functionName` set to `"liquidStake"`
 */
export const useSimulateErisEvmLiquidStake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erisEvmAbi,
    address: erisEvmAddress,
    functionName: "liquidStake",
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erisEvmAbi}__ and `functionName` set to `"redeem"`
 */
export const useSimulateErisEvmRedeem = /*#__PURE__*/ createUseSimulateContract(
  { abi: erisEvmAbi, address: erisEvmAddress, functionName: "redeem" }
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erisEvmAbi}__ and `functionName` set to `"unstake"`
 */
export const useSimulateErisEvmUnstake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erisEvmAbi,
    address: erisEvmAddress,
    functionName: "unstake",
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iFunTokenAbi}__
 */
export const useReadIFunToken = /*#__PURE__*/ createUseReadContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"balance"`
 */
export const useReadIFunTokenBalance = /*#__PURE__*/ createUseReadContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
  functionName: "balance",
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"bankBalance"`
 */
export const useReadIFunTokenBankBalance = /*#__PURE__*/ createUseReadContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
  functionName: "bankBalance",
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"getErc20Address"`
 */
export const useReadIFunTokenGetErc20Address =
  /*#__PURE__*/ createUseReadContract({
    abi: iFunTokenAbi,
    address: iFunTokenAddress,
    functionName: "getErc20Address",
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"whoAmI"`
 */
export const useReadIFunTokenWhoAmI = /*#__PURE__*/ createUseReadContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
  functionName: "whoAmI",
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iFunTokenAbi}__
 */
export const useWriteIFunToken = /*#__PURE__*/ createUseWriteContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"bankMsgSend"`
 */
export const useWriteIFunTokenBankMsgSend =
  /*#__PURE__*/ createUseWriteContract({
    abi: iFunTokenAbi,
    address: iFunTokenAddress,
    functionName: "bankMsgSend",
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"sendToBank"`
 */
export const useWriteIFunTokenSendToBank = /*#__PURE__*/ createUseWriteContract(
  { abi: iFunTokenAbi, address: iFunTokenAddress, functionName: "sendToBank" }
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"sendToEvm"`
 */
export const useWriteIFunTokenSendToEvm = /*#__PURE__*/ createUseWriteContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
  functionName: "sendToEvm",
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iFunTokenAbi}__
 */
export const useSimulateIFunToken = /*#__PURE__*/ createUseSimulateContract({
  abi: iFunTokenAbi,
  address: iFunTokenAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"bankMsgSend"`
 */
export const useSimulateIFunTokenBankMsgSend =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iFunTokenAbi,
    address: iFunTokenAddress,
    functionName: "bankMsgSend",
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"sendToBank"`
 */
export const useSimulateIFunTokenSendToBank =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iFunTokenAbi,
    address: iFunTokenAddress,
    functionName: "sendToBank",
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iFunTokenAbi}__ and `functionName` set to `"sendToEvm"`
 */
export const useSimulateIFunTokenSendToEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iFunTokenAbi,
    address: iFunTokenAddress,
    functionName: "sendToEvm",
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iFunTokenAbi}__
 */
export const useWatchIFunTokenEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: iFunTokenAbi, address: iFunTokenAddress }
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iFunTokenAbi}__ and `eventName` set to `"AbciEvent"`
 */
export const useWatchIFunTokenAbciEventEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iFunTokenAbi,
    address: iFunTokenAddress,
    eventName: "AbciEvent",
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iOracleAbi}__
 */
export const useReadIOracle = /*#__PURE__*/ createUseReadContract({
  abi: iOracleAbi,
  address: iOracleAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iOracleAbi}__ and `functionName` set to `"chainLinkLatestRoundData"`
 */
export const useReadIOracleChainLinkLatestRoundData =
  /*#__PURE__*/ createUseReadContract({
    abi: iOracleAbi,
    address: iOracleAddress,
    functionName: "chainLinkLatestRoundData",
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iOracleAbi}__ and `functionName` set to `"queryExchangeRate"`
 */
export const useReadIOracleQueryExchangeRate =
  /*#__PURE__*/ createUseReadContract({
    abi: iOracleAbi,
    address: iOracleAddress,
    functionName: "queryExchangeRate",
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iWasmAbi}__
 */
export const useReadIWasm = /*#__PURE__*/ createUseReadContract({
  abi: iWasmAbi,
  address: iWasmAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iWasmAbi}__ and `functionName` set to `"query"`
 */
export const useReadIWasmQuery = /*#__PURE__*/ createUseReadContract({
  abi: iWasmAbi,
  address: iWasmAddress,
  functionName: "query",
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iWasmAbi}__ and `functionName` set to `"queryRaw"`
 */
export const useReadIWasmQueryRaw = /*#__PURE__*/ createUseReadContract({
  abi: iWasmAbi,
  address: iWasmAddress,
  functionName: "queryRaw",
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iWasmAbi}__
 */
export const useWriteIWasm = /*#__PURE__*/ createUseWriteContract({
  abi: iWasmAbi,
  address: iWasmAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iWasmAbi}__ and `functionName` set to `"execute"`
 */
export const useWriteIWasmExecute = /*#__PURE__*/ createUseWriteContract({
  abi: iWasmAbi,
  address: iWasmAddress,
  functionName: "execute",
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iWasmAbi}__ and `functionName` set to `"executeMulti"`
 */
export const useWriteIWasmExecuteMulti = /*#__PURE__*/ createUseWriteContract({
  abi: iWasmAbi,
  address: iWasmAddress,
  functionName: "executeMulti",
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iWasmAbi}__ and `functionName` set to `"instantiate"`
 */
export const useWriteIWasmInstantiate = /*#__PURE__*/ createUseWriteContract({
  abi: iWasmAbi,
  address: iWasmAddress,
  functionName: "instantiate",
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iWasmAbi}__
 */
export const useSimulateIWasm = /*#__PURE__*/ createUseSimulateContract({
  abi: iWasmAbi,
  address: iWasmAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iWasmAbi}__ and `functionName` set to `"execute"`
 */
export const useSimulateIWasmExecute = /*#__PURE__*/ createUseSimulateContract({
  abi: iWasmAbi,
  address: iWasmAddress,
  functionName: "execute",
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iWasmAbi}__ and `functionName` set to `"executeMulti"`
 */
export const useSimulateIWasmExecuteMulti =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iWasmAbi,
    address: iWasmAddress,
    functionName: "executeMulti",
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iWasmAbi}__ and `functionName` set to `"instantiate"`
 */
export const useSimulateIWasmInstantiate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iWasmAbi,
    address: iWasmAddress,
    functionName: "instantiate",
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iWasmAbi}__
 */
export const useWatchIWasmEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: iWasmAbi,
  address: iWasmAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iWasmAbi}__ and `eventName` set to `"AbciEvent"`
 */
export const useWatchIWasmAbciEventEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iWasmAbi,
    address: iWasmAddress,
    eventName: "AbciEvent",
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wnibiAbi}__
 */
export const useReadWnibi = /*#__PURE__*/ createUseReadContract({
  abi: wnibiAbi,
  address: wnibiAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadWnibiAllowance = /*#__PURE__*/ createUseReadContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "allowance",
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadWnibiBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "balanceOf",
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadWnibiDecimals = /*#__PURE__*/ createUseReadContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "decimals",
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"name"`
 */
export const useReadWnibiName = /*#__PURE__*/ createUseReadContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "name",
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadWnibiSymbol = /*#__PURE__*/ createUseReadContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "symbol",
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadWnibiTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "totalSupply",
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wnibiAbi}__
 */
export const useWriteWnibi = /*#__PURE__*/ createUseWriteContract({
  abi: wnibiAbi,
  address: wnibiAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteWnibiApprove = /*#__PURE__*/ createUseWriteContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "approve",
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"deposit"`
 */
export const useWriteWnibiDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "deposit",
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteWnibiTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "transfer",
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteWnibiTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "transferFrom",
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteWnibiWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "withdraw",
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wnibiAbi}__
 */
export const useSimulateWnibi = /*#__PURE__*/ createUseSimulateContract({
  abi: wnibiAbi,
  address: wnibiAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateWnibiApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "approve",
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"deposit"`
 */
export const useSimulateWnibiDeposit = /*#__PURE__*/ createUseSimulateContract({
  abi: wnibiAbi,
  address: wnibiAddress,
  functionName: "deposit",
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateWnibiTransfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: wnibiAbi, address: wnibiAddress, functionName: "transfer" }
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateWnibiTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wnibiAbi,
    address: wnibiAddress,
    functionName: "transferFrom",
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wnibiAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateWnibiWithdraw = /*#__PURE__*/ createUseSimulateContract(
  { abi: wnibiAbi, address: wnibiAddress, functionName: "withdraw" }
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wnibiAbi}__
 */
export const useWatchWnibiEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: wnibiAbi,
  address: wnibiAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wnibiAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchWnibiApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wnibiAbi,
    address: wnibiAddress,
    eventName: "Approval",
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wnibiAbi}__ and `eventName` set to `"Deposit"`
 */
export const useWatchWnibiDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wnibiAbi,
    address: wnibiAddress,
    eventName: "Deposit",
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wnibiAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchWnibiTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wnibiAbi,
    address: wnibiAddress,
    eventName: "Transfer",
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wnibiAbi}__ and `eventName` set to `"Withdrawal"`
 */
export const useWatchWnibiWithdrawalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wnibiAbi,
    address: wnibiAddress,
    eventName: "Withdrawal",
  })
