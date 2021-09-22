import { Card } from "../components/Card";
import { Gradient } from "../components/Gradient";
import { Nav } from "../components/Nav";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { NoiseBackground } from "../components/NoiseBackground";

const Background = () => {
  return (
    <div className="fixed top-0 h-screen w-screen bg-prologe-white">
      <NoiseBackground />
    </div>
  );
};

const Calls = ({ call }) => {
  const title = "DAOs are the next big media companies but without an agenda.";
  const description = `Who gets to write and curate content has been controlled by wealthy patrons and media conglomerates.

  ** It's time for a change**: prologe will allow you to sponsor articles & ideas you want to see in the world and get a stake in their success.
  
  When people think of censorship, they often think about the information being banned. While this certainly is true, censorship also happens through the less visible act of not funding certain types of information.`;

  return (
    <>
      <NextSeo
        title={`${title} | prologe.press`}
        description={description}
        openGraph={{
          url: "https://prologe.press",
          title: `${title} | prologe.press`,
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

      <Background />
      <div className="relative h-full grid md:grid-cols-16 md:py-14 px-2 md:px-0">
        <div
          className={`md:col-start-2 md:col-end-4 py-8 md:py-0 px-6 md:px-0`}
        >
          <Link href="/">
            <a>
              <Nav />
            </a>
          </Link>
        </div>
        <div
          className={`md:col-start-5 md:col-end-15 px-0 md:px-8 md:row-start-1 `}
        >
          <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-max lg:max-w-7xl mx-auto">
              <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                <div className="text-base max-w-prose lg:max-w-none">
                  <h2 className="leading-6 text-prologe-primary font-semibold tracking-wide uppercase">
                    About
                  </h2>
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    DAOs are the next big media companies but without an agenda.
                  </p>
                </div>
              </div>
              <div className="relative">
                <svg
                  className="hidden color-prologe-light md:block absolute top-0 right-0 -mt-20 -mr-20"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-prologe-light"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
                  />
                </svg>

                <div className="relative md:bg-white md:p-6">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                    <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                      <p>
                        Who gets to write and curate content has been controlled
                        by wealthy patrons and media conglomerates.
                      </p>
                      <p>
                        <strong>It's time for a change</strong>: prologe will
                        allow you to sponsor articles & ideas you want to see in
                        the world and get a stake in their success.
                      </p>
                      <p>
                        When people think of censorship, they often think about
                        the information being banned. While this certainly is
                        true, censorship also happens through the less visible
                        act of not funding certain types of information.
                      </p>
                      <p>
                        Today, many writers are afraid to share their opinions
                        online for fear of prosecution. And, if you're a small
                        unknown writer, making money out of your writing is
                        downright impossible.
                      </p>
                    </div>
                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                      <blockquote>
                        Writers deserve fair <strong>compensation</strong> &amp;{" "}
                        <strong>protection</strong>.
                      </blockquote>
                      <blockquote>
                        Readers deserve to{" "}
                        <strong>earn a stake in the success</strong> of the
                        content they help finance. As well as the ability to
                        influence its direction - it's a multiplayer game.
                      </blockquote>
                      <p>So we set out to build a world where:</p>
                      <ul role="list">
                        <li data-line="0">
                          writers are <strong>protected</strong> because they're
                          funded pseudonymously{" "}
                        </li>
                        <li data-line="1">
                          writers are <strong>compensated fairly</strong>{" "}
                          because articles are judged based on quality - not
                          credentials{" "}
                        </li>
                        <li data-line="2">
                          readers get access to{" "}
                          <strong>more nuanced information sources</strong>{" "}
                          because content starts with reader demand
                        </li>
                        <li data-line="3">
                          readers get{" "}
                          <strong>stake in the content's success</strong> by
                          owning a share of the funded content
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 inline-flex rounded-md shadow">
                <a
                  target="_blank"
                  href="https://discord.gg/rf837mkdBW"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-prologe-primary hover:bg-indigo-700"
                >
                  Join our discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calls;
