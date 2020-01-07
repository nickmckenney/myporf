import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Github from "./github-brands.svg";
import View from "./eye-solid.svg";

import "./App.css";
import TowerOfHanoi from "./Tower.png";
import calendar from "./calendar.png";
import gov from "./gov.png";
import Tripper from "./CoTripper.png";

import NasaPic from "./nasaPic.png";
import WordPress from "./wordPress.png";

const FlippyStyle = {
  textAlign: "center",
  justifyContent: "center",
  height: "60vh"
};

class App extends Component {
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
                  <h1 className="project-title">Tower of Hanoi</h1>
                  <div className="project-subtitle">
                    First project at programming bootcamp. Used Javascript,
                    CSS3, and HTML5 to make this game work. Game logic is
                    exactly like Tower of Hanoi. This is a DOM based game and
                    only used DOM manipulation
                  </div>
                </div>
                <nav className="navLink">
                  <a href="https://github.com/nickmckenney/TowerOfHanoi">
                    Github
                  </a>
                  <a
                    className="break"
                    href="https://nickmckenney.github.io/TowerOfHanoi/"
                  >
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
                  <h1 className="project-title">Google calendar Mock</h1>
                  <div className="project-subtitle">
                    My third project at a coding bootcamp covering the entire
                    MERN Stack. This calendar fetches from a third party API in
                    the Backend and creates a selected dataset and the Frontend
                    gets that information by using React
                  </div>
                </div>
                <nav className="navLink">
                  <a href="https://github.com/nickmckenney/calanderprojectMERN">
                    Github
                  </a>
                  <a
                    className="break"
                    href="https://calanderproject.netlify.com/"
                  >
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
                  <h1 className="project-title">Government Funding API</h1>
                  <div className="project-subtitle">
                    Fetched all data from an API and used Mongoose/express to
                    create full CRUD functionality with the backend and used
                    React to fetch data from a host I created that filters data
                    from the orginal API.
                  </div>
                </div>
                <nav className="navLink">
                  <a href="https://github.com/nickmckenney/Building-a-JSON-API">
                    Github
                  </a>
                  <a
                    className="break"
                    href="https://frontendapi.mckenney2001.now.sh"
                  >
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
                  <h1 className="project-title">CoTripper</h1>
                  <div className="project-subtitle">
                    This was an agile/kanban project plan with a team of 24 plus
                    people. My part focused on Frontend work with React and
                    using routers to navigate throughout the entire website.
                  </div>
                </div>
                <nav className="navLink">
                  <a href="https://github.com/CotripperPlatform/CoTrip">
                    Github
                  </a>
                  <a className="break" href="">
                    Deployed Site
                  </a>
                </nav>
              </div>
            </Flippy>
          </div>
          <div class="projects">
            <Flippy
              flipOnHover={true}
              flipDirection={"vertical"}
              style={FlippyStyle}
            >
              <div className="BacksideProject">
                <img className="BackSideTower" src={NasaPic} />

                <div className="project-text">
                  <h1 className="project-title">Nasa Pictures</h1>
                  <div className="project-subtitle">
                    A Small project in progress that updates with a new picture
                    every day. Uses the entire Mern Stack. This project was
                    completed after General Assembly and it was intended as a
                    refresher of creating full stack apps
                  </div>
                </div>
                <nav className="navLink">
                  <a href="">Github</a>
                  <a className="break" href="https://nasapictures.netlify.com/">
                    Deployed Site
                  </a>
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
