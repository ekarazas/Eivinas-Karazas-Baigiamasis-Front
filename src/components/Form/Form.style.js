import styled from "styled-components";

export const Form = styled.form`
  box-sizing: border-box;
`;

export const Input = styled.input`
  border: 0.05rem solid #55dfc8;
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    border: 0.05rem solid #6955df;
  }
`;
