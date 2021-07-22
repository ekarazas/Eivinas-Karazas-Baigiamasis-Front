import React from "react";
import PropTypes from "prop-types";
import * as S from "./MainButton.style";

const MainButton = ({ children, type, handleClick, color }) => (
  <S.MainButton type={type} onClick={handleClick} color={color}>
    {children}
  </S.MainButton>
);

MainButton.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  handleClick: PropTypes.func,
  color: PropTypes.oneOf(["primary", "secondary"]),
};

MainButton.defaultProps = {
  type: "button",
  color: "primary",
};

export default MainButton;
