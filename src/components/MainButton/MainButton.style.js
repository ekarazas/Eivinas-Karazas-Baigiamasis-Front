import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainButton = styled(Link)`
  background: transparent;
  border: 0.1rem solid
    ${(props) => (props.color === "primary" ? "#55dfc8" : "#6955df")};
  color: ${(props) => (props.color === "primary" ? "#55dfc8" : "#6955df")};
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  transition: 300ms ease;
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    background: ${(props) =>
      props.color === "primary" ? "#55dfc8" : "#6955df"};
    color: #f3f3f3;
  }
`;
