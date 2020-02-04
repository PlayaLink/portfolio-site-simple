import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.scss";
import iepCaseStudy from "../img/Case_Study_IEP_Goal_Tracker.pdf";
import popinLiveCaseStudy from "../img/Case_Study_POPin_Live.pdf";
import meetly_marketing_site from "../img/meetly_marketing_site.png";
import popin_projector_screen from "../img/popin_projector_screen.png";
import iep_tasks_to_track_left from "../img/iep_tasks_to_track_left.png";
import iep_evaluations_graph from "../img/iep_evaluations_graph.png";
import my_students_right from "../img/my_students_right.png";

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="d-none d-md-block mt-md-3Ø" style={{height: "1rem"}}/>
        {/*Meetly*/}
        <div className="row my-5">
          <a
            className="col-xs-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0"
            href="https://www.runmeetly.com/"
          >
            <img className="img-fluid" src={meetly_marketing_site} />
          </a>
          <ProjectCard
            className="col-xs-12 col-md-6"
            title="Meetly"
            subtitle="A meeting minutes management tool"
            id="Meetly"
            cta="Learn More"
            link="/case-study/meetly"
            description={[
              <p>Co-founded the company with 3 other engineers.</p>,
              <p>Designed the web experience and helped build out the frontend.</p>
            ]}
          />
        </div>
        <div style={{height: "1rem"}}/>
        {/*POPin*/}
        <div className="row my-5">
          <a
            className="col-xs-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0"
            href="https://www.popin.live/"
          >
            <img className="m-auto img-fluid" src={popin_projector_screen} />
          </a>
          <ProjectCard
            className="col-xs-12 col-md-6"
            title="POPin Live"
            subtitle="Design research for a live polling application"
            download={popinLiveCaseStudy}
            id="POPin-Live"
            cta="Case Study"
            description={[
              <p>POPin is an Irvine-based startup that thought copying their competitors would increase sales.</p>,
              <p>
                Executive buy-in for a copycat feature created an opportunity
                for advocating for broader user research.
              </p>,
              "Design research for the feature was leveraged to create user personas for the core product."
            ]}
          />
        </div>
        <div style={{height: "3rem"}}/>

        {/*IEP*/}
        <div className="row my-5">
          <a
            className="col-xs-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0"
            href="http://www.iepgoaltracker.com/"
          >
            <div className="d-flex">
              <div className="col">
                <img src={iep_tasks_to_track_left} className="img-fluid" />
              </div>
              <div className="col-5 mx-n2">
                <img src={iep_evaluations_graph} className="img-fluid" />
              </div>
              <div className="col">
                <img src={my_students_right} className="img-fluid" />
              </div>
            </div>
          </a>
          <ProjectCard
            className="col-xs-12 col-md-6"
            title="Special Ed Goal Tracker"
            subtitle="Streamlining data collection in the classroom"
            // link="https://medium.com/@jordanenelson/a-goal-tracking-app-for-students-with-special-needs-6fe5334d2a53"
            id="IEP-Goal-Tracker"
            download={iepCaseStudy}
            cta="Case Study"
            description={[
              <p>Teachers weren't tracking goals properly because paper spreadsheets are a hassle.</p>,
              <p>A tech-savvy principal wanted to change that.</p>,
              "The result was a mobile-friendly web app that makes it easy to log evaluations and track progress over time."
            ]}
          />
        </div>

        {/*<div className="street-art-talks project-section">*/}
        {/*<div className="images">*/}
        {/*<div className="murals">*/}
        {/*<div className="thumbnail influence"/>*/}
        {/*<div className="thumbnail elephants"/>*/}
        {/*<div className="thumbnail bloom"/>*/}
        {/*</div>*/}
        {/*<div className="street-art-talks-phone" />*/}
        {/*<div className="murals">*/}
        {/*<div className="thumbnail peace"/>*/}
        {/*<div className="thumbnail faces"/>*/}
        {/*<div className="thumbnail abuelita"/>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<ProjectCard*/}
        {/*title="Street Art Talks"*/}
        {/*subtitle="Text-based audio tour of street art in DTLA"*/}
        {/*download={streetArtTalksCaseStudy}*/}
        {/*id="Street-Art-Talks"*/}
        {/*cta="Case Study"*/}
        {/*description={ [*/}
        {/*'Street art is more approachable than art in a museum. But wouldn\'t it be nice to know more about the art and the person who created it?',*/}
        {/*<p />,*/}
        {/*"",*/}
        {/*<p />,*/}
        {/*'Stencils tagged near prominent murals in DTLA\'s arts district will instruct passersby to text a code to a Twilio phone number. ',*/}
        {/*<p />,*/}
        {/*'An automated text response includes a url with information about the mural and a link to the artist\'s Instagram.'] }*/}
        {/*/>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default Projects;
