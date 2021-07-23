import React from "react";
import * as S from "./Homepage.style";
import Logo from "../../assets/images/Tasky.png";
import MainButton from "../../components/Button/MainButton";

const Homepage = () => {
  return (
    <>
      <S.GlobalStyle />
      <S.Home>
        <S.Logo src={Logo} />
        <S.CenteredDiv>
          <S.Title>This is your personal task management tool!</S.Title>
          <MainButton to="/dashboard" color="primary" type="button">
            Get Started
          </MainButton>
        </S.CenteredDiv>
      </S.Home>
    </>
  );
};

export default Homepage;
