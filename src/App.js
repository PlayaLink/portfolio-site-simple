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
import ScrollToTop from "./util/ScrollToTop";
import { isMobile } from "./utils";

library.add(faArrowRight);
library.add(faChevronDown);
library.add(faInfoCircle);
library.add(faDownload);
library.add(faPlusCircle);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { navbarHeight: 0, scrollPosition: 0 };
    this.fullNavbar = React.createRef();
  }
  setNavbarHeight = height => {
    this.setState({ navbarHeight: height });
  };
  calculateHeight = () => {
    const el = this.fullNavbar.current;
    console.log("initial height", el.getBoundingClientRect().height);
    let prevValue = JSON.stringify(el.getBoundingClientRect());
    const start = Date.now();
    const handle = setInterval(() => {
      let nextValue = JSON.stringify(el.getBoundingClientRect());
      if (nextValue === prevValue) {
        clearInterval(handle);
        console.log(
          `height stopped changing in ${Date.now() - start}ms. final height:`,
          el.getBoundingClientRect().height
        );
      } else {
        prevValue = nextValue;
      }
      this.setNavbarHeight(el.getBoundingClientRect().height);
    }, 100);
  };
  listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        this.calculateScrollDistance();
      });
    });
  }

  calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = this.getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPosition = Math.floor(scrollTop / totalDocScrollLength * 100)

    this.setState({
      scrollPosition,
    });
  }

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  componentDidMount = () => {
    this.calculateHeight();
    this.listenToScrollEvent();
  };
  render() {
    return (
      <Router>
        <div className={`${isMobile() ? "" : "vh-100"}`}>
          <ScrollToTop />
          <div
            className="bg-white fixed-top flex-fill w-100"
            ref={this.fullNavbar}
          >
            <Navbar getNavbarHeight={this.getNavbarHeight} />
          </div>
          <div className="flex-fill w-100 h-100">
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
              render={(props) => (
                <DataDrivenDesign {...props} top={`${this.state.navbarHeight}px`} scroll={this.state.scrollPosition + '%'} />
              )}
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
