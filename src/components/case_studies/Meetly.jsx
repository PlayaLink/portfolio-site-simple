import React, { Component } from "react";
import add_item_and_share from "../../img/add_item_and_share.mp4";
import calendar_integration from "../../img/calendar_integration.mp4";
import monday_schedule_view from "../../img/monday_schedule_view.png";
import chrome_extension_meetly from "../../img/chrome_extension_meetly.png";
import screened_respondents from "../../img/screened_respondents.png";
import users_interview_screening from "../../img/users_interview_screening.png";
import workspace_view from "../../img/workspace_view.jpg";
import automations from "../../img/automations.jpg";
import user_interviews from "../../img/user_interviews.jpg";
import add_remove_cards from "../../img/add_remove_cards.mp4";
import choose_template from "../../img/choose_template.mp4";
import meeting_groups from "../../img/meeting_groups.mp4";
import search from "../../img/search.mp4";
import { Waypoint } from "react-waypoint";
import "react-vertical-timeline-component/style.min.css";
import { Tooltip } from "react-tippy";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from "react-router-dom";
import { GroupHeader, GroupTitle } from "../SharedComponents";

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
      <div className="col pl-2">{props.description}</div>
    </div>
  </li>
);

const MeetlyIntro = () => (
  <div className="mt-5">
    <div className="container">
      <div className="col-12 col-md-8 pl-0">
        <h1 className="display-4 page-header">
          Developing an idea into a venture-backed startup
        </h1>
        <h3 className="font-weight-normal">
          How design research lead to the creation of{" "}
          <a
            href="https://www.runmeetly.com"
            className="text-primary font-weight-bolder"
            target="_blank"
          >
            Meetly
          </a>
          , a meeting notes automation tool
        </h3>
        {/*<h5 className="font-weight-light mt-4">*/}
        {/*Meetly is a <span className="font-weight-bold">calendar automation tool</span> that grew out of user research I conducted at POPin, my former employer.*/}
        {/*</h5>*/}
        {/*<h5 className="font-weight-light mt-4">*/}
        {/*Three colleagues and I left POPin to turn the idea into a stand along product.*/}
        {/*</h5>*/}
      </div>
      <div className="mt-md-3" style={{ height: "3rem" }} />

      <div className="d-flex flex-column">
        <h3 className="font-weight-light mb-3">The Web App</h3>
        <div className="mb-5">
          <img
            alt="Meetly"
            className="img-fluid boxshadow rounded"
            src={workspace_view}
          />
          {/*<PlayOnScroll id="meetly-overview" video={ add_item_and_share } />*/}
        </div>
      </div>
      <div className="d-flex flex-column mt-5">
        <h3 className="font-weight-light">The Chrome Extension</h3>
        <div className="mb-5">
          <img
            alt="Monday integration"
            className="img-fluid boxshadow rounded"
            src={chrome_extension_meetly}
          />
          {/*<PlayOnScroll id="meetly-overview" video={ add_item_and_share } />*/}
        </div>
      </div>
      <div className="d-flex flex-column mt-5">
        <h3 className="font-weight-light">The monday.com Integration</h3>
        <div className="mb-5">
          <img
            alt="Monday integration"
            className="img-fluid boxshadow rounded"
            src={monday_schedule_view}
          />

          {/*<PlayOnScroll id="meetly-overview" video={ add_item_and_share } />*/}
        </div>
      </div>
    </div>
  </div>
);

const MeetlyBackground = () => (
  <div className="bg-white">
    <div className="container pt-5">
      <div className="col-12 col-md-8 pl-0">
        <h1 className="display-4 mb-5 page-header">Context</h1>
        <GroupTitle title="How Meetly started" />
        <p className="">
          The idea for Meetly grew out of user research I conducted at POPin, an
          employee survey startup that was running out of runway.
        </p>
        <p className="">
          After getting seed money from POPin's lead investor, 4 colleagues and
          I left POPin to turn the idea into a stand-alone product.
        </p>
      </div>

      <div className="d-flex mt-5">
        <div className="col-12 col-md-8 pl-0">
          <div className="row">
            <div className="col-12 col-md-6">
              <GroupTitle title="The team" />
              <ul className="ml-4">
                <li className="my-3">1 technical product manager</li>
                <li className="my-3">2 back-end engineers</li>
                <li className="my-3">1 front-end engineer</li>
                <li className="my-3">1 technical product designer (me)</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 mt-5 mt-md-0">
              <GroupTitle title="My role" />
              <p className="">
                I owned the user research efforts and was responsible for the
                entire user experience, from product design to video tutorials
                and support articles.
              </p>
              <p className="">
                I also helped out on the frontend, adding polish and iterating
                on the design directly in the codebase.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mt-5 pb-5">
        <div className="col-12 col-md-8 pl-0">
          <GroupTitle title="Timeline" />
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
              date="May 2019"
              description="Raised 1st seed round."
            />
            <TimelineItem date="August 2019" description="Deployed an MVP." />
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const MeetlyResearch = () => (
  <div className="bg-light">
    <div className="container">
      <div className="col-12 col-md-8 pl-0">
        <div className="mb-5">
          <h1 className="display-4 mb-3 page-header">Research</h1>
          <p>
            While conducting greenfield research with POPin users to identify
            new product opportunities, we discovered people were using our
            survey tool to <span className="">solve a problem</span> that was
            not on our radar:{" "}
            <span className="text-uppercase">
              time wasted in unnecessary or unproductive meetings
            </span>
            .
          </p>
          <p>
            Recognizing an opportunity, we stopped asking people about POPin and
            refocused our research efforts:
          </p>
        </div>
        <GroupHeader title="Questions" noContainer={true}>
          <div className="">
            <ul className="ml-4 mt-4">
              <li className="my-3">what makes for a successful meeting?</li>
              <li className="my-3">
                what are the impediments to a successful meeting?
              </li>
              <li className="my-3">how are people solving these challenges?</li>
              <li className="my-3">what tools are they using?</li>
            </ul>
          </div>
        </GroupHeader>
        <GroupHeader
          title="Targeting users with specific jobs-to-be-done"
          noContainer={true}
        >
          <div className="py-md-3">
            <div className="">
              <img
                className="img-fluid"
                src={users_interview_screening}
                alt="User survey"
              />
            </div>
            <div className="">
              <img
                className="img-fluid mt-5"
                src={screened_respondents}
                alt="Screened respondents"
              />
            </div>
          </div>
        </GroupHeader>
        <GroupHeader title="User interviews">
          <div className="pl-0 mb-3">
            <img
              className="img-fluid"
              src={user_interviews}
              alt="Users inteviews"
            />
          </div>
        </GroupHeader>

        <GroupHeader title="Key observations">
          <ul className="ml-5">
            <li className="my-3">
              <div className="d-flex flex-column">
                <span>Difficult to enforce proper meeting hygiene</span>
                <span>
                  e.g. every meeting should have an agenda and action items
                </span>
              </div>
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
        </GroupHeader>
      </div>
      <div className="d-flex mt-5">
        <GroupHeader title="Hypotheses">
          <div className="row">
            <div className="col-md-9">
              <div className="d-flex flex-wrap flex-lg-nowrap my-4">
                <div className="col-12 col-lg-6 bg-secondary rounded-circle d-flex flex-column justify-content-center">
                  <div className="p-5">
                    <div className="text-center font-weight-bold text-uppercase mt-n2 mb-2 font-weight-normal">
                      Self-serve Product
                    </div>
                    There is a consumer need for something simpler than project
                    management software, but more structured than text docs and
                    todo lists.
                  </div>
                </div>
                <div className="m-2" />
                <div className="col-12 col-lg-6 bg-secondary rounded-circle d-flex flex-column justify-content-center">
                  <div className="p-5">
                    <div className="text-center font-weight-bold text-uppercase mt-n2 mb-2">
                      Enterprise product
                    </div>
                    Companies would purchase and force adoption of a tool that
                    encouraged, tracked, and improved meeting efficiency.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GroupHeader>
      </div>
    </div>
  </div>
);

const NoExtraWork = () => (
  <div className="bg-light mt-5">
    <div className="container mb-0">
      <div className="col-12 col-md-9 pl-0">
        <GroupHeader eyebrow="Problem" title="App fatigue">
          <p>
            More tools means more logins to manage, more trainings for teams to
            schedule and more information silos.
          </p>
        </GroupHeader>
        <GroupHeader
          eyebrow="Design Principle"
          title="More organization, less work"
          className="ml-md-5"
        >
          <p>
            We wanted to leverage energy that users were already putting into
            their calendars and other productivity tools.
          </p>
          <p>
            The goal was to integration into a users existing meeting workflow,
            so that we bring value without more tools to manage.
          </p>
        </GroupHeader>
      </div>
      <GroupHeader
        eyebrow="Solution I"
        className="ml-md-5 pl-md-5"
        title="Automate meeting management workflow"
      >
        <p>
          Automations provide organizational value without requiring the
          meeting organizer to expend any energy.
        </p>
        <img src={automations} alt="" />
      </GroupHeader>
      <GroupHeader
        eyebrow="Solution II"
        className="ml-md-5 pl-md-5"
        title="Leverage calendar to organize meeeting notes"
      >
        <p>
          Meeting notes live on top of a user's calendar events. Meeting
          information stays in sync. Cross-linking allows you to find your
          notes via your calendar.
        </p>
        <div className="">
          <PlayOnScroll video={calendar_integration} id="calendar-integration" />
        </div>
      </GroupHeader>
    </div>
  </div>
);

class PlayOnScroll extends React.Component {
  startVideo = () => {
    const { id } = this.props;
    const video = document.getElementById(id);
    video.currentTime = 0;
    video.play();
  };

  render() {
    const { video, id } = this.props;
    return (
      <Waypoint onEnter={this.startVideo}>
        <video
          className="img-fluid my-1 mb-md-5 mt-md-3 boxshadow rounded"
          src={video}
          loop={true}
          controls
          id={id}
          muted
        />
      </Waypoint>
    );
  }
}

class MediaExample extends React.Component {
  render() {
    const { title, body, video, id, className, subtitle, image } = this.props;
    return (
      <div className={`${className}`}>
        <div className="col-12 col-md-8 pl-0">
          <SubtitleTitleBody subtitle={subtitle} title={title} body={body} />
        </div>
        {!!video && (
          <div className="">
            <PlayOnScroll video={video} id={id} />
          </div>
        )}
        {!!image && (
          <div>
            <img className="img-fluid" src={image} alt="image" />
          </div>
        )}
      </div>
    );
  }
}

const PrescriptiveButFlexible = () => (
  <div className="bg-white mt-5">
    <div className="container mb-0">
      <h1 className="display-4 pt-5 page-header">Design principles</h1>
      <div className="col-12 col-md-9 pl-0">
        <SubtitleTitleBody
          subtitle="Problem"
          title="Difficult to enforce good meeting structure"
          body={[
            <p>
              Most people know meetings without agendas are less focused. And
              that meetings without clear action items are a big no-no.{" "}
            </p>,
            <p>
              But it's not easy to get a team to adopt better meeting habits.
            </p>
          ]}
        />
        <SubtitleTitleBody
          className="ml-md-5"
          subtitle="Design Principle"
          title="Be prescriptive, but flexible"
          body={[
            <p>
              We wanted Meetly to be intuitive as a tool, but also "educational"
              when it comes to good meeting hygiene.
            </p>,
            <p>
              When a user clicks on a meeting, it should be immediately obvious
              what they need to do – both as a user of the tool and as a
              responsible meeting organizer or participant.
            </p>
          ]}
        />
      </div>
      <MediaExample
        subtitle="Solution I"
        className="ml-md-5 pl-md-5"
        title="Default notes structure"
        id="structured-notes"
        body={
          <span>
            We include cards for agenda, action items, notes and decisions by
            default. This arrangement&nbsp;
            <em className="font-weight-bold">
              encourages meeting best practices
            </em>{" "}
            while allowing a user to remove, add or rename cards as needed.
          </span>
        }
        video={add_remove_cards}
      />
      <MediaExample
        subtitle="Solution II"
        className="ml-md-5 pl-md-5"
        title="Customizable templates"
        id="meeting-templates"
        body={
          <span>
            Users can create custom card arrangements for different meeting
            types.
          </span>
        }
        video={choose_template}
      />
    </div>
  </div>
);

const EasyToReference = () => (
  <div className="bg-light pt-5">
    <div className="container mb-0">
      <div className="col-12 col-md-9 pl-0">
        <SubtitleTitleBody
          subtitle="Problem"
          title="Siloed information"
          body={[
            <p>
              Another productivity tool means another system to manage, another
              place for information to be lost, another walled garden that
              people need to log in to to access.{" "}
            </p>
          ]}
        />
        <SubtitleTitleBody
          className="mt-5 ml-md-5"
          subtitle="Design Principle"
          title="Make it easy to find and share notes"
          body={[
            <p>
              A common complaint we heard was that meeting minutes get shared
              via email, often as attachments or links to services that require
              login, making it difficult to reference later and contributes to
              email clutter.
            </p>
          ]}
        />
      </div>
      <MediaExample
        subtitle="Solution I"
        className="mt-5 ml-md-5 pl-md-5"
        title="Robust search"
        id="robust-search"
        body={
          <span>
            The ability to search across all notes and meetings makes it easy to
            reference past topics.
          </span>
        }
        video={search}
      />
      <MediaExample
        subtitle="Solution II"
        className="ml-md-5 pl-md-5"
        title="Meeting Groups"
        id="meeting-groups"
        body={
          <span>
            Grouping meetings together around a topic, team or project is
            another way users could organize and quickly reference content
          </span>
        }
        video={meeting_groups}
      />
    </div>
  </div>
);

const SectionTitle = props => {
  const { heading, title } = props;
  return (
    <React.Fragment>
      <h5 className="text-uppercase text-muted mt-5 mb-3">{heading}</h5>
      <h2 className="text-uppercase">{title}</h2>
    </React.Fragment>
  );
};

const SubtitleTitleBody = props => {
  const { subtitle, title, body, className } = props;
  return (
    <div className={`mt-5 ${className}`}>
      <h5 className="text-uppercase text-muted">{subtitle}</h5>
      <h2 className="text-uppercase">{title}</h2>
      {body}
    </div>
  );
};

class Meetly extends Component {
  render() {
    return (
      <div className="">
        <MeetlyIntro />
        <MeetlyBackground />
        <MeetlyResearch />
        <PrescriptiveButFlexible />
        <NoExtraWork />
        <EasyToReference />
      </div>
    );
  }
}

export default Meetly;
