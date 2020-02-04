import React, { Component } from "react";
import add_item_and_share from "../../img/add_item_and_share.mp4";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const iconStyle = { background: "rgb(33, 150, 243)", color: "#fff" };

const TimelineItem = props => (
  <li className="mb-3">
    <div className="d-flex">
      <div className="col-3 text-uppercase pr-0 pl-1">
        {props.date}
      </div>{" "}
      <div className="col pl-2">{props.description}</div>
    </div>
  </li>
);

class Meetly extends Component {
  render() {
    return (
      <div className="">
        <div className="mt-5">
          <div className="d-flex justify-content-center row">
            <div className="col-12 col-md-6">
              <h1 className="display-4">Meetly</h1>
              <h5 className="font-weight-light">
                Meetly is a<span className="">meeting management platform</span>{" "}
                that allows you to create collaborative agendas, assign action
                items, and document decisions.
              </h5>
              <h5 className="font-weight-light">
                The web is powered by a user's Google or Microsoft calendar,
                automatically creating and keeping a users notes in sync with
                the tool they already use to manage their workload.
              </h5>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-3">
            <div className="col-12 col-md-8">
              <video
                className="img-fluid my-3"
                src={add_item_and_share}
                autoPlay="true"
                controls
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div className="col-12 col-md-6">
            <h4 className="text-uppercase">How Meetly got started</h4>
            <p className="font-weight-light">
              The idea for Meetly came as operations were winding down at POPin,
              an Irvine, CA-based startup that made employee engagement
              software.
            </p>
            <p className="font-weight-light">
              Our team approached POPin's largest investor and secure seed money
              to develop the idea into a product.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-6">
                <h4 className="text-uppercase">The team</h4>
                <p className="font-weight-light">
                  <ul className="ml-4">
                    <li className="my-3">1 technical product manager</li>
                    <li className="my-3">1 back-end engineer</li>
                    <li className="my-3">1 front-end engineer</li>
                    <li className="my-3">1 technical product designer (me)</li>
                  </ul>
                </p>
              </div>
              <div className="col-12 col-md-6">
                <h4 className="text-uppercase">My role</h4>
                <p className="font-weight-light">
                  I owned the design and user research efforts.
                </p>
                <p className="font-weight-light">
                  I also helped out on the frontend, adding polish and iterating
                  on the design directly in the codebase.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div className="col-12 col-md-6">
            <h4 className="text-uppercase">Timeline</h4>
            {/*<h5 className="font-weight-light">Most of the greenfield design research occured in spring of 2019.</h5>*/}
            {/*<h5 className="font-weight-light">In June 2019, our team of four left POPin to develop Meetly.</h5>*/}
            <ul className="ml-4 mt-4">
              <TimelineItem
                date="Spring 2019"
                description="Product manager and I came up with Meetly idea while
        conducting ethnographic research around how POPin users ran
        meetings."
              />
              <TimelineItem
                date="June 2019"
                description="Our team of 4 left POPin to develop Meetly fulltime."
              />
              <TimelineItem
                date="August 2019"
                description="Deployed an MVP."
              />
              <TimelineItem
                date="Sept 2019 – present"
                description="Continued to build, test, and learn."
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Meetly;
