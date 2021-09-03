import Head from "next/head";
import { Gradient } from "../components/Gradient";
import { AnimatedLogo } from "../components/AnimatedLogo";

import { CallList } from "../components/CallList";
import { Headline } from "../components/Headline";

const LandingNav = () => (
  <nav>
    <div className="flex justify-between items-center">
      <AnimatedLogo />
    </div>
  </nav>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>prologe.press | Invest in crypto content</title>
      </Head>
      <div className="relative subpixel-antialiased ">
        {
          // LeftPane
        }
        <section className=" h-full  md:fixed md:max-w-1/2 z-20 bg-prologe-white">
          <div className="absolute w-full h-full ">
            <Gradient />
          </div>

          <div className="relative h-full grid md:grid-cols-12">
            <div
              className={`md:col-start-2 md:col-end-12 h-full pt-3 py-6 md:py-14 px-8 md:px-0 magic-grid `}
            >
              <LandingNav />
              <Headline />
            </div>
          </div>
        </section>
        {
          // Right Pane
        }
        <section className="md:max-w-1/2 md:ml-auto flex justify-center z-60 md:min-h-full overflow-auto bg-prologe-white ">
          <CallList />
        </section>
      </div>
    </>
  );
}
