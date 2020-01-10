import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./App.css";
import TowerOfHanoi from "./Tower.png";
import calendar from "./calendar.png";
import gov from "./gov.png";
import Tripper from "./CoTripper.png";

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
            directly into a career I love. I was Previously a Google Data Center
            Technician repairing servers and learning things on the spot. After
            my position, I went directly to a coding Bootcamp.
          </h1>
        </div>

        <div className="ProjectContainerSkills">
          <div className="projectDescriptionAbout">
            <h1 className="currentSkills">Current Skills</h1>
            <div className="pictureSkills"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
