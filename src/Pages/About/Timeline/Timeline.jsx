import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faSchool,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

// Icon for work experience
const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
};

// Icon for school experience
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
};

// Icon for star (placeholder)
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: "rgb(16, 204, 82)", color: "#fff" },
};

function Timeline() {
  const timeline = [
    {
      icon: schoolIcon,
      date: "November 2020- Present",
      title: "Registered Nurse",
      subtitle: "Best Home Health Providers",
      desc: "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
    },
    {
      icon: schoolIcon,
      date: "November 2020- July 2022",
      title: "Registered Nurse",
      subtitle: "Miami, FL",
      desc: "Palo Alto Veteran Affairs Hospital",
    },
    {
      icon: workIcon,
      date: "November 2019 – December 2020",
      title: "Registered Nurse",
      subtitle: "Empress Care Center, San Jose, California",
      desc: "Teach patients, family members, and auxiliary nursing personnel proper health maintenance care.",
    },
    // ... other timeline elements
    { icon: starIcon }, // Placeholder element with star icon
  ];

  return (
    <div className="timeline-title">
      <h1>WORK EXPERIENCE</h1>
      <VerticalTimeline>
        {timeline.map((t, i) => {
          // Styling for the first timeline element
          const contentStyle =
            i === 0
              ? { background: "rgb(33, 150, 243)", color: "#fff" }
              : undefined;

          // Styling for the arrow of the first timeline element
          const arrowStyle =
            i === 0
              ? { borderRight: "7px solid  rgb(33, 150, 243)" }
              : undefined;

          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              date={t.date}
              {...t.icon}
            >
              {/* Render the title, subtitle, and description if they exist */}
              {t.title ? (
                <React.Fragment>
                  <h3 className="vertical-timeline-element-title">{t.title}</h3>
                  {t.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle">
                      {t.subtitle}
                    </h4>
                  )}
                  {t.desc && <p>{t.desc}</p>}
                </React.Fragment>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;

// - The code imports necessary dependencies such as React, VerticalTimeline, VerticalTimelineElement, and FontAwesomeIcon from respective libraries.
// - It also imports the necessary styles for the vertical timeline component and the font awesome icons.
// - The code defines three objects (workIcon, schoolIcon, starIcon) that represent different icons and their styles using FontAwesomeIcon.
// - The Timeline function component is defined.
// - Inside the function, there is an array called "timeline" that represents the timeline elements.
// - Each timeline element is an object with properties such as icon, date, title, subtitle, and desc (description).
// - The component renders a title "WORK EXPERIENCE" and a VerticalTimeline component.
// - Inside the VerticalTimeline component, it maps over the "timeline" array and renders a VerticalTimelineElement for each element.
// - The contentStyle and arrowStyle variables are used to style the first timeline element differently.
// - The VerticalTimelineElement renders the date and the icon from the timeline element using the spread operator.
// - If the timeline element has a title, it renders the title, subtitle, and description.
// - The component is exported as the default export.

// You can explain to the client that this code represents a React component that displays a vertical timeline of work experiences. It uses the VerticalTimeline and VerticalTimelineElement components from the react-vertical-timeline-component library. The FontAwesomeIcon component is used to display icons for each timeline element. The component takes an array of timeline elements as data and maps over them to render the timeline. Each timeline element consists of an icon, date, title, subtitle, and description. The first timeline element is styled differently to highlight it. The component provides a visually appealing and organized way to showcase work experience.
