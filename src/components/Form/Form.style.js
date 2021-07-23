import styled from "styled-components";

export const Form = styled.form`
  box-sizing: border-box;
`;

export const Input = styled.input`
  background: #eee;
  border: 0.05rem solid transparent;
  border-radius: 0.3rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 0.5rem;
  outline: none;
  width: 100%;

  &:focus {
    border: 0.05rem solid #55dfc8;
  }
`;
