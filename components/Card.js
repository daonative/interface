export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full flex flex-col relative bg-white ${className} overflow-hidden `}
    >
      {children}
    </div>
  );
};
