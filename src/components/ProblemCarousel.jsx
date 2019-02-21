import React from 'react';
import Slider from 'react-slick';
import './Carousel.scss';
import ProjectCard from './ProjectCard';
import Slide from './Slide';
import iep5 from '../img/iep_example_5.png';
import iep10 from '../img/iep_example_10.png';

// const Slide = (props) => (
//   <div className={ `slide-content ${props.slideName}` }>
//     <div className="content">
//       <div className="title">
//         { props.title }
//       </div>
//       <div className="subtitle">
//         { props.subtitle }
//       </div>
//       <div className="description">
//         {props.description}
//       </div>
//     </div>
//   </div>
// );

class ProblemCarousel extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider { ...settings }>
        <Slide
          title="Requirements Gathering"
          // subtitle="Teachers were not tracking goals consistently."
          bullets={true}
          description={ [
            <li>Interviewed 1 administrator, 3 behavior analysts, 3 teachers and 2 parents.</li>,
            <li>Reviewed IEPs and evaluation forms used at 3 Orange County schools.</li>,
            <li>Researched other goal tracking software that was already available.</li>
          ] }
        />
        <Slide
          // slideName="buyer"
          title="Observations"
          bullets={true}
          description={ [
            <li>Teachers see goal tracking as a bureaucratic time suck.</li>,
            <li>Paper evaluations require a clipboard (or desk) and two hands.</li>,
            <li>Paper evaluations are rigid: can only break down goals into 5 or 10 tasks.</li>,
            <li>Older educators aren't very tech-savvy.</li>,
            <li>Goal descriptions are lengthy and require a lot of typing</li>,
            <li>Behavioral analysts manage IEPs and are more invested in a tech solution.</li>,
            <li>There are no standards for how to track goals, even in the same county.</li>
          ] }
        />
        <div className="slide-content">
          <div className="content-2">
            <div className="title-2">
              Quotes
            </div>
            <div className="subtitle-2">

            </div>
            <div className="description-2">
              <div className="quote-container">
                <p className="quote">"The problem is more than 'lack of technology'.... There is no process for tracking student progress... and very little oversight for teachers."</p>
                <p className="attribution">
                  <div>–Jenny, Special Education Department Director</div>
                </p>
              </div>
              <div className="quote-container">
                <p className="quote">"I'm like the nanny state.... I have to hound the teachers to get me their evaluations."</p>
                <p className="attribution">
                  <div>–Ross, Applied Behavorial Analyst</div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Slide
          // slideName="buyer"
          title="Design Principles"
          subtitle="The new system needed to be:"
          bullets={true}
          description={ [
            <li>Simple to use</li>,
            <li>Goals need to be cusomizable</li>,
            <li>Logging evaluations needs to be quick and easy</li>,
            <li>Ability to log evaluations while walking around classroom</li>,
            <li>Ability to create goals and student profiles on desktop</li>,
          ] }
        />
      </Slider>
    );
  }
}

export default ProblemCarousel;