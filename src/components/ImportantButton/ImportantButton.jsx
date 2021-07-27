import React from "react";
import PropTypes from "prop-types";
import * as S from "./ImportantButton.style";

const ImportantButton = ({ type, className, children }) => {
  return (
    <>
      <S.StarButton type={type} className={className}>
        {children}
      </S.StarButton>
    </>
  );
};

ImportantButton.propTypes = {
  type: PropTypes.oneOf(["submit", "button"]),
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

ImportantButton.defaultProps = {
  type: "button",
};

export default ImportantButton;
