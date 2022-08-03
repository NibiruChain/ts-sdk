import { LocalNetwork } from '@nibiruchain/common'
import { Side } from '@nibiruchain/api/src/perp/v1/state'
import { coins } from '@cosmjs/proto-signing'
import * as dotenv from 'dotenv'
import { DexComposer, PerpComposer } from '.'
import { generate, msgSend } from './common'
import { initTx } from './tx'

dotenv.config() // yarn add -D dotenv

const valMnemonic = process.env.VALIDATOR_MNEMONIC

describe('test tx module', () => {
  it('send tokens', async () => {
    const client = await initTx(LocalNetwork, valMnemonic)
    const [{ address: sender }] = await client.getAccounts()
    const receiverAcct = await generate()
    const [{ address: receiver }] = await receiverAcct.getAccounts()
    const tokens = coins(100, 'unibi')
    console.info('Sending %O from %s to %s', tokens, sender, receiver)
    const gasUsed = await client.simulate(msgSend(sender, receiver, tokens))
    expect(gasUsed).toBeGreaterThan(0)
    const gasLimit = gasUsed * 1.25
    const resp = await client.withFee(gasLimit).sendTokens(receiver, tokens)
    expect(resp).not.toBeNull()
    expect(resp.code).toBe(0)
    expect(resp.gasUsed).toBeLessThan(gasLimit)
    console.log('%o', resp)
  })

  it('dex create pool', async () => {
    const client = await initTx(LocalNetwork, valMnemonic)
    const [{ address: sender }] = await client.getAccounts()
    const resp = await client.signAndBroadcast(
      DexComposer.createPool({
        creator: sender,
        poolAssets: [
          {
            token: { amount: '5', denom: 'unibi' },
            weight: '1',
          },
          {
            token: { amount: '50', denom: 'unusd' },
            weight: '1',
          },
        ],
        // Backend bug, throws nilpointer exception if omitted
        poolParams: {
          swapFee: '0',
          exitFee: '0',
        },
      }),
    )
    console.log('%o', resp)
    expect(resp).not.toBeNull()
    expect(resp.code).toBe(0)
  })

  it('test perp', async () => {
    const client = await initTx(LocalNetwork, valMnemonic)
    const [{ address: sender }] = await client.getAccounts()
    const resp = await client.signAndBroadcast(
      PerpComposer.openPosition({
        tokenPair: 'unibi:unusd',
        baseAssetAmountLimit: '1',
        leverage: '1',
        quoteAssetAmount: '1',
        sender,
        side: Side.BUY,
      }),
    )
    console.log('%o', resp)
    expect(resp).not.toBeNull()
    expect(resp.code).toBe(0)
  })
})
