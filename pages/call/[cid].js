import { Card } from "../../components/Card";
import { CallSummary } from "../../components/CallSummary";
import { AnswerList } from "../../components/AnswerList";
import { SubmitArticleForm } from "../../components/SubmitArticleForm";
import { CallDescription } from "../../components/CallDescription";
import { callForArticles } from "../../components/data/callList";
import { proposalList } from "../../components/data/proposalList";
import { SponsorList } from "../../components/SponsorList";
import { NextSeo } from "next-seo";
import { CallMeta } from "../../components/CallMeta";
import Link from "next/link";
import { Navigation } from "../../components/Navigation";
import { NoiseBackground } from "../../components/NoiseBackground";
import { getValueLocked } from "../../utils";

const Background = () => {
  return (
    <div className="fixed top-0 h-screen w-screen bg-prologe-white">
      <NoiseBackground />
    </div>
  );
};

const Calls = ({ call }) => {
  const cid = call?.id;
  const description = call?.description?.replace(/<[^>]*>?/gm, "");
  const isInThePast = (firstDate) => {
    const deadline = new Date(firstDate);
    return deadline.setHours(0, 0, 0, 0) <= new Date().setHours(0, 0, 0, 0);
  };

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

      <Background />
      <div className="relative h-full grid md:grid-cols-16 md:py-14 px-2 md:px-0">
        <div
          className={`md:col-start-2 md:col-end-5 py-8 md:py-0 px-6 md:px-0`}
        >
          <Link href="/">
            <a>
              <Navigation />
            </a>
          </Link>
        </div>
        <div
          className={`md:col-start-5 md:col-end-13 px-0 md:px-8 md:row-start-1 `}
        >
          <Card className="mb-3 ">
            <CallSummary
              title={call?.title}
              currency={call?.currency}
              valueLocked={getValueLocked(call?.sponsors)}
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
          {!isInThePast(call?.deadline) && (
            <SubmitArticleForm className="mb-3" id={cid} title={call?.title} />
          )}
          <CallMeta
            className="mb-3"
            abstractDeadline={call?.abstractDeadline}
            wordCount={call?.wordCount}
            sponsorsWillOwnSubmissions={call?.sponsorsWillOwnSubmissions}
          />

          <SponsorList className="mb-3" sponsors={call?.sponsors} />
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
