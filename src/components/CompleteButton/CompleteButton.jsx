import React from "react";
import PropTypes from "prop-types";
import * as S from "./CompleteButton.style";

const CompleteButton = ({ type, className, children }) => {
  return (
    <>
      <S.CompleteButton type={type} className={className}>
        {children}
      </S.CompleteButton>
    </>
  );
};

CompleteButton.propTypes = {
  type: PropTypes.oneOf(["submit", "button"]),
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

CompleteButton.defaultProps = {
  type: "button",
};

export default CompleteButton;
