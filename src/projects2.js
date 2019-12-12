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
                    This was the first project I did at General Assembly that is
                    a front-end game. I used javascript, CSS3, and HTML5 to make
                    this game work
                  </div>
                </div>
                <nav className="navLink">
                  <a href="">Github</a>
                  <a className="break" href="">
                    Deployed Site
                  </a>
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
                  <div className="project-title">Google calendar Mock</div>
                  <div className="project-subtitle">
                    My third project at a coding bootcamp covering the entire
                    MERN Stack. This calendar fetches from a third party API in
                    the Backend and creates a selected dataset and the Frontend
                    gets that information by using React
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
                  <div className="project-title">Government Funding API</div>
                  <div className="project-subtitle">
                    A project on government funding towards States and
                    Contractors. Fetched all data from an API and used
                    Mongoose/express to create full CRUD functionality with the
                    backend and used React to fetch data from a host I created
                    that filters data from the orginal API.
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
                    This was an agile/kanban project plan with a team of 24 plus
                    people. My part focused on Frontend work with React and
                    using routers to navigate throughout the entire website.
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
