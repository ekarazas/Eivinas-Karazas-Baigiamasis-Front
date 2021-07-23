import React from "react";
import PropTypes from "prop-types";
import * as S from "./Button.style";

const Button = ({ type, color, handleClick, children }) => {
  return (
    <>
      <S.Button type={type} color={color} onClick={handleClick}>
        {children}
      </S.Button>
    </>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  handleClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: "button",
  color: "primary",
};

export default Button;
