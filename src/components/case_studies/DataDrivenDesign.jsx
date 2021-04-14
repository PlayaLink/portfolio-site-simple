import React, { Component } from "react";
import hand_shake from "../../img/hand_shake.png";
import add_more_backups from "../../img/add_more_backups.png";
import peace_of_mind from "../../img/peace_of_mind.png";
import purchase_location from "../../img/purchase_location.png";
import website_count from "../../img/website_count.png";
import qualitative_interviews from "../../img/qualitative_interviews.jpg";
import activate_the_tool from "../../img/activate_the_tool.png";
import used_the_tool from "../../img/used_the_tool.png";
import codeguard_pricing from "../../img/codeguard_pricing.png";
import wix from "../../img/wix.png";
import squarespace from "../../img/squarespace.png";
import checkout from "../../img/checkout.png";
import db_report from "../../img/db_report.png";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { GroupHeader } from "../SharedComponents.jsx";
import { GroupTitle } from "../SharedComponents.jsx";
import { SectionTitle } from "../SharedComponents.jsx";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import backups_user_journey from '../../img/backups_user_journey.png';
import { PageTitle } from '../SharedComponents';

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
  <div className="mb-5 mt-md-5 py-5">
    <div className="horizontal-container" style={{paddingTop : "5rem"}}>
      <PageTitle title="Data-driven design"/>
      <div className="row">
        <div className="col-md-2">
          <GroupTitle title="Problem"/>
        </div>
        <div className="col-md-6">
          <p className="font-weight-regular">
            An expensive, low-impact ask from our business development team that ignored a large gap security gap in our product
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <GroupTitle title="Solution"/>
        </div>
        <div className="col-10 col-md-6">
          <p className="font-weight-regular">
            Research and database reports that exposed the security flaw and generated buy-in for redesigning our backups product installation flow
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <GroupTitle title="Outcome"/>
        </div>
        <div className="col-10 col-md-6">
          <p className="font-weight-regular">
            My team patched a major security flaw and retro-actively backed up websites for all affected users, i.e. 23% of all backups customers
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <GroupTitle title="My role"/>
        </div>
        <div className="col-10 col-md-6">
          <p className="font-weight-regular">
            UX designer | User researcher | Data analyst
          </p>
        </div>
      </div>
    </div>
  </div>
);

class DataDrivenDesign extends Component {
  render() {
    return (
      <div className="mt-md-5">
        <Title />
        <SectionTitle step="discovery" />

        <GroupHeader title="The ask">
          <div className="row">
            <div className="col-12 col-md-6">
              <p>
                Add another{" "}
                <span className="font-weight-bold">backup tool</span> option for
                users to choose from and provide them the ability to manually
                allocate licenses to their websites.
              </p>
            </div>
          </div>
          <img
            alt="Add-more-backups"
            className="img-fluid rounded mt-3 px-2"
            src={add_more_backups}
          />
        </GroupHeader>
        <GroupHeader title="What does success look like?">
          <div className="row">
            <div className="col-md-6">
              <p>
                We needed to add several add-on products inside our app in order
                to{" "}
                <span className="text-uppercase" style={{ fontSize: "1rem" }}>
                  maintain good relations with a vendor
                </span>
                .
              </p>
              <p>
                But no stakeholders could provide baseline about how users were
                using the current backups tool (called CodeGuard) or if they
                were satisfied with it or not.
              </p>
            </div>
          </div>
        </GroupHeader>
        <GroupHeader title="Querying the database">
          <div className="row">
            <div className="col-md-6">
              <p>
                No stakeholders had any data about how users were using our
                existing backups tool.
              </p>
              <p>
                My first step was to find out what I could about the users who
                had already purcachased backup support (i.e. CodeGuard) so that
                we would have a baseline to compare to after we made changes.
              </p>
            </div>
            <div className="col-md-6">
              <img src={db_report} alt="purchase location" className="img-fluid" />
            </div>
          </div>
        </GroupHeader>
        <GroupHeader
          title="More options in-product will increase sales"
          eyebrow="False Assumption #1"
        >
          <div className="row">
            <div className="col-md-6">
              <p>
                A simple database query showed that most purchases occur during
                signup, before the user had interacted with product.
              </p>
              <p>
                Therefore, tweaking the UI in-product was going to have{" "}
                <span className="text-uppercase">marginal impact</span>.
              </p>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="embed-responsive embed-responsive-16by9">
                <div
                  className="embed-responsive-item"
                  dangerouslySetInnerHTML={{
                    __html:
                      '<iframe src="https://datastudio.google.com/embed/reporting/6e585786-d396-47a4-86d3-ab6774a6397b/page/MVFCC" frameborder="0" style="border:0" allowfullscreen></iframe>'
                  }}
                />
              </div>
            </div>
          </div>
        </GroupHeader>

        <GroupHeader
          title="Users require advanced functionality"
          eyebrow="False Assumption #2"
        >
          <div className="row">
            {" "}
            <div className="col-md-6">
              <p>
                Our existing backups tool provides support for multiple
                websites.
              </p>
              <p>
                In theory, you could have more websites that backup licenses,
                and therefore you would need the ability to manage purchased
                licenses.
              </p>
              <p>
                However, this number of users who would need this is span{" "}
                <span className="text-uppercase">infinitessimally small</span>.
              </p>
              <p>
                Only <span className="text-uppercase">0.12% of users</span>{" "}
                would potentially benefit from license management.
              </p>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="embed-responsive embed-responsive-16by9">
                <div
                  className="embed-responsive-item"
                  dangerouslySetInnerHTML={{
                    __html:
                      '<iframe src="https://datastudio.google.com/embed/reporting/8c5cebf6-20ca-47af-b1b5-c976cf2a7253/page/MVFCC" frameborder="0" style="border:0" allowfullscreen></iframe>'
                  }}
                />
              </div>
            </div>
          </div>
        </GroupHeader>
        <SectionTitle step="research" className="pb-md-2 pt-md-5">
          <div className="row">
            <div className="col-md-6">
              <p className="mt-3">
                I wanted to test my assumptions and generate more data that
                would help us create a relevant solution.
              </p>
            </div>
          </div>
        </SectionTitle>
        <div className="row horizontal-container no-gutters">
          <div className="col-md-6">
            <GroupHeader
              title="Qualitative discovery [INTERVIEWS]"
              noContainer={true}
            >
              <p className="mb-5">
                I spoke with some CodeGuard customers to learn more about why
                they bought and how they were using the tool.
              </p>
              <p>
                These conversations gave me a sense of what users motivations
                and needs were, but the data was only{" "}
                <span className="text-uppercase">anecdotal</span> and didn't
                necessarily reflect the opinions of all our users.
              </p>
            </GroupHeader>
          </div>
          <div className="col-md-6">
            {/*<img*/}
              {/*src={qualitative_interviews}*/}
              {/*alt="Survey results"*/}
              {/*className="img-fluid"*/}
            {/*/>*/}
          </div>
        </div>
        <div className="row horizontal-container no-gutters">
          <div className="col-md-6">
            <GroupHeader
              title="Quantitative validation [SURVEY]"
              noContainer={true}
            >
              <p>
                I teamed up with one of our user researchers to find out how
                common the opinions of our interviewees were.
              </p>
              <p>
                With <span className="font-weight-bold">328 responses</span>, we
                had statistically significant data.
              </p>
            </GroupHeader>
          </div>
          <div className="col-md-6">
            {/*<img*/}
              {/*src={backups_survey}*/}
              {/*alt="Survey results"*/}
              {/*className="img-fluid"*/}
            {/*/>*/}
          </div>
        </div>
        <GroupHeader title="Key findings">
          <div className="row">
            <div className="col-md-6">
              {" "}
              <p className="mt-3">
                Most users had{" "}
                <span className="text-uppercase">never interacted</span> with
                the backups UI.
              </p>
              <div className="embed-responsive embed-responsive-16by9">
                <div className="embed-responsive-item"
                  dangerouslySetInnerHTML={{
                    __html:
                      '<iframe width="520" height="330" src="https://datastudio.google.com/embed/reporting/4f6fe5e0-f5e9-431e-85e6-23725b5549cb/page/MVFCC" frameborder="0" style="border:0" allowfullscreen>'
                  }}
                />
              </div>
              
            </div>
            <div className="col-md-6">
              <p className="mt-3">Most purchased backups for "peace of mind"</p>
              <div className="embed-responsive embed-responsive-16by9">
                <div className="embed-responsive-item"
                     dangerouslySetInnerHTML={{
                       __html:
                         '<iframe width="520" height="330" src="https://datastudio.google.com/embed/reporting/9ce6c0b8-2bb4-485d-84b2-c2e0bfb3b07a/page/MVFCC" frameborder="0" style="border:0" allowfullscreen></iframe>'
                     }}
                />
              </div>
            </div>
          </div>

          {/*<img className="mt-3" src={peace_of_mind} alt="Survey results" />*/}
        </GroupHeader>
        <GroupHeader title="Usability & features" eyebrow="The red herring">
          <div className="row">
            <div className="col-md-6">
              <p>
                Most users viewed CodeGuard as "disaster insurance" – something
                they don't use regularly but want to have in case of an
                emergency.
              </p>
              <p>
                Even users who had never used the tool had a high NPS score.
              </p>
              <p>
                Improving the interaction design or adding features to such an infrequently used
                tool was deamed to be{" "}
                <span className="text-uppercase">lower priority</span>.
              </p>
            </div>
            <div className="col-md-6" />
          </div>
        </GroupHeader>
        <GroupHeader title="Inactivated licenses" eyebrow="The real problem">
          <div className="row">
            <div className="col-md-6">
              <p>
                Users had purchased backups for peace of mind but did not know
                they need to activate the tool, meaning{" "}
                <span className="font-weight-bold">
                  paying customers were NOT protected
                </span>{" "}
                from site crashes or getting hacked.
              </p>
            </div>
            <div className="col-md-6">
              <p className="">
                A UX fail...
              </p>
              <div className="embed-responsive embed-responsive-16by9">
                <div className="embed-responsive-item"
                     dangerouslySetInnerHTML={{
                       __html:
                         '<iframe width="520" height="330" src="https://datastudio.google.com/embed/reporting/f4ee941b-ebf7-435d-969e-ad7146877bdf/page/MVFCC" frameborder="0" style="border:0" allowfullscreen></iframe>'
                     }}
                />
              </div>
            </div>
          </div>
        </GroupHeader>
        <GroupHeader title="User journey mapping">
          <div className="row">
            <div className="col-md-6">
              <p>
                After exposing this flaw in our installation flow, which was affecting so many of our backups tool users, I wanted to make sure we were accounting for all possible paths for backups purchases.
              </p>
              <p>
                I found multiple ways that a user could fall into a state where they had purchased backups support and yet remained unprotected due to inactivated licenses.
              </p>
            </div>
            <div className="col-md-6">
              <img src={backups_user_journey} alt="User journey" className="img-fluid" />
            </div>
          </div>
        </GroupHeader>
        <SectionTitle step="design" />
        <GroupHeader title="Competitive analysis">
          <div className="row">
            <div className="col-md-6">
              <p>
                Wix and Squarespace – our two largest competitors – do not even
                offer “website backups” as an add-on product.
              </p>
              <p>
                Instead, these companies{" "}
                <span className="text-uppercase">automatically back up </span> a
                user’s content as part of their core offering.
              </p>
              <p>
                The user does not have to take any additional action for their
                website to be protected from crashes or attacks.
              </p>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-7 d-flex align-items-center justify-content-center">
                  <img
                    src={wix}
                    alt="Wix and Squarespace"
                    className="ml-md-5 img-fluid p-5 p-md-4"
                  />
                </div>
                <div className="col-md-5 d-flex align-items-center justify-content-center">
                  <img
                    src={squarespace}
                    alt="Wix and Squarespace"
                    className="m-md-5 img-fluid p-5 p-md-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </GroupHeader>
        <GroupHeader title="Aligning the product with our marketing">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-between">
              <p>
                Since 95% of purchases are made via the marketing site sign up flow, the wording used there sets the expectation of how the tool works.
              </p>
              <p>
                The feature "Automated Backups" implies that the tool works "automatically". Our survey data proved that more users are not aware that further action is needed.
              </p>
            </div>
            <div className="col-md-3">
              <img src={checkout} alt="Checkout screen" className="img-fluid" />
            </div>
          </div>
        </GroupHeader>
        <GroupHeader title="Auto-install licenses for new backups purchases" eyebrow="The solution">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-between">
              <p>
                I proposed our V1 solution should focus on CodeGuard users who have less than 6 sites, since that makes >99% of our users.
              </p>
              <p>
                The feature "Automated Backups" implies that the tool works "automatically". Our survey data proved that more users are not aware that further action is needed.
              </p>
            </div>
          </div>
        </GroupHeader>

        <SectionTitle step="learn" />

        <GroupHeader
          title="Retroactively install licenses for unprotected users"
          eyebrow="Fast follow"
        >
          <div className="row">
            <div className="col-md-6">
              <p>
                Not only did we start auto-installing all available CodeGuard
                licenses, we retroactively auto-installed licenses on the 23% of
                users who had been affected in the past.
              </p>
            </div>
          </div>
        </GroupHeader>
        <GroupHeader
          title="What I learned"
        >
          <div className="row">
            <div className="col-md-6">
              <p>
                Not to blindly execute on asks from internal stakeholders.
              </p>
              <p>
                Understand the full context of the ask, so I know if and when it is appropriate to push back.
              </p>
              <p>
                Hard numbers resonate stronger than pretty designs and well-articulated opinions.
              </p>
            </div>
          </div>
        </GroupHeader>
      </div>
    );
  }
}

export default DataDrivenDesign;
