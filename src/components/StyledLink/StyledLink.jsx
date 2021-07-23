import React from "react";
import PropTypes from "prop-types";
import * as S from "./StyledLink.style";

const StyledLink = ({ to, children }) => {
  return (
    <>
      <S.StyledLink to={to} activeClassName="active">
        {children}
      </S.StyledLink>
    </>
  );
};

StyledLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string.isRequired,
};

StyledLink.defaultProps = {
  to: "/",
};

export default StyledLink;
