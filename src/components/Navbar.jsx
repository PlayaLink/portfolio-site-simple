import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import { isMobile } from '../utils';

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
  }
  removeActiveClass = () => {
    const el = this.navbar.current;
    $(el).removeClass("show"); //or $('.active').removeClass('active');
  };
  render() {
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white  mt-0 mb-0 mt-md-1 d-flex flex-fill w-100 ${isMobile() ? "" : "container"}`}
      >
        <NavLink
          to="/"
          className="navbar-brand text-uppercase font-weight-bold"
        >
          <h2 className="d-none d-md-flex mb-0 mb-md-1">Jordan England-Nelson</h2>
          <h2 className="d-flex d-md-none mb-0">J. England-Nelson</h2>
        </NavLink>
        <button
          className="navbar-toggler align-self-end my-1 mb-md-3"
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
            {/*<NavItem*/}
              {/*onClick={this.removeActiveClass}*/}
              {/*title="Recent Work"*/}
              {/*href="/case-studies"*/}
            {/*/>*/}
            {/*<NavItem title="Journalism" href="/journalism" active={activeTab === TABS.JOURNALISM}/>*/}
            <NavItem
              onClick={this.removeActiveClass}
              title="About me"
              href="/about"
            />
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
