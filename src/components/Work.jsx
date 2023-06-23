import React from "react";
import WorkItems from "./WorkItems";

const data = [
  {
    company: "7 Rivers Inc.",
    year: 2022,
    title: "Senior Software Developer",
    duration: "9 Months",
    jobdescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt temporibus labore dolorem excepturi esse molestias voluptas dolorum? Iste neque velit nulla, quos dolore debitis voluptatem nemo natus culpa porro consequatur!",
  },
  {
    company: "Gatessoft Corp.",
    year: 2014,
    title: "Senior Software Developer",
    duration: "7 Years",
    jobdescription:
      "- Develops software solutions by studying information needs; conferring with users; studying systems flow, data usage, and work processes; investigating problem areas; following the software development lifecycle. - Improves operations by conducting systems analysis; recommending changes in policies and procedures.- Protects operations by keeping information confidential. - Accomplishes engineering and organization mission by completing related results as needed.<br>- Provides information by collecting, analyzing, and summarizing development and service issues.<br>- Analyzing Information , General Programming Skills, Software Design, Software Debugging, Software Documentation, Software Testing, Problem Solving, Teamwork, Software Development Fundamentals, Software Development Process, Software Requirements",
  },
  {
    company: "ADMC Graphics and Printing Services",
    year: 2014,
    title: " Graphic Artist",
    duration: "5 Months",
    jobdescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt temporibus labore dolorem excepturi esse molestias voluptas dolorum? Iste neque velit nulla, quos dolore debitis voluptatem nemo natus culpa porro consequatur!",
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
          company={item.company}
        />
      ))}
    </div>
  );
};

export default Work;
