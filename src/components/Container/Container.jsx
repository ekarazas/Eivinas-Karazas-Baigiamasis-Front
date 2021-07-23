import React from "react";
import PropTypes from "prop-types";
import * as S from "./Container.style";

import Logo from "../../assets/images/Tasky.png";

const Container = ({ children }) => {
  return (
    <>
      <S.Container>
        <S.Logo src={Logo} />
        {children}
      </S.Container>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Container;
