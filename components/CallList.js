import { callForArticles } from "../database";
import Link from "next/link";
import { Header } from "./Header";
import { Card } from "./Card";
import { CallSummary } from "./CallSummary";

export const CallList = () => {
  return (
    <div className="grid grid-cols-12 mt-6 md:mt-0 w-full pt-16 ">
      <div className="col-start-2 col-end-12 md:col-start-2 md:col-end-11 2xl:col-start-3 mb-4">
        <div className="mb-3 flex justify-between items-center">
          <Header>Latest calls for articles</Header>
        </div>
        <Card>
          <ul role="list " className=" divide-y-2 divide-prologe-primary">
            {callForArticles.reverse().map((call) => {
              return (
                <Link key={call.id} href={`/call/${call.id}`}>
                  <li className="cursor-pointer">
                    <div className="mt-3 mb-3">
                      <CallSummary
                        title={call.title}
                        valueLocked={call.valueLocked}
                        deadline={call.deadline}
                        cta={call.cta}
                      ></CallSummary>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </Card>
      </div>
    </div>
  );
};
