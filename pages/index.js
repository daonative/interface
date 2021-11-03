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
        prologe.press is now <a className="underline bluebar" href="https://newsroom.xyz">newsroom</a>
        <br />
      </H1>
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
      <section className="h-full w-full md:fixed z-20 overflow-hidden relative">
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
    </>
  );
}
