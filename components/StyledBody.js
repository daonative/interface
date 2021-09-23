import styled from "styled-components";


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
