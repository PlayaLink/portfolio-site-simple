import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import { findDOMNode } from "react-dom";

const TABS = {
  CASE_STUDIES: "/",
  ABOUT: "about"
};

const NavItem = props => (
  <li className="nav-item text-uppercase mx-2" onClick={props.onClick}>
    <NavLink
      className={`nav-link`}
      exact
      to={props.href}
      activeClassName="font-weight-bold text-primary"
    >
      <h5 className="text-right mb-0">{props.title}</h5>
    </NavLink>
  </li>
);

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.navbar = React.createRef();
    this.fullNavbar = React.createRef();
  }
  removeActiveClass = () => {
    const el = this.navbar.current;
    $(el).removeClass("show"); //or $('.active').removeClass('active');
  };
  calculateHeight = () => {
    const {getNavbarHeight} = this.props;
    const el = this.fullNavbar.current;
    console.log("initial height", el.getBoundingClientRect().height);
    let prevValue = JSON.stringify(el.getBoundingClientRect());
    const start = Date.now();
    const handle = setInterval(() => {
      let nextValue = JSON.stringify(el.getBoundingClientRect());
      if (nextValue === prevValue) {
        clearInterval(handle);
        console.log(
          `height stopped changing in ${Date.now() -
          start}ms. final height:`,
          el.getBoundingClientRect().height
        );
      } else {
        prevValue = nextValue;
      }
      getNavbarHeight(el.getBoundingClientRect().height)
    }, 100);
  }
  componentDidMount = () => {
    this.calculateHeight();
  }
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white container mb-0 d-flex flex-fill w-100"
        ref={this.fullNavbar}
      >
        <NavLink
          to="/"
          className="navbar-brand text-uppercase font-weight-bold"
        >
          <h2 className="d-none d-md-flex">Jordan England-Nelson</h2>
          <h2 className="d-flex d-md-none">J. England-Nelson</h2>
        </NavLink>
        <button
          className="navbar-toggler align-self-end mb-3"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
          ref={this.navbar}
        >
          <ul className="navbar-nav">
            <NavItem
              onClick={this.removeActiveClass}
              title="Recent Work"
              href="/case-studies"
            />
            {/*<NavItem title="Journalism" href="/journalism" active={activeTab === TABS.JOURNALISM}/>*/}
            <NavItem
              onClick={this.removeActiveClass}
              title="About"
              href="/about"
            />
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
