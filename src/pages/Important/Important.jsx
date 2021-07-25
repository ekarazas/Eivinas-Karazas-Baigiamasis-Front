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
  });

  if (!authContext.loggedIn) {
    history.push("/login");
  }

  return (
    <>
      <div>Important</div>
    </>
  );
};

export default Important;
