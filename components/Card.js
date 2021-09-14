export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full flex flex-col relative bg-white ${className} shadow rounded-md overflow-hidden`}
    >
      {children}
    </div>
  );
};
