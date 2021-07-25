import React, { useContext, useEffect } from "react";
import { DisplayHeaderContext } from "../../contexts/displayHeaderContext";
import { AuthContext } from "../../contexts/authContext";
import { useHistory } from "react-router-dom";

const Important = () => {
  const displayHeaderContext = useContext(DisplayHeaderContext);
  const authContext = useContext(AuthContext);
  const history = useHistory();

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
      <div>Important</div>
    </>
  );
};

export default Important;
