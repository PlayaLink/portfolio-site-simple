import React, { Component } from "react";
import { Link } from 'react-router-dom';

const TABS = {
  CASE_STUDIES: "case_studies",
  JOURNALISM: "journalism",
  ABOUT: "about"
};

const NavItem = props => (
  <li className="nav-item text-uppercase mx-2">
    <Link className={`nav-link ${props.active ? "active" : ""}`} to={props.href}>
      <h5>{props.title}</h5>
    </Link>
  </li>
);

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: null
    };
  }
  componentDidMount = () => {
    // this.setState({ activeTab: TABS.CASE_STUDIES})
  }

  handleNavItemClick = (tab) => {
    // this.setState({ activeTab: tab})
  }
  render() {
    const {activeTab} = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white container">
        <a className="navbar-brand text-uppercase" href="#">
          <h2>Jordan England-Nelson</h2>
        </a>
        <button
          className="navbar-toggler"
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
            <NavItem title="Case Studies" href="/" active={activeTab === TABS.CASE_STUDIES}/>
            <NavItem title="Journalism" href="/journalism" active={activeTab === TABS.JOURNALISM}/>
            <NavItem title="About" href="/about" active={activeTab === TABS.ABOUT} />
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
