import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./index.css";
import "normalize.css";
import DisplayHeaderProvider from "./contexts/displayHeaderContext";
import AuthProvider from "./contexts/authContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DisplayHeaderProvider>
        <Routes />
      </DisplayHeaderProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
