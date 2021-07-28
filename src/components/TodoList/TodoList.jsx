import React from "react";
import PropTypes from "prop-types";
import * as S from "./TodoList.style";

const TodoList = ({ children }) => {
  return (
    <>
      <S.StyledList>{children}</S.StyledList>
    </>
  );
};

TodoList.propTypes = {
  //   children: PropTypes.string.isRequired,
};

TodoList.defaultProps = {};

export default TodoList;
