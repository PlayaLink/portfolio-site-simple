import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.scss";
import iepCaseStudy from "../img/Case_Study_IEP_Goal_Tracker.pdf";
import popinLiveCaseStudy from "../img/Case_Study_POPin_Live.pdf";
import meetly_marketing_site from "../img/meetly_marketing_site.png";
import popin_projector_screen from "../img/popin_projector_screen.png";
import popin_personas from "../img/popin_personas.png";
import iep_tasks_to_track_left from "../img/iep_tasks_to_track_left.png";
import iep_evaluations_graph from "../img/iep_evaluations_graph.png";
import my_students_right from "../img/my_students_right.png";
import iep_UX_design from "../img/iep_UX_design.jpg";
import iep_1 from "../img/iep_1.png";
import iep_2 from "../img/iep_2.png";
import iep_3 from "../img/iep_3.png";
import iep_4 from "../img/iep_4.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
  render() {
    return (
      <div className="">
        {/*Meetly - Iterative Design*/}
        <div className="container">
          <div className="" style={{ height: "3rem" }} />
          <div className="row py-5">
            <a
              className="col-xs-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0"
              href="https://www.runmeetly.com/"
            >
              <img className="img-fluid" src={meetly_marketing_site} />
            </a>
            <div className="col-xs-12 col-md-6 mt-3 mt-sm-0">
              <h3 className="text-primary mb-3">Applying Design Research</h3>
              <p>
                How greenfield research I conducted lead to the founding of a new startup.
              </p>
              <p>
                And how I integrated design principles from that research into the resulting product.
              </p>
              <p className="mt-3">
                <span className="font-weight-bold text-uppercase">
                  Role:&nbsp;
                </span>{" "}
                Product Designer
              </p>
              <div className="mt-5">
                <Link
                  to="/case-studies/meetly"
                  id="Meetly"
                  className="button download-button btn-secondary"
                >
                  <span>Case Study</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
        <div className="" style={{ height: "3rem" }} />
        <div className="border-top border-thick" style={{ height: "3rem" }} />
        {/*Meetly - Design Research*/}
        <div className="container">
          <div className="" style={{ height: "3rem" }} />
          <div className="row py-5">
            <a
              className="col-xs-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0"
              href="https://www.runmeetly.com/"
            >
              <img className="img-fluid" src={meetly_marketing_site} />
            </a>
            <div className="col-xs-12 col-md-6 mt-3 mt-sm-0">
              <h3 className="text-primary mb-3">Applying Design Research</h3>
              <p>
                How greenfield research I conducted lead to the founding of a new startup.
              </p>
              <p>
                And how I integrated design principles from that research into the resulting product.
              </p>
              <p className="mt-3">
                <span className="font-weight-bold text-uppercase">
                  Role:&nbsp;
                </span>{" "}
                Product Designer
              </p>
              <div className="mt-5">
                <Link
                  to="/case-study/meetly"
                  id="Meetly"
                  className="button download-button btn-secondary"
                >
                  <span>Case Study</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
        <div className="" style={{ height: "3rem" }} />
        <div className="border-top border-thick" style={{ height: "3rem" }} />
        {/*POPin*/}
        <div className="container">
          <div className="row mt-5 mb-2">
            <a
              className="col-xs-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0"
              href="https://www.popin.live/"
            >
              <img
                className="img-fluid w-100 mr-4"
                src={popin_projector_screen}
              />
            </a>
            <ProjectCard
              className="col-xs-12 col-md-6 mt-2 mt-sm-0"
              title="POPin Live"
              subtitle="A live audience polling tool"
              download={popinLiveCaseStudy}
              id="POPin-Live"
              description={[
                <p>
                  Helped an enterprise-sales-driven startup create their first
                  self-serve product.
                </p>,
                <ul className="ml-4 mb-3">
                  <li className="mb-2">
                    Conducted user interviews and created personas
                  </li>
                  <li className="mb-2">
                    Surveyed existing solutions and interviewed competitors'
                    customers
                  </li>
                  <li className="mb-2">
                    Synthesized and presented findings to inform product
                    direction
                  </li>
                </ul>,
                <div>
                  <span className="font-weight-bold text-uppercase">
                    Role:&nbsp;
                  </span>{" "}
                  Design Researcher
                </div>
              ]}
            />
          </div>
          <div className="mx-5 d-none d-sm-block">
            <img className="img-fluid" src={popin_personas} />
          </div>
        </div>

        <div className="" style={{ height: "5rem" }} />
        <div className="border-top border-thick" style={{ height: "3rem" }} />

        {/*IEP*/}
        <div className="container">
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
              className="col-xs-12 col-md-6 mt-3 mt-sm-0"
              title="Special Ed Goal Tracker"
              subtitle="Streamlining data collection in the classroom"
              // link="https://medium.com/@jordanenelson/a-goal-tracking-app-for-students-with-special-needs-6fe5334d2a53"
              id="IEP-Goal-Tracker"
              download={iepCaseStudy}
              description={[
                <p>
                  A full-stack Javascript application I designed and built for a
                  local special needs school. This was an{" "}
                  <strong>un-paid</strong>, personal project.
                </p>,
                <ul className="ml-4 mb-3">
                  <li className="mb-2">
                    Replaced cumbersome paper evaluations
                  </li>
                  <li className="mb-2">
                    Easier to log evaluations during class
                  </li>
                  <li className="mb-2">Analytics shows progress over time</li>
                </ul>,
                <div>
                  <span className="font-weight-bold text-uppercase">
                    Role:&nbsp;
                  </span>{" "}
                  Research, Design and Development
                </div>
              ]}
            />
            <div className="mx-5 px-5 d-none d-sm-block">
              {" "}
              <div className="mt-5 mx-5">
                <img src={iep_UX_design} className="img-fluid" />
              </div>
              <div className="d-flex justify-content-around mt-5 mx-4">
                <img src={iep_1} className="img-fluid col-3" />
                <img src={iep_2} className="img-fluid col-3" />
                <img src={iep_3} className="img-fluid col-3" />
                <img src={iep_4} className="img-fluid col-3" />
              </div>
            </div>
          </div>
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
