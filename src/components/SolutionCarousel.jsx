import React from 'react';
import Slider from 'react-slick';
import './Carousel.scss';
import ProjectCard from './ProjectCard';
import Slide from './Slide';
import iep5 from '../img/iep_example_5.png';
import iep10 from '../img/iep_example_10.png';
import goalCreation from '../img/goal_creation.png';

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
              Simple to navigate
            </div>
            <div className="description-2">
              <div className="iep-examples">
                <div>
                  <div className="iep-example my-students small"></div>
                  <p style={{fontSize: '1rem', textAlign: 'center'}}>Dashboard  ></p>
                </div>
                <div>
                  <div className="iep-example student-detail small"></div>
                  <p style={{fontSize: '1rem', textAlign: 'center'}}>Student detail  ></p>
                </div>
                <div>
                  <div className="iep-example goal-detail small"></div>
                  <p style={{fontSize: '1rem', textAlign: 'center'}}>Goal list  ></p>
                </div>
                <div>
                  <div className="iep-example evaluation-2 small"></div>
                  <p style={{fontSize: '1rem', textAlign: 'center'}}>Log an evaluation</p>
                </div>
                {/*<img alt="iep-goal-creation" className="iep-goal-creation" src={goalCreation} />*/}
              </div>
            </div>
          </div>
        </div>
        <div className="slide-content">
          <div className="content-2">
            <div className="title-2">
              Quick
            </div>
            <div className="subtitle-2">
              An evaluation can be logged in as little as 4 taps.
            </div>
            <div className="description-2">
              <div className="iep-examples">
                <div className="iep-example evaluation"></div>
                {/*<img alt="iep-goal-creation" className="iep-goal-creation" src={goalCreation} />*/}
              </div>
            </div>
          </div>
        </div>
        <div className="slide-content">
          <div className="content-2">
            <div className="title-2">
              Flexible
            </div>
            <div className="subtitle-2">
              Goals can have as few or as many subtasks as needed
            </div>
            <div className="description-2">
              <div className="iep-examples">
                <div className="iep-example goal-creation"></div>
                {/*<img alt="iep-goal-creation" className="iep-goal-creation" src={goalCreation} />*/}
              </div>
            </div>
          </div>
        </div>
        <div className="slide-content">
          <div className="content-2">
            <div className="title-2">
              Data visualization
            </div>
            <div className="subtitle-2">
              Charts make it easy for a teacher to share progress with a behavior analyst.
            </div>
            <div className="description-2">
              <div className="iep-examples">
                <div className="iep-example progress-bars"></div>
                {/*<img alt="iep-goal-creation" className="iep-goal-creation" src={goalCreation} />*/}
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default SolutionCarousel;

