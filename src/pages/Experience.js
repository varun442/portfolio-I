import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2022 - August 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Developer - ReactJS
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            LTIMindtree, Pune, India (Hybrid)
          </h4>
          <p>
          Proficient in implementing web design and development principles to build 
          stable software. I collaborate closely with teams to support have expertise in 
          building responsive and user-friendly websites and apps. 
          </p>

          <p>
          Converted mock-ups to life using HTML, CSS, and JavaScript, including ReactJS. 
          With attention to detail and effective communication, I am committed to 
          delivering stable and high-quality software.
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="October 2020 - November 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Anaplan Model Builder - Consultant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            LTIMindtree, Pune, India (Hybrid)
          </h4>
          <p>
            Certified Model Builder with expertise in building complex
            dashboards using Anaplan, implementing solutions from scratch, and
            improving model performance.
          </p>

          <p>
            Worked on Anaplan Connect API for Data integration and helped team
            in modifying existing models as part of a connected solution to
            incorporate enhancements/bug fixes
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            VNR Vignana Jyothi Institute of Engineering & Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hyderabad, Telangana
          </h4>
          <p>Bachelor's Degree, Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Narayana Junior College - Intermediate
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Hyderabad, Telangana
          </h4>

          <p>Maths, Physics, Chemistry </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
