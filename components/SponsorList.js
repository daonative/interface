import { ethers } from "ethers";
import Image from "next/image";
import { Card } from "./Card";
import { Header } from "./Header";

const isValidAddress = (address) => {
  try {
    ethers.utils.getAddress(address);
    return true;
  } catch (e) {
    return false;
  }
};

export const SponsorList = ({ className, sponsors = {} }) => {
  const hasSponsors = Object.keys(sponsors)?.length > 0;
  if (!hasSponsors) return;
  return (
    <Card className={`${className}`}>
      <Header className="min-w-max max-w-full w-1/4 py-3">Sponsors</Header>
      <div className="px-4">
        <ul className="divide-y divide-opacity-25 divide-prologe-primary">
          {Object.entries(sponsors).map(([address, sponsorData]) => {
            return (
              <li key={address} className="pt-4 pb-4 flex justify-between">
                <div>
                  <Image width="12" height="12" src="/ethereum-icon.svg" />
                  {sponsorData.balance}
                </div>
                <div className="flex">
                  <span className="mr-2">from</span>
                  {isValidAddress(address) ? (
                    <a
                      target="_blank"
                      title={address}
                      href={`https://etherscan.io/address/${address}`}
                    >
                      <div>
                        {address.substr(0, 9)}
                        ..
                        {address.slice(-5)}
                      </div>
                    </a>
                  ) : (
                    <div>{address}</div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
};
