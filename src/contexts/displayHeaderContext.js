import React, { createContext, useState } from "react";

export const DisplayHeaderContext = createContext();

const DisplayHeaderProvider = ({ children }) => {
  const [display, setDisplay] = useState(false);

  return (
    <DisplayHeaderContext.Provider value={{ display, setDisplay }}>
      {children}
    </DisplayHeaderContext.Provider>
  );
};

export default DisplayHeaderProvider;
