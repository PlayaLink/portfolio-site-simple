import React from "react";
import "./About.scss";
import Timeline from "./Timeline";
import { DirectLink } from "react-scroll";
import jordan_portrait from "../img/jordan_portrait.jpg";
import email_icon from "../img/email_icon.svg";
import my_email from "../img/my_email.svg";
import short_t from "../img/short_t.svg";
import { Link } from "react-router-dom";
import { isMobile } from "../utils";
import glowing_shadow_portrait from "../img/glowing_shadow_portrait.png";

export class SocialButtons extends React.Component {
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
            className="icon linkedin mr-2"
            href="https://www.linkedin.com/in/jordan-england-nelson/"
            target="_blank"
          />
          <div className="icon my-email ml-2">
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

export class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const topSpacing = isMobile ? "6.3rem" : "3.5rem";
    return (
      <div className="about bg-black pb-5 flex-fill w-100">
        <div style={{ height: topSpacing }} />
        <div className="row d-flex justify-content-center pt-md-5 px-3 pb-5 pb-md-2flex-fill w-100">
          {/*<div className="d-none d-md-block col-6 mb-5 mb-md-0 col-md-6 col-lg-3 mr-lg-4">*/}
            {/*<img*/}
              {/*src={jordan_portrait}*/}
              {/*alt="Jordan England-Nelson"*/}
              {/*className="img-fluid rounded-lg d-none d-md-block"*/}
            {/*/>*/}
          {/*</div>*/}
          <div className={`col-md-8`}>
            <img
              src={glowing_shadow_portrait}
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="col-md-4 d-flex align-items-center">
            {/*<div className={`row d-flex align-items-center justify-content-around flex-fill w-100 ${*/}
                {/*isMobile() ? "pt-5 mt-3" : "h-100"*/}
              {/*}`}*/}
            {/*>*/}
              {/*<div className={`col-md-7`}>*/}
                {/*<img*/}
                  {/*src={glowing_shadow_portrait}*/}
                  {/*style={{ maxWidth: "100%" }}*/}
                {/*/>*/}
              {/*</div>*/}
              {/*<div className={`col-md-5 ${isMobile() ? "mt-5 pt-3" : ""}`}>*/}
                {/*<div className="my-auto text-light px-4 mr-md-5">*/}
                  {/*<h1 className="mb-0">*/}
                    {/*<span className="text-nowrap page-header">*/}
                      {/*Product designer*/}
                    {/*</span>{" "}*/}
                    {/*<span className="text-white"> +</span>*/}
                  {/*</h1>{" "}*/}
                  {/*<h1 className="mb-0 mb-md-3 page-header">*/}
                    {/*Journalism survivor*/}
                  {/*</h1>{" "}*/}
                  {/*<h3 className="mt-3 text-gray">*/}
                    {/*<div className="mb-2">*/}
                      {/*<span>Interaction design | </span>*/}
                      {/*<span className="text-nowrap">Systems design | </span>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                      {/*<span className="">Information architecture | </span>*/}
                      {/*<span className="">Javascript </span>*/}
                    {/*</div>*/}
                  {/*</h3>*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*</div>*/}

            <div className="d-flex flex-column text-white">
              <p className="pt-5 p-md-0 mt-1">
                <div>I never identified as a technical person.</div>I was a
                humanities guy – obsessed with French and Spanish.
              </p>
              <p>
                And then I realized JavaScript is just a language – a way to
                transmit ideas from one system to another.
              </p>
              <p>
                Design, too, is a language. We listen and observe people. We try
                to interpret their needs, goals and behaviors. We translate what
                they say and do into what we think they mean and want, so that
                our response – our product – is relevant and helpful.
              </p>
              <p>
                Whether it’s distilling a complex topic into a short newspaper
                story or explaining a user's problem to a development team, a
                good translator groks the essence of the idea and transforms it
                into something the other side understands.
              </p>
              <div>
                <SocialButtons />
              </div>
            </div>
          </div>
        </div>
        <Timeline />
      </div>
    );
  }
}

