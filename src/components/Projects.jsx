import React from "react";
import ProjectsItems from "./ProjectsItems";
import invSystem from "../assets/MMS.jpg";
import posSystem from "../assets/POS.jpg";
import terminalSytem from "../assets/TMS.jpg";
import hotelSystem from "../assets/HMS.jpg";

const Projects = () => {
  return (
    <div id="Projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mt-5">
        Projects
      </h1>
      <p className="text-center py-8">Sample applications that we developed.</p>
      <div className="grid sm:grid-cols-4 gap-4">
        <ProjectsItems img={invSystem} title="Material Management System" />
        <ProjectsItems img={posSystem} title="Point of Sales System" />
        <ProjectsItems img={terminalSytem} title="Bus Terminal System" />
        <ProjectsItems img={hotelSystem} title="Hotel Management System" />
      </div>
    </div>
  );
};

export default Projects;
