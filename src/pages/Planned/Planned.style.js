import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fbfbfb;
  }
`;

export const Planned = styled.main`
  height: calc(100vh - 8rem);
  padding: 2rem;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: scroll;
`;

export const PageTitle = styled.h2`
  margin: 0;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.05rem solid #ccc;
  padding: 0.5rem;
  min-height: 50px;
`;
