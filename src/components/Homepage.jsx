import React from "react";
import "./About.scss";
import Timeline from "./Timeline";
import { DirectLink } from "react-scroll";
import jordan_portrait from "../img/jordan_portrait.jpg";
import glowing_shadow_portrait from "../img/glowing_shadow_portrait.png";
import spotlight_transparent from "../img/spotlight_transparent.png";
import email_icon from "../img/email_icon.svg";
import my_email from "../img/my_email.svg";
import short_t from "../img/short_t.svg";
import { Link } from "react-router-dom";
import workspace_view from "../img/workspace_view.jpg";

const BIG_TEXT = { fontSize: "2rem", lineHeight: "1rem" };

class SocialButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmail: false
    };
  }
  toggleEmail = () => {
    this.setState({ showEmail: !this.state.showEmail });
  };
  render() {
    const { showEmail } = this.state;
    return (
      <div className="header">
        <div className="icon-list">
          <a
            className="icon linkedin"
            href="https://www.linkedin.com/in/jordan-england-nelson-05283494/"
            target="_blank"
          />
          <a
            className="icon twitter"
            href="https://twitter.com/jordanenelson"
            target="_blank"
          />
          <div>
            <img
              onMouseEnter={this.toggleEmail}
              onMouseLeave={this.toggleEmail}
              src={showEmail ? my_email : email_icon}
            />
          </div>
          {/*<a className="icon github" href="https://github.com/PlayaLink" target="_blank"></a>*/}
        </div>
        <div className="tagline">
          {/*<p>I'm a <strong>product developer</strong> with broad startup experience in tech.</p>*/}
          {/*<p>I try to <span className="blue">understand</span> people, so I can <span className="red">design</span> things they need, and <span className="teal">build</span> things they will use.</p>*/}
          {/*<div>I try to <span className="blue">understand</span> people</div>*/}
          {/*<div>So I can <span className="red">design</span> things they need</div>*/}
          {/*<div>And <span className="teal">build</span> things they will use.</div>*/}
          {/*<p style={{textAlign: 'left'}}>I try to understand people</p>*/}
          {/*<p style={{textAlign: 'center'}}>So I can design things they need</p>*/}
          {/*<p style={{textAlign: 'right'}}>And build things they will use.</p>*/}
          {/*<p style={{textAlign: 'left'}}>I try to <span className="blue">understand</span> people</p>*/}
          {/*<p style={{textAlign: 'center'}}>So I can <span className="red">design</span> things they need</p>*/}
          {/*<p style={{textAlign: 'right'}}>And <span className="teal">build</span> things they will use.</p>*/}
        </div>
      </div>
    );
  }
}

const Summary = () => (
  <div className="summary">
    <div className="subtitle">Not your average tech bro.</div>
    <p>
      I've spent the last 3 years focused on software development, I don't
      really care about code, per se. I only care about the things I can create
      with code.
    </p>
    <p>
      I spent my twenties racking up humanities degrees, learning different
      languages, and hitch-hiking around Europe.
    </p>
    <p>
      As a journalist, I got to ride to Catalina on an amphibious car, sat in
      Elon Musk's space ship and toured the Boeing space facility that built the
      world's most powerful space telescope.
    </p>
    <p>
      My career in tech started as a content marketer, then digital marketing,
    </p>
  </div>
);

class Bio extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="about bg-black position-fixed">
        <div className="">
          <div className="row vh-100 d-flex align-items-center justify-content-around">
            <div className="col-md-7">
              <div className="d-flex justify-content-center">
                <img src={glowing_shadow_portrait} className="img-fluid" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="my-auto text-light px-5 mr-md-5">
                <h5 className="mt-4 mb-3">
                  <span className="" style={BIG_TEXT}>
                   I am a person
                  </span>{" "} who is interested in others, loves to read, roller skate and speak French and Spanish.
                </h5>
                <h5 className="mt-4 mb-3">
                  <span className="" style={BIG_TEXT}>
                   My product experience
                  </span>{" "} blurs the lines between research,
                  design and development, having spent the last 4 years at
                  small, early stage startups.
                </h5>
                <h5 className="mt-4 mb-3">
                  <span className="" style={BIG_TEXT}>
                    I am a translator
                  </span>{" "}
                  of user needs into product ideas, of ideas into designs, and
                  of designs into code.
                </h5>
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
