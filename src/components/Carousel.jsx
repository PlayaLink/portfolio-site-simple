import React from 'react';
import Slider from 'react-slick';
import './Carousel.scss';
import ProjectCard from './ProjectCard';

const Slide = (props) => (
  <div className={ `slide-content ${props.slideName}` }>
    <div className="content">
      <div className="title">
        { props.title }
      </div>
      <div className="subtitle">
        { props.subtitle }
      </div>
      <div className="description">
        {props.description}
      </div>
    </div>
  </div>
);

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
          slideName="problem"
          title="Context"
          // subtitle="Teachers were not tracking goals consistently."
          description={ [
            "Public schools in the U.S. are required by law to provide special education services to those who need them",
            <p>When a need is identified, the school creates an Individualized Education Plan, or IEP, which includes a list of cognitive and behavorial goals that will be used to assess a student's progress and the school's efforts.</p>,
            "A parent can sue the school if they feel their child's needs are not being met or that progress is not occurring (or being tracked)."
          ] }
        />
        <Slide
          slideName="buyer"
          title="The Buyer"
          subtitle="The Administration was worried about getting sued by helicopter parents."
        />
        <Slide
          slideName="user"
          title="The User"
          subtitle="The teachers only have so much time – they prefer to spend that time teaching, not bureaucratic record keeping."
        />
      </Slider>
    );
  }
}

export default Carousel;