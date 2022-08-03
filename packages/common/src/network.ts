export interface Network {
  endpointRpc: string
  endpointRest: string
  chainId: string
  chainName: string
  feeDenom: string
}

export const LocalNetwork: Network = {
  endpointRpc: '127.0.0.1:26657',
  endpointRest: '127.0.0.1:1317',
  chainId: 'nibiru-localnet-0',
  chainName: 'Nibiru localnet',
  feeDenom: 'unibi',
}

export const TestnetNetwork: Network = {
  endpointRpc: 'rpc.nibiru.fi:9090',
  endpointRest: 'https://lcd.nibiru.fi',
  chainId: 'nibiru-testnet-3',
  chainName: 'Nibiru testnet',
  feeDenom: 'unibi',
}
