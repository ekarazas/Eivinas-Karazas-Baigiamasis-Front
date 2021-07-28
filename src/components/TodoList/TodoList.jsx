import React from "react";
import * as S from "./TodoList.style";

const TodoList = ({ children }) => {
  return (
    <>
      <S.StyledList>{children}</S.StyledList>
    </>
  );
};

export default TodoList;
