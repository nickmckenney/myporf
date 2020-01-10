import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./App.css";
import TowerOfHanoi from "./Tower.png";
import calendar from "./calendar.png";
import gov from "./gov.png";
import Tripper from "./CoTripper.png";
import { ReactComponent as Css } from "./css.svg";
import { ReactComponent as Html } from "./html.svg";
import { ReactComponent as Js } from "./js.svg";
import { ReactComponent as ReactJs } from "./react.svg";
import { ReactComponent as Wp } from "./wordpress.svg";
import { ReactComponent as Python } from "./python.svg";
import { ReactComponent as Ruby } from "./ruby.svg";
import { ReactComponent as Node } from "./nodejs.svg";
import { ReactComponent as Mongodb } from "./mongodb.svg";
import { ReactComponent as Git } from "./git.svg";

const FlippyStyle = {
  marginTop: "20%",
  textAlign: "center",
  justifyContent: "center",
  height: "60vh"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };

    setInterval(() => {
      this.setState({
        isFlipped: !this.state.isFlipped
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App1">
        <h1>About Nick McKenney</h1>
        <div className="ProjectsContainerAboutMe">
          <h1 className="projectDescriptionAbout">
            I recently graduated high school in 2019 and was driven to go
            directly into a career I love. I was previously a Google Data Center
            Technician repairing servers and learning things on the spot. After
            my position, I went directly to a coding Bootcamp.
          </h1>
        </div>

        <div className="ProjectContainerSkills">
          <div className="projectDescriptionAbout projectPhone">
            <h1 className="currentSkills">Current Skills</h1>
            <div className="flex">
              <Css />
              <Html />
              <Js />
              <ReactJs />
              <Wp />
              <Python />
              <Ruby />
              <Node className="nodejs" />
              <Mongodb />
              <Git />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
