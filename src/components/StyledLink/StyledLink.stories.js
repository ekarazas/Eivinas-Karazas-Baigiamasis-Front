import React from "react";
import StyledLink from "./StyledLink";

export default {
  component: StyledLink,
  title: "Components/StyledLink",
};

export const StyledLinkStory = () => {
  return (
    <>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/register">Register</StyledLink>
    </>
  );
};
