import Link from "next/link";

import { StyledMain } from "../components/StyledMain";
import Button from "../components/Button";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import { NoiseBackground } from "../components/NoiseBackground";
import { Navigation } from "../components/Navigation";

const H1 = styled.h1`
  font-family: "Space Grotesk";
  font-weight: 800;
  font-size: clamp(2.2rem, 5.2vw, 6rem);
`;

const H2 = styled.h2`
  font-size: clamp(1rem, 2vw, 4.1rem);
`;

export const Headline = ({ className }) => {
  return (
    <StyledMain className={className}>
      <main className="mt-auto md:mt-0">
        <H1 className="mb-6">
          Get access to the best content for your company
          <br />
        </H1>
        <H2 className="text-gray-700">
          The place for your content bounties. We're building a community that
          gives you access to the best writers in crypto.
        </H2>
        <div className="flex flex-wrap">
          <a target="_blank" href="https://discord.gg/zGk5TSSyjX">
            <Button className="mt-6">Get in touch through discord</Button>
          </a>
          <Link href="/">
            <a>
              <Button variant="outline" className="mt-6 md:ml-3">
                Check existing content bounties
              </Button>
            </a>
          </Link>
        </div>
      </main>
    </StyledMain>
  );
};

export default function Companies() {
  return (
    <>
      <NextSeo
        title="prologe.press | Content bounties made easy"
        description="Get the word out about your product using content bounties"
      />
      <div className="relative subpixel-antialiased ">
        <NoiseBackground />
        {
          // LeftPane
        }
        <div className="relative h-full grid md:grid-cols-16 py-6 md:py-14 ">
          <div
            className={`md:col-start-3 md:col-end-15 h-full px-8 md:px-0 magic-grid`}
          >
            <Navigation />
            <Headline />
          </div>
        </div>
      </div>
    </>
  );
}
