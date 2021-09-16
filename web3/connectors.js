import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [3],
});

//urls: { 42: API_URL_KOVAN },
const alchemyApiKey = process.env.INFURA_API_KEY;

const ROPSTEN_URL = `https://ropsten.infura.io/v3/${alchemyApiKey}`;

export const network = new NetworkConnector({
  urls: {
    3: ROPSTEN_URL,
  },
  defaultChainId: 3,
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 3: ROPSTEN_URL },
  qrcode: true,
});
