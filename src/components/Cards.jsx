import React from 'react';
import styled, { css } from 'styled-components';
import burningman from '../img/burningman.jpg';
import hotwheels from '../img/hotwheels.jpg';
import satellites from '../img/satellites.jpg';
import tijuana from '../img/tijuana.jpg';
import dragonv2 from '../img/dragonv2.jpg';
import fuelcell from '../img/fuelcell.jpg';
import teens from '../img/teens.jpg';
import toys from '../img/toys.jpg';
import watercar from '../img/watercar.jpg';
// Import styled-components library - "const" version

// Save container div inside const
const container = document.querySelector('.container');

// Helper function to convert pixels to rems (remy)
const remy = px => `${px / 16}rem`;

// Function for calculating value for width
const getWidth = (value) => {
  if (!value) return;

  let width = value / 12 * 100;
  return `width: ${width}%;`;
};

// Function for calculating value for flex
const getFlex = (value) => {
  if (!value) return;

  let flex = value / 12 * 100;
  return `flex: 0 0 ${flex}%;`;
};

// Grid container
const GridContainer = styled.div`
  padding-right: ${remy(15)};
  padding-left: ${remy(15)};
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  // Breakpoint for tablets
  @media (min-width: 576px) {
    max-width: ${remy(540)};
  }

  // Breakpoint for small desktops
  @media (min-width: 768px) {
    max-width: ${remy(720)};
  }

  // Breakpoint for medium desktops
  @media (min-width: 992px) {
    max-width: ${remy(9600)};
  }

  // Breakpoint for large desktops and HD devices
  @media (min-width: 1200px) {
    max-width: ${remy(1140)};
  }
`;

const LayoutWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  width: 100%;

  // Fix for applying proper box-sizing
  html:not(&) {
    box-sizing: border-box;

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  body:not(&) {
    font: 16px / 1.618 Arial, Verdana, sans-serif;
  }
`;

// Grid row
const GridRow = styled.div`
  margin-right: ${remy(-15)};
  margin-left: ${remy(-15)};
  display: flex;
  flex-wrap: wrap;
`;

// Grid columns
const GridColumn = styled.div`
  padding-right: ${remy(15)};
  padding-left: ${remy(15)};
  margin: 1rem auto;

  // Columns for mobile
  ${({ xs }) => (xs ? getFlex(xs) : 'flex: 0 0 100%')};
  ${({ xs }) => (xs ? getWidth(xs) : 'width: 100%')};

  // Columns for tablets
  @media (min-width: 576px) {
    ${({ sm }) => sm && getFlex(sm)};
    ${({ sm }) => sm && getWidth(sm)};
  }

  // Columns for small desktops
  @media (min-width: 768px) {
    ${({ md }) => md && getFlex(md)};
    ${({ md }) => md && getWidth(md)};
  }

  // Columns for medium desktops
  @media (min-width: 992px) {
    ${({ lg }) => lg && getFlex(lg)};
    ${({ lg }) => lg && getWidth(lg)};
  }

  // Columns for large desktops and HD devices
  @media (min-width: 1200px) {
    ${({ xl }) => xl && getFlex(xl)};
    ${({ xl }) => xl && getWidth(xl)};
  }
`;

// Flipping card
const Card = styled.article`
  position: relative;
  min-width: ${remy(200)};
  min-height: ${remy(150)};
  max-height: ${remy(280)};
  height: ${remy(300)};
  border-radius: ${remy(10)};
  cursor: pointer;
  perspective: 1000px;
  transition: all .25s ease-in-out;
  box-shadow: 0 0 ${remy(40)} rgba(0,0,0,.15);


  &:focus,
  &:hover {
    box-shadow: 0 0 ${remy(50)} rgba(0,0,0,.45);
  }

  &.flipped {
    & > div:first-of-type { // frontside of the card
      transform: perspective(1000px) rotateY(-180deg);
    }

    & > div:last-of-type { // backside of the card
      transform: perspective(1000px) rotateY(0deg);
    }
  }
`;

// Card sides
const CardSide = css`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all .25s ease-in-out;
`;

// Card side - front
const CardFront = styled.div`
  ${CardSide};

  font-weight: bold;
  text-align: center;
`;

// Card side - back
const CardBack = styled.div`
  ${CardSide};

  transform: rotateY(-180deg);
`;

// Card content
const CardPhoto = styled.span`
  display: block;
  font-size: ${remy(24)};
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 15rem;
  width: 100%;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
`;

const CardTitle = styled.h2`
  font-size: ${remy(21)};
`;

const CardDescription = styled.span`
  font-size: ${remy(16)};
  padding: 1rem;
`;

const Button = styled.a`
  width: 6rem;
  height: 2rem;
  background-color: #288be4;
  border-radius: ${remy(7)};
  margin: 0 auto;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

// Create layout component
class Layout extends React.Component {
  flipCard (event) {
    event.currentTarget.classList.toggle('flipped');
  }

  render () {
    return (
      <LayoutWrapper>
        <GridContainer>
          <GridRow>
            <GridColumn sm="6" lg="4">
              <Card onClick={ this.flipCard.bind(this) }>
                <CardFront>
                  <CardPhoto img={ burningman }></CardPhoto>
                  <CardTitle>Drinking the Kool-Aid At Burning Man</CardTitle>
                </CardFront>
                <CardBack>
                  <CardDescription>
                    <p style={ { marginTop: 0 } }>Mention Burning Man and you’re bound to elicit
                      eye-rolls and
                      jokes about drug-addled hippies dancing in the desert.</p>
                    But is there something more in the “burner Kool-Aid” than mere psychedelics?
                  </CardDescription>
                  <Button
                    href="https://www.dailybreeze.com/2014/09/05/burning-man-2014-reporter-survives-festival-returns-a-burner/"
                    target="_blank">
                    Read Story
                  </Button>
                </CardBack>
              </Card>
            </GridColumn>

            <GridColumn sm="6" lg="4">
              <Card onClick={ this.flipCard.bind(this) }>
                <CardFront>
                  <CardPhoto img={ hotwheels }></CardPhoto>
                  <CardTitle>Mistress Creative Turns Heads</CardTitle>
                </CardFront>
                <CardBack>
                  <CardDescription>If Don Draper worked in today’s world, he would have an account
                    on Instagram… and on Vine, Whisper, Snapchat and any other social media platform
                    that dominates the attention of young people — the world’s future
                    consumers.</CardDescription>
                  <Button
                    href="http://www.insidesocal.com/technology/2015/04/02/how-ad-agency-mistress-creative-uses-social-media/"
                    target="_blank">
                    Read Story
                  </Button>
                </CardBack>
              </Card>
            </GridColumn>

            <GridColumn sm="6" lg="4">
              <Card onClick={ this.flipCard.bind(this) }>
                <CardFront>
                  <CardPhoto img={ satellites }></CardPhoto>
                  <CardTitle>A Promising Future for Tiny Satellites</CardTitle>
                </CardFront>
                <CardBack>
                  <CardDescription>Just as SpaceX has shaken up Southern California’s anemic
                    aerospace industry, other space entrepreneurs are starting to use miniature
                    satellites to provide Earth-monitoring services at a fraction of the cost of
                    more established government contractors.</CardDescription>
                  <Button
                    href="https://www.dailybreeze.com/2014/05/18/cubesat-miniature-satellites-poised-to-disrupt-aerospace-industry/"
                    target="_blank">
                    Read Story
                  </Button>
                </CardBack>
              </Card>
            </GridColumn>

            <GridColumn sm="6" lg="4">
              <Card onClick={ this.flipCard.bind(this) }>
                <CardFront>
                  <CardPhoto img={ tijuana }></CardPhoto>
                  <CardTitle><div style={{paddingRight: '0.5rem', paddingLeft: '0.5rem'}}>Tijuana Nightlife Booms After Drug Wars</div></CardTitle>
                </CardFront>
                <CardBack>
                  <CardDescription>Lax liquor laws and seedy entertainment have drawn
                    Americans south of the border for generations. But drug cartel violence has
                    spooked gringos, leaving space for a more local arts and nightlife scene.
                  </CardDescription>
                  <Button
                    href="http://www.ocregister.com/articles/bar-598267-friend-dance.html"
                    target="_blank">
                    Read Story
                  </Button>
                </CardBack>
              </Card>
            </GridColumn>

            <GridColumn sm="6" lg="4">
              <Card onClick={ this.flipCard.bind(this) }>
                <CardFront>
                  <CardPhoto img={ dragonv2 }></CardPhoto>
                  <CardTitle>Musk Unveils Dragon V2 Spaceship</CardTitle>
                </CardFront>
                <CardBack>
                  <CardDescription>Providing a glimpse into what could be the future of U.S. manned
                    space flight, Hawthorne-based SpaceX on Thursday unveiled its first space
                    capsule capable of ferrying astronauts to and from the International Space
                    Station.
                  </CardDescription>
                  <Button
                    href="http://www.dailybreeze.com/business/20140529/spacex-unveils-first-commercial-capsule-capable-of-manned-flight"
                    target="_blank">
                    Read Story
                  </Button>
                </CardBack>
              </Card>
            </GridColumn>

            <GridColumn sm="6" lg="4">
              <Card onClick={ this.flipCard.bind(this) }>
                <CardFront>
                  <CardPhoto img={ fuelcell }></CardPhoto>
                  <CardTitle>Is Fuel Cell Tech Just A Bunch of Hot Air?</CardTitle>
                </CardFront>
                <CardBack>
                  <CardDescription>
                    Hydrogen fuel cell technology, which Honda and Toyota have been testing in the
                    South Bay for more than a decade, is poised to become the next big thing in
                    alternative energy, as state agencies and automakers work to get 1.5 million
                    zero-emission vehicles on the road by 2025.
                  </CardDescription>
                  <Button
                    href="http://www.dailybreeze.com/environment-and-nature/20140713/automakers-begin-to-embrace-hydrogen-fuel-cell-technology"
                    target="_blank">
                    Read Story
                  </Button>
                </CardBack>
              </Card>
            </GridColumn>

            <GridColumn sm="6" lg="4">
              <Card onClick={ this.flipCard.bind(this) }>
                <CardFront>
                  <CardPhoto img={ teens }></CardPhoto>
                  <CardTitle>The Lucrative World of Teen Incluence</CardTitle>
                </CardFront>
                <CardBack>
                  <CardDescription>
                    Melissa Clark first realized her 8th grade daughter was a celebrity the day they
                    arrived at her new school in Santa Clarita, and a crowd of middle schoolers
                    surrounded her car and begged her daughter to take a picture with them.
                  </CardDescription>
                  <Button
                    href="http://www.insidesocal.com/technology/2015/03/30/how-teens-are-making-thousands-per-month-on-social-media/"
                    target="_blank">
                    Read Story
                  </Button>
                </CardBack>
              </Card>
            </GridColumn>

            <GridColumn sm="6" lg="4">
              <Card onClick={ this.flipCard.bind(this) }>
                <CardFront>
                  <CardPhoto img={ toys }></CardPhoto>
                  <CardTitle>SoCal At Center of U.S. Toy Industry</CardTitle>
                </CardFront>
                <CardBack>
                  <CardDescription>
                    Proximity to Hollywood and shipping routes to Asia have helped establish
                    Southern California as the de facto center of the modern U.S. toy market.
                  </CardDescription>
                  <Button
                    href="https://www.dailynews.com/2014/11/26/hollywood-helps-make-southern-california-center-of-toy-universe/"
                    target="_blank">
                    Read Story
                  </Button>
                </CardBack>
              </Card>
            </GridColumn>

            <GridColumn sm="6" lg="4">
              <Card onClick={ this.flipCard.bind(this) }>
                <CardFront>
                  <CardPhoto img={ watercar }></CardPhoto>
                  <CardTitle>Amphibious WaterCar Latest Tech Bro Toy</CardTitle>
                </CardFront>
                <CardBack>
                  <CardDescription>
                    <p>David March has spent more than a decade developing the high-speed amphibious
                      car
                      he is about to take to market for $135,000 a piece.</p>
                    He has taken deposits from the Prince of Dubai, tycoons in Silicon Valley and
                    millionaires from around the
                    world.
                  </CardDescription>
                  <Button
                    href="http://www.ocregister.com/articles/march-597529-car-water.html"
                    target="_blank">
                    Read Story
                  </Button>
                </CardBack>
              </Card>
            </GridColumn>

          </GridRow>
        </GridContainer>
      </LayoutWrapper>
    );
  }
}

export default Layout;