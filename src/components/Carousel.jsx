import React from 'react';
import Slider from 'react-slick';
import './Carousel.scss';

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
        {props.descrption}
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
          slideName="buyer-problem"
          title="The Problem"
          subtitle="Teachers were not tracking goals consistently or accurately."
        />
        <div className="slide-content">
          <h3>2</h3>
        </div>
        <div className="slide-content">
          <h3>3</h3>
        </div>
        <div className="slide-content">
          <h3>4</h3>
        </div>
        <div className="slide-content">
          <h3>5</h3>
        </div>
        <div className="slide-content">
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

export default Carousel;