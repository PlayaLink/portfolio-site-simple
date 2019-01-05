import React from 'react';
import './Projects.scss';

class Projects extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {
    return (
      <div className="projects">
        <div className="section-title">Recent Projects</div>
        <div className="iep-goal-tracker">
          <div className="images">
            <div className="phone evaluations" />
            <div className="phone login" />
            <div className="phone students" />
          </div>
          <p className="description">
            <strong>IEP Goal Tracker</strong> is a web app that helps teachers of students with
            special needs by digitizing the paper evaluation forms used for tracking progress on state-enforced Individualized Education Plans (IEPs).
          </p>
          <a
            href="https://medium.com/@jordanenelson/a-goal-tracking-app-for-students-with-special-needs-6fe5334d2a53"
            target="_blank"
            className="button">Learn More</a>
        </div>
        <div className="street-art-talks">
          <div className="images">
            <div className="phone influence" />
            <div className="phone street-art-talks" />
            <div className="phone peace" />
          </div>
          <p className="description">
            <strong>Street Art Talks</strong> is a web app that bridges the gap between (analog)
            street art and (digital) information about that art work.
            <br/>
            <br/>
            <div>Stencils tagged near prominent
              murals in DTLA's arts district instruct passersby to text a code to a Twilio phone
              number that will respond with a url that contains information about the mural and
              artist.</div>
          </p>
          <a
            href="http://www.streetarttalks.com/"
            target="_blank"
            className="button">Learn More</a>
        </div>
      </div>
    );
  }
}

export default Projects;