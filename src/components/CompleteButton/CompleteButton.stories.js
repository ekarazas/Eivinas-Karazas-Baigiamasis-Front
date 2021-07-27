import React from "react";
import CompleteButton from "./CompleteButton";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

export default {
  title: "Components/CompleteButton",
  component: CompleteButton,
};

export const CompleteButtonStory = () => {
  return (
    <>
      <IconContext.Provider
        value={{
          color: "000",
          size: "10px",
          className: "icon",
        }}
      >
        <CompleteButton>
          <AiIcons.AiOutlineCheck />
        </CompleteButton>
      </IconContext.Provider>
    </>
  );
};
