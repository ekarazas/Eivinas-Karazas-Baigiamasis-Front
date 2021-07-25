import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Today from "./pages/Today/Today";
import Important from "./pages/Important/Important";
import Planned from "./pages/Planned/Planned";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/today" component={Today} />
        <Route exact path="/dashboard/important" component={Important} />
        <Route exact path="/dashboard/planned" component={Planned} />
        <Route render={() => <Redirect to={{ pathname: "/dashboard" }} />} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
