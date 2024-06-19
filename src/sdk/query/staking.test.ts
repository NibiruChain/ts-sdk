import { QueryClient, coin } from "@cosmjs/stargate"
import * as query from "../../protojs/cosmos/staking/v1beta1/tx"
import { setupStakeExtension } from "."
import Long from "long"

describe("setupStakingExtension", () => {
  const mockBaseQueryClient = {} as QueryClient

  jest.spyOn(query, "MsgClientImpl").mockReturnValue({
    QuerySudoers: jest.fn().mockResolvedValue({ staking: {} }),
  } as unknown as query.MsgClientImpl)

  test("should setup sudo extension correctly", () => {
    const extension = setupStakeExtension(mockBaseQueryClient)

    expect(extension.staking).toBeDefined()
    expect(extension.staking.cancelUnbondingDelegation).toBeInstanceOf(Function)
  })

  describe("sudo.querySudoers", () => {
    test("should call QuerySudoersRequest and return the response", async () => {
      const querySudoersRequest = jest
        .spyOn(query.MsgCancelUnbondingDelegation, "fromPartial")
        .mockReturnValue({} as query.MsgCancelUnbondingDelegation)

      const extension = setupStakeExtension(mockBaseQueryClient)
      const testArgs = {
        validatorAddress: "",
        delegatorAddress: "",
        amount: coin(1, "unibi"),
        creationHeight: new Long(0),
      }
      const result = await extension.staking.cancelUnbondingDelegation(testArgs)

      expect(querySudoersRequest).toHaveBeenCalledWith(testArgs)
      expect(result).toEqual({ staking: {} })
    })
  })
})
