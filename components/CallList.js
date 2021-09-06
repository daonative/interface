import Link from "next/link";
import { Header } from "./Header";
import { Card } from "./Card";
import { CallSummary } from "./CallSummary";
import { callForArticles } from "../data/callList";

export const CallList = () => {
  return (
    <div className="grid grid-cols-12 mt-6 md:mt-0 w-full pt-16 ">
      <div className="col-start-2 col-end-12 md:col-start-2 md:col-end-11 2xl:col-start-3 mb-4">
        <div className="mb-3 flex justify-between items-center">
          <Header>Latest calls for articles</Header>
        </div>
        <ul role="list ">
          {callForArticles.reverse().map((call) => {
            return (
              <Card
                key={call.id}
                className="mb-2 border-t-2 border-prologe-primary"
              >
                <Link href={`/call/${call.id}`}>
                  <li className="cursor-pointer">
                    <div>
                      <CallSummary
                        title={call.title}
                        valueLocked={call.valueLocked}
                        deadline={call.deadline}
                        cta={call.cta}
                      ></CallSummary>
                    </div>
                  </li>
                </Link>
              </Card>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
