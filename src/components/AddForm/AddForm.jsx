import React, { useState } from "react";
import * as S from "./AddForm.style";
import * as Yup from "yup";
import PropTypes from "prop-types";

import Notification from "../../components/Notification/Notification";

const AddForm = ({ inputText, setInputText, todos, setTodos }) => {
  const [notification, setNotification] = useState("");

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const taskValidation = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value.trim();

    if (title) {
      const schema = Yup.object().shape({
        title: Yup.string().min(2).max(255).required(),
      });

      schema.isValid({ title }).then((data) => {
        if (data) {
          addTask(title);
          console.log(todos[todos.length - 1].id);
          setTodos([
            ...todos,
            { title: inputText, id: todos[todos.length - 1].id + 1 || 1 },
          ]);
          setInputText("");
        } else {
          console.log(data);
          setNotification({
            type: "danger",
            text: "Incorrect data passed",
          });
        }
      });
    } else {
      setNotification({ type: "danger", text: "Don't leave blank inputs" });
    }
  };

  const addTask = (title) => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/v1/todos/add-todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          setNotification({
            type: "success",
            text: data.message,
          });
        } else {
          setNotification({
            type: "danger",
            text: data.error,
          });
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

  const unset = () => {
    setNotification("");
  };

  return (
    <>
      <form onSubmit={taskValidation}>
        {notification && (
          <Notification unset={unset} type={notification.type}>
            {notification.text}
          </Notification>
        )}
        <S.Input
          onChange={inputTextHandler}
          value={inputText}
          type="text"
          name="title"
          minLength="2"
          maxLength="255"
          placeholder="+ Add a task"
          required
        />
      </form>
    </>
  );
};

export default AddForm;
