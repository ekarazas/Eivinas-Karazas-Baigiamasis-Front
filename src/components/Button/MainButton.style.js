import styled from "styled-components";

export const MainButton = styled.button`
  background: transparent;
  border: 0.1rem solid
    ${(props) => (props.color === "primary" ? "#55dfc8" : "#6955df")};
  color: ${(props) => (props.color === "primary" ? "#55dfc8" : "#6955df")};
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  transition: 300ms ease;
  text-transform: capitalize;

  &:hover {
    background: ${(props) =>
      props.color === "primary" ? "#55dfc8" : "#6955df"};
    color: #fff;
  }
`;
