
export const CallBody = ({ description }) => {
  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    />
  );
};
