import React, { useState, useContext, useEffect } from "react";
import * as S from "./Dashboard.style";
import { DisplayHeaderContext } from "../../contexts/displayHeaderContext";
import { AuthContext } from "../../contexts/authContext";
import { useHistory } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

import Wrapper from "../../components/Wrapper/Wrapper";
import Todo from "../../components/Todo/Todo";
import AddForm from "../../components/AddForm/AddForm";
import TodoList from "../../components/TodoList/TodoList";

const Dashboard = () => {
  const displayHeaderContext = useContext(DisplayHeaderContext);
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const url =
    process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_LOCALHOST;

  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTodos([]);
    setIsLoading(true);
    const token = localStorage.getItem("token");
    fetch(`${url}/v1/todos/all-todos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setMessage(data.message);
        } else if (data.error) {
          setMessage(data.error);
        } else {
          setTodos(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setMessage(error);
      });
  }, [url]);

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
        <S.Dashboard>
          <S.PageTitle>All tasks</S.PageTitle>
          {isLoading ? (
            <div className="center-loading">
              <PulseLoader color={"#239985"} loading={isLoading} size={30} />
            </div>
          ) : (
            <>
              <AddForm
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
              />
              <TodoList>
                {todos.length !== 0 ? (
                  todos.map((todo) => (
                    <Todo
                      key={todo.id}
                      id={todo.id}
                      complete={todo.complete}
                      title={todo.title}
                      due_date={todo.due_date}
                      important={todo.important}
                    ></Todo>
                  ))
                ) : (
                  <S.StyledListItem>{message}</S.StyledListItem>
                )}
              </TodoList>
            </>
          )}
        </S.Dashboard>
      </Wrapper>
    </>
  );
};

export default Dashboard;
