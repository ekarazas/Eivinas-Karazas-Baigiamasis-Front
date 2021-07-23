import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.color === "primary" ? "#55dfc8" : "#6955df")};
  border: 0;
  color: #f3f3f3;
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  font-family: "Work Sans", sans-serif;
  text-transform: capitalize;

  &:hover {
    background: ${(props) =>
      props.color === "primary" ? "#3ba190" : "#4d3cae"};
  }
`;
