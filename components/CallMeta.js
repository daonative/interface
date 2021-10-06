import { Card } from "./Card";
import { Header } from "./Header";

const InfoTitle = ({ children, className }) => {
  return (
    <div className={`font-bold flex items-center py-4 ${className}`}>
      {children}
    </div>
  );
};

const Deadline = ({ deadline }) => {
  if (!deadline) return null;

  return (
    <div className="flex items-center justify-between px-4">
      <InfoTitle>Deadline for abstracts</InfoTitle>
      <div>{`${deadline.toDateString()}`}</div>
    </div>
  );
};

export const CallMeta = ({
  abstractDeadline,
  wordCount,
  sponsorsWillOwnSubmissions,
  className,
}) => {
  if (!wordCount && !abstractDeadline) return null;
  console.log(wordCount)
  return (
    <Card >
      <Header className="min-w-max max-w-full w-1/4 py-3">Extra info</Header>
      <div className="flex flex-col text-sm">
        <section className="divide-y divide-opacity-25 divide-prologe-primary ">
          <Deadline deadline={new Date(abstractDeadline)} />
          <div className="flex items-center justify-between px-4">
            <InfoTitle>Word count</InfoTitle>
            <div className="ml-3">{wordCount}</div>
          </div>
          {sponsorsWillOwnSubmissions && (
            <div className="py-4 px-4">
              The sponsor of this call will own all the rights to the submitted
              articles.
            </div>
          )}
        </section>
      </div>
    </Card>
  );
};
