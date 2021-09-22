import { Nav } from "../../components/Nav";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { NoiseBackground } from "../../components/NoiseBackground";
import { useRouter } from "next/router";
import { Navigation } from "../../components/Navigation";

const Background = () => {
  return (
    <div className="fixed top-0 h-screen w-screen bg-prologe-white">
      <NoiseBackground />
    </div>
  );
};

const Calls = () => {
  const title = "Writer profile";
  const description = "";
  const { params } = useRouter();

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
          <Navigation />
        </div>
        <div
          className={`md:col-start-5 md:col-end-15 px-0 md:px-8 md:row-start-1 `}
        >
          <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-max lg:max-w-7xl mx-auto">
              <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                <div className="text-base max-w-prose lg:max-w-none">
                  <h2 className="leading-6 text-prologe-primary font-semibold tracking-wide uppercase">
                    Writer Profile
                  </h2>
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Validated
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
                  <div className="lg:grid lg:grid-cols-2 lg:gap-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calls;
