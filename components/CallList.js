import Link from "next/link";
import { Header } from "./Header";
import { Card } from "./Card";
import { CallSummary } from "./CallSummary";
import { callForArticles } from "./data/callList";
import { getValueLocked } from "../utils";
import { formatEther } from "@ethersproject/units";

export const CallList = () => {
  return (
    <div className="grid grid-cols-12 mt-6 md:mt-0 w-full pt-16 ">
      <div className="col-start-1 col-end-13 px-2 md:px-0 md:col-start-2 md:col-end-12 2xl:col-start-3 mb-4">
        <div className="mb-3 flex items-center gap-3">
          <Header>Latest calls for articles</Header>
        </div>
        <ul role="list ">
          {callForArticles.map((call) => {
            return (
              <Card
                key={call.id}
                className="mb-2 border-prologe border-prologe-primary border-opacity-25"
              >
                <Link href={`/call/${call.id}`}>
                  <li className="cursor-pointer">
                    <div>
                      <CallSummary
                        title={call.title}
                        currency={call.currency}
                        valueLocked={formatEther(
                          getValueLocked(call?.sponsors)
                        )}
                        deadline={call.deadline}
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
