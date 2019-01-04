import React from 'react'
import './Projects.scss'
import evaluations from '../img/evaluations_left.png';
import login from '../img/login_center.png';
import students from '../img/my_students_right.png'


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
            <div className="phone evaluations"/>
            <div className="phone login"/>
            <div className="phone students"/>
          </div>
          <p className="description">
            <strong>IEP Goal Tracker</strong> is a web app that helps teachers of students with special needs who must comply with state-mandated Individualized Education Plans.
          </p>
        </div>
      </div>
    );
  }
}

export default Projects;