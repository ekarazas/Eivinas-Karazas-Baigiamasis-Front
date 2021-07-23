import React from "react";
import PropTypes from "prop-types";
import * as S from "./MainButton.style";

const MainButton = ({ to, children, color }) => (
  <S.MainButton to={to} color={color}>
    {children}
  </S.MainButton>
);

MainButton.propTypes = {
  direction: PropTypes.string,
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["primary", "secondary"]),
};

MainButton.defaultProps = {
  color: "primary",
};

export default MainButton;
