import React, { useContext, useEffect } from "react";
import * as S from "./Homepage.style";
import Logo from "../../assets/images/Tasky.png";
import { DisplayHeaderContext } from "../../contexts/displayHeaderContext";

import MainButton from "../../components/MainButton/MainButton";

const Homepage = () => {
  const displayHeaderContext = useContext(DisplayHeaderContext);
  useEffect(() => {
    displayHeaderContext.setDisplay(false);
  });
  return (
    <>
      <S.GlobalStyle />
      <S.Home>
        <S.Logo src={Logo} />
        <S.CenteredDiv>
          <S.Title>This is your personal task management tool!</S.Title>
          <MainButton to="/login" color="primary" type="button">
            Get Started
          </MainButton>
        </S.CenteredDiv>
      </S.Home>
    </>
  );
};

export default Homepage;
