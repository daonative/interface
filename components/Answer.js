import Image from "next/image";
import moment from "moment";

export const Answer = ({ article: proposal, id }) => {
  if (!proposal) return;
  return (
    <li
      className="col-span-1 flex flex-col bg-white rounded-lg  border-gray-200"
      style={{ borderWidth: 0.2 }}
    >
      <div className="flex-1 flex flex-col px-2 pt-1 pb-6">
        <div className="flex justify-between mb-2">
          <h3 className="text-sm text-base truncate">
            <span className="mr-1">Earned</span>
            <Image width="12" height="12" src="/ethereum-icon.svg" />
            <span className="">{proposal.claimable.substr(0, 7)}</span>
          </h3>
        </div>
        <img
          className="w-full flex-shrink-0 mx-auto "
          src={proposal.image}
          alt=""
        />
        <dl className="mt-2 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Owner Wallet Address</dt>
          <dd className="text-gray-500 text-xs truncate">
            Publisher {proposal.publisherAddress}
          </dd>
          <dt className="sr-only">Publish Date</dt>
          <dd className="text-gray-500 text-xs truncate">
            Published {moment(proposal.createdAt).fromNow()}
          </dd>
        </dl>
        <a
          style={{ fontSize: "clamp(0.7rem, 0.9vw, 1.4rem)" }}
          className={`mt-2 bg-prologe-primary text-white w-max px-2 py-1 block `}
          target="_blank"
          href={proposal.contentURI}
        >
          View Source
        </a>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200"></div>
      </div>
    </li>
  );
};
