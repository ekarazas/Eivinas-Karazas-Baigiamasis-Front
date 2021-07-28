import React from "react";
import PropTypes from "prop-types";
import * as S from "./CompleteButton.style";

const CompleteButton = ({ type, className, children, title }) => {
  return (
    <>
      <S.CompleteButton type={type} className={className} title={title}>
        {children}
      </S.CompleteButton>
    </>
  );
};

CompleteButton.propTypes = {
  type: PropTypes.oneOf(["submit", "button"]),
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

CompleteButton.defaultProps = {
  type: "button",
  title: "Completion",
};

export default CompleteButton;
