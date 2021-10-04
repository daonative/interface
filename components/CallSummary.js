import moment from "moment";
import Image from "next/image";

const Deadline = ({ deadline }) => {
  if (!deadline) return null;

  return (
    <div className="h-full flex items-center">
      <div className="font-bold h-full border-r-prologe border-prologe-primary border-opacity-25 flex items-center px-4 md:px-8 py-4">
        Deadline
      </div>
      <div className="ml-3 text-sm">
        {`${deadline.toDateString()} (${moment(deadline).fromNow()})`}
      </div>
    </div>
  );
};

const ValueLocked = ({ valueLocked, currency = "eth" }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-between">
        <Image
          alt={currency}
          title={currency}
          width="14"
          height="14"
          src={`/logo-${currency}.svg`}
        />
        <div className="ml-1">{valueLocked}</div>
      </div>
      <div>Locked</div>
    </div>
  );
};

export const CallSummary = ({
  title,
  valueLocked,
  currency,
  deadline: unformattedDeadline,
  className,
}) => {
  const deadline = new Date(unformattedDeadline);
  const isInThePast = (firstDate) =>
    firstDate.setHours(0, 0, 0, 0) <= new Date().setHours(0, 0, 0, 0);

  const isClosed = deadline && isInThePast(deadline);
  return (
    <div className={className}>
      <div className="flex flex-col">
        <section className="grid grid-cols-6">
          <h3 className="text-lg my-5 pl-4 md:px-8 col-start-1 col-end-6">
            {title}
          </h3>
          <div className="border-l-prologe border-prologe-primary border-opacity-25 col-start-6 col-span-1 flex items-center justify-center">
            <ValueLocked valueLocked={valueLocked} currency={currency} />
          </div>
          <div className="border-t-prologe border-prologe-primary border-opacity-25 w-full col-start-1 col-end-6 ">
            <Deadline deadline={deadline} />
          </div>
          <div className="border-t-prologe border-l-prologe border-prologe-primary border-opacity-25 flex justify-center items-center bg-prologe-light text-prologe-primary">
            {isClosed ? "closed" : "open"}
          </div>
        </section>
      </div>
    </div>
  );
};
