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
  render() {
    return (
      <div className="container">
        {/*Meetly*/}
        <div className="row py-5">
          <a
            className="col-xs-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0"
            href="https://www.runmeetly.com/"
          >
            <img className="img-fluid" src={meetly_marketing_site} />
          </a>
          <ProjectCard
            className="col-xs-12 col-md-6"
            title="Meetly"
            subtitle="A meeting notes management platform"
            id="Meetly"
            cta="Case Study"
            link="/case-study/meetly"
            description={[
              <p>Co-founded the company with 3 other engineers.</p>,
              <div><span className="font-weight-bold text-uppercase">Role:&nbsp;</span> Product Design</div>
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
            subtitle="A live audience polling tool"
            download={popinLiveCaseStudy}
            id="POPin-Live"
            description={[
              <p>Helped an enterprise-sales-driven startup create their first self-serve product.</p>,
              <ul className="ml-4 mb-3">
                <li>Conducted user interviews and created personas</li>
                <li>Surveyed existing solutions and interviewed competitors' customers</li>
                <li>Synthesized and presented findings to inform product direction</li>
              </ul>,
              <div><span className="font-weight-bold text-uppercase">Role:&nbsp;</span> Design Researcher</div>
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
              <p>A mobile-friendly web app that makes it easy to log evaluations and track student progress over time.</p>,
              <div><span className="font-weight-bold text-uppercase">Role:&nbsp;</span> Research, Design and Development</div>,
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
