import React from "react";
import PropTypes from "prop-types";
import * as S from "./ImportantButton.style";

const ImportantButton = ({ type, className, children, title }) => {
  return (
    <>
      <S.StarButton type={type} className={className} title={title}>
        {children}
      </S.StarButton>
    </>
  );
};

ImportantButton.propTypes = {
  type: PropTypes.oneOf(["submit", "button"]),
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

ImportantButton.defaultProps = {
  type: "button",
  title: "Importance",
};

export default ImportantButton;
