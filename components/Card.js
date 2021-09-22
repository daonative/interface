export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full flex flex-col relative bg-white ${className} shadow-sm rounded-md overflow-hidden border-prologe border-prologe-primary border-opacity-25 `}
    >
      {children}
    </div>
  );
};
