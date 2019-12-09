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
              <React.Fragment>
                <FrontSide>
                  <h1 className="projectName">Tower Of Hanoi</h1>
                  <div className="FrontSideTower"></div>{" "}
                  <h1 className="projectDescriptionFront">
                    balalalallalaalaa balalalaallalal balalalallala
                    baallaaallala
                  </h1>
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
                      <div className="br"></div>

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
                        <a href="">Github</a>
                        <a href="">Deployed Site</a>
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
              flipDirection={"vertical"}
              style={FlippyStyle}
            >
              <React.Fragment>
                <FrontSide>
                  <h1 className="projectName">Google Calendar Mock</h1>
                  <div className="FrontSideCalendar"></div>{" "}
                  <h1 className="projectDescriptionFront">
                    balalalallalaalaa balalalaallalal balalalallala
                    baallaaallala
                  </h1>
                </FrontSide>
                <BackSide>
                  <div className="BacksideProject">
                    <img className="BackSideTower" src={calendar} />
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
                        <a href="">Github</a>

                        <a href="">Deployed Site</a>
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
              flipDirection={"vertical"}
              style={FlippyStyle}
            >
              <React.Fragment>
                <FrontSide>
                  <h1 className="projectName">Government Funding MERN STACK</h1>

                  <div className="FrontSideGov"></div>
                  <h1 className="projectDescriptionFront">
                    balalalallalaalaa balalalaallalal balalalallala
                    baallaaallala
                  </h1>
                </FrontSide>
                <BackSide>
                  <div className="BacksideProject">
                    <img className="BackSideTower" src={gov} />
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
                        <a href="">Github</a>
                        <a href="">Deployed Site</a>
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
              flipDirection={"vertical"}
              style={FlippyStyle}
            >
              <React.Fragment>
                <FrontSide>
                  <h1 className="projectName">CoTripper</h1>

                  <div className="FrontSideTrip"></div>
                  <h1 className="projectDescriptionFront">
                    balalalallalaalaa balalalaallalal balalalallala
                    baallaaallala
                  </h1>
                </FrontSide>
                <BackSide>
                  <div className="BacksideProject">
                    <img className="BackSideTower" src={Tripper} />
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
                        <a href="">Github</a>
                        <a href="">Deployed Site</a>
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
