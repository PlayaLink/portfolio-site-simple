import React, { Component } from "react";
import balance from "../../img/balance.png";
import arrow from "../../img/arrow.png";
import salamander from "../../img/salamander.png";
import buttons from "../../img/buttons.png";
import construction_designer from "../../img/construction_designer.png";
import construction_girl from "../../img/construction_girl.png";
import roadmap from "../../img/roadmap.png";
import sad_astronaut from "../../img/sad_astronaut.png";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { GroupHeader, GroupTitle, SectionTitle } from "../SharedComponents.jsx";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import backups_user_journey from "../../img/backups_user_journey.png";
import { PageTitle, ProjectSummarySection } from "../SharedComponents";
import { Progress, ProgressBackground } from "../Progress";

const Title = () => (
  <div className="mb-5 mt-md-5 py-5">
    <div className="horizontal-container" style={{ paddingTop: "2rem" }}>
      <PageTitle title="Building a design system from scratch" />
    </div>
  </div>
);

class DesignSystemSection extends Component {
  render() {
    const { title, image, children, imageCaption } = this.props;
    return (
      <div className="mb-5">
        <h1 className="text-uppercase mb-5">{title}</h1>
        <div className="row">
          <div className="col-md-6">{children}</div>
          <div className="col-md-6">
            <div className="d-flex flex-column align-items-center">
              <img className="img-rounded img-fluid d-block mb-5" src={image} />
              {!!imageCaption && (
                <p className="mt-3 font-italic">{imageCaption}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class DesignSystem extends Component {
  render() {
    const { scroll, top } = this.props;
    return (
      <React.Fragment>
        <Progress scroll={scroll} top={top} />
        <ProgressBackground scroll="100%" top={top} />
        <div className="mb-5 mt-md-5 py-5">
          <div className="horizontal-container" style={{ paddingTop: "2rem" }}>
            <PageTitle title="Building a design system from scratch" />
            {/*CONTEXT*/}
            <DesignSystemSection
              title="Context"
              image={buttons}
              imageCaption="Results from an audit of SimpleNexus buttons"
            >
              <GroupHeader
                title="Poor design consistency"
                img={arrow}
                noContainer={true}
              >
                <p>
                  Previous attempts at a design system had failed to gain
                  traction, resulting in wide inconsistencies.{" "}
                </p>
              </GroupHeader>
              <GroupHeader title="Lost sales" noContainer={true}>
                <p>
                  A large deal fell through because our competitor had “better
                  design”. This got leadership’s attention,
                </p>
              </GroupHeader>
              <GroupHeader title="Supportive leadership" noContainer={true}>
                <p>
                  Product leadership would allocate Engineering resources if
                  Design could produce a complete Design System that, crucially,
                  all designers were on board with.
                </p>
              </GroupHeader>
              <GroupHeader title="Growing design team" noContainer={true}>
                <p>
                  The design team was growing, from 3 designers to 14 in just
                  over a year.
                </p>
              </GroupHeader>
            </DesignSystemSection>

            {/*CHALLENGES*/}
            <DesignSystemSection title="Challenges" image={sad_astronaut}>
              <GroupHeader title="Multiple design tools" noContainer={true}>
                <p>
                  There was no common design tool when I joined the team, let
                  alone a fully web-based system like Figma.
                </p>
              </GroupHeader>
              <GroupHeader title="Distrust from Engineering" noContainer={true}>
                <p>
                  Previous attempts failed to produce a working design system
                  because even the designers failed to consistently adopt their
                  own shared patterns.
                </p>
              </GroupHeader>
              <GroupHeader
                title="Separate apps > siloed experiences"
                noContainer={true}
              >
                <p>
                  Three distinct apps – one for each user type – allowed
                  designers to follow their own patterns without (directly)
                  impacting other designers.
                </p>
              </GroupHeader>
            </DesignSystemSection>

            {/*RDESIGN SYSSTEM OADMAP*/}
            <DesignSystemSection title="Design System Road Map" image={roadmap}>
              <GroupHeader
                title="Create cross-functional team"
                noContainer={true}
                eyebrow="1"
              >
                <p>
                  This included 3 designers, 1 engineering manager, 1 product
                  manager evangelist
                </p>
              </GroupHeader>
              <GroupHeader
                title="Establish design foundations"
                noContainer={true}
                eyebrow="2"
              >
                <p>Including fonts, colors and standard UI components</p>
              </GroupHeader>
              <GroupHeader
                title="Design team adoption at 100%"
                noContainer={true}
                eyebrow="3"
              >
                <p>
                  Before asking Engineering to build design system (DS)
                  components, we needed to get all the designers on Figma and
                  using DS library.
                </p>
              </GroupHeader>
              <GroupHeader
                title="Process for new component adoption"
                noContainer={true}
                eyebrow="4"
              >
                <p>
                  Individual designers must involve design team before designing
                  common elements.
                </p>
                <p>
                  Engineering needed a system for publicizing shared components
                  as they became available.
                </p>
              </GroupHeader>
              <GroupHeader
                title="Full parity between Figma and codebase"
                noContainer={true}
                eyebrow="5"
              >
                <p>
                  After steps 1 to 4, leadership would provide fulltime
                  Engineering resources to design system management
                </p>
              </GroupHeader>
            </DesignSystemSection>

            {/*MY ROLE*/}
            <DesignSystemSection title="My role" image={sad_astronaut}>
              <GroupHeader title="Component carpenter" noContainer={true}>
                <p>
                  I built every component in Figma – regardless of who designed
                  it – so that it was easily modifiable for future contexts by
                  other designers.
                </p>
              </GroupHeader>
              <GroupHeader
                title="“Superfluous component” killer"
                noContainer={true}
              >
                <p>
                  Every proposed DS component required review by myself and our
                  DS engineering lead, I knew when designers were working on
                  similar UI and could{" "}
                  <mark className="highlight">propose merging similar designs</mark>.
                </p>
              </GroupHeader>
              <GroupHeader title="Technical reviewer" noContainer={true}>
                <p>
                  My{" "}
                  <span className="font-weight-bold">
                    background in engineering
                  </span>{" "}
                  allowed me to participate in{" "}
                  <mark className="highlight">
                    code review of shared components
                  </mark>
                  to ensure they were built in a way that allowed for changing
                  design requirements.
                </p>
              </GroupHeader>
              <GroupHeader title="Engineering advocate" noContainer={true}>
                <p>
                  I tried to get our design team to be mindful of the
                  consequences of their design decisions.
                </p>
                <p>
                  I also <mark className="highlight">encouraged Engineers to push back</mark> on designs that broke
                  with our design standards.
                </p>
                <p>
                  Going rogue and not referencing master components hurts the
                  integrity of the design system, whether its in Figma or the
                  code.
                </p>
              </GroupHeader>
            </DesignSystemSection>

            {/*CONTEXT VS CONSISTENCY*/}
            <DesignSystemSection title="Context vs Consistency" image={roadmap}>
              <GroupHeader title="A healthy tension" noContainer={true}>
                <p>
                  Design systems help us create (and enforce) a{" "}
                  <mark className="highlight">unified design language</mark>{" "}
                  across screens, platforms and applications.
                </p>
                <p>
                  But there are times when a specific context or need might
                  require <mark className="highlight">breaking a standard</mark>
                  .
                </p>
              </GroupHeader>
              <GroupHeader
                title="Advocating for consistency"
                noContainer={true}
              >
                <p>
                  While both consistency and context are important, my
                  experience is that individuals tend to prioritize their
                  immediate context and fail to{" "}
                  <mark className="highlight">
                    consider the impact of design variation
                  </mark>{" "}
                  on other designers.
                </p>
              </GroupHeader>
              <GroupHeader title="Documentation" noContainer={true}>
                <p>
                  My first goal with documenting components was that designers
                  don’t need to leave their context of use (Figma).
                </p>
                <p>
                  And if they do need to look something up, reduce the number of
                  places they have to look. In our case, I moved all design
                  system-related documentation to{" "}
                  <mark className="highlight">Confluence</mark>, which is where
                  Engineering lived and where the entire org was trying to
                  migrate.
                </p>
              </GroupHeader>
            </DesignSystemSection>

            {/*TEACHING DESIGNERS TO THINK LIKE ENGINEERS*/}
            <DesignSystemSection
              title="Teaching designers to think like engineers"
              image={roadmap}
            >
              <GroupHeader title="Design debt is real" noContainer={true}>
                <p>
                  Engineers have dealt with complex, shared repositories for
                  decades.
                </p>
                <p>
                  As tools like Figma allow design teams to build more powerful
                  design repositories, we need to leverage engineering’s
                  tried-and-true{" "}
                  <mark className="highlight">
                    techniques for managing complexity
                  </mark>
                  .
                </p>
              </GroupHeader>
              <GroupHeader title="Thinking in components " noContainer={true}>
                <p>
                  Componentization and leveraging pre-built libraries are part
                  of the reason code is so powerful.
                </p>
                <p>
                  It’s important to be creative and expansive when designing,
                  but to{" "}
                  <mark className="highlight">be a good design citizen</mark>
                  means thinking about how HTML boxes are built.
                </p>
              </GroupHeader>
              <GroupHeader
                title="Don’t Repeat Yourself (DRY)"
                noContainer={true}
              >
                <p>
                  The concept of componentization and adages like DRY (Don’t
                  Repeat Yourself) come from the lessons learned in
                  engineering, where the{" "}
                  <mark className="highlight">threat of technical debt</mark>{" "}
                  necessitates best practices.
                </p>
              </GroupHeader>
              <GroupHeader title="Single source of truth" noContainer={true}>
                <p>
                  This principle helps avoid confusion,
                  reduce duplicated efforts and generally{" "}
                  <mark className="highlight">limits complexity</mark>–– whether it’s a master component file, documentation or a
                  shared grocery list.
                </p>
              </GroupHeader>
            </DesignSystemSection>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DesignSystem;
