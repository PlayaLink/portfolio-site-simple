import React from 'react';
import Slider from 'react-slick';
import './Carousel.scss';
import ProjectCard from './ProjectCard';
import Slide from './Slide';

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

class Carousel extends React.Component {
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
          title="I. Requirements Gathering"
          // subtitle="Teachers were not tracking goals consistently."
          bullets={true}
          description={ [
            <li>Interviewed 1 administrator, 3 behavior analysts, 3 teachers and 2 parents.</li>,
            <li>Reviewed IEPs and evaluation forms used at 3 Orange County schools.</li>,
            <li>Researched other goal tracking software that was already available.</li>
          ] }
        />
        <Slide
          title="II. Artifacts"
          // subtitle="Teachers were not tracking goals consistently."
          description={ [
            "Interviewed 3 behavior analysts, 3 teachers and 2 parents from 3 different grade schools.",
            <p>Reviewed real student IEPs and compared the evaluation forms that each school used to track progress goals.</p>,
            "Researched other goal tracking software that was already available."
          ] }
        />
        <Slide
          // slideName="buyer"
          title="III. Findings"
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
      </Slider>
    );
  }
}

export default Carousel;