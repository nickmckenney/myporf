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
    // function myFunction(x) {
    //   if (x.matches) {
    //     alert("a");
    //   } else {
    //     alert("B");
    //   }
    // }

    // var x = window.matchMedia("(max-width: 700px)");
    // myFunction(x);
    // x.addListener(myFunction);
    setInterval(() => {
      this.setState({
        isFlipped: !this.state.isFlipped
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <div className="ProjectsContainer">
          <div class="projects projectTowerOfHanoi">
            <Flippy
              flipOnHover={true}
              flipDirection={"vertical"}
              style={FlippyStyle}
            >
              <div className="BacksideProject">
                <img className="BackSideTower" src={TowerOfHanoi} />

                <div className="project-text">
                  <div className="project-title">Tower of Hanoi</div>
                  <div className="project-subtitle">
                    Why is did this project and what i learned form
                    itsdddddddWhy is did this project and what i learned form
                    itsdddddddWhy is did this project and what i learned form
                    itsdddddddWhy is did this project and what
                  </div>
                  <hr></hr>
                  <div className="project-subtitle2">
                    Why is did this project and what i learned form
                    itsdddddddWhy is did this project and what i learned
                  </div>
                </div>
                <nav className="navLink">
                  <a href="">Github</a>
                  <a className="break" href="">
                    Deployed Site
                  </a>{" "}
                </nav>
              </div>
            </Flippy>
          </div>
          <div class="projects projectGovernmentFundingAPI">
            <Flippy
              flipOnHover={true}
              flipDirection={"vertical"}
              style={FlippyStyle}
            >
              <div className="BacksideProject">
                <img className="BackSideTower" src={calendar} />
                <div className="project-text">
                  <div className="project-title">Tower of Hanoi</div>
                  <div className="project-subtitle">
                    Why is did this project and what i learned form
                    itsdddddddWhy is did this project and what i learned form
                    itsdddddddWhy is did this project and what i learned form
                    itsdddddddWhy is did this project and what
                  </div>
                  <hr></hr>
                  <div className="project-subtitle2">
                    Why is did this project and what i learned form
                    itsdddddddWhy is did this project and what i learned
                  </div>
                </div>
                <nav className="navLink">
                  <a href="">Github</a>
                  <a className="break" href="">
                    Deployed Site
                  </a>{" "}
                </nav>
              </div>
            </Flippy>
          </div>
          <div class="projects projectCoTripper">
            <Flippy
              flipOnHover={true}
              flipDirection={"vertical"}
              style={FlippyStyle}
            >
              <div className="BacksideProject">
                <img className="BackSideTower" src={gov} />

                <div className="project-text">
                  <div className="project-title">Tower of Hanoi</div>
                  <div className="project-subtitle">
                    Why is did this project and what i learned form
                    itsdddddddWhy is did this project and what i learned form
                    itsdddddddWhy is did this project and what i learned form
                    itsdddddddWhy is did this project and what
                  </div>
                  <hr></hr>
                  <div className="project-subtitle2">
                    Why is did this project and what i learned form
                    itsdddddddWhy is did this project and what i learned
                  </div>
                </div>
                <nav className="navLink">
                  <a href="">Github</a>
                  <a className="break" href="">
                    Deployed Site
                  </a>{" "}
                </nav>
              </div>
            </Flippy>
          </div>
          <div class="projects projectCalaendarMern">
            <Flippy
              flipOnHover={true}
              flipDirection={"vertical"}
              style={FlippyStyle}
            >
              <div className="BacksideProject">
                <img className="BackSideTower" src={Tripper} />

                <div className="project-text">
                  <div className="project-title">Tower of Hanoi</div>
                  <div className="project-subtitle">
                    Why is did this project and what i learned form
                    itsdddddddWhy is did this project and what i learned form
                    itsdddddddWhy is did this project and what i learned form
                    itsdddddddWhy is did this project and what
                  </div>
                  <hr></hr>
                  <div className="project-subtitle2">
                    Why is did this project and what i learned form
                    itsdddddddWhy is did this project and what i learned
                  </div>
                </div>
                <nav className="navLink">
                  <a href="">Github</a>
                  <a className="break" href="">
                    Deployed Site
                  </a>{" "}
                </nav>
              </div>
            </Flippy>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
