import React, { Component } from "react";
import "./App.scss";
import Projects from "./components/Projects";
import Cards from "./components/Cards";
import About from "./components/About";
import Meetly from "./components/case_studies/Meetly";
import PopinLive from "./components/PopinLive";
import IepGoalTracker from "./components/IepGoalTracker";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faChevronDown,
  faDownload,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";

library.add(faArrowRight);
library.add(faChevronDown);
library.add(faInfoCircle);
library.add(faDownload);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="bg-light d-flex flex-column flex-fill">
          <div className="bg-white">
            <Navbar />
          </div>
          <div className="bg-light">
            <Route
              exact
              path={process.env.PUBLIC_URL + "/"}
              component={Projects}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/case-study/meetly"}
              component={Meetly}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/popin-live"}
              component={PopinLive}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/iep-goal-tracker"}
              component={IepGoalTracker}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/journalism"}
              component={Cards}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/about"}
              component={About}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
