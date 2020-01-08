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
            I recently gradudated highschool in 2019 and was driven to go
            directly into a career I love. I was Previously a Google Data Center
            Techician repairing servers and learning things on the spot. After
            my position I went directly to a coding bootcamp.
          </h1>
        </div>
        <div className="ProjectContainerSkills">
          <div className="projectDescriptionAbout">
            Over the course of 3 months I was Able to learn
            <div className="firstHalf">
              <ul>
                <li className="list">React</li>
                <li className="list">Django</li>
                <li className="list">Javascipt</li>
                <li className="list">Python</li>
                <li className="list">Mongoose</li>
                <li className="list">PeeWee</li>
                <li className="list">Storybook</li>
              </ul>
            </div>
            <div className="secoundHalf">
              <ul>
                <li className="list">Mongodb</li>
                <li className="list">Node.js</li>
                <li className="list">Express</li>
                <li className="list">Git</li>
                <li className="list">CSS3</li>
                <li className="list">HTML5</li>
                <li className="list">Adobe XD</li>
              </ul>
            </div>
            <div className="rightNow">
              Currently Im picking up Redux as well as learning web-socketing to
              help further my React skills!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
