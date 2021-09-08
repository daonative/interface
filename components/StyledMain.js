import Button from "./Button";
import Link from "next/link";
import styled from "styled-components";

export const StyledMain = styled.main`
  opacity: 0;
  animation-duration: 3s;
  animation-name: fadein;
  animation-fill-mode: forwards;
  @keyframes fadein {
    to {
      opacity: 1;
    }
  }
`;


