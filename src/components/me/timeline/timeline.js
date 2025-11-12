import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faCss3, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  faUniversity,
  faGraduationCap,
  faFlagUsa,
} from "@fortawesome/free-solid-svg-icons";

import timelineData from "./timeline.json";

const iconMap = {
  react: faReact,
  css: faCss3,
  html: faHtml5,
  university: faUniversity,
  graduation: faGraduationCap,
  flag: faFlagUsa,
};

const containerStyles = { background: "black", color: "#fff" };
const arrowStyles = { borderRight: "7px solid rgb(118, 42, 218)" };

export default function TimeLineComponent() {
  return (
    <section aria-labelledby="timeline-title">
      <h2 id="timeline-title" className="sr-only">
        Professional Timeline
      </h2>
      <VerticalTimeline>
        {timelineData.map((item, idx) => (
          <VerticalTimelineElement
            key={idx}
            className="vertical-timeline-element--work"
            contentStyle={containerStyles}
            contentArrowStyle={arrowStyles}
            date={item.date}
            iconStyle={containerStyles}
            icon={
              <FontAwesomeIcon
                icon={iconMap[item.icon]}
                size="2x"
                style={{ paddingRight: item.icon === "css" ? "12%" : "15%" }}
                aria-hidden="true"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.subtitle}
            </h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
