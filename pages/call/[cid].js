import { useRouter } from "next/dist/client/router";
import { Card } from "../../components/Card";
import { callForArticles } from "../../database";
import { Gradient } from "../../components/Gradient";
import { CallSummary } from "../../components/CallSummary";
import { AnswerList } from "../../components/AnswerList";
import { SubmitArticleForm } from "../../components/SubmitArticleForm";
import { CallDescription } from "../../components/CallDescription";
import { Nav } from "../../components/Nav";

const Background = () => {
  return (
    <div className="fixed top-0 h-screen w-screen">
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

const Calls = () => {
  const router = useRouter();
  const { cid } = router.query;
  const call = callForArticles.find((call) => call.id === cid);
  return (
    <div className="relative subpixel-antialiased bg-prologe-white">
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
          <Card className="mb-3">
            <CallSummary
              title={call?.title}
              valueLocked={call?.valueLocked}
              deadline={call?.deadline}
              cta={call?.cta}
            />
          </Card>
          <CallDescription className="mb-3" description={call?.description} />
          <AnswerList articles={call?.articles} />
        </div>
        <div className="md:col-start-13 md:col-end-17 px-0 md:px-8 ">
          <SubmitArticleForm className="mb-3" id={cid} title={call?.title} />
        </div>
      </div>
    </div>
  );
};

export default Calls;
