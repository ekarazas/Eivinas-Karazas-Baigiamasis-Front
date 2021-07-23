import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000000;
    background-image: linear-gradient(147deg, #52494C 0%, #2c3e50 74%);
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
  }
`;

export const Home = styled.main`
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  height: 25px;
  filter: invert(85%) sepia(100%) saturate(211%) hue-rotate(186deg)
    brightness(112%) contrast(91%);
  margin-top: 5rem;

  @media only screen and (min-width: 785px) {
    height: 40px;
  }
`;

export const CenteredDiv = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 300px;
  width: 80%;

  @media only screen and (min-width: 785px) {
    max-width: 600px;
  }
`;

export const Title = styled.h1`
  color: #f3f3f3;
  font-size: 1.4rem;
  font-weight: 200;

  @media only screen and (min-width: 785px) {
    font-size: 2.1rem;
  }
`;
