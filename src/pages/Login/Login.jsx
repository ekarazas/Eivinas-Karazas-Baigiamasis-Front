import React, { useState, useContext, useEffect } from "react";
import * as Yup from "yup";
import * as S from "./Login.style";
import { useHistory } from "react-router-dom";
import { DisplayHeaderContext } from "../../contexts/displayHeaderContext";
import { AuthContext } from "../../contexts/authContext";

import Form from "../../components/Form/Form";
import Container from "../../components/Container/Container";
import StyledLink from "../../components/StyledLink/StyledLink";
import Notification from "../../components/Notification/Notification";

const Login = () => {
  const displayHeaderContext = useContext(DisplayHeaderContext);
  const authContext = useContext(AuthContext);
  const [notification, setNotification] = useState("");
  const history = useHistory();

  useEffect(() => {
    displayHeaderContext.setDisplay(false);
  }, [displayHeaderContext]);

  useEffect(() => {
    if (!authContext.loggedInLoading && authContext.loggedIn) {
      history.push("/dashboard");
    }
  }, [authContext.loggedIn, authContext.loggedInLoading, history]);

  const userValidation = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();

    if (email && password) {
      const schema = Yup.object().shape({
        email: Yup.string().email().min(5).max(255).required(),
        password: Yup.string().min(6).max(255).required(),
      });

      schema.isValid({ email, password }).then((data) => {
        if (data) {
          userFetch(email, password);
        } else {
          setNotification({
            type: "danger",
            text: "Incorrect email or password",
          });
        }
      });
    } else {
      setNotification({ type: "danger", text: "Don't leave blank inputs" });
    }
  };

  const userFetch = (email, password) => {
    fetch("http://localhost:8080/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          authContext.setLoggedIn(true);
        } else {
          console.log(data.error);
          setNotification({ type: "danger", text: data.error });
        }
      })
      .catch((error) => {
        console.log(error);
        setNotification({
          type: "danger",
          text: "Something went wrong. Please try again later",
        });
      });
  };

  return (
    <>
      <S.GlobalStyle />
      <S.Login>
        <Container>
          {notification && (
            <Notification type={notification.type}>
              {notification.text}
            </Notification>
          )}
          <div className="linksContainer">
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
          </div>
          <Form userValidation={userValidation} type="login" />
        </Container>
      </S.Login>
    </>
  );
};

export default Login;
