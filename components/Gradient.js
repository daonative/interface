import styled from "styled-components";

export const FilmNoise = styled.div`
  z-index: -1;
  height: 100vh;
  width: 100vw;
  //  opacity: 0.4;
  &::after {
    animation: grain 01s steps(10) infinite;

    background-image: url("/noice.png");

    content: "";
    height: 300%;
    left: -200%;
    opacity: 0.4;
    position: absolute;
    top: -120%;
    width: 1000%;
  }

  @keyframes grain {
    0%,
    100% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -10%);
    }
    20% {
      transform: translate(-15%, 5%);
    }
    30% {
      transform: translate(7%, -25%);
    }
    40% {
      transform: translate(-5%, 25%);
    }
    50% {
      transform: translate(-15%, 10%);
    }
    60% {
      transform: translate(15%, 0%);
    }
    70% {
      transform: translate(0%, 15%);
    }
    80% {
      transform: translate(3%, 35%);
    }
    90% {
      transform: translate(-10%, 10%);
    }
  }
`;

export const Gradient = styled.div`
  height: 100%;
  width: 100%;
  background-size: stretch;
  background-image: url(/mobile-gradient.svg);
  background-repeat: no-repeat;
  position: absolute;
  @media (min-width: 768px) {
    background-position-y: bottom;
    background-position-x: left;
    background-size: contain;
    background-image: url(/desktop-gradient.svg);
  }
  @media (min-width: 1800px) {
    background-size: contain;
    background-image: url(/desktop-gradient.svg);
  }
`;
