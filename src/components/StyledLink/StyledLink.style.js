import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  border-bottom: 0.05rem solid transparent;
  color: #f3f3f3;
  letter-spacing: 0.05rem;
  font-weight: 200;
  padding: 0.3rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: 300ms ease;

  &:hover {
    border-bottom: 0.05rem solid #f3f3f3;
  }

  &.active {
    color: #55dfc8;
    font-weight: 400;
  }

  &.active:hover {
    border-bottom: 0.05rem solid #55dfc8;
  }

  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;
