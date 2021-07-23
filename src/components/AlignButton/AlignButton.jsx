import React from "react";
import PropTypes from "prop-types";
import * as S from "./AlignButton.style";

const AlignButton = ({ children }) => {
  return <S.AlignButton>{children}</S.AlignButton>;
};

AlignButton.propTypes = {
  children: PropTypes.any.isRequired,
};

export default AlignButton;
