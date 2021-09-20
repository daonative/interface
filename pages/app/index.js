import { NextSeo } from "next-seo";
import { NoiseBackground } from "../../components/NoiseBackground";
import Link from "next/link";
import { StyledMain } from "../../components/StyledMain";
import Button from "../../components/Button";
import styled from "styled-components";
import { LandingNav } from "../../components/LandingNav";
import A from "../../components/A";

const H1 = styled.h1`
  font-family: "Space Grotesk";
  font-weight: 800;
  font-size: clamp(2.2rem, 5.2vw, 4rem);
`;

const H2 = styled.h2`
  font-size: clamp(1rem, 1.3vw, 3.1rem);
`;

export const Headline = ({ className }) => {
  return (
    <StyledMain className={className}>
      <main className="mt-auto md:mt-0">
        <H1 className="mb-6">
          Invest in content
          <br />& get a stake in its success
          <span className="text-sm absolute text-red-500 font-normal">
            testnet
          </span>
        </H1>
        <H2 className="text-gray-700 mb-3">
          Who gets to write and curate content has been controlled by wealthy
          patrons and media conglomerates.
        </H2>
        <H2>
          <span className="font-bold">It’s time for a change:</span> sponsor
          articles & ideas you want to see in the world and get a stake in their
          success.
        </H2>
        <div className="flex flex-wrap">
          <Link href="/app/create">
            <Button className="mt-6">Create a bounty</Button>
          </Link>
          <Link href="/app/bounty/0x7ddCeaFA32393184464cd5fa245339da168633b8">
            <Button className="mt-6 ml-3" variant="outline">
              Example Bounty
            </Button>
          </Link>
        </div>
      </main>
    </StyledMain>
  );
};

function App() {
  return (
    <>
      <NextSeo
        title="prologe.press | Invest in content"
        description="Invest in content and get a stake in the content's success"
      />
      <div className="relative subpixel-antialiased ">
        <NoiseBackground />
        <div className="relative h-full grid md:grid-cols-16 py-6 md:py-14 ">
          <div className="md:col-start-4 md:col-end-14">
            <div className="flex items-center justify-between">
              <LandingNav />
              <A
                className="bluebar md:hidden"
                target="_blank"
                href="https://discord.gg/rf837mkdBW"
              >
                join our discord
              </A>
            </div>
          </div>
          <div className={`md:col-start-4 md:col-end-14 py-2 px-0 row-start-2`}>
            <Headline />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
