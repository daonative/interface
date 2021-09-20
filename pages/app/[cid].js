import { Card } from "../../components/Card";
import { CallSummary } from "../../components/CallSummary";
import { CallDescription } from "../../components/CallDescription";
import { Bounty } from "../../components/Bounty";
import { SponsorList } from "../../components/SponsorList";
import Connect from "../../components/Connect";
import { NextSeo } from "next-seo";
import { CallMeta } from "../../components/CallMeta";
import bountyAbi from "../../abi/bounty.json";
import { ethers } from "ethers";
import axios from "axios";
import { useState } from "react";
import { useInterval } from "../../components/hooks";
import { formatEther, parseEther } from "@ethersproject/units";
import { Header } from "../../components/Header";
import Image from "next/image";
import moment from "moment";
import { useForm } from "react-hook-form";
import { useWeb3React } from "@web3-react/core";
import { TransactionModal } from "../../components/TransactionModal";
import { Input } from "../../components/Input";
import { Loader } from "../../components/Loader";
import { Background } from "../../components/Background";
import { LandingNav } from "../../components/LandingNav";

const VotingForm = ({ bountyAddress, answerId }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm();

  const { library, account } = useWeb3React();
  const [txModalOpen, setTxModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const vote = async (amount) => {
    const bounty = new ethers.Contract(
      bountyAddress,
      bountyAbi,
      library.getSigner(account)
    );
    const myDeposit = await bounty.getDeposit();
    const votingAmount = myDeposit.mul(amount).div(100);

    return await bounty.vote(answerId, votingAmount);
  };
  const onSubmit = async (data) => {
    setTxModalOpen(true);
    try {
      const tx = await vote(data.amount);
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            label="Vote"
            type="text"
            placeholder="10%"
            min="1"
            max="100"
            {...register("amount", { required: true })}
          />
        </div>
        <button
          style={{ fontSize: "clamp(0.7rem, 0.9vw, 1.4rem)" }}
          className={`mt-2 bg-prologe-primary text-white w-full px-2 py-1 block`}
        >
          Vote
        </button>
      </form>
    </>
  );
};

const Answer = ({ answer, id, bountyAddress }) => {
  if (!answer) return null;
  return (
    <li
      className="flex flex-col bg-white rounded-lg  border-gray-200 "
      style={{ borderWidth: 0.2, maxWidth: 200 }}
    >
      <div className="flex-1 flex flex-col px-2 pt-1 pb-6">
        <div className="flex justify-between mb-2">
          <h3 className="text-gray-400 text-xs font-medium truncate">
            <Image width="12" height="12" src="/ethereum-icon.svg" />
            <span className="ml-1">{answer?.claimable?.substr(0, 7)}</span>
          </h3>
          <h3 className="text-gray-400 text-xs font-medium">
            {`${answer.id.substring(0, 6)}...${answer.id.substring(
              answer.id.length - 4
            )}`}
          </h3>
        </div>
        <Image
          className="self-center"
          src={"/prologepinktile.png"}
          alt="Answer Image"
          layout="fixed"
          width="160"
          height="180"
        />

        <img
          className="w-full flex-shrink-0 mx-auto "
          src={answer?.image}
          alt=""
        />
        <dl className="mt-2 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Owner Wallet Address</dt>
          <dd className="text-gray-500 text-xs truncate">
            Publisher {answer?.creator}
          </dd>
          <dt className="sr-only">Publish Date</dt>
          <dd className="text-gray-500 text-xs truncate">
            Published {moment(answer?.createdAt).fromNow()}
          </dd>
        </dl>
        <a
          style={{ fontSize: "clamp(0.7rem, 0.9vw, 1.4rem)" }}
          className={`mt-2 bg-prologe-primary text-white w-max px-2 py-1 block mb-3`}
          target="_blank"
          href={answer?.uri}
        >
          View Source
        </a>
        <VotingForm bountyAddress={bountyAddress} answerId={answer.id} />
      </div>
    </li>
  );
};

const AnswerList = ({ className, bountyAddress }) => {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAnswers = async (id) => {
    const alchemyApiKey = process.env.INFURA_API_KEY;
    const url = `https://ropsten.infura.io/v3/${alchemyApiKey}`;
    const provider = new ethers.providers.JsonRpcProvider(url);
    const bounty = new ethers.Contract(id, bountyAbi, provider);
    const answers = await bounty.getAnswers();
    setAnswers(answers);
    setLoading(false);
  };

  useInterval(() => {
    if (!bountyAddress) return;
    getAnswers(bountyAddress);
  }, 3000);
  const hasAnswers = answers?.length > 0;
  if (loading) {
    return (
      <Card className={`px-4 md:px-8 pt-5 py-5 ${className} `}>
        <Header className="absolute top-0 left-0 min-w-max w-1/4 py-3">
          Answers
        </Header>
        <div className="flex items-center justify-center">
          <Loader className="h-30 w-30" />
        </div>
      </Card>
    );
  }
  return (
    <Card className={`px-4 pt-5 py-5 ${className} `}>
      <Header className="absolute top-0 left-0 min-w-max w-1/4 py-3">
        Answers
      </Header>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-10"
      >
        {hasAnswers ? (
          answers.map((answer) => {
            return (
              <Answer
                key={answer.id}
                answer={answer}
                bountyAddress={bountyAddress}
              />
            );
          })
        ) : (
          <div>No answers at the moment</div>
        )}
      </ul>
    </Card>
  );
};

const ValueLocked = ({ bountyAddress }) => {
  const [balance, setBalance] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const getBalance = async (id) => {
    const alchemyApiKey = process.env.INFURA_API_KEY;
    const url = `https://ropsten.infura.io/v3/${alchemyApiKey}`;
    const provider = new ethers.providers.JsonRpcProvider(url);
    const balance = await provider.getBalance(id);
    setBalance(formatEther(balance.toString()));
    setLoading(false);
  };
  useInterval(() => {
    if (!bountyAddress) return;
    getBalance(bountyAddress);
  }, 3000);
  if (loading) return <Loader className="h-3 w-3" />;

  return balance;
};

const Calls = ({ call, bountyAddress }) => {
  const cid = bountyAddress;
  const description = call?.title;
  return (
    <>
      <NextSeo
        title={`${call?.title} | prologe.press`}
        description={description}
        openGraph={{
          url: "https://prologe.press",
          title: `${call?.title} | prologe.press`,
          description: description,
          images: [
            {
              url: "https://prologe.press/prologe-seo.png",
              alt: "prologe.press logo",
            },
          ],
          site_name: "prologe.press",
        }}
        twitter={{
          handle: "@prologe_press",
          cardType: "summary_large_image",
        }}
      />

      <div className="relative subpixel-antialiased ">
        <Background />
        <div className="relative h-full grid md:grid-cols-16 md:px-0">
          <div
            className={`md:row-start-1 md:col-start-1 md:col-end-4 py-4 flex justify-between`}
          >
            <div
              className={`border-b-prologe border-prologe-light border-opacity-75 md:fixed h-30 w-1/4`}
            >
              <div className="p-4 md:pl-8">
                <LandingNav />
                <Connect />
              </div>
            </div>
          </div>
          <div
            className={`md:col-start-5 md:col-end-13 py-2 px-0 px-2 md:px-8 `}
          >
            <Card className="mb-3 border-prologe border-prologe-primary border-opacity-25">
              <CallSummary
                title={call?.title}
                valueLocked={<ValueLocked bountyAddress={cid} />}
                deadline={call?.deadline}
                cta={call?.cta}
              />
            </Card>

            <CallDescription className="mb-3" description={call?.description} />
            <AnswerList className="mb-3" bountyAddress={cid} />
          </div>
          <div className="md:col-start-13 md:col-end-17 py-2 px-0 md:px-8">
            <Bounty bountyAddress={cid} />
            <CallMeta
              className="mb-3"
              abstractDeadline={call?.abstractDeadline}
              wordCount={call?.wordCount}
            />

            {call?.sponsors?.length > 0 && (
              <SponsorList className="mb-3" sponsors={call?.sponsors} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const alchemyApiKey = process.env.INFURA_API_KEY;
  const url = `https://ropsten.infura.io/v3/${alchemyApiKey}`;
  const provider = new ethers.providers.JsonRpcProvider(url);

  const bounty = new ethers.Contract(context.params.cid, bountyAbi, provider);
  const uri = await bounty.getURI();

  const result = await axios.get(`https://ipfs.io/ipfs/${uri}`);

  return {
    props: {
      call: result.data,
      bountyAddress: context.params.cid,
    },
  };
}

export default Calls;
