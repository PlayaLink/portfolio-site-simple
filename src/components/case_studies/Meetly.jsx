import React, { Component } from 'react';
import add_item_and_share from '../../img/add_item_and_share.mp4';
import calendar_integration from '../../img/calendar_integration.mp4';
import workspace_view from '../../img/workspace_view.jpg';
import add_remove_cards from '../../img/add_remove_cards.mp4';
import choose_template from '../../img/choose_template.mp4';
import meeting_groups from '../../img/meeting_groups.mp4';
import search from '../../img/search.mp4';
import { Waypoint } from 'react-waypoint';
import 'react-vertical-timeline-component/style.min.css';
import { Tooltip } from 'react-tippy';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Redirect } from "react-router-dom";

const iconStyle = { background: 'rgb(33, 150, 243)', color: '#fff' };

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
        { props.date }
      </div>
      { ' ' }
      <div className="col pl-2 font-weight-light">{ props.description }</div>
    </div>
  </li>
);

const MeetlyIntro = () => (
  <div className="mt-5">
    <div className="d-flex justify-content-center">
      <div className="col-12 col-md-6 col-lg-5">
        <h5 className="text-uppercase text-muted mt-5 mb-3">
          Product Development
        </h5>
        <h1 className="display-4">
          Turning an idea into a venture-backed startup
        </h1>
        <h3 className="text-muted font-weight-light">
          How design research lead to the creation of <a href="https://www.runmeetly.com" target="_blank">Meetly</a>, a meeting notes automation tool
        </h3>
        { /*<h5 className="font-weight-light mt-4">*/ }
        { /*Meetly is a <span className="font-weight-bold">calendar automation tool</span> that grew out of user research I conducted at POPin, my former employer.*/ }
        { /*</h5>*/ }
        { /*<h5 className="font-weight-light mt-4">*/ }
        { /*Three colleagues and I left POPin to turn the idea into a stand along product.*/ }
        { /*</h5>*/ }
      </div>
    </div>
    <div className="row d-flex justify-content-center mt-5">
      <div className="col-md-8 mb-5 no-gutters">
        <div className="p-3"><img alt="Meetly" className="img-fluid boxshadow rounded" src={workspace_view} /></div>
        {/*<PlayOnScroll id="meetly-overview" video={ add_item_and_share } />*/}
      </div>
    </div>
  </div>
);

const MeetlyBackground = () => (
  <div className="bg-white">
    <div className="d-flex justify-content-center">
      <div className="col-12 col-md-6  mt-5">
        <h2 className="text-uppercase">How Meetly started</h2>
        <p className="font-weight-light">
          The idea for Meetly grew out of user research I conducted at POPin, a former employer.
        </p>
        <p className="font-weight-light">
          After getting seed money from POPin's lead investor, three colleagues and I left POPin to turn the idea into a stand-alone product.
        </p>
      </div>
    </div>
    <div className="d-flex justify-content-center mt-5">
      <div className="col-12 col-md-6">
        <div className="row">
          <div className="col-12 col-md-6">
            <h4 className="text-uppercase">The team</h4>
            <ul className="ml-4 font-weight-light">
              <li className="my-3">1 technical product manager</li>
              <li className="my-3">1 back-end engineer</li>
              <li className="my-3">1 front-end engineer</li>
              <li className="my-3">1 technical product designer (me)</li>
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <h4 className="text-uppercase">My role</h4>
            <p className="font-weight-light">
              I owned the user research efforts and was responsible for the entire user experience, from product design to video tutorials and support articles.
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
        { /*<h5 className="font-weight-light">Most of the greenfield design research occured in spring of 2019.</h5>*/ }
        { /*<h5 className="font-weight-light">In June 2019, our team of four left POPin to develop Meetly.</h5>*/ }
        <ul className="ml-4 mt-4">
          <TimelineItem
            date="Spring 2019"
            description="Product manager and I came up with the idea for Meetly while
        conducting research around how POPin users ran
        meetings."
          />
          <TimelineItem
            date="May 2019"
            description="Raised 1st seed round."
          />
          <TimelineItem date="August 2019" description="Deployed an MVP." />
          <TimelineItem
            date="May 2020"
            description="Raised 2nd seed round."
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
        <h2 className="text-uppercase">Design Research</h2>
        <div className="font-weight-light">
          <p>While interviewing and observing users of POPin, an employee engagement tool, we
            discovered that people were using our tool to <span className="font-weight-bold">solve a problem</span> that was not on our radar:
            time wasted in unnecessary
            or <span className="font-weight-bold">unproductive meetings</span>.</p>
          <p>Recognizing an opportunity,
            our <span className="font-weight-bold">research objectives</span> changed to:</p>
          <ul className="ml-4">
            <li className="my-3">
              what is a successful meeting
            </li>
            <li className="my-3">
              what are the impediments to a successful meeting
            </li>
            <li className="my-3">
              how are people solving these challenges
            </li>
            <li className="my-3">
              what tools are they using
            </li>
          </ul>
        </div>
        <h2 className="text-uppercase mt-5">Observations</h2>
        <ul className="ml-4 font-weight-light">
          <li className="my-3">
            <div className="d-flex flex-column">
              <span>Difficult to enforce proper meeting hygiene</span>
              <span>e.g. every meeting should have an agenda and action items</span></div>
          </li>
          <li className="my-3">
            Lack of accountability around tasks assigned / decisions made
          </li>
          <li className="my-3">
            Existing solutions are{ ' ' }
            <Tooltip
              // options
              title="Asana, Monday, Confluence, etc"
              position="top"
              trigger="mouseenter"
              className="text-primary"
            >
              too complex
            </Tooltip>{ ' ' }
            or too{ ' ' }
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
              <div className="text-center font-weight-bold text-uppercase mt-n2 mb-2 font-weight-normal">
                Consumer
              </div>
              There is a need for something simpler than project management
              software, but more structured than text docs and todo lists.
            </div>
          </div>
          <div className="m-2" />
          <div className="col-12 col-lg-6 bg-secondary rounded-circle d-flex flex-column justify-content-center">
            <div className="font-weight-light p-5">
              <div className="text-center font-weight-bold text-uppercase mt-n2 mb-2">
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
          to manage, another black hole for notes. Since users already expend
          energy keeping their calendars organized, we would leverage that work
          by using their calendar as the single source of truth for Meetly content.
        </p>
        <ul className="ml-4 font-weight-light">
          <li className="my-3">
            Connecting your calendar auto-generates a set of structured notes,
            called "workspaces", for each of your meetings.
          </li>
          <li className="my-3">
            A workspaces&nbsp;<em className="font-weight-bold">stays in sync</em>{ ' ' }
            with its corresponding calendar event - if you change the meeting
            name, time or guest list, those changes are reflected in Meetly. This was technically
            difficult and <em className="font-weight-bold">no other notes tools does this.</em>
          </li>
          <li className="my-3">
            Individual workspaces are accessible directly from a user's calendar, and vice versa.
          </li>
        </ul>
      </div>
    </div>
    <VideoExample
      title="Two-way calendar integration"
      id="calendar-integration"
      body={
        <span>
          Injecting a link into each calendar event allows the user to access
          the notes for that meeting with one click.
        </span>
      }
      video={ calendar_integration }
    />
  </div>
);

class PlayOnScroll extends React.Component {
  startVideo = () => {
    const { id } = this.props;
    const video = document.getElementById(id);
    video.currentTime = 0;
    video.play();
  };

  render () {
    const { video, id } = this.props;
    return (
      <Waypoint onEnter={ this.startVideo }>
        <video
          className="img-fluid my-1 mb-md-5 mt-md-3 boxshadow rounded"
          src={ video }
          loop={ true }
          controls
          id={ id }
          muted
        />
      </Waypoint>
    );
  }
}

class VideoExample extends React.Component {
  render () {
    const { title, body, video, reverse, id } = this.props;
    return (
      <div
        className={ `d-md-flex justify-content-center mt-5 ${
          reverse ? 'flex-row-reverse' : ''
          }` }
      >
        <div className="col-12 col-md-3">
          <h5 className="text-uppercase mt-5 mb-3">
            { title }
          </h5>
          { /*<h6 className="text-uppercase mb-2 mt-md-5"></h6>*/ }
          <p className="font-weight-light d-none d-md-block">{ body }</p>
        </div>
        <div className="col-12 col-md-8">
          <PlayOnScroll video={ video } id={ id } />
        </div>
      </div>
    );
  }
}

const PrescriptiveButFlexible = () => (
  <div className="bg-white mt-5">
    <div className="d-flex justify-content-center">
      <div className="col-12 col-md-6">
        <SectionTitle heading="Design Principle #2" title="Prescriptive, but flexible" />
        <p className="font-weight-light">
          We wanted Meetly to be intuitive as a tool, but also "educational"
          when it comes to good meeting hygiene.
        </p>
        <p className="font-weight-light">
          When a user clicks on a meeting, it should be immediately obvious what
          they need to do – both as a user of the tool and as a responsible
          meeting organizer or participant.
        </p>
      </div>
    </div>
    <VideoExample
      title="Structured notes"
      id="structured-notes"
      body={
        <span>
          We include cards for agenda, action items, notes and decisions by
          default. This arrangement&nbsp;
          <em className="font-weight-bold">
            encourages meeting best practices
          </em>{ ' ' }
          while allowing a user to remove, add or rename cards as needed.
        </span>
      }
      video={ add_remove_cards }
    />
    <VideoExample
      title="Meeting templates"
      id="meeting-templates"
      body={
        <span>
          Users can create custom card arrangements for different meeting types.
        </span>
      }
      video={ choose_template }
    />
  </div>
);

const EasyToReference = () => (
  <div className="bg-white mt-5">
    <div className="d-flex justify-content-center">
      <div className="col-12 col-md-6">
        <SectionTitle heading="Design Principle #3" title="Easy to reference past notes" />
        <p className="font-weight-light">
          A common complaint we heard was that meeting minutes get shared via
          email, often as attachments, which makes it difficult to reference
          later and contributes to email clutter.
        </p>
      </div>
    </div>
    <VideoExample
      title="Robust search"
      id="robust-search"
      body={
        <span>
          The ability to search across all notes and meetings makes it easy to
          reference past topics.
        </span>
      }
      video={ search }
    />
    <VideoExample
      title="Meeting Groups"
      id="meeting-groups"
      body={
        <span>
          Grouping meetings together around a topic, team or project
          is another way users could organize and quickly reference content
        </span>
      }
      video={ meeting_groups }
    />
  </div>
);

const SectionTitle = (props) => {
  const { heading, title } = props;
  return (
    <React.Fragment>
      <h5 className="text-uppercase text-muted mt-5 mb-3">
        { heading }
      </h5>
      <h2 className="text-uppercase">
        { title }
      </h2>
    </React.Fragment>
  );
};

class Meetly extends Component {
  render () {
    return (
      <div className="">
        <MeetlyIntro />
        <MeetlyBackground />
        <MeetlyResearch />
        <NoExtraWork />
        <PrescriptiveButFlexible />
        <EasyToReference />
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
