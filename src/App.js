import React, { Component } from "react";
import "./App.scss";
import Home from "./components/Home";
import Cards from "./components/Cards";
import PieChart from "./components/PieChart";
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
import Navbar from './components/Navbar';

library.add(faArrowRight);
library.add(faChevronDown);
library.add(faInfoCircle);
library.add(faDownload);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
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
        </div>
      </Router>
    );
  }
}

export default App;
