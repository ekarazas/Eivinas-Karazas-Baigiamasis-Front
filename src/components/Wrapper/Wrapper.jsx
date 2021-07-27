import React from "react";
import PropTypes from "prop-types";
import * as S from "./Wrapper.style";

const Wrapper = ({ children }) => {
  return (
    <>
      <S.StyledWrapper>{children}</S.StyledWrapper>
    </>
  );
};

Wrapper.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Wrapper;
