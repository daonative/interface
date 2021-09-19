import Connect from "../../components/Connect";
import { NextSeo } from "next-seo";

import { NoiseBackground } from "../../components/NoiseBackground";
import { BountyCreator } from "../../components/BountyDashboard";
import CreateSteps from "../../components/Steps";
import { LandingNav } from "../../components/LandingNav";


const Background = () => {
  return (
    <div className="fixed top-0 h-screen w-screen bg-prologe-white">
      <NoiseBackground />

      <div
        className={`hidden lg:block h-screen border-r-prologe border-prologe-light border-opacity-50 fixed right-1/4 top-0`}
      ></div>
      <div
        className={`hidden lg:block h-screen border-r-prologe border-prologe-light border-opacity-50 fixed left-1/4 top-0`}
      ></div>
    </div>
  );
};

const Create = () => {
  const title = "Create a content bounty";
  const description = "Create a bounty";
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
            <CreateSteps />
            <BountyCreator />
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
