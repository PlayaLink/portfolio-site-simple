import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const TABS = {
  CASE_STUDIES: "/",
  ABOUT: "about"
};

const NavItem = props => (
  <li className="nav-item text-uppercase mx-2">
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

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white container mb-0">
      <NavLink to="/" className="navbar-brand text-uppercase font-weight-bold">
        <h2 className="d-md-inline">Jordan</h2>
        <h2 className="d-md-inline ml-3 ml-md-0 pl-2">England-</h2>
        <h2 className="d-md-inline ml-5 ml-md-0">Nelson</h2>
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
      >
        <ul className="navbar-nav">
          <NavItem title="Case Studies" href="/case-studies" />
          {/*<NavItem title="Journalism" href="/journalism" active={activeTab === TABS.JOURNALISM}/>*/}
          <NavItem title="About" href="/about" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
