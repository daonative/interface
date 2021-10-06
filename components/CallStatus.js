import { Card } from "./Card";
import { Header } from "./Header";
import { DateTime } from "luxon";
import { CheckCircleIcon } from "@heroicons/react/outline";

const Round = ({ name, start, end }) => {
  const completed = end < DateTime.now();
  const current = start < DateTime.now() && DateTime.now() < end;
  return (
    <li className="py-2">
      <div className="flex justify-between">
        <div className="flex items-center">
          {completed && (
            <span className="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
              <CheckCircleIcon
                className="h-full w-full text-indigo-600 group-hover:text-indigo-800"
                aria-hidden="true"
              />
            </span>
          )}
          {current && (
            <span
              className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="absolute h-4 w-4 rounded-full bg-indigo-200" />
              <span className="relative block w-2 h-2 bg-indigo-600 rounded-full" />
            </span>
          )}

          {!current && !completed && (
            <div
              className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400" />
            </div>
          )}
          <span className="ml-3 text-sm font-medium text-indigo-600">
            {name}
          </span>
        </div>
        <div className="prose prose-sm text-gray">
          <div>{`Start: ${start.toLocaleString()}`}</div>
          <div>{`End: ${end.toLocaleString()}`}</div>
        </div>
      </div>
    </li>
  );
};

export const CallStatus = ({ className, created, deadline }) => {
  if (!created) return null;
  if (!deadline) return null;
  return (
    <Card className={`${className}`}>
      <Header className="min-w-max max-w-full w-1/4 py-3">Status</Header>
      <div className="px-4 ">
        <nav className="flex " aria-label="Progress">
          <ol
            role="list"
            className="w-full divide-y divide-opacity-25 divide-prologe-primary"
          >
            <Round
              name={"Writing Round"}
              start={DateTime.fromISO(created)}
              end={DateTime.fromISO(deadline)}
            />
            <Round
              name={"Voting Round"}
              start={DateTime.fromISO(deadline)}
              end={DateTime.fromISO(deadline).plus({ days: 2 })}
            />
          </ol>
        </nav>
      </div>
    </Card>
  );
};
