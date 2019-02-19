import React from 'react';
import './GoalTracker.scss';
import './Projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectCard from './ProjectCard';
import { Element } from 'react-scroll/modules';


class GoalTracker extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
        <div className="goal-tracker">
          <div className="header">
            <ProjectCard
              isHeader="true"
              title="IEP Goal Tracker"
              subtitle="Streamlining data collection in the classroom"
              description={ [
                "Special education programs in the U.S. are required by law to track the progress of students who receive special education services",
                <p>The evaluation process is typically done with paper spreadsheets. It is cumbersome and time-consuming. As a result, record-keeping is spotty and unreliable</p>,
                'The IEP Goal Tracker allows teachers to digitize the goals outlined in their students Individualized Education Plans (or IEPs) and easily submit student evaluations with a few taps on their phone.'
              ] }
            />
            <div className="images">
              <div className="phone evaluations" />
              <div className="phone login" />
              <div className="phone students" />
            </div>
          </div>
          <div className="problem">

          </div>
        </div>

    );
  }
}

export default GoalTracker;