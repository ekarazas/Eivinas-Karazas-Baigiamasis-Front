import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.color === "primary" ? "#239985" : "#6955df")};
  border: 0;
  border-radius: 0.3rem;
  color: #f3f3f3;
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  font-family: "Work Sans", sans-serif;
  text-transform: capitalize;
  transition: 300ms ease;

  &:hover {
    background: ${(props) =>
      props.color === "primary" ? "#1b7062" : "#4d3cae"};
  }
`;
