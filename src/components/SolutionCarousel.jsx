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
        <div className="slide-content">
          <div className="content-2">
            <div className="title-2" style={{marginBottom: '3rem',marginTop: '6rem', fontSize: '3.5rem'}}>
              THE SOLUTION
            </div>
          </div>
        </div>
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

