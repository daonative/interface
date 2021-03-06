import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import Button from "./Button";
import { useState } from "react";
import bountyAbi from "../abi/bounty.json";
import { Card } from "./Card";
import { Header } from "./Header";
import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { Loader } from "./Loader";
import { formatEther, parseEther } from "@ethersproject/units";
import { TransactionModal } from "./TransactionModal";
import { useInterval } from "./hooks";
import Image from "next/image";

const DepositForm = ({ bountyAddress }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm();
  const { library, account } = useWeb3React();
  const [txModalOpen, setTxModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const deposit = async (depositAmount) => {
    const bounty = new ethers.Contract(
      bountyAddress,
      bountyAbi,
      library.getSigner(account)
    );
    const wei = parseEther(depositAmount);
    return await bounty.deposit({ value: wei });
  };
  const onSubmit = async (data) => {
    setTxModalOpen(true);
    try {
      const tx = await deposit(data.depositAmount);
      await tx.wait(1);
    } catch (e) {
      setError(e);
    }
  };
  const handleClose = () => {
    setTxModalOpen(false);
    setError(false);
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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between h-full p-4"
      >
        <Input
          label="Add funds"
          type="text"
          placeholder="0.5"
          {...register("depositAmount", { required: true })}
        />

        <Button className="self-end" type="submit">
          Fund
        </Button>
      </form>
    </>
  );
};

const ETH = ({ amount }) => (
  <div className="flex">
    <Image width="12" height="12" src="/ethereum-icon.svg" />
    <div>{amount}</div>
  </div>
);

const WithdrawForm = ({ bountyAddress }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm();
  const { library, account } = useWeb3React();
  const [txModalOpen, setTxModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const [myDeposit, setMyDeposit] = useState("0");
  const getDeposit = async (id) => {
    const bounty = new ethers.Contract(
      id,
      bountyAbi,
      library.getSigner(account)
    );
    const myDeposit = await bounty.getDeposit();
    setMyDeposit(myDeposit);
  };

  useInterval(() => {
    if (!bountyAddress) return;
    if (!account) return;
    getDeposit(bountyAddress);
  }, 3000);

  const onSubmit = async (data) => {
    setTxModalOpen(true);
    try {
      const tx = await withdraw(data.amount);
      await tx.wait(1);
    } catch (e) {
      setError(e);
    }
  };
  const handleClose = () => {
    setTxModalOpen(false);
    setError(false);
  };

  const withdraw = async (amount) => {
    setTxModalOpen(true);
    const bounty = new ethers.Contract(
      bountyAddress,
      bountyAbi,
      library.getSigner(account)
    );
    const wei = parseEther(amount);
    const tx = await bounty.withdraw(wei);
    return tx;
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between h-full p-4"
      >
        <Input
          label={
            <div className="mb-3 flex">
              <div className="mr-1">Claim up to</div>{" "}
              <ETH amount={formatEther(myDeposit)} />
            </div>
          }
          type="text"
          placeholder="0.5"
          {...register("amount", { required: true })}
        />
        <Button className="self-end" type="submit">
          Claim
        </Button>
      </form>
    </>
  );
};

const AnswerForm = ({ bountyAddress }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm();
  const { library, account } = useWeb3React();
  const [txModalOpen, setTxModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const onSubmit = async (data) => {
    setTxModalOpen(true);
    try {
      const tx = await submitAnswer(data.articleURI);
      await tx.wait(1);
    } catch (e) {
      setError(e);
    }
  };
  const handleClose = () => {
    setTxModalOpen(false);
    setError(false);
  };

  const submitAnswer = async (articleURI) => {
    setTxModalOpen(true);
    const bounty = new ethers.Contract(
      bountyAddress,
      bountyAbi,
      library.getSigner(account)
    );
    const tx = await bounty.submitAnswer(articleURI);
    return tx;
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between h-full p-4"
      >
        <Input
          label="Article Link"
          type="url"
          placeholder="Enter the link to your article"
          pattern="https://.*"
          {...register("articleURI", { required: true })}
        />

        <Button className="self-end" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export const Bounty = ({ bountyAddress, loading = false }) => {
  if (loading) {
    return (
      <Card className="flex justify-center items-center">
        <Loader className="h-60 w-60" />
        <h3 className="text-lg font-medium leading-6 text-gray-900 mt-5">
          Creating Contract
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your bounty is being created. This can last up to 5 min.
          </p>
        </div>
      </Card>
    );
  }

  if (!bountyAddress) return null;
  return (
    <div className="flex flex-col gap-3">
      <Card>
        <Header className="min-w-max max-w-full w-1/4 py-3">Fund</Header>
        <DepositForm bountyAddress={bountyAddress} />
      </Card>
      <Card>
        <Header className="min-w-max max-w-full w-1/4 py-3">Claim</Header>
        <WithdrawForm bountyAddress={bountyAddress} />
      </Card>
      <Card>
        <Header className="min-w-max max-w-full w-1/4 py-3">Submit</Header>
        <AnswerForm bountyAddress={bountyAddress} />
      </Card>
    </div>
  );
};
