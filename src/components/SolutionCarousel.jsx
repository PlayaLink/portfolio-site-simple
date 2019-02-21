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

class SolutionCarousel extends React.Component {
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
          title="Findings"
          bullets={true}
          description={ [
            <li>Teachers see goal tracking as a bureaucratic time suck.</li>,
            <li>Older educators aren't very tech-savvy.</li>,
            <li>Behavioral analysts manage IEPs and are more invested in a solution</li>,
            <li>Paper evaluations require a clipboard (or desk) and two hands.</li>,
            <li>There are no standards for how to track goals, even in the same county</li>,
            <li>Paper evaluations are ridid: can only break down goals into 5 or 10 tasks</li>
          ] }
        />
        <Slide
          // slideName="buyer"
          title="Design Principles"
          subtitle="The new system needed to be:"
          bullets={true}
          description={ [
            <li>Easy to use</li>,
            <li>Flexible - each student goal is unique</li>,
            <li>Quick – for logging evaluations during class</li>,
            <li>Mobile friendly</li>,
          ] }
        />
        <div className="slide-content">
          <div className="content-2">
            <div className="title-2">
              Artifacts
            </div>
            <div className="subtitle-2">

            </div>
            <div className="description-2">
              <div className="iep-examples">
                {/*<div className="iep-example five"></div>*/}
                {/*<div className="iep-example ten"></div>*/}
                <img alt="iep" className="iep-example five" src={iep5} />
                <img alt="iep" className="iep-example ten" src={iep10} />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default SolutionCarousel;

