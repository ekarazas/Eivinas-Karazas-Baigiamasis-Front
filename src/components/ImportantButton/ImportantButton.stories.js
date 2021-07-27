import React from "react";
import ImportantButton from "./ImportantButton";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

export default {
  title: "Components/ImportantButton",
  component: ImportantButton,
};

export const ImportantButtonStory = () => {
  return (
    <>
      <IconContext.Provider value={{ className: "icon", size: "20px" }}>
        <ImportantButton className="star">
          <AiIcons.AiFillStar className="active" />
        </ImportantButton>
      </IconContext.Provider>
    </>
  );
};
