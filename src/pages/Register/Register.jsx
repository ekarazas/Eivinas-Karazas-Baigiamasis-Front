import React from "react";
import * as Yup from "yup";
import * as S from "./Register.style";
import { useHistory } from "react-router-dom";

import Form from "../../components/Form/Form";
import Container from "../../components/Container/Container";
import StyledLink from "../../components/StyledLink/StyledLink";

const Register = () => {
  const history = useHistory();

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
        } else alert("This data is not valid");
      });
    } else {
      alert("Do not leave blank inputs. Write your name, email and password");
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
          alert(data.message);
          history.push("/login");
        } else {
          alert(data.error);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <S.GlobalStyle />
      <S.Register>
        <Container>
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
