import Link from "next/link";
import { Gradient } from "../components/Gradient";
import { AnimatedLogo } from "../components/AnimatedLogo";
import styled from "styled-components";

import { CallList } from "../components/CallList";
import { StyledMain } from "../components/StyledMain";
import Button from "../components/Button";
import { NextSeo } from "next-seo";
import { NoiseBackground } from "../components/NoiseBackground";
import { Navigation } from "../components/Navigation";

const H1 = styled.h1`
  font-family: "Space Grotesk";
  line-height: 100%;
  font-size: clamp(2.2rem, 4.9vw, 6rem);
`;

const H2 = styled.h2`
  font-size: clamp(1rem, 1.1vw, 2.1rem);
  font-family: Archivo;
`;

export const Headline = () => {
  return (
    <StyledMain>
      <H1
        className="mb-6"
        style={{ fontFamily: "Space Grotesk", fontWeight: 600 }}
      >
        Get paid to write about crypto
        <span className="text-sm absolute text-red-500 font-normal">
          closed beta
        </span>
        <br />
      </H1>
      <H2 className="mb-2">Let's change the way information gets funded.</H2>
      <H2>
        <span className="font-bold mb-2">{`How it works`}</span>
        <ol className="list-decimal list-inside">
          <>
            <li>Browse calls for articles</li>
            <li>
              Publish it on <i>any</i> platform
            </li>
            <li>Submit a link to your article on prologe</li>
            <li>Earn crypto proportional to votes and locked value </li>
          </>
        </ol>
      </H2>
      <div className="flex">
        <a target="_blank" href="https://discord.gg/zGk5TSSyjX">
          <Button className="mt-6">Get Early Access</Button>
        </a>
        <Link href="/faq">
          <a>
            <Button variant="outline" className="mt-6 ml-3">
              FAQ
            </Button>
          </a>
        </Link>
      </div>
    </StyledMain>
  );
};

export default function Home() {
  return (
    <>
      <NextSeo
        title="prologe.press | Get paid to write about crypto"
        description="Complete content bounties about crypto to earn crypto."
      />
      {
        // LeftPane
      }
      <section className="h-full md:fixed md:max-w-1/2 z-20 overflow-hidden relative">
        <Gradient />

        <div className="relative h-full grid md:grid-cols-12">
          <div
            className={`md:col-start-2 md:col-end-12 h-full pt-3 py-6 md:py-6 md:py-14 px-4 md:px-0 `}
          >
            <Navigation />
            <div className="h-full flex items-center">
              <Headline />
            </div>
          </div>
        </div>
      </section>
      {
        // Right Pane
      }
      <section className="md:max-w-1/2 md:ml-auto flex justify-center z-60 md:min-h-full overflow-auto bg-prologe-white ">
        <CallList />
      </section>
    </>
  );
}
