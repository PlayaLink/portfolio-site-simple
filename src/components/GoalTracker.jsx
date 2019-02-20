import React from 'react';
import './GoalTracker.scss';
import './Projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectCard from './ProjectCard';
import Carousel from './Carousel';


class GoalTracker extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
        <div className="goal-tracker">
          <div className="header">
            <ProjectCard
              title="IEP Goal Tracker"
              subtitle="Streamlining data collection in the classroom"
              description={ [
                <p>The Orange County Dept of Education's main special needs facility was looking for a better way to track its students' progress.</p>,
                <p>Their system relied on paper spreadsheets and manual data entry.</p>,
                "The school's director wanted to find a better way."
              ] }
            />
            <div className="images">
              <div className="phone evaluations" />
              <div className="phone login" />
              <div className="phone students" />
            </div>
          </div>
          <div className="problem">
           <div className="content">
             <Carousel/>
           </div>
          </div>
        </div>

    );
  }
}

export default GoalTracker;