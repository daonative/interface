import styled from "styled-components";

export const FilmNoise = styled.div`
  z-index: -1;
  height: 100vh;
  width: 100vw;
  //  opacity: 0.4;
  &::after {
    animation: bg-animation 0.6s infinite;

    background-image: url("/noice.png");
    background-repeat: repeat;

    content: "";
    opacity: 0.2;
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200vh;
  }
  @keyframes bg-animation {
    0% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -5%);
    }
    20% {
      transform: translate(-10%, 5%);
    }
    30% {
      transform: translate(5%, -10%);
    }
    40% {
      transform: translate(-5%, 15%);
    }
    50% {
      transform: translate(-10%, 5%);
    }
    60% {
      transform: translate(15%, 0);
    }
    70% {
      transform: translate(0, 10%);
    }
    80% {
      transform: translate(-15%, 0);
    }
    90% {
      transform: translate(10%, 5%);
    }
    100% {
      transform: translate(5%, 0);
    }
  }
`;

export const Gradient = styled.div`
  height: 100%;
  width: 100%;
  background-position: center center;
  background-size: contain;
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
  } ;
`;
