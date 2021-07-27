import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./Todo.style";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

import CompleteButton from "../../components/CompleteButton/CompleteButton";
import ImportantButton from "../../components/ImportantButton/ImportantButton";

const Todo = ({ id, complete, title, due_date, important }) => {
  const token = localStorage.getItem("token");
  const [importantState, setImportantState] = useState(important);
  const [completeState, setCompleteState] = useState(complete);

  // Handle Click Events
  const makeComplete = () => {
    setCompleteState(1);
    fetch("http://localhost:8080/v1/todos/set-complete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
        setCompleteState(0);
      });
  };

  const unmakeComplete = () => {
    setCompleteState(0);
    fetch("http://localhost:8080/v1/todos/unset-complete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
        setCompleteState(1);
      });
  };

  const unmakeImportant = () => {
    setImportantState(0);
    fetch("http://localhost:8080/v1/todos/unset-important", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
        setImportantState(1);
      });
  };

  const makeImportant = () => {
    setImportantState(1);
    fetch("http://localhost:8080/v1/todos/set-important", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
        setImportantState(0);
      });
  };

  return (
    <>
      <S.Todo>
        <S.FlexContainer>
          <IconContext.Provider
            value={{
              color: "000",
              size: "10px",
              className: "icon",
            }}
          >
            <CompleteButton className={completeState === 1 ? "active" : ""}>
              {completeState === 1 ? (
                <AiIcons.AiOutlineClose onClick={unmakeComplete} />
              ) : (
                <AiIcons.AiOutlineCheck onClick={makeComplete} />
              )}
            </CompleteButton>
          </IconContext.Provider>
          <S.FlexItem>
            <S.FlexContainer>
              <S.Title className={completeState === 1 ? "crossed" : ""}>
                {title}
              </S.Title>
              {completeState === 1 && <S.Completed>Completed</S.Completed>}
            </S.FlexContainer>
            {due_date && (
              <S.Date>
                Due {due_date && due_date.split("").splice(0, 10).join("")}
              </S.Date>
            )}
          </S.FlexItem>
        </S.FlexContainer>

        <IconContext.Provider
          value={{
            color: "000",
            size: "20px",
            className: "icon",
          }}
        >
          <ImportantButton className="star">
            {importantState === 1 ? (
              <AiIcons.AiFillStar
                onClick={unmakeImportant}
                className="active"
              />
            ) : (
              <AiIcons.AiOutlineStar onClick={makeImportant} />
            )}
          </ImportantButton>
        </IconContext.Provider>
      </S.Todo>
    </>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    complete: PropTypes.number,
    title: PropTypes.string,
    due_date: PropTypes.string,
    important: PropTypes.number,
  }),
};

export default Todo;
