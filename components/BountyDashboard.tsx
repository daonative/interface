import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import Button from "./Button";
import { useEffect, useState } from "react";
import bountyCreatorAbi from "../abi/bountyCreator.json";
import { Card } from "./Card";
import { Header } from "./Header";
import { Input } from "./Input";

declare global {
  interface Window {
    ethereum: any;
  }
}

export const BountyList = () => {
  const { library } = useWeb3React();
  const [bounties, setBounties] = useState([]);
  const getBounties = async () => {
    let provider = ethers.getDefaultProvider("kovan");

    const bountyCreator = new ethers.Contract(
      "0x19F583d9Fe66Aa7db5CD33b3f8D55C0143916Ae0",
      bountyCreatorAbi,
      provider
    );
    setBounties(await bountyCreator.getBounties());
  };
  useEffect(() => {
    getBounties();
  }, []);
  return (
    <Card>
      <Header className="min-w-max max-w-full w-1/4 py-3">List</Header>
      <div className="p-4">
        {bounties.map((bounty, index) => (
          <a
            className="block text-prologe-primary"
            href={`https://kovan.etherscan.io/address/${bounty}`}
          >
            {bounty}
          </a>
        ))}
      </div>
    </Card>
  );
};

export const BountyCreator = () => {
  const createBounty = async (data) => {
    const provider = new ethers.providers.Web3Provider(window?.ethereum);

    const bountyCreator = new ethers.Contract(
      "0x19F583d9Fe66Aa7db5CD33b3f8D55C0143916Ae0",
      bountyCreatorAbi,
      provider.getSigner()
    );

    await bountyCreator.createBounty("wqerpoupweioqrqw");
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    createBounty(event.target.value);
  };

  return (
    <Card className="mt-3">
      <Header className="min-w-max max-w-full w-1/4 py-3">Creator</Header>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <Input type="text" name="data" label="data" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </Card>
  );
};
