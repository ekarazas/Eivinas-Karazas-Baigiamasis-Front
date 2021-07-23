import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: #000;
  letter-spacing: 0.02em;
  padding: 0.3rem;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    border-bottom: 0.05rem solid #f3f3f3;
  }

  &.active {
    color: #55dfc8;
    font-weight: 700;
    text-shadow: 0 0 1rem #55dfc8;
  }

  &.active:hover {
    border-bottom: 0.05rem solid #55dfc8;
  }

  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;
