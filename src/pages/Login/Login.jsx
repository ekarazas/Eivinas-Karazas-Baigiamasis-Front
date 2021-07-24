import React from "react";
import * as Yup from "yup";
import * as S from "./Login.style";
import { useHistory } from "react-router-dom";

import Form from "../../components/Form/Form";
import Container from "../../components/Container/Container";
import StyledLink from "../../components/StyledLink/StyledLink";

const Login = () => {
  const history = useHistory();

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
        } else alert("This data is not valid");
      });
    } else {
      alert("Do not leave blank inputs. Write your email and password");
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
          history.push("/dashboard");
        } else {
          alert(data.error);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <S.GlobalStyle />
      <S.Login>
        <Container>
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
