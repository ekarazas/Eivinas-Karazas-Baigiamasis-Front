import styled from "styled-components";

export const AddForm = styled.form`
  box-sizing: border-box;
`;

export const Input = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 0.05rem solid #ccc;
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 0.5rem;
  outline: none;
  width: 100%;

  &:focus {
    border-bottom: 0.05rem solid #55dfc8;
  }

  &:focus::placeholder {
    color: #55dfc8;
  }
`;
