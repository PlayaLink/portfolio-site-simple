import React, { Component } from "react";
import add_item_and_share from "../../img/add_item_and_share.mp4";
import inject_link_calendar from "../../img/inject_link_calendar.mp4";
import add_remove_cards from "../../img/add_remove_cards.mp4";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Tooltip } from "react-tippy";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShowMore from "../widgets/ShowMore";
import { Link } from "react-router-dom";

const iconStyle = { background: "rgb(33, 150, 243)", color: "#fff" };

const Dot = styled.span`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 1rem;
  padding: 0.25rem;
  position: relative;
  top: -0.25rem;
`;

const TimelineItem = props => (
  <li className="mb-3">
    <div className="d-flex">
      <div className="col-3 text-uppercase pr-0 pl-1 font-weight-normal">
        {props.date}
      </div>{" "}
      <div className="col pl-2 font-weight-light">{props.description}</div>
    </div>
  </li>
);

const MeetlyIntro = () => (
  <div className="mt-5">
    <div className="d-flex justify-content-center row">
      <div className="col-12 col-md-6 col-lg-5">
        <h1 className="display-4">
          <span className="text-muted">Building A&nbsp;</span>Meeting Notes
          Management Tool&nbsp;<span className="text-muted">From Scratch</span>
        </h1>
        <h5 className="font-weight-light mt-3">
          Meetly allows you to create collaborative agendas, assign action
          items, and document decisions.
        </h5>
        <h5 className="font-weight-light mt-3">
          Users connect their Google or Microsoft calendar and Meetly
          automatically creates structured notes – called "workspaces" – for
          each of their meetings.
        </h5>
      </div>
    </div>
    <div className="row d-flex justify-content-center mt-3">
      <div className="col-12 col-md-8">
        <video
          className="img-fluid my-3"
          src={add_item_and_share}
          autoPlay="true"
          controls
        />
      </div>
    </div>
  </div>
);

const MeetlyBackground = () => (
  <div className="bg-white mt-5">
    <div className="d-flex justify-content-center">
      <div className="col-12 col-md-6">
        <h5 className="text-uppercase text-muted mt-5 mb-3">Context</h5>
        <h2 className="text-uppercase">How Meetly got started</h2>
        <p className="font-weight-light">
          The idea for Meetly came as operations were winding down at POPin, an
          Irvine, CA-based startup that made employee engagement software.
        </p>
        <p className="font-weight-light">
          Our team approached POPin's largest investor and secured seed money to
          develop the idea into a product.
        </p>
      </div>
    </div>
    <div className="d-flex justify-content-center mt-5">
      <div className="col-12 col-md-6">
        <div className="row">
          <div className="col-12 col-md-6">
            <h4 className="text-uppercase">The team</h4>
            <p className="font-weight-light">
              <ul className="ml-4">
                <li className="my-3">1 technical product manager</li>
                <li className="my-3">1 back-end engineer</li>
                <li className="my-3">1 front-end engineer</li>
                <li className="my-3">1 technical product designer (me)</li>
              </ul>
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h4 className="text-uppercase">My role</h4>
            <p className="font-weight-light">
              I owned the design and user research efforts.
            </p>
            <p className="font-weight-light">
              I also helped out on the frontend, adding polish and iterating on
              the design directly in the codebase.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center mt-5 pb-5">
      <div className="col-12 col-md-6">
        <h4 className="text-uppercase">Timeline</h4>
        {/*<h5 className="font-weight-light">Most of the greenfield design research occured in spring of 2019.</h5>*/}
        {/*<h5 className="font-weight-light">In June 2019, our team of four left POPin to develop Meetly.</h5>*/}
        <ul className="ml-4 mt-4">
          <TimelineItem
            date="Spring 2019"
            description="Product manager and I came up with the idea for Meetly while
        conducting research around how POPin users ran
        meetings."
          />
          <TimelineItem
            date="June 2019"
            description="Our team of 4 left POPin to develop Meetly fulltime."
          />
          <TimelineItem date="August 2019" description="Deployed an MVP." />
          <TimelineItem
            date="Sept 2019 – present"
            description="Continued to build, test, and learn."
          />
        </ul>
      </div>
    </div>
  </div>
);

const MeetlyResearch = () => (
  <div className="bg-light">
    <div className="d-flex justify-content-center mt-5">
      <div className="col-12 col-md-6">
        <h5 className="text-uppercase text-muted mb-4">Research</h5>
        <h2 className="text-uppercase">Process</h2>
        <p className="font-weight-light">
          I lead 13 interviews with executive assistants, project managers and
          department leaders (from HR, IT and sales) to learn about:
          <ol className="ml-4">
            <li className="my-3">
              how they schedule, conduct and document their meetings and
            </li>
            <li className="my-3">
              the tools they used to do their jobs, specifically tools that
              touched their meetings workflow.
            </li>
          </ol>
        </p>
        <p className="font-weight-light">
          Tested out a host of productivity SaaS products focused on project
          management, note-taking, and knowledge-base creation.
        </p>
        <h2 className="text-uppercase mt-5">Observations</h2>
        <p className="font-weight-light">
          <ul className="ml-4">
            <li className="my-3">
              Difficult to enforce proper meeting hygiene
            </li>
            <li className="my-3">
              Lack of accountability around tasks assigned / decisions made
            </li>
            <li className="my-3">
              Existing solutions are{" "}
              <Tooltip
                // options
                title="Asana, Monday, Confluence, etc"
                position="top"
                trigger="mouseenter"
                className="text-primary"
              >
                too complex
              </Tooltip>{" "}
              or too{" "}
              <Tooltip
                // options
                title="Google Docs, Trello"
                position="top"
                trigger="mouseenter"
                className="text-primary"
              >
                open-ended
              </Tooltip>
            </li>
            <li className="my-3">
              People and teams want to be more organized, but not if it creates
              more work for them
            </li>
          </ul>
        </p>
      </div>
    </div>
    <div className="d-flex justify-content-center mt-5">
      <div className="col-12 col-md-6">
        <h2 className="text-uppercase">Hypotheses</h2>
      </div>
    </div>
    <div className="d-flex justify-content-center">
      <div className="col-12 col-md-9 col-lg-6">
        <div className="d-flex flex-wrap flex-lg-nowrap my-4">
          <div className="col-12 col-lg-6 bg-secondary rounded-circle d-flex flex-column justify-content-center">
            <div className="font-weight-light p-5">
              <div className="text-center text-white text-uppercase mt-n2 mb-2 font-weight-normal">
                Self-serve
              </div>
              There is a need for something simpler than project management
              software, but more structured than text docs and todo lists.
            </div>
          </div>
          <div className="m-2" />
          <div className="col-12 col-lg-6 bg-secondary rounded-circle d-flex flex-column justify-content-center">
            <div className="font-weight-light p-5">
              <div className="text-center text-white text-uppercase mt-n2 mb-2">
                Enterprise
              </div>
              Companies would purchase and force adoption of a tool that
              encouraged, tracked, and improved meeting efficiency.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const NoExtraWork = () => (
  <div className="bg-white mt-5">
    <div className="d-flex justify-content-center">
      <div className="col-12 col-md-6">
        <h5 className="text-uppercase text-muted mt-5 mb-3">
          Design Principle #1
        </h5>
        <h2 className="text-uppercase">More organization, less work</h2>
        <p className="font-weight-light">
          We did not want to become <em>yet another tool</em> that people have
          to manage. Another blackhole for notes. Since everyone's meetings are
          determined by their calendar, that would be our single source of
          truth.
        </p>
        <p className="font-weight-light">
          <ul className="ml-4">
            <li className="my-3">
              Connecting your calendar autogenerates "workspaces" for each meeting
            </li>
            <li className="my-3">
              Notes&nbsp;<em className="font-weight-bold">stay in sync</em> with the calendar - if you change the meeting name, time or guest list, those changes
              are reflected in Meetly.
            </li>
            <li className="my-3">
              Access Meetly directly from your calendar
            </li>
          </ul>
        </p>
      </div>
    </div>
    <div className="row d-flex justify-content-center mt-4">
      <div className="col-12 col-md-8">
        <h6 className="text-uppercase mb-2">
          Inject Meetly "workspace" link into user's calendar
        </h6>
        <video
          className="img-fluid my-3"
          src={inject_link_calendar}
          autoPlay="true"
          loop="true"
          controls
        />
      </div>
    </div>
  </div>
);

const PrescriptiveButFlexible = () => (
  <div className="bg-light mt-5">
    <div className="d-flex justify-content-center">
      <div className="col-12 col-md-6">
        <h5 className="text-uppercase text-muted mt-5 mb-3">
          Design Principle #2
        </h5>
        <h2 className="text-uppercase">Prescriptive, but flexible</h2>
        <p className="font-weight-light">
          We wanted people to be able to click on a meeting and know exactly what to do.
        </p>
        <p className="font-weight-light">
          We include cards for agenda, action items, notes and decisions
          by default. This arrangement&nbsp;
          <em className="font-weight-bold">encourages meeting best practices</em>.
        </p>
        <p className="font-weight-light">
          However, a user can always remove, add or rename cards as needed.
        </p>
      </div>
    </div>
    <div className="row d-flex justify-content-center mt-4">
      <div className="col-12 col-md-8">
        <h6 className="text-uppercase mb-2">Customize a workspace</h6>
        <video
          className="img-fluid my-3"
          src={add_remove_cards}
          autoPlay="true"
          loop="true"
          controls
        />
      </div>
    </div>
  </div>
);

class Meetly extends Component {
  render() {
    return (
      <div className="">
        <MeetlyIntro />
        <MeetlyBackground />
        <MeetlyResearch />
        <NoExtraWork />
        <PrescriptiveButFlexible />
        <h5 className="text-muted my-4 text-center">
          This page is still being developed... In the meantime, feel free to
          visit Meetly directly!
        </h5>
        <div className="d-flex justify-content-center">
          <a href="https://runmeetly.com" className="button pink mb-5">
            <span className="mr-3">View the App</span>
            <FontAwesomeIcon icon="arrow-right" />
          </a>
        </div>
      </div>
    );
  }
}

export default Meetly;
