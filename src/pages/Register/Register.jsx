import React, { useState, useEffect, useContext } from "react";
import * as Yup from "yup";
import * as S from "./Register.style";
import { DisplayHeaderContext } from "../../contexts/displayHeaderContext";

import Form from "../../components/Form/Form";
import Container from "../../components/Container/Container";
import StyledLink from "../../components/StyledLink/StyledLink";
import Notification from "../../components/Notification/Notification";

const Register = () => {
  const displayHeaderContext = useContext(DisplayHeaderContext);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    displayHeaderContext.setDisplay(false);
  }, [displayHeaderContext]);

  const userValidation = (e) => {
    e.preventDefault();
    const firstname = e.target.elements.firstname.value.trim();
    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();

    if (email && password) {
      const schema = Yup.object().shape({
        firstname: Yup.string().min(2).max(255).required(),
        email: Yup.string().email().min(5).max(255).required(),
        password: Yup.string().min(6).max(255).required(),
      });

      schema.isValid({ firstname, email, password }).then((data) => {
        if (data) {
          userFetch(firstname, email, password);
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

  const userFetch = (firstname, email, password) => {
    fetch("http://localhost:8080/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setNotification({ type: "success", text: data.message });
        } else {
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
      <S.Register>
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
          <Form userValidation={userValidation} type="register" />
        </Container>
      </S.Register>
    </>
  );
};

export default Register;
