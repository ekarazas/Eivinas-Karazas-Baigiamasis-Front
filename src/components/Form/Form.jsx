import React from "react";
import PropTypes from "prop-types";
import * as S from "./Form.style";

import AlignButton from "../AlignButton/AlignButton";
import Button from "../Button/Button";

const Form = ({ type, userValidation }) => {
  return (
    <form onSubmit={userValidation}>
      {type === "register" && (
        <S.Input
          type="text"
          name="firstname"
          minLength="2"
          maxLength="255"
          placeholder="First Name"
          required
        />
      )}
      <S.Input
        type="email"
        name="email"
        minLength="4"
        maxLength="255"
        placeholder="Email"
        required
      />
      <S.Input
        type="password"
        name="password"
        minLength="8"
        maxLength="255"
        placeholder="Password"
        required
      />
      <AlignButton>
        <Button type="submit" color="primary">
          {type}
        </Button>
      </AlignButton>
    </form>
  );
};

Form.propTypes = {
  type: PropTypes.oneOf(["login", "register"]).isRequired,
  userValidation: PropTypes.func,
};

export default Form;
