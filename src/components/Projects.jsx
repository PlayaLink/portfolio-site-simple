import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.scss';
import { Element } from 'react-scroll';
import iepCaseStudy from '../img/Case_Study_IEP_Goal_Tracker.pdf';
import popinLiveCaseStudy from '../img/Case_Study_POPin_Live.pdf';
import streetArtTalksCaseStudy from '../img/Case_Study_Street_Art_Talks.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Projects extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div style={{maxWidth: '100%'}}>
        <div className="section-title projects">Portfolio</div>
        <div className="projects">
          <div className="meetly">
            <a className="images reverse-order" href="https://www.runmeetly.com/">
              <div className="macbook" />
            </a>
            <ProjectCard
              title="Meetly"
              subtitle="A meeting notes and collaboration tool for teams."
              download="https://runmeetly.com"
              id="Meetly"
              isDownload={true}
              cta="Visit Site"
              description={ [
                'Co-founded the company with 3 other engineers.',
                <p>Designed the web experience and built out the frontend.</p>,
                ] }
            />
          </div>
          <Element name="iep" className={ `iep-goal-tracker` }>
            <ProjectCard
              title="Special Ed Goal Tracker"
              subtitle="Streamlining data collection in the classroom"
              // link="https://medium.com/@jordanenelson/a-goal-tracking-app-for-students-with-special-needs-6fe5334d2a53"
              id="IEP-Goal-Tracker"
              download={iepCaseStudy}
              cta="Case Study"
              description={ [
                "Teachers weren't tracking goals properly because paper spreadsheets are a hassle.",
                <p>A tech-savvy principal wanted to change that.</p>,
                'The result was a mobile-friendly web app that makes it easy to log evaluations and track progress over time.'
              ] }
            />
            <a className="images reverse-order" href="http://www.iepgoaltracker.com/">
              <div className="phone evaluations" />
              <div className="phone login" />
              <div className="phone students" />
            </a>
          </Element>

          {/*<div className="popin-live">*/}
            {/*<ProjectCard*/}
              {/*title="Feature Matching & User Personas"*/}
              {/*subtitle="Turning a feature request into an opportunity for gaining user insights"*/}
              {/*download={popinLiveCaseStudy}*/}
              {/*id="POPin-Live"*/}
              {/*cta="Case Study"*/}
              {/*description={ [*/}
                {/*'POPin is an Irvine-based startup that thought copying their competitors would increase sales.',*/}
                {/*<p>Executive buy-in for a copycat feature created an opportunity for advocating for broader user research.</p>,*/}
                {/*'Design research for the feature was leveraged to create user personas for the core product.'] }*/}
            {/*/>*/}
            {/*<div className="images reverse-order">*/}
              {/*<div className="projection-screen" />*/}
            {/*</div>*/}
          {/*</div>*/}

          <div className="street-art-talks">
            <div className="images">
              <div className="murals">
                <div className="thumbnail influence"/>
                <div className="thumbnail elephants"/>
                <div className="thumbnail bloom"/>
              </div>
              <div className="street-art-talks-phone" />
              <div className="murals">
                <div className="thumbnail peace"/>
                <div className="thumbnail faces"/>
                <div className="thumbnail abuelita"/>
              </div>
            </div>
            <ProjectCard
              title="Street Art Talks"
              subtitle="Text-based audio tour of street art in DTLA"
              download={streetArtTalksCaseStudy}
              id="Street-Art-Talks"
              cta="Case Study"
              description={ [
                'Street art is more approachable than art in a museum. But wouldn\'t it be nice to know more about the art and the person who created it?',
                <p />,
                "",
                <p />,
                'Stencils tagged near prominent murals in DTLA\'s arts district will instruct passersby to text a code to a Twilio phone number. ',
                <p />,
                'An automated text response includes a url with information about the mural and a link to the artist\'s Instagram.'] }
            />
          </div>

        </div>
      </div>

    );
  }
}

export default Projects;