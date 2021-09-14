import { useRouter } from "next/dist/client/router";
import { Card } from "../../components/Card";
import { Gradient } from "../../components/Gradient";
import { CallSummary } from "../../components/CallSummary";
import { AnswerList } from "../../components/AnswerList";
import { SubmitArticleForm } from "../../components/SubmitArticleForm";
import { CallDescription } from "../../components/CallDescription";
import { Nav } from "../../components/Nav";
import { callForArticles } from "../../components/data/callList";
import { proposalList } from "../../components/data/proposalList";
import { SponsorList } from "../../components/SponsorList";
import { NextSeo } from "next-seo";
import { CallMeta } from "../../components/CallMeta";

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
  const cid = call?.id;
  const description = call?.description?.replace(/<[^>]*>?/gm, "");
  return (
    <>
      <NextSeo
        title={`${call?.title} | prologe.press`}
        description={description}
        openGraph={{
          url: "https://prologe.press",
          title: `${call?.title} | prologe.press`,
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
        <div className="relative h-full grid md:grid-cols-16 md:py-14 px-2 md:px-0">
          <div
            className={`md:col-start-1 md:col-end-5 py-8 md:py-0 px-6 md:px-0`}
          >
            <Nav />
          </div>
          <div
            className={`md:col-start-5 md:col-end-13 px-0 md:px-8 md:row-start-1 `}
          >
            <Card className="mb-3 border-prologe border-prologe-primary border-opacity-25">
              <CallSummary
                title={call?.title}
                valueLocked={call?.valueLocked}
                deadline={call?.deadline}
                cta={call?.cta}
              />
            </Card>

            <CallDescription className="mb-3" description={call?.description} />
            <AnswerList
              className="mb-3"
              articles={call?.proposals?.map(
                (proposalId) => proposalList?.[proposalId]
              )}
            />
          </div>
          <div className="md:col-start-13 md:col-end-17 px-0 md:px-8">
            <SubmitArticleForm className="mb-3" id={cid} title={call?.title} />
            <CallMeta
              className="mb-3"
              abstractDeadline={call?.abstractDeadline}
              wordCount={call?.wordCount}
            />

            <SponsorList className="mb-3" sponsors={call?.sponsors} />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const { cid } = params;
  const call = callForArticles.find((call) => call.id === cid);

  return {
    props: { call }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const callIds = callForArticles.map((call) => call.id);
  return {
    paths: callIds.map((callId) => ({
      params: {
        cid: callId,
      },
    })),
    fallback: false,
  };
}

export default Calls;
