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

export const Login = styled.main`
  height: calc(100vh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;
