import React from "react";
import Button from "../Button/Button";
import AlignButton from "./AlignButton";

export default {
  title: "Components/AlignButton",
  component: AlignButton,
};

export const AlignButtonStory = () => (
  <AlignButton>
    <Button>Button Right</Button>
  </AlignButton>
);
