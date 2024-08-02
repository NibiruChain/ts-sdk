import { QueryClient } from "@cosmjs/stargate"
import * as query from "../../protojs/eth/evm/v1/query"
import { setupEthExtension } from "."
import Long from "long"
import { MsgEthereumTx } from "src/protojs/eth/evm/v1/tx"

describe("setupEpochsExtension", () => {
  const mockBaseQueryClient = {} as QueryClient

  jest.spyOn(query, "QueryClientImpl").mockReturnValue({
    EthAccount: jest.fn().mockResolvedValue({ ethAccount: "Test" }),
    NibiruAccount: jest.fn().mockResolvedValue({
      nibiruAccount: "Test",
    }),
    ValidatorAccount: jest.fn().mockResolvedValue({
      validatorAccount: "Test",
    }),
    Balance: jest.fn().mockResolvedValue({
      balance: "Test",
    }),
    Storage: jest.fn().mockResolvedValue({
      storage: "Test",
    }),
    Code: jest.fn().mockResolvedValue({
      code: "Test",
    }),
    Params: jest.fn().mockResolvedValue({
      params: "Test",
    }),
    EthCall: jest.fn().mockResolvedValue({
      ethCall: "Test",
    }),
    EstimateGas: jest.fn().mockResolvedValue({
      estimateGas: "Test",
    }),
    TraceTx: jest.fn().mockResolvedValue({
      traceTx: "Test",
    }),
    TraceBlock: jest.fn().mockResolvedValue({
      traceBlock: "Test",
    }),
    BaseFee: jest.fn().mockResolvedValue({
      baseFee: "Test",
    }),
  } as unknown as query.QueryClientImpl)

  test("should setup extension correctly", () => {
    const extension = setupEthExtension(mockBaseQueryClient)

    expect(extension).toBeDefined()
    expect(extension.ethAccount).toBeInstanceOf(Function)
    expect(extension.nibiruAccount).toBeInstanceOf(Function)
    expect(extension.validatorAccount).toBeInstanceOf(Function)
    expect(extension.balance).toBeInstanceOf(Function)
    expect(extension.storage).toBeInstanceOf(Function)
    expect(extension.code).toBeInstanceOf(Function)
    expect(extension.params).toBeInstanceOf(Function)
    expect(extension.ethCall).toBeInstanceOf(Function)
    expect(extension.estimateGas).toBeInstanceOf(Function)
    expect(extension.traceTx).toBeInstanceOf(Function)
    expect(extension.traceBlock).toBeInstanceOf(Function)
    expect(extension.baseFee).toBeInstanceOf(Function)
  })

  describe("ethAccount", () => {
    test("should call QueryEthAccountRequest and return the response", async () => {
      const queryEthAccountRequest = jest
        .spyOn(query.QueryEthAccountRequest, "fromPartial")
        .mockReturnValue({} as query.QueryEthAccountRequest)

      const extension = setupEthExtension(mockBaseQueryClient)
      const result = await extension.ethAccount({
        address: "",
      })
      expect(queryEthAccountRequest).toHaveBeenCalledWith({
        address: "",
      })
      expect(result).toEqual({ ethAccount: "Test" })
    })
  })

  describe("nibiruAccount", () => {
    test("should call QueryNibiruAccountRequest and return the response", async () => {
      const queryNibiruAccountRequest = jest
        .spyOn(query.QueryNibiruAccountRequest, "fromPartial")
        .mockReturnValue({} as query.QueryNibiruAccountRequest)

      const extension = setupEthExtension(mockBaseQueryClient)
      const result = await extension.nibiruAccount({
        address: "",
      })
      expect(queryNibiruAccountRequest).toHaveBeenCalledWith({
        address: "",
      })
      expect(result).toEqual({ nibiruAccount: "Test" })
    })
  })

  describe("validatorAccount", () => {
    test("should call queryValidatorAccountRequest and return the response", async () => {
      const queryValidatorAccountRequest = jest
        .spyOn(query.QueryValidatorAccountRequest, "fromPartial")
        .mockReturnValue({} as query.QueryValidatorAccountRequest)

      const extension = setupEthExtension(mockBaseQueryClient)
      const result = await extension.validatorAccount({
        consAddress: "",
      })
      expect(queryValidatorAccountRequest).toHaveBeenCalledWith({
        consAddress: "",
      })
      expect(result).toEqual({ validatorAccount: "Test" })
    })
  })

  describe("balance", () => {
    test("should call QueryBalanceRequest and return the response", async () => {
      const queryBalanceRequest = jest
        .spyOn(query.QueryBalanceRequest, "fromPartial")
        .mockReturnValue({} as query.QueryBalanceRequest)

      const extension = setupEthExtension(mockBaseQueryClient)
      const result = await extension.balance({
        address: "",
      })
      expect(queryBalanceRequest).toHaveBeenCalledWith({
        address: "",
      })
      expect(result).toEqual({ balance: "Test" })
    })
  })

  describe("storage", () => {
    test("should call QueryStorageRequest and return the response", async () => {
      const queryStorageRequest = jest
        .spyOn(query.QueryStorageRequest, "fromPartial")
        .mockReturnValue({} as query.QueryStorageRequest)

      const extension = setupEthExtension(mockBaseQueryClient)
      const result = await extension.storage({
        address: "",
        key: "",
      })
      expect(queryStorageRequest).toHaveBeenCalledWith({
        address: "",
        key: "",
      })
      expect(result).toEqual({ storage: "Test" })
    })
  })

  describe("code", () => {
    test("should call QueryCodeRequest and return the response", async () => {
      const queryCodeRequest = jest
        .spyOn(query.QueryCodeRequest, "fromPartial")
        .mockReturnValue({} as query.QueryCodeRequest)

      const extension = setupEthExtension(mockBaseQueryClient)
      const result = await extension.code({
        address: "",
      })
      expect(queryCodeRequest).toHaveBeenCalledWith({
        address: "",
      })
      expect(result).toEqual({ code: "Test" })
    })
  })

  describe("params", () => {
    test("should call QueryParamsRequest and return the response", async () => {
      const queryParamsRequest = jest
        .spyOn(query.QueryParamsRequest, "fromPartial")
        .mockReturnValue({} as query.QueryParamsRequest)

      const extension = setupEthExtension(mockBaseQueryClient)
      const result = await extension.params({})
      expect(queryParamsRequest).toHaveBeenCalledWith({})
      expect(result).toEqual({ params: "Test" })
    })
  })

  describe("ethCall", () => {
    test("should call EthCallRequest and return the response", async () => {
      const ethCallRequest = jest
        .spyOn(query.EthCallRequest, "fromPartial")
        .mockReturnValue({} as query.EthCallRequest)

      const extension = setupEthExtension(mockBaseQueryClient)
      const result = await extension.ethCall({
        args: new Uint8Array(),
        gasCap: new Long(0),
        proposerAddress: new Uint8Array(),
        chainId: new Long(0),
      })
      expect(ethCallRequest).toHaveBeenCalledWith({
        args: new Uint8Array(),
        gasCap: new Long(0),
        proposerAddress: new Uint8Array(),
        chainId: new Long(0),
      })
      expect(result).toEqual({ ethCall: "Test" })
    })
  })

  describe("estimateGas", () => {
    test("should call EthCallRequest and return the response", async () => {
      const ethCallRequest = jest
        .spyOn(query.EthCallRequest, "fromPartial")
        .mockReturnValue({} as query.EthCallRequest)

      const extension = setupEthExtension(mockBaseQueryClient)
      const result = await extension.estimateGas({
        args: new Uint8Array(),
        gasCap: new Long(0),
        proposerAddress: new Uint8Array(),
        chainId: new Long(0),
      })
      expect(ethCallRequest).toHaveBeenCalledWith({
        args: new Uint8Array(),
        gasCap: new Long(0),
        proposerAddress: new Uint8Array(),
        chainId: new Long(0),
      })
      expect(result).toEqual({ estimateGas: "Test" })
    })
  })

  describe("traceTx", () => {
    test("should call QueryTraceTxRequest and return the response", async () => {
      const queryTraceTxRequest = jest
        .spyOn(query.QueryTraceTxRequest, "fromPartial")
        .mockReturnValue({} as query.QueryTraceTxRequest)

      const extension = setupEthExtension(mockBaseQueryClient)
      const result = await extension.traceTx({
        msg: MsgEthereumTx.fromPartial({}),
        traceConfig: {
          tracer: "",
          timeout: "",
          reexec: new Long(0),
          disableStack: true,
          disableStorage: true,
          debug: true,
          limit: 0,
          enableMemory: true,
          enableReturnData: true,
          tracerJsonConfig: "",
        },
        predecessors: [MsgEthereumTx.fromPartial({})],
        blockNumber: new Long(0),
        blockHash: "",
        blockTime: new Date(),
        proposerAddress: new Uint8Array(),
        chainId: new Long(0),
        blockMaxGas: new Long(0),
      })

      expect(queryTraceTxRequest).toHaveBeenCalledWith({
        msg: MsgEthereumTx.fromPartial({}),
        traceConfig: {
          tracer: "",
          timeout: "",
          reexec: new Long(0),
          disableStack: true,
          disableStorage: true,
          debug: true,
          limit: 0,
          enableMemory: true,
          enableReturnData: true,
          tracerJsonConfig: "",
        },
        predecessors: [MsgEthereumTx.fromPartial({})],
        blockNumber: new Long(0),
        blockHash: "",
        blockTime: new Date(),
        proposerAddress: new Uint8Array(),
        chainId: new Long(0),
        blockMaxGas: new Long(0),
      })
      expect(result).toEqual({ traceTx: "Test" })
    })
  })

  describe("traceBlock", () => {
    test("should call QueryTraceBlockRequest and return the response", async () => {
      const queryTraceBlockRequest = jest
        .spyOn(query.QueryTraceBlockRequest, "fromPartial")
        .mockReturnValue({} as query.QueryTraceBlockRequest)

      const extension = setupEthExtension(mockBaseQueryClient)
      const result = await extension.traceBlock({
        txs: [MsgEthereumTx.fromPartial({})],
        traceConfig: {
          tracer: "",
          timeout: "",
          reexec: new Long(0),
          disableStack: true,
          disableStorage: true,
          debug: true,
          limit: 0,
          enableMemory: true,
          enableReturnData: true,
          tracerJsonConfig: "",
        },
        blockNumber: new Long(0),
        blockHash: "",
        blockTime: new Date(),
        proposerAddress: new Uint8Array(),
        chainId: new Long(0),
        blockMaxGas: new Long(0),
      })
      expect(queryTraceBlockRequest).toHaveBeenCalledWith({
        txs: [MsgEthereumTx.fromPartial({})],
        traceConfig: {
          tracer: "",
          timeout: "",
          reexec: new Long(0),
          disableStack: true,
          disableStorage: true,
          debug: true,
          limit: 0,
          enableMemory: true,
          enableReturnData: true,
          tracerJsonConfig: "",
        },
        blockNumber: new Long(0),
        blockHash: "",
        blockTime: new Date(),
        proposerAddress: new Uint8Array(),
        chainId: new Long(0),
        blockMaxGas: new Long(0),
      })
      expect(result).toEqual({ traceBlock: "Test" })
    })
  })

  describe("baseFee", () => {
    test("should call QueryBaseFeeRequest and return the response", async () => {
      const queryBaseFeeRequest = jest
        .spyOn(query.QueryBaseFeeRequest, "fromPartial")
        .mockReturnValue({} as query.QueryBaseFeeRequest)

      const extension = setupEthExtension(mockBaseQueryClient)
      const result = await extension.baseFee({})
      expect(queryBaseFeeRequest).toHaveBeenCalledWith({})
      expect(result).toEqual({ baseFee: "Test" })
    })
  })
})
