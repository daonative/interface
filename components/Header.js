import styled from "styled-components";

const StyledH2 = styled.h2`
  font-size: clamp(0.9rem, 1vw, 1.3rem);
  margin-bottom: 0;
`;
export const Header = ({ children, className }) => {
  return (
    <StyledH2
      className={`bg-prologe-light py-2 px-4 text-prologe-primary w-max flex items-center ${className}`}
    >
      {children}
    </StyledH2>
  );
};
