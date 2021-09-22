import styled from "styled-components";

const StyledBody = styled.div`
  li:before {
    content: "•";
    margin-right: 0.2rem;
  }
  li {
    display: flex;
  }
`;

export const CallBody = ({ description }) => {
  return (
    <StyledBody
      className="prose"
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    />
  );
};
