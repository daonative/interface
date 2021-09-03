import styled from "styled-components";

const StyledBody = styled.div`
  li:before {
    content: "•";
    display: block;
    margin-right: 0.5em;
  }
  li {
    display: flex;
  }
`;

export const CallBody = ({ description }) => {
  return (
    <StyledBody
      dangerouslySetInnerHTML={{
        __html: description,
      }} />
  );
};
