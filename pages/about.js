import { Card } from "../components/Card";
import { Gradient } from "../components/Gradient";
import { Nav } from "../components/Nav";
import { NextSeo } from "next-seo";
import Link from "next/link";

const Background = () => {
  return (
    <div className="fixed top-0 h-screen w-screen bg-prologe-white">
      <Gradient />
      <div
        className={`hidden lg:block h-screen border-r-prologe border-prologe-primary border-opacity-25 fixed right-1/4 top-0`}
      ></div>
      <div
        className={`hidden lg:block h-screen border-r-prologe border-prologe-primary border-opacity-25 fixed left-1/4 top-0`}
      ></div>
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
          className={`md:col-start-2 md:col-end-5 py-8 md:py-0 px-6 md:px-0`}
        >
          <Link href="/">
            <Nav />
          </Link>
        </div>
        <div
          className={`md:col-start-6 md:col-end-12 px-0 md:px-8 md:row-start-1 `}
        >
          <div>
            <div></div>
            <div>
              <h2>
                DAOs are the next big media companies but without an agenda.
              </h2>
            </div>
            <div>
              <p>
                Who gets to write and curate content has been controlled by
                wealthy patrons and media conglomerates.
              </p>
            </div>
            <div>
              <p>
                <strong> It's time for a change</strong>: prologe will allow you
                to sponsor articles &amp; ideas you want to see in the world and
                get a stake in their success.
              </p>
            </div>
            <div>
              <p>
                When people think of censorship, they often think about the
                information being banned. While this certainly is true,
                censorship also happens through the less visible act of not
                funding certain types of information.
              </p>
            </div>
            <div>
              <p>
                Today, many writers are afraid to share their opinions online
                for fear of prosecution. And, if you're a small unknown writer,
                making money out of your writing is downright impossible.
              </p>
            </div>
            <div>
              <p>
                The old-school media companies generate outsized returns for
                their moguls, but readers who are financing it get nothing in
                return - well, almost nothing. They get to read the monolithic
                thinking that these corporations are so good at churning out.
              </p>
            </div>
            <div>
              <blockquote>
                <p>
                  {" "}
                  DAOs are the next big media companies but without an agenda.
                </p>
              </blockquote>
            </div>
            <div>
              <p>
                Writers deserve fair <strong>compensation</strong> &amp;{" "}
                <strong>protection</strong>. Readers deserve to{" "}
                <strong>earn a stake in the success</strong> of the content they
                help finance. As well as the ability to influence its direction
                - it's a multiplayer game.
              </p>
            </div>
            <div>
              <p>So we set out to build a world where:</p>
            </div>
            <div>
              <ul>
                <li data-line="0">
                  writers are <strong>protected</strong> because they're funded
                  pseudonymously{" "}
                </li>
                <li data-line="1">
                  writers are <strong>compensated fairly</strong> because
                  articles are judged based on quality - not credentials{" "}
                </li>
                <li data-line="2">
                  readers get access to{" "}
                  <strong>more nuanced information sources</strong> because
                  content starts with reader demand
                </li>
                <li data-line="3">
                  readers get <strong>stake in the content's success</strong> by
                  owning a share of the funded content
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calls;
