import React, { Component } from "react";
import "./App.scss";
import Projects from "./components/Projects";
import Cards from "./components/Cards";
import About from "./components/About";
import Homepage from "./components/Homepage";
import Meetly from "./components/case_studies/Meetly";
import DataDrivenDesign from "./components/case_studies/DataDrivenDesign";
import PopinLive from "./components/PopinLive";
import IepGoalTracker from "./components/IepGoalTracker";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faChevronDown,
  faDownload,
  faInfoCircle,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
import ScrollToTop from './util/ScrollToTop';
import { isMobile } from './utils';

library.add(faArrowRight);
library.add(faChevronDown);
library.add(faInfoCircle);
library.add(faDownload);
library.add(faPlusCircle);

class App extends Component {
  render() {
    return (
      <Router>
        <div className={`${isMobile() ? "" : "vh-100"}`}>
          <ScrollToTop/>
          <div className="bg-white fixed-top flex-fill w-100">
            <Navbar />
          </div>
          <div className="flex-fill w-100 h-100" style={{paddingTop : "5rem"}}>
            <Route
              exact
              path={process.env.PUBLIC_URL + "/"}
              component={Homepage}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/case-studies"}
              component={Projects}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/case-study/meetly"}
              component={Meetly}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/case-study/data-driven-design"}
              component={DataDrivenDesign}
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
