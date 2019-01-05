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
            special needs who must comply with state-mandated Individualized Education Plans.
          </p>
          <a
            href="https://medium.com/@jordanenelson/a-goal-tracking-app-for-students-with-special-needs-6fe5334d2a53"
            target="_blank"
            className="button">Learn More</a>
        </div>
      </div>
    );
  }
}

export default Projects;