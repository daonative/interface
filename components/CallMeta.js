import { Card } from "./Card";
import { Header } from "./Header";

const InfoTitle = ({ children, className }) => {
  return (
    <div className={`font-bold h-full flex items-center py-4 ${className}`}>
      {children}
    </div>
  );
};

const Deadline = ({ deadline }) => {
  if (!deadline) return null;

  return (
    <div className="h-full flex items-center justify-between px-4">
      <InfoTitle>Deadline for abstracts</InfoTitle>
      <div>{`${deadline.toDateString()}`}</div>
    </div>
  );
};

export const CallMeta = ({ abstractDeadline, wordCount, className }) => {
  if (!wordCount && !abstractDeadline) return null;
  return (
    <Card className={`${className}`}>
      <Header className="min-w-max max-w-full w-1/4 py-3">Extra info</Header>
      <div className="flex flex-col">
        <section className="divide-y divide-opacity-25 divide-prologe-primary">
          <Deadline deadline={new Date(abstractDeadline)} />
          <div className="h-full flex items-center justify-between px-4">
            <InfoTitle>Word count</InfoTitle>
            <div className="ml-3">{wordCount}</div>
          </div>
        </section>
      </div>
    </Card>
  );
};
