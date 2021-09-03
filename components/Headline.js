import Button from "./Button";
import Link from "next/link";
import styled from "styled-components";

export const StyledMain = styled.main`
  opacity: 0;
  animation-duration: 3s;
  animation-name: fadein;
  animation-fill-mode: forwards;
  @keyframes fadein {
    to {
      opacity: 1;
    }
  }
`;

export const Headline = () => {
  return (
    <StyledMain>
      <main className="m-auto md:mt-0">
        <div>
          <h1
            className="mb-6"
            style={{ fontFamily: "Space Grotesk", fontWeight: 600 }}
          >
            Get paid to write about crypto
            <span className="text-sm absolute text-red-500 font-normal">
              closed beta
            </span>
            <br />
          </h1>
          <h2>Let's change the way information gets funded.</h2>
          <h2 className="mt-2 mb-4">
            We're currently operating in closed beta. Join our discord to learn
            more.
          </h2>
          <h2>
            <span style={{ fontFamily: "Archivo" }} className="font-bold mb-2">
              {`How it works`}
            </span>
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
          </h2>
        </div>
        <div className="flex">
          <a target="_blank" href="https://discord.gg/zGk5TSSyjX">
            <Button className="mt-6">Get Early Access</Button>
          </a>
          <Link href="/faq">
            <a>
              <Button type="outline" className="mt-6 ml-3">
                FAQ
              </Button>
            </a>
          </Link>
        </div>
      </main>
    </StyledMain>
  );
};
