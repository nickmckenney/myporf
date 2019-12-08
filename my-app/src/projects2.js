import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Github from "./github-brands.svg";
import View from "./eye-solid.svg";

import "./App.css";
import TowerOfHanoi from "./Tower.png";
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
              flipDirection={"horizantal"}
              style={FlippyStyle}
            >
              <React.Fragment>
                <FrontSide>
                  <div className="FrontSideTower"></div>
                </FrontSide>
                <BackSide>
                  <div className="BacksideProject">
                    <img className="BackSideTower" src={TowerOfHanoi} />
                    <div className="points">
                      <span>
                        Accomplishments
                        <div>
                          <li>Point2</li>
                          <li>point2</li>
                          <li>point2</li>
                          <li>point2</li>
                        </div>
                      </span>
                      <br></br>
                      <span>
                        Technologies
                        <div>
                          <li>Point2</li>
                          <li>point2</li>
                          <li>point2</li>
                          <li>point2</li>
                        </div>
                      </span>
                    </div>

                    <div className="summaryProject">
                      <h1>Summary </h1>
                      Why is did this project and what i learned form
                      itsdddddddWhy is did this project and what i learned form
                      itsdddddddWhy is did this project and what i learned form
                      itsdddddddWhy is did this project and what i learned form
                      itsdddddddWhy is did this project and what i learned form
                      itsddddddd
                      <br></br> <br></br> <br></br> <br></br>
                      <nav className="navLink">
                        <img src={Github} />
                        <img src={View} />
                      </nav>
                    </div>
                  </div>
                </BackSide>
              </React.Fragment>
            </Flippy>
          </div>
          <div class="projects projectGovernmentFundingAPI">
            <Flippy
              flipOnHover={true}
              flipDirection={"horizantal"}
              style={FlippyStyle}
            >
              <React.Fragment>
                <FrontSide>
                  <div className="FrontSideTower"></div>
                </FrontSide>
                <BackSide>
                  <div className="BacksideProject">
                    <img className="BackSideTower" src={TowerOfHanoi} />
                    <div className="points">
                      <span>
                        Accomplishments
                        <div>
                          <li>Point2</li>
                          <li>point2</li>
                          <li>point2</li>
                          <li>point2</li>
                        </div>
                      </span>
                      <br></br>
                      <span>
                        Technologies
                        <div>
                          <li>Point2</li>
                          <li>point2</li>
                          <li>point2</li>
                          <li>point2</li>
                        </div>
                      </span>
                    </div>

                    <div className="summaryProject">
                      <h1>Summary </h1>
                      Why is did this project and what i learned form
                      itsdddddddWhy is did this project and what i learned form
                      itsdddddddWhy is did this project and what i learned form
                      itsdddddddWhy is did this project and what i learned form
                      itsdddddddWhy is did this project and what i learned form
                      itsddddddd
                      <br></br> <br></br> <br></br> <br></br>
                      <nav className="navLink">
                        <img src={Github} />
                        <img src={View} />
                      </nav>
                    </div>
                  </div>
                </BackSide>
              </React.Fragment>
            </Flippy>
          </div>
          <div class="projects projectCoTripper">
            <Flippy
              flipOnHover={true}
              flipDirection={"horizantal"}
              style={FlippyStyle}
            >
              <React.Fragment>
                <FrontSide>
                  <div className="FrontSideTower"></div>
                </FrontSide>
                <BackSide>
                  <div className="BacksideProject">
                    <img className="BackSideTower" src={TowerOfHanoi} />
                    <div className="points">
                      <span>
                        Accomplishments
                        <div>
                          <li>Point2</li>
                          <li>point2</li>
                          <li>point2</li>
                          <li>point2</li>
                        </div>
                      </span>
                      <br></br>
                      <span>
                        Technologies
                        <div>
                          <li>Point2</li>
                          <li>point2</li>
                          <li>point2</li>
                          <li>point2</li>
                        </div>
                      </span>
                    </div>

                    <div className="summaryProject">
                      <h1>Summary </h1>
                      Why is did this project and what i learned form
                      itsdddddddWhy is did this project and what i learned form
                      itsdddddddWhy is did this project and what i learned form
                      itsdddddddWhy is did this project and what i learned form
                      itsdddddddWhy is did this project and what i learned form
                      itsddddddd
                      <br></br> <br></br> <br></br> <br></br>
                      <nav className="navLink">
                        <img src={Github} />
                        <img src={View} />
                      </nav>
                    </div>
                  </div>
                </BackSide>
              </React.Fragment>
            </Flippy>
          </div>
          <div class="projects projectCalaendarMern">
            <Flippy
              flipOnHover={true}
              flipDirection={"horizantal"}
              style={FlippyStyle}
            >
              <React.Fragment>
                <FrontSide>
                  <div className="FrontSideTower"></div>
                </FrontSide>
                <BackSide>
                  <div className="BacksideProject">
                    <img className="BackSideTower" src={TowerOfHanoi} />
                    <div className="points">
                      <span>
                        Accomplishments
                        <div>
                          <li>Point2</li>
                          <li>point2</li>
                          <li>point2</li>
                          <li>point2</li>
                        </div>
                      </span>
                      <br></br>
                      <span>
                        Technologies
                        <div>
                          <li>Point2</li>
                          <li>point2</li>
                          <li>point2</li>
                          <li>point2</li>
                        </div>
                      </span>
                    </div>

                    <div className="summaryProject">
                      <h1>Summary </h1>
                      Why is did this project and what i learned form
                      itsdddddddWhy is did this project and what i learned form
                      itsdddddddWhy is did this project and what i learned form
                      itsdddddddWhy is did this project and what i learned form
                      itsdddddddWhy is did this project and what i learned form
                      itsddddddd
                      <br></br> <br></br> <br></br> <br></br>
                      <nav className="navLink">
                        <img src={Github} />
                        <img src={View} />
                      </nav>
                    </div>
                  </div>
                </BackSide>
              </React.Fragment>
            </Flippy>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
