import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NarBar.js";
import Projects from "./Projects.js";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Projects />
      </div>
    );
  }
}
