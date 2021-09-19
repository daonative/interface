import { useWeb3React } from "@web3-react/core";
import { ethers, providers } from "ethers";
import Button from "./Button";
import { useEffect, useState } from "react";
import bountyCreatorAbi from "../abi/bountyCreator.json";
import { Card } from "./Card";
import { Header } from "./Header";
import { Input } from "./Input";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import { TransactionModal } from "./TransactionModal";
import { useRouter } from "next/router";
import { Loader } from "./Loader";
import { DateTime } from "luxon";
const { BOUNTY_CREATOR_ADDRESS } = process.env;

export const BountyList = () => {
  const [bounties, setBounties] = useState([]);
  const { library } = useWeb3React();

  const getBounties = async () => {
    const alchemyApiKey = process.env.INFURA_API_KEY;
    const url = `https://ropsten.infura.io/v3/${alchemyApiKey}`;
    const provider = new ethers.providers.JsonRpcProvider(url);
    const bountyCreator = new ethers.Contract(
      BOUNTY_CREATOR_ADDRESS,
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
        {bounties.map((bounty) => (
          <Link key={bounty} href={`/app/${bounty}`}>
            <a className="block text-prologe-primary">{bounty}</a>
          </Link>
        ))}
      </div>
    </Card>
  );
};
function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export const BountyCreator = () => {
  const { library, account } = useWeb3React();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm();
  const router = useRouter();
  const [txModalOpen, setTxModalOpen] = useState(false);
  const [bountyAddress, setBountyAddress] = useState("");
  const [bountyLoading, setBountyLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (!bountyAddress) return;
    router.push(`/app/${bountyAddress}`);
  }, [bountyAddress]);

  const createBounty = async ({ title, deadline }) => {
    const bountyCreator = new ethers.Contract(
      BOUNTY_CREATOR_ADDRESS,
      bountyCreatorAbi,
      library.getSigner(account)
    );

    const result = await axios.post("/api/ipfs", {
      title,
      description: "",
      deadline,
    });
    setBountyLoading(true);
    bountyCreator.on("BountyCreated", (event) => {
      setBountyAddress(event);
      setBountyLoading(false);
    });

    return await bountyCreator.createBounty(result.data.path);
  };

  const onSubmit = async (data) => {
    event.preventDefault();
    setError(undefined);
    setTxModalOpen(true);
    try {
      const tx = await createBounty(data);
      await tx.wait(1);
    } catch (e) {
      console.error(e);
      setError(e);
      setBountyLoading(false);
    } finally {
    }
  };
  const handleClose = () => {
    setError(undefined);
    setTxModalOpen(false);
  };
  return (
    <>
      <TransactionModal
        isOpen={txModalOpen}
        isLoading={isSubmitting}
        error={!!error}
        errorMessage={error?.message}
        confirmed={isSubmitSuccessful}
        message={isSubmitting && `Confirm this transaction in your wallet`}
        onClose={handleClose}
      />
      <Card className="mt-3">
        {bountyLoading ? (
          <div className="flex h-full flex-col justify-center items-center">
            <Loader className="h-60 w-60" />
            <h3 className="text-lg font-medium leading-6 text-gray-900 mt-5">
              Bounty Creation
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Your bounty is being created. This can last up to 5 min.
              </p>
            </div>
          </div>
        ) : (
          <>
            <Header className="min-w-max max-w-full w-1/4 py-3">
              Content Bounty Form
            </Header>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="h-full flex flex-col justify-between"
            >
              <div className="p-4">
                <Input
                  type="text"
                  label="Title"
                  {...register("title", { required: true })}
                />
                <Input
                  type="date"
                  label="Deadline"
                  defaultValue={formatDate(DateTime.local().plus({ days: 1 }))}
                  min={formatDate(DateTime.local().plus({ days: 1 }))}
                  {...register("deadline", { required: true })}
                />
              </div>
              {account && (
                <Button type="submit" value="Submit">
                  Create Bounty
                </Button>
              )}
            </form>
          </>
        )}
      </Card>
    </>
  );
};
