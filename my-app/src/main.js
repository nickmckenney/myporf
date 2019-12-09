import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./Projects";
import Home from "./App";
const Main = () => {
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={AboutMe} />
  </Switch>;
};
export default Main;
