import { Window as KeplrWindow, Keplr } from '@keplr-wallet/types'
import { Network } from '@nibiruchain/common'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {}
}

export async function getKeplr(network: Network) {
  if ((window as any).keplr) {
    throw Error('Keplr wallet not found')
  }
  const keplr: Keplr = window.keplr!
  const { chainId } = network

  try {
    // Keplr v0.6.4 introduces an experimental feature that supports the feature to suggests the chain from a webpage.
    // cosmoshub-3 is integrated to Keplr so the code should return without errors.
    // The code below is not needed for cosmoshub-3, but may be helpful if you’re adding a custom chain.
    // If the user approves, the chain will be added to the user's Keplr extension.
    // If the user rejects it or the suggested chain information doesn't include the required fields, it will throw an error.
    // If the same chain id is already registered, it will resolve and not require the user interactions.
    await keplr.experimentalSuggestChain({
      // Chain-id of the Osmosis chain.
      chainId,
      // The name of the chain to be displayed to the user.
      chainName: network.chainName,
      // RPC endpoint of the chain. In this case we are using blockapsis, as it's accepts connections from any host currently. No Cors limitations.
      // TODO: add http:// if this doesn't connect
      rpc: network.endpointRpc,
      // REST endpoint of the chain.
      rest: network.endpointRest,
      // Staking coin information
      stakeCurrency: {
        // Coin denomination to be displayed to the user.
        coinDenom: 'NIBI',
        // Actual denom (i.e. uatom, uscrt) used by the blockchain.
        coinMinimalDenom: 'unibi',
        // # of decimal points to convert minimal denomination to user-facing denomination.
        coinDecimals: 6,
        // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
        // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
        // coinGeckoId: ""
      },
      // (Optional) If you have a wallet webpage used to stake the coin then provide the url to the website in `walletUrlForStaking`.
      // The 'stake' button in Keplr extension will link to the webpage.
      // walletUrlForStaking: "",
      // The BIP44 path.
      bip44: {
        // You can only set the coin type of BIP44.
        // 'Purpose' is fixed to 44.
        coinType: 118,
      },
      // Bech32 configuration to show the address to user.
      // This field is the interface of
      // {
      //   bech32PrefixAccAddr: string;
      //   bech32PrefixAccPub: string;
      //   bech32PrefixValAddr: string;
      //   bech32PrefixValPub: string;
      //   bech32PrefixConsAddr: string;
      //   bech32PrefixConsPub: string;
      // }
      bech32Config: {
        bech32PrefixAccAddr: 'nibi',
        bech32PrefixAccPub: 'nibipub',
        bech32PrefixValAddr: 'nibivaloper',
        bech32PrefixValPub: 'nibivaloperpub',
        bech32PrefixConsAddr: 'nibivalcons',
        bech32PrefixConsPub: 'nibivalconspub',
      },
      // List of all coin/tokens used in this chain.
      currencies: [
        {
          // Coin denomination to be displayed to the user.
          coinDenom: 'unibi',
          // Actual denom (i.e. uatom, uscrt) used by the blockchain.
          coinMinimalDenom: 'unibi',
          // # of decimal points to convert minimal denomination to user-facing denomination.
          coinDecimals: 6,
          // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
          // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
          // coinGeckoId: ""
        },
      ],
      // List of coin/tokens used as a fee token in this chain.
      feeCurrencies: [
        {
          // Coin denomination to be displayed to the user.
          coinDenom: 'unibi',
          // Actual denom (i.e. uosmo, uscrt) used by the blockchain.
          coinMinimalDenom: 'unibi',
          // # of decimal points to convert minimal denomination to user-facing denomination.
          coinDecimals: 6,
          // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
          // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
          // coinGeckoId: ""
        },
      ],
      // (Optional) The number of the coin type.
      // This field is only used to fetch the address from ENS.
      // Ideally, it is recommended to be the same with BIP44 path's coin type.
      // However, some early chains may choose to use the Cosmos Hub BIP44 path of '118'.
      // So, this is separated to support such chains.
      coinType: 118,
      // (Optional) This is used to set the fee of the transaction.
      // If this field is not provided, Keplr extension will set the default gas price as (low: 0.01, average: 0.025, high: 0.04).
      // Currently, Keplr doesn't support dynamic calculation of the gas prices based on on-chain data.
      // Make sure that the gas prices are higher than the minimum gas prices accepted by chain validators and RPC/REST endpoint.
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.04,
      },
    })
  } catch {
    throw Error('Failed to suggest Nibiru chain to Keplr wallet')
  }

  // Enabling before using the Keplr is recommended.
  // This method will ask the user whether to allow access if they haven't visited this website.
  // Also, it will request that the user unlock the wallet if the wallet is locked.
  await keplr.enable(chainId)

  return keplr
}
