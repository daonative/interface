import Link from "next/link";
import styled from "styled-components";

export const BLUE = "#3200F5";
export const StyledNav = styled.div`
  font-size: clamp(1.3rem, 2.1vw, 2.8rem);
  cursor: pointer;
  font-family: "Space Grotesk";
`;

export const Logo = () => {
  return (
    <StyledNav>
      <span className="font-extralight">prlg</span>
      <span className="font-bold" style={{ color: BLUE }}>
        .
      </span>
    </StyledNav>
  );
};
