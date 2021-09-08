import Head from "next/head";
import Link from "next/link";
import { Gradient } from "../components/Gradient";
import { AnimatedLogo } from "../components/AnimatedLogo";

import { StyledMain } from "../components/StyledMain";
import Button from "../components/Button";
import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Space Grotesk";
  font-weight: 800;
  font-size: clamp(2.2rem, 5.2vw, 6rem);
`;

const H2 = styled.h2`
  font-size: clamp(1rem, 2vw, 4.1rem);
`;

export const Headline = () => {
  return (
    <StyledMain>
      <main className="mt-auto md:mt-0">
        <H1 className="mb-6">
          Get access to the best content for your company
          <br />
        </H1>
        <H2 className="text-gray-700">
          The place for your content bounties. We're building a community that
          gives you access to the best writers in crypto.
        </H2>
        <div className="flex">
          <a target="_blank" href="https://discord.gg/zGk5TSSyjX">
            <Button className="mt-6">Get in touch through discord</Button>
          </a>
          <Link href="/">
            <a>
              <Button type="outline" className="mt-6 ml-3">
                Check existing content bounties
              </Button>
            </a>
          </Link>
        </div>
      </main>
    </StyledMain>
  );
};

const LandingNav = () => (
  <nav>
    <div className="flex justify-between items-center">
      <AnimatedLogo />
    </div>
  </nav>
);

export default function Companies() {
  return (
    <>
      <Head>
        <title>prologe.press | Easy crypto content bounties</title>
      </Head>
      <div className="relative subpixel-antialiased ">
        {
          // LeftPane
        }
        <section className="h-full w-full z-20 ">
          <div className="absolute w-full h-full ">
            <Gradient />
          </div>

          <div className="relative h-full grid md:grid-cols-12">
            <div
              className={`md:col-start-3 md:col-end-11 h-full pt-3 py-6 md:py-14 px-8 md:px-0 magic-grid`}
            >
              <LandingNav />
              <Headline />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
