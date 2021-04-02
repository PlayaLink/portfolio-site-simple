import React, { Component } from "react";
import hand_shake from "../../img/hand_shake.png";
import add_more_backups from "../../img/add_more_backups.png";
import peace_of_mind from "../../img/peace_of_mind.png";
import purchase_location from "../../img/purchase_location.png";
import website_count from "../../img/website_count.png";
import activate_the_tool from "../../img/activate_the_tool.png";
import used_the_tool from "../../img/used_the_tool.png";
import codeguard_pricing from "../../img/codeguard_pricing.png";
import survey_question from "../../img/survey_question.png";
import backups_survey from "../../img/backups_survey.png";
import db_report from "../../img/db_report.png";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";

const iconStyle = { background: "rgb(33, 150, 243)", color: "#fff" };

const Dot = styled.span`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 1rem;
  padding: 0.25rem;
  position: relative;
  top: -0.25rem;
`;

const Title = () => (
  <div className="my-5">
    <div className="horizontal-container">
      <div className="col-12 col-md-8 pl-0">
        <h1 className="display-4 page-header">Data-driven design</h1>
        <h3 className="font-weight-bold">
          How asking “why” protected my team from an expensive ask and uncovered
          a critical trap in the product
        </h3>
      </div>
    </div>
  </div>
);

const SegmentTitle = props => (
  <div className="horizontal-container mb-5">
    <h1 className="page-header border-bottom">{props.title}</h1>
  </div>
);

const Section = props => (
  <div className="horizontal-container mb-5">
    <h3 className="font-weight-bold d-flex mb-3">
      {props.title} {props.img}
    </h3>
    {props.children}
  </div>
);

class DataDrivenDesign extends Component {
  render() {
    return (
      <div className="mt-md-5">
        <Title />
        <SegmentTitle title="Part I - Pushing back" />
        <Section title="The ask">
          <div className="d-flex w-50">
            <p>
              Add another <span className="font-weight-bold">backup tool</span>{" "}
              option for users to choose from and provide them the ability to
              manually allocate licenses to their websites.
            </p>
          </div>
          <img
            alt="Add-more-backups"
            className="img-fluid rounded mt-3"
            src={add_more_backups}
          />
        </Section>
        <Section title="Wait, but why?">
          <div className="d-flex flex-column w-50">
            <p>
              No one could give me a satisfying answer for why users needed
              another backups option.
            </p>
            <p>
              There was no information about how users were using the current
              backups tool (called CodeGuard) or if they were satisfied with it
              or not.
            </p>
          </div>
        </Section>
        <Section
          title="Well... business needs"
          img={
            <img className="ml-3" style={{ width: "45px" }} src={hand_shake} />
          }
        >
          <div className="d-flex flex-column w-50">
            <p>
              Turns out, we needed to add several add-on products inside our app
              in order to{" "}
              <span className="font-weight-bold">
                maintain good relations with a vendor
              </span>
              .
            </p>
          </div>
        </Section>
        <Section title="Still, the numbers don't lie">
          <div className="d-flex flex-column w-50">
            <p>
              Adding more backups options inside the webhosting product may have
              kept the vendor happy.
            </p>
            <p>
              But it was a token gesture, at best. The reality is that most
              users don’t purchase backups in-product.
            </p>
          </div>
        </Section>
        <h4 className="text-uppercase text-danger horizontal-container mb-2">
          False Assumption #1
        </h4>
        <Section title="More options in-product will increase sales">
          <div className="d-flex flex-column w-50">
            <p className="mb-5">
              A simple database query shows that most purchases occur during
              signup, before the user has interacted with product.
            </p>
            <div className="d-flex mb-3">
              <img src={db_report} alt="database report" />
            </div>
            <p>
              Therefore, tweaking the UI in-product was going to have{" "}
              <span className="font-weight-bold">marginal impact</span>.
            </p>
          </div>
        </Section>
        <h4 className="text-uppercase text-danger horizontal-container mb-2">
          False Assumption #2
        </h4>
        <Section title="Users need to assign/unassign backups licenses to websites">
          <div className="d-flex flex-column w-50">
            <p>
              CodeGuard’s backup service provides support for multiple websites.
            </p>
            <p>
              In theory, you could have more websites that backup licenses, and
              therefore you would need the ability to manage purchased licenses.
            </p>
            <p>
              But only 3% of all users have more than 5 sites. And only 4% of
              this 3% have more published websites than available backups
              licenses.
            </p>
            <p>
              Therefore,{" "}
              <span className="font-weight-bold" style={{ fontSize: "1.5rem" }}>
                only 0.12%
              </span>{" "}
              of users would potentially benefit from license management.
            </p>
          </div>
        </Section>
        <Section title="Protecting the team">
          <div className="d-flex flex-column w-50">
            <p>
              Once I showed these conversion numbers to the stakeholder who owns
              the relationship with the vendor, they understood our concern and
              <span className="font-weight-bold">they stopped asking</span> for
              more upsells in the product.
            </p>
            <p>
              Instead, they went to the marketing dept to see if they could get
              better real estate for the vendor's products during new user sign
              up flow – where 95% of purchases were occurring.{" "}
            </p>
          </div>
        </Section>
        <SegmentTitle title="Part II - Advocating for the user" />
        <Section title="What do users really need?">
          <div className="d-flex flex-column w-50">
            <p>
              I wanted to test my assumptions and generate more data that would
              help us create a relevant solution.
            </p>
          </div>
        </Section>
        <Section title="[SURVEY]">
          <div className="d-flex flex-column w-50">
            <p>
              I teamed up with one of our user researchers to put together a
              survey to <span className="font-weight-bold">how</span> people
              were using CodeGuard and{" "}
              <span className="font-weight-bold">why</span> they decided to
              purchase website backups support.
            </p>
            <p>
              With <span className="font-weight-bold">328 responses</span>, we
              had statistically significant data.
            </p>
          </div>
          <div className="d-flex flex-column w-75 mt-3 mb-5 pb-md-5">
            <img className="mb-5" src={survey_question} alt="Survey question" />
            <img src={backups_survey} alt="Survey results" />
          </div>
        </Section>
        <Section title="Usability was NOT an issue">
          <div className="d-flex flex-column w-50">
            <p className="mt-3">
              Most users had{" "}
              <span className="font-weight-bold">never interacted</span> with
              the backups UI.
            </p>
            <div className="d-flex flex-column w-75 mt-2 mb-5">
              <img src={used_the_tool} alt="Survey results" />
            </div>
          </div>
          <div className="d-flex flex-column w-50">
            <p className="mt-3">
              Users considered backups tools as a "just in case" safety
              precaution.
            </p>
            <div className="d-flex flex-column w-75 mt-3">
              <img src={peace_of_mind} alt="Survey results" />
            </div>
          </div>
        </Section>
        <h4 className="text-uppercase text-danger horizontal-container mb-2">
          The real problem
        </h4>
        <Section title="Inactivated licenses">
          <div className="d-flex flex-column w-50">
            <p>
              Users had purchased backups for peace of mind but did not know
              they need to activate the tool, meaning{" "}
              <span className="font-weight-bold">
                paying customers were NOT protected
              </span>{" "}
              from site crashes or getting hacked.
            </p>
            <div className="d-flex flex-column w-75 mt-3">
              <img src={activate_the_tool} alt="Survey results" />
            </div>
          </div>
        </Section>
        <Section title="Umm... why do we require manual activation?">
          <div className="d-flex flex-column w-50">
            <p>
              Because, <span className="font-weight-bold">in theory</span>, a
              user could have more websites than paid licenses, and we would
              have no way of knowing which websites they wanted protected.
            </p>
          </div>
        </Section>
        <Section title="But the data tell a different story">
          <div className="d-flex flex-column w-50">
            <p>
              Another database query showed that 97% of our users had 5
              published websites or less.
            </p>
            <div className="d-flex flex-column w-75 mt-3 mb-5">
              <img src={website_count} alt="Survey results" />
            </div>
            <p>
              This means that at least 97% of our users would be fully covered
              by CodeGuard's lowest-tier plan:
            </p>
          </div>
          <div className="d-flex flex-column w-75 mt-3">
            <img src={codeguard_pricing} alt="Survey results" />
          </div>
        </Section>
      </div>
    );
  }
}

export default DataDrivenDesign;
