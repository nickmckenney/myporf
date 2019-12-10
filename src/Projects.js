import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Github from "./github-brands.svg";
import View from "./eye-solid.svg";

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
        <div className="ProjectsContainerAboutMe">
          {" "}
          <Flippy
            flipOnHover={true}
            flipDirection={"vertical"}
            style={FlippyStyle}
          >
            <React.Fragment>
              <FrontSide>
                <h1 className="projectName">About Me</h1>
                <h1 className="projectDescriptionFront">
                  balalalallalaalaa balalalaallalal balalalallala baallaaallala
                </h1>
              </FrontSide>
              <BackSide>
                <div className="BacksideProject"></div>
              </BackSide>
            </React.Fragment>
          </Flippy>
        </div>
      </div>
    );
  }
}

export default App;
