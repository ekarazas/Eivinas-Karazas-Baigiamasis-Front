import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInLoading, setLoggedInLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
    setLoggedInLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ loggedIn, setLoggedIn, loggedInLoading, setLoggedInLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
