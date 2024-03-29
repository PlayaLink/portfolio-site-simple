import React from 'react';
import './GoalTracker.scss';
import './Projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectCard from './ProjectCard';
import ProblemCarousel from './ProblemCarousel';
import SolutionCarousel from './SolutionCarousel';
import Slide from './Slide';

class GoalTracker extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0)
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
          <div className="section context">
           <div className="content">
             <Slide
               title="Context"
               // subtitle="Teachers were not tracking goals consistently."
               description={ [
                 "The Individuals with Disabilities Education Act requires U.S. schools to provide special services and resources to those who need them.",
                 <p>When a need is identified, the school creates an Individualized Education Plan, or IEP, which includes a list of cognitive and behavorial goals that will be used to assess a student's progress and the school's efforts.</p>,
                 "A parent can sue the school if they feel their child's needs are not being met or that progress is not occurring (or being tracked)."
               ] }
             />
           </div>
          </div>
          <div className="section problem">
            {/*<div className="section-title">Need Finding</div>*/}
            <div className="content">
             <ProblemCarousel/>
           </div>
          </div>
          <div className="section solution">
            {/*<div className="section-title">Need Finding</div>*/}
            <div className="content">
             <SolutionCarousel/>
           </div>
          </div>
        </div>

    );
  }
}

export default GoalTracker;