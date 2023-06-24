import React from "react";
import WorkItems from "./WorkItems";

const data = [
  {
    company: "7 Rivers Inc.",
    year: 2022,
    title: "Senior Software Developer",
    duration: "9 Months",
    jobdescription:
      "- Meeting with functional consultants to discuss requirements; Assigning tasks to junior developers such as coding, testing, debugging, and analytics.",
    jobdescription2:
      "- Train Junior Developers to perform based on best practices for Software Development;Managing project timelines and tasks.",
    jobdescription3:
      "- Training staff on software use.;Integrate software components into a fully functional software system",
    jobdescription4:
      "- Troubleshoot, debug and upgrade existing systems;Deploy programs and evaluate user feedback",
    jobdescription5: "Ensure software is updated with latest features",
  },
  {
    company: "Gatessoft Corp.",
    year: 2014,
    title: "Senior Software Developer",
    duration: "7 Years",
    jobdescription:
      "- Develops software solutions by studying information needs; conferring with users; studying systems flow, data usage, and work processes; investigating problem areas; following the software development lifecycle.",
    jobdescription2:
      "- Improves operations by conducting systems analysis; recommending changes in policies and procedures.- Protects operations by keeping information confidential.",
    jobdescription3:
      "- Accomplishes engineering and organization mission by completing related results as needed.",
    jobdescription4:
      "- Provides information by collecting, analyzing, and summarizing development and service issues.- Analyzing Information , General Programming Skills, Software Design, Software Debugging, Software Documentation, Software Testing, Problem Solving, Teamwork, Software Development Fundamentals, Software Development Process, Software Requirements",
    jobdescription5:
      "- Analyzing Information , General Programming Skills, Software Design, Software Debugging, Software Documentation, Software Testing, Problem Solving, Teamwork, Software Development Fundamentals, Software Development Process, Software Requirements",
  },
  {
    company: "ADMC Graphics and Printing Services",
    year: 2014,
    title: " Graphic Artist",
    duration: "5 Months",
    jobdescription:
      "Creating design for ID’s, Invitation Card, Tarpaulin, T-Shirt Printing, Silk Screen.",
    jobdescription2: "",
    jobdescription3: "",
    jobdescription4: "",
    jobdescription5: "",
  },
];

const Work = () => {
  return (
    <div id="Experience" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-10">
        Work Experience
      </h1>
      {data.map((item, idx) => (
        <WorkItems
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          jobdescription={item.jobdescription}
          jobdescription2={item.jobdescription2}
          jobdescription3={item.jobdescription3}
          jobdescription4={item.jobdescription4}
          jobdescription5={item.jobdescription5}
          company={item.company}
        />
      ))}
    </div>
  );
};

export default Work;
