/* This example requires Tailwind CSS v2.0+ */
import { Web3Provider } from "@ethersproject/providers";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { injected, walletconnect } from "../web3/connectors";
import { useEagerConnect, useInactiveListener } from "../web3/hooks";
import { Header } from "./Header";
import { Modal, ModalTitle } from "./Modal";
import Button from "./Button";

function getErrorMessage(error: Error) {
  if (error instanceof NoEthereumProviderError) {
    return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network. We only support ropsten testnet";
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect
  ) {
    return "Please authorize this website to access your Ethereum account.";
  } else {
    console.error(error);
    return "An unknown error occurred. Check the console for more details.";
  }
}

enum ConnectorNames {
  Injected = "Injected",
  //  Network = "Network",
  WalletConnect = "WalletConnect",
}
const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
};

function ChainId() {
  const { chainId } = useWeb3React();
  return (
    <div className={"flex"}>
      <span>network:</span>
      <span className="ml-3">{chainId === 3 && "ropsten"}</span>
    </div>
  );
}

function Account() {
  const { account } = useWeb3React();

  return (
    <div className="flex">
      <span>
        {account === null
          ? "-"
          : account
          ? `${account.substring(0, 6)}...${account.substring(
              account.length - 6
            )}`
          : ""}
      </span>
    </div>
  );
}

const Connect = () => {
  const context = useWeb3React<Web3Provider>();
  const { connector, chainId, account, activate, deactivate, active, error } =
    context;
  const [showModal, setShowModal] = useState(false);

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState<any>();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);
  return (
    <>
      <button className="w-full" onClick={() => setShowModal(!showModal)}>
        <Header className="w-full">
          {account ? <Account /> : "Connect to a wallet"}
        </Header>
      </button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalTitle>Connect to a wallet</ModalTitle>
        <div>
          <ul role="list" className="my-3  w-full flex gap-3">
            {Object.keys(connectorsByName).map((name) => {
              const currentConnector = connectorsByName[name];
              const activating = currentConnector === activatingConnector;
              const connected = currentConnector === connector;
              const disabled =
                !triedEager || !!activatingConnector || connected || !!error;

              return (
                <li key={name}>
                  <button
                    className={`flex items-center justify-between border bg-white rounded-md truncate ${
                      connected
                        ? "border-prologe-primary"
                        : "border-prologe-light"
                    }`}
                    disabled={disabled}
                    onClick={() => {
                      setActivatingConnector(currentConnector);
                      activate(connectorsByName[name]);
                    }}
                  >
                    <div className="flex-1 px-4 py-2 text-sm truncate">
                      {name === "Injected" ? "Browser Wallet" : name}
                    </div>
                    {activating && (
                      <div className=" flex justify-center items-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-prologe-primary mr-3"></div>
                      </div>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
          {!!error && (
            <h4 style={{ marginTop: "1rem", marginBottom: "0" }}>
              {getErrorMessage(error)}
            </h4>
          )}
          <div className={"flex"}>
            {(active || error) && (
              <Button
                className="self-end"
                onClick={() => {
                  deactivate();
                }}
              >
                Disconnect
              </Button>
            )}
          </div>

          {connector === connectorsByName[ConnectorNames.WalletConnect] && (
            <Button
              onClick={() => {
                (connector as any).close();
              }}
            >
              Kill WalletConnect Session
            </Button>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Connect;
