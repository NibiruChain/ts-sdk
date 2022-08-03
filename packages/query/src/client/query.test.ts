import { LocalNetwork as Network } from '@nibiruchain/common'
import { initQuery } from './query'

require('dotenv').config() // yarn add -D dotenv

const VAL_ADDRESS = process.env.VALIDATOR_ADDRESS as string

describe('test query module', () => {
  it('has environment variables configured', () => {
    expect(VAL_ADDRESS).toBeDefined()
  })

  it('test bank all balances query', async () => {
    const { client, disconnect } = await initQuery(Network)
    const balances = await client.bank.allBalances(VAL_ADDRESS)
    console.log('%o', balances)
    expect(balances.length).toBeGreaterThan(0)
    expect(+balances[0].amount).toBeGreaterThan(0)
    expect(balances[0].denom).not.toBe('')
    disconnect()
  })

  it('dex params query', async () => {
    const { client, disconnect } = await initQuery(Network)
    const { params } = await client.dex.params()
    console.log('%o', params)
    expect(params?.whitelistedAsset.length).toBeGreaterThan(0)
    expect(params?.whitelistedAsset[0]).not.toBe('')
    disconnect()
  })

  it('perp params query', async () => {
    const { client, disconnect } = await initQuery(Network)
    const { params } = await client.perp.params()
    console.log('%o', params)
    expect(params).not.toBeNull()
    expect(+params!.feePoolFeeRatio).toBeGreaterThan(0)
    expect(+params!.liquidationFeeRatio).toBeGreaterThan(0)
    disconnect()
  })
})
