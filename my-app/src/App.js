import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NarBar.js";
import Projects from "./projects2.js";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import Home from "./projects2";
import AboutMe from "./Projects";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutMe} />
        </Switch>
      </div>
    );
  }
}
