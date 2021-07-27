import React, { useState, useContext, useEffect } from "react";
import * as S from "./Today.style";
import { DisplayHeaderContext } from "../../contexts/displayHeaderContext";
import { AuthContext } from "../../contexts/authContext";
import { useHistory } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

import Wrapper from "../../components/Wrapper/Wrapper";
import Todo from "../../components/Todo/Todo";

const Today = () => {
  const displayHeaderContext = useContext(DisplayHeaderContext);
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTodos([]);
    setIsLoading(true);
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/v1/todos/today", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setMessage(data.message);
        } else {
          setTodos(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    displayHeaderContext.setDisplay(true);
  }, [displayHeaderContext]);

  useEffect(() => {
    if (!authContext.loggedInLoading && !authContext.loggedIn) {
      history.push("/login");
    }
  }, [authContext.loggedIn, authContext.loggedInLoading, history]);

  return (
    <>
      <S.GlobalStyle />
      <Wrapper>
        <S.Today>
          <S.PageTitle>My Day</S.PageTitle>
          <S.TodayDate>
            {new Date().toString().split(" ").splice(0, 1).join(" ") +
              ", " +
              new Date().toString().split(" ").splice(1, 2).join(" ")}
          </S.TodayDate>
          {isLoading ? (
            <div className="center-loading">
              <PulseLoader color={"#239985"} loading={isLoading} size={30} />
            </div>
          ) : (
            <S.StyledList>
              {todos.length !== 0 ? (
                todos.map((todo) => (
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    complete={todo.complete}
                    title={todo.title}
                    important={todo.important}
                  ></Todo>
                ))
              ) : (
                <S.StyledListItem>{message}</S.StyledListItem>
              )}
            </S.StyledList>
          )}
        </S.Today>
      </Wrapper>
    </>
  );
};

export default Today;
