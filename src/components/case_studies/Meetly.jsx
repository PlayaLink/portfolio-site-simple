import React, { Component } from "react";
import calendar_integration from "../../img/calendar_integration.mp4";
import monday_schedule_view from "../../img/monday_schedule_view.png";
import chrome_extension_meetly from "../../img/chrome_extension_meetly.png";
import screened_respondents from "../../img/screened_respondents.png";
import users_interview_screening from "../../img/users_interview_screening.png";
import workspace_view from "../../img/workspace_view.jpg";
import automations from "../../img/automations.jpg";
import meetly_prototype_feedback from "../../img/meetly_prototype_feedback.jpg";
import user_interviews from "../../img/user_interviews.jpg";
import add_remove_cards from "../../img/add_remove_cards.mp4";
import meetly_original_sketch from "../../img/meetly_original_sketch.jpg";
import meetly_prototype from "../../img/meetly_prototype.png";
import choose_template from "../../img/choose_template.mp4";
import affinity_matching from "../../img/affinity_matching.png";
import calendar_spinning from "../../img/calendar_spinning.png";
import calendar_view from "../../img/calendar_view.png";
import meetly_final_version from "../../img/meetly_final_version.png";
import meetly_single_instance_narrow from "../../img/meetly_single_instance_narrow.png";
import arrow from "../../img/arrow.svg";
import meeting_groups from "../../img/meeting_groups.mp4";
import search from "../../img/search.mp4";
import { Waypoint } from "react-waypoint";
import "react-vertical-timeline-component/style.min.css";
import { Tooltip } from "react-tippy";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Redirect } from "react-router-dom";
import { GroupHeader, GroupTitle, SectionTitle } from "../SharedComponents";
import db_report from "../../img/db_report.png";
import { Progress, ProgressBackground } from "../Progress";
import { isMobile } from "../../utils";
import circle from "../../img/circle.svg";
import sad_worker from "../../img/sad_worker.png";

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
  <div className="my-3 my-md-5 bg-light">
    <div className="container mb-3">
      <div className="col-12 col-md-10 pl-0">
        <h1 className="display-4 page-header">
          Early-stage product development
        </h1>
        <h3 className="font-weight-normal">
          Or... how we failed to make $500,000 + product idea = viable company
        </h3>
      </div>
    </div>
  </div>
);

const MeetlyTLDR = () => (
  <div className="bg-light">
    <div className="container">
      <div className="row">
        {" "}
        <div className="col-12 col-md-8"><div
          className={`animated-dashed-border mb-5 ${isMobile() ? "w-100" : ""}`}
        >
          <GroupHeader title="TL;DR" noContainer={true} noBottomMargin={true}>
            <p>
              I was a <mark>co-founder</mark> and <mark>only designer</mark> at
              a meeting notes productivity startup called <mark>Meetly</mark>.
            </p>
            <p>
              {" "}
              We raised <mark>2 rounds</mark> of funding, won a <mark>
                Best New App
              </mark>{" "}
              award in monday.com's App Store, but ultimately failed to find{" "}
              <mark>product-market fit</mark>.
            </p>
            <p>
              I conducted the <mark>user research</mark> that lead to the idea and
              <mark>designed experiences</mark> for our web app, Chrome
              Extension and collaboration with monday.com.
            </p>
          </GroupHeader>
        </div></div>
      </div>
    </div>
  </div>
);

const SomeScreens = () => (
  <div className="bg-light">
    <div className="container">
      <div className="mb-5 d-flex flex-column">
        <img
          alt="Meetly"
          className="img-fluid boxshadow rounded"
          src={workspace_view}
        />
        <p className="mt-3 font-italic">The web app</p>
      </div>
      <div className="mb-5 d-flex flex-column">
        <img
          alt="Meetly Monday view"
          className="img-fluid boxshadow rounded"
          src={monday_schedule_view}
        />
        <p className="mt-3 font-italic">The monday.com integration</p>
      </div>
      <div className="mb-5 d-flex flex-column">
        <img
          alt="Meetly"
          className="img-fluid boxshadow rounded"
          src={chrome_extension_meetly}
        />
        <p className="mt-3 font-italic">The Chrome extension</p>
      </div>
    </div>
  </div>
);

const WantToSeeMore = () => (
  <div className="bg-light">
    <div className="container vh-100 d-flex flex-column justify-content-center">
      <div className="row">
        <div className="col-md-6 d-flex flex-column align-items-center">
          <h1>Full case study for Meetly</h1>
          <h2>(keep scrolling)</h2>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center">
          <h1>
            Next project <img className="ml-3" src={arrow} />
          </h1>
          <Link
            to="/case-study/design-system"
            id="design-system"
            className="d-flex"
          >
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="img-fluid m-3 img-rounded"
                src={sad_worker}
                alt="Futuristic construction worker"
              />
              <div className="text-center mx-3 mb-3">
                <span className="text-decoration-none text-uppercase">
                  Design systems
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  </div>
);

const MeetlyBackground = () => (
  <div className="bg-light">
    <div className="container">
      <div className="col-12 col-md-8 pl-0">
        <GroupTitle title="Context" />
        <p className="">
          The idea for <mark>Meetly</mark>, a meeting notes automation tool,
          grew out of user research I conducted at <mark>POPin</mark>, an
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
                <li className="my-3">
                  1 <mark>technical product manager</mark>
                </li>
                <li className="my-3">2 back-end engineers</li>
                <li className="my-3">1 front-end engineer</li>
                <li className="my-3">1 technical product designer (me)</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 mt-5 mt-md-0">
              <GroupTitle title="My role" />
              <p className="">
                I owned the <mark>user research</mark> efforts and was
                responsible for the entire user experience, from{" "}
                <mark>product design</mark> to video tutorials and support
                articles.
              </p>
              <p className="">
                I also helped out on the <mark>frontend engineering</mark>,
                adding polish and iterating on the design directly in the
                codebase.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex my-3">
        <div className="col-12 col-md-8 pl-0">
          <GroupTitle title="Timeline" />
          {/*<h5 className="font-weight-light">Most of the greenfield design research occured in spring of 2019.</h5>*/}
          {/*<h5 className="font-weight-light">In June 2019, our team of four left POPin to develop Meetly.</h5>*/}
          <ul className="ml-4 mt-4">
            <TimelineItem
              date="Spring 2019"
              description="Product manager and I came up with the idea for Meetly while
        conducting research around how POPin users ran
        meetings"
            />
            <TimelineItem date="May 2019" description="Raised 1st seed round" />
            <TimelineItem date="August 2019" description="Deployed an MVP" />
            <TimelineItem
              date="March 2020"
              description="Raised 2nd seed round"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const MeetlyDiscovery = () => (
  <div className="bg-light">
    <div className="container pt-5">
      <SectionTitle step="discovery" noContainer={true} />
      <div className="col-12 col-md-8 pl-0">
        <GroupHeader title="Needing to pivot" noContainer={true}>
          <div className="mb-5">
            <p>
              POPin had not found product-market fit, and I was in charge of
              learning more about our users' POPin-adjacent needs, with the goal
              of expanding the product offering.
            </p>
          </div>
        </GroupHeader>
        <GroupHeader title="Identifying an opportunity" noContainer={true}>
          <div className="mb-5">
            <p>
              We discovered people were using our survey tool to{" "}
              <span className="">solve a problem</span> that was not on our
              radar:{" "}
              <span className="text-uppercase">
                time wasted in unnecessary or unproductive meetings
              </span>
              .
            </p>
            <p>
              Recognizing an opportunity, we stopped asking people about POPin
              and refocused our research efforts:
            </p>
          </div>
        </GroupHeader>
        <GroupHeader title="Further questions" noContainer={true}>
          <div className="">
            <ul className="ml-4 mt-4">
              <li className="my-3">What makes for a successful meeting?</li>
              <li className="my-3">
                What are the impediments to a successful meeting?
              </li>
              <li className="my-3">How are people solving these challenges?</li>
              <li className="my-3">
                Is notes organization a tech problem or just a human problem?
              </li>
            </ul>
          </div>
        </GroupHeader>
      </div>
    </div>
  </div>
);
const MeetlyResearch = () => (
  <div className="bg-light">
    <div className="container pt-5">
      <SectionTitle step="research" noContainer={true} />
      <div className="col-12 col-md-8 pl-0 pt-1">
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
        <GroupHeader title="Affinity mapping">
          <div className="pl-0 mb-3">
            <img
              className="img-fluid"
              src={affinity_matching}
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
                <div className="col-12 col-lg-6 bg-primary text-white rounded-circle d-flex flex-column justify-content-center">
                  <div className="p-5">
                    <div className="text-center font-weight-bold text-uppercase mt-n2 mb-2 font-weight-normal border-bottom border-white">
                      Self-serve Product
                    </div>
                    There is a consumer need for something simpler than project
                    management software, but more structured than text docs and
                    todo lists.
                  </div>
                </div>
                <div className="m-2" />
                <div className="col-12 col-lg-6 bg-primary text-white rounded-circle d-flex flex-column justify-content-center">
                  <div className="p-5">
                    <div className="text-center font-weight-bold text-uppercase mt-n2 mb-2  border-bottom border-white">
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

const DesignPrinciple1 = () => (
  <div className="bg-light">
    <div className="container mb-0">
      <SectionTitle step="design" noContainer={true} />
      <h2 className="display-4 py-5 page-header">Design principles</h2>
      {/*Design principle #1*/}
      <div className="bg-white pt-4 px-3 rounded-big">
        <GroupHeader
          eyebrow="Problem"
          title="Difficult to enforce good meeting structure"
        >
          <p>
            Most people know meetings without agendas are less focused. And that
            meetings without clear action items are a big no-no.{" "}
          </p>
          <p>But it's not easy to get a team to adopt better meeting habits.</p>
        </GroupHeader>
        <GroupHeader
          className="ml-md-5"
          eyebrow="Design Principle"
          title="Be prescriptive, but flexible"
        >
          <p>
            We wanted Meetly to be intuitive as a tool, but also "educational"
            when it comes to good meeting hygiene.
          </p>
          <p>
            When a user clicks on a meeting, it should be immediately obvious
            what they need to do – both as a user of the tool and as a
            responsible meeting organizer or participant.
          </p>
        </GroupHeader>
        <GroupHeader
          eyebrow="Solution I"
          className="ml-md-5 pl-md-5"
          title="Default notes structure"
        >
          <p>
            We include cards for agenda, action items, notes and decisions by
            default. This arrangement&nbsp;
            <em className="font-weight-bold">
              encourages meeting best practices
            </em>{" "}
            while allowing a user to remove, add or rename cards as needed.
          </p>
          <div className="">
            <PlayOnScroll video={add_remove_cards} id="structured-notes" />
          </div>
        </GroupHeader>
        <GroupHeader
          eybrow="Solution II"
          className="ml-md-5 pl-md-5"
          title="Customizable templates"
        >
          <p>
            Users can create custom card arrangements for different meeting
            types.
          </p>
          <div className="">
            <PlayOnScroll video={choose_template} id="structured-notes" />
          </div>
        </GroupHeader>
      </div>
    </div>
  </div>
);

const DesignPrinciple2 = () => (
  <div className="bg-light mt-5">
    <div className="container mb-0 pt-5">
      <div className="bg-white pt-4 px-3 rounded-big">
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
          <GroupHeader
            eyebrow="Solution I"
            className="ml-md-5 pl-md-5"
            title="Automate meeting management workflow"
          >
            <p>
              Automations provide organizational value without requiring the
              meeting organizer to expend any energy.
            </p>
            <img src={automations} alt="" className="img-fluid" />
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
              <PlayOnScroll
                video={calendar_integration}
                id="calendar-integration"
              />
            </div>
          </GroupHeader>
        </GroupHeader>
      </div>
    </div>
  </div>
);

const DesignPrinciple3 = () => (
  <div className="bg-light mt-5">
    <div className="container mb-0">
      <div className="bg-white pt-4 px-3 rounded-big">
        <GroupHeader eyebrow="Problem" title="Siloed information">
          <p>
            Another productivity tool means another system to manage, another
            place for information to be lost, another walled garden that people
            need to log in to to access.{" "}
          </p>
        </GroupHeader>
        <GroupHeader
          className="mt-5 ml-md-5"
          eyebrow="Design Principle"
          title="Make it easy to find and share notes"
        >
          <p>
            A common complaint we heard was that meeting minutes get shared via
            email, often as attachments or links to services that require login,
            making it difficult to reference later and contributes to email
            clutter.
          </p>
        </GroupHeader>
        <GroupHeader
          eyebrow="Solution I"
          className="mt-5 ml-md-5 pl-md-5"
          title="Robust search"
        >
          <p>
            The ability to search across all notes and meetings makes it easy to
            reference past topics.
          </p>
          <div className="">
            <PlayOnScroll video={search} id="robust-search" />
          </div>
        </GroupHeader>
        <GroupHeader
          eyebrow="Solution II"
          className="ml-md-5 pl-md-5"
          title="Meeting Groups"
        >
          <p>
            Grouping meetings together around a topic, team or project is
            another way users could organize and quickly reference content
          </p>
          <div className="">
            <PlayOnScroll video={meeting_groups} id="meeting-groups" />
          </div>
        </GroupHeader>
      </div>
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

const MeetlyLearn = () => (
  <div className="bg-light">
    <div className="container pt-5">
      <SectionTitle step="learn" noContainer={true} />
      <GroupHeader title="Rapid iteration">
        <div className="row">
          <div className="col-md-8">
            <p>
              Product changes were driven by what we were seeing in recorded web
              sessions, usability tests, user interviews and the need to court
              investors.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src={meetly_original_sketch}
              alt="purchase location"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <img
              src={meetly_prototype}
              alt="purchase location"
              className="img-fluid mt-4 mt-md-0"
            />
          </div>
        </div>
        <div className="row mt-md-4">
          <div className="col-md-6  d-none d-md-block">
            <img
              src={calendar_view}
              alt="purchase location"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <img
              src={meetly_single_instance_narrow}
              alt="meetly single meeting view"
              className="img-fluid  mt-4 mt-md-0"
            />
          </div>
        </div>
      </GroupHeader>
      <GroupHeader title="Guerilla usability testing">
        <div className="row">
          <div className="col-md-6">
            <p>
              With such a tiny product footprint and a tiny user base, we
              weren't squeamish about deploying less-than-perfect designs and
              code to production.
            </p>
            <p>
              Sometimes I would spend the time to build out a highly functional
              prototype and ask users how they would complete "tasks".
            </p>
            <p>
              But the most valuable feedback I got was when I would set up a
              call with a user immediately after deploying a change to
              production. I was able to learn so much more by seeing them
              interact for the first time with the new feature{" "}
              <span className="font-italic">and</span> their real
              meetings/notes.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={meetly_prototype_feedback}
              alt="purchase location"
              className="img-fluid"
            />
          </div>
        </div>
      </GroupHeader>
      <GroupHeader title="Designing around technical constraints">
        <div className="row">
          <div className="col-md-8">
            <p>
              <span className="text-uppercase">Problem: </span>The full-month
              calendar view load time was lagging when a user had many meetings.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <img
              src={calendar_spinning}
              alt="purchase location"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8">
            <p>
              <span className="text-uppercase">Solution: </span>I redesigned the
              main view so that we only had to load 1 day's worth of events.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <img
              src={meetly_final_version}
              alt="meetly final version"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8">
            <p>
              <span className="text-uppercase">Outcome: </span>This design cut
              load times by a factor of 10 and also improved navigation – since
              the majority of sessions involved a user clicking on a meeting
              that was occuring on the same day as the session.
            </p>
          </div>
        </div>
      </GroupHeader>
      <GroupHeader title="Mistakes made">
        <div className="row">
          <div className="col-md-8">
            {" "}
            <ul className="ml-4">
              <li className="my-3">
                The "meeeting groups" feature was a solution in search of a
                problem. Rather than letting user needs guide it's development,
                we added it because it was an easy technical "win" after we
                refactored some backend code. That's probably why it didn't
                catch up.
              </li>
              <li className="my-3">
                We should not have wasted so much time pursuing enterprise
                clients early on. We ended up wasting a lot of dev resources on
                security and privacy, which was less important for self-sserve
                customers
              </li>
            </ul>
          </div>
        </div>
      </GroupHeader>
      <GroupHeader title="Lessons learned">
        <div className="row">
          <div className="col-md-8">
            <ul className="ml-4">
              <li className="my-3">
                Anecdotal evidence is not definitive proof
              </li>
              <li className="my-3">
                User needs should inform product direction (true!) but it's also
                important to have a vision and stick to it until you have
                validated that it is (or is not!) on target.
              </li>
            </ul>
          </div>
        </div>
      </GroupHeader>
    </div>
  </div>
);

class Meetly extends Component {
  render() {
    const { scroll, top } = this.props;
    return (
      <React.Fragment>
        <Progress scroll={scroll} top={top} />
        <ProgressBackground scroll="100%" top={top} />
        <div className="bg-light pb-5" style={{ paddingTop: "5rem" }}>
          <MeetlyIntro />
          <MeetlyTLDR />
          <MeetlyBackground />
          <SomeScreens />
          <WantToSeeMore />
          <MeetlyDiscovery />
          <MeetlyResearch />
          <DesignPrinciple1 />
          <DesignPrinciple2 />
          <DesignPrinciple3 />
          <MeetlyLearn />
        </div>
      </React.Fragment>
    );
  }
}

export default Meetly;
