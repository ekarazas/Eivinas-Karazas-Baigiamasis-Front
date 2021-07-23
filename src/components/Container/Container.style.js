import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: rgba(0, 255, 255, 0.1);
  border-radius: 0.3rem;
  padding: 3.5rem 2.5rem;
  margin: 0 1rem;
  margin-top: 3rem;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 785px) {
    margin-top: 5rem;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 12rem;
  }
`;

export const StyledLink = styled(Link)`
  margin-bottom: 3rem;
  padding: 0.5rem;
`;

export const Logo = styled.img`
  height: 25px;
  filter: invert(85%) sepia(100%) saturate(211%) hue-rotate(186deg)
    brightness(112%) contrast(91%);

  @media only screen and (min-width: 785px) {
    height: 25px;
  }
`;
