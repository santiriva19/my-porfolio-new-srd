import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faCss3, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  faUniversity,
  faGraduationCap,
  faFlagUsa,
} from "@fortawesome/free-solid-svg-icons";
import "react-vertical-timeline-component/style.min.css";
function TimeLineComponent() {
  const containerStyles = {
    background: "black",
    color: "#fff",
  };
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={containerStyles}
        contentArrowStyle={{ borderRight: "7px solid rgb(118, 42, 218) " }}
        date="March 2023"
        iconStyle={containerStyles}
        icon={
          <FontAwesomeIcon
            icon={faUniversity}
            size="2x"
            style={{ paddingRight: "15%" }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">
          Master in Applied Analytics
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          University of La Sabana
        </h4>
        <p>
          Started a Master to keep learning machine learning and data analysis
          in order to create an investigation about healthcare.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={containerStyles}
        contentArrowStyle={{ borderRight: "7px solid rgb(118, 42, 218) " }}
        date="March 2023"
        iconStyle={containerStyles}
        icon={
          <FontAwesomeIcon
            icon={faUniversity}
            size="2x"
            style={{ paddingRight: "15%" }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">
          Ingormatics Engineering graduation
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          University of La Sabana
        </h4>
        <p>Finished university.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={containerStyles}
        contentArrowStyle={{ borderRight: "7px solid rgb(118, 42, 218) " }}
        date="February 2023 - present"
        iconStyle={containerStyles}
        icon={
          <FontAwesomeIcon
            icon={faReact}
            size="2x"
            style={{ paddingRight: "15%" }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">
          Intermediate React Developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Unosquare</h4>
        <p>
          Working from home at Unosquare implementing efficient code and
          developing React based software.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={containerStyles}
        contentArrowStyle={{ borderRight: "7px solid rgb(118, 42, 218) " }}
        date="December 2021 - present"
        iconStyle={containerStyles}
        icon={
          <FontAwesomeIcon
            icon={faReact}
            size="2x"
            style={{ paddingRight: "15%" }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">
          Full-Stack Developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Austin Software</h4>
        <p>
          Developer with React and NodeJS, he has been working with a big
          company from Silicon Valley called Truepill.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={containerStyles}
        contentArrowStyle={{ borderRight: "7px solid rgb(118, 42, 218) " }}
        date="November 2020 - December 2021"
        iconStyle={containerStyles}
        icon={
          <FontAwesomeIcon
            icon={faReact}
            size="2x"
            style={{ paddingRight: "15%" }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">Software Devloper</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Teleperformance - Colombia
        </h4>
        <p>Main designer and frontend developer for the development team.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={containerStyles}
        contentArrowStyle={{ borderRight: "7px solid rgb(118, 42, 218) " }}
        date="June - November 2020"
        iconStyle={containerStyles}
        icon={
          <FontAwesomeIcon
            icon={faCss3}
            size="2x"
            style={{ paddingRight: "12%" }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">Fullstack Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Consorcio Delgado Murcia - Colombia
        </h4>
        <p>
          Built, developed and implemented a fully informative and responsive
          web page.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={containerStyles}
        contentArrowStyle={{ borderRight: "7px solid rgb(118, 42, 218) " }}
        date="January - June 2020"
        iconStyle={containerStyles}
        icon={<FontAwesomeIcon icon={faHtml5} size="2x" />}
      >
        <h3 className="vertical-timeline-element-title">Frontend developer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Terra Engineering - Colombia
        </h4>
        <p>
          Gave a software solution to a local restaurant, developing a
          professional product.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={containerStyles}
        contentArrowStyle={{ borderRight: "7px solid rgb(118, 42, 218) " }}
        date="2018"
        iconStyle={containerStyles}
        icon={
          <FontAwesomeIcon
            icon={faUniversity}
            size="2x"
            style={{ paddingRight: "15%" }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">
          Collage - Informatic engineering dregree
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          University of La Sabana
        </h4>
        <p>Started informatics engineering degree at University of La Sabana</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={containerStyles}
        contentArrowStyle={{ borderRight: "7px solid rgb(118, 42, 218) " }}
        date="Finished in 2017"
        iconStyle={containerStyles}
        icon={
          <FontAwesomeIcon
            icon={faGraduationCap}
            size="2x"
            style={{ paddingRight: "15%" }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">
          Graduated High-school
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Contraloría General de la República
        </h4>
        <p>Graduated from High-school with honors.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={containerStyles}
        contentArrowStyle={{ borderRight: "7px solid rgb(118, 42, 218) " }}
        date="2015"
        iconStyle={containerStyles}
        icon={
          <FontAwesomeIcon
            icon={faFlagUsa}
            size="2x"
            style={{ paddingRight: "15%" }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">
          High-school - Internship
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Alonzo And Tracy Mourning - Miami, FL
        </h4>
        <p>Attended 9th grade to further develop english skills.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={containerStyles}
        contentArrowStyle={{ borderRight: "7px solid rgb(118, 42, 218) " }}
        date="2013"
        iconStyle={containerStyles}
        icon={
          <FontAwesomeIcon
            icon={faFlagUsa}
            size="2x"
            style={{ paddingRight: "15%" }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">
          Middle-school - Internship
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Norman S. Edelcurp K-8 - Miami, FL
        </h4>
        <p>Attended 6th grade in Miami to learn english.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default TimeLineComponent;
