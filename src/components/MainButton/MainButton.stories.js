import React from "react";
import MainButton from "./MainButton";

export default {
  component: MainButton,
  title: "Components/MainButton",
};

export const MainButtonStory = () => {
  return (
    <>
      <MainButton to="/dashboard">Get started</MainButton>
    </>
  );
};
