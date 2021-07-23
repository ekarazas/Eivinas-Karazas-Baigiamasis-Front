import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./Homepage.style";
import Logo from "../../assets/images/Tasky.png";
import MainButton from "../../components/MainButton/MainButton";

const Homepage = () => {
  const history = useHistory();

  if (localStorage.getItem("token")) {
    history.push("/dashboard");
  }

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
