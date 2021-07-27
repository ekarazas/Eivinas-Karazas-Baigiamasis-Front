import React from "react";
import Todo from "./Todo";

export default {
  title: "Components/Todo",
  component: Todo,
};

export const TodoStory = () => {
  return (
    <>
      <Todo
        id={1}
        complete={1}
        title="Walk a dog"
        due_date="2021-07-27"
        important={1}
      ></Todo>
    </>
  );
};
