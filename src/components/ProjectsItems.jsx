import React from "react";

const ProjectsItems = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="lg:text-2xl text-[15px] font-bold text-white tracking-wider text-ceter">
          {title}
        </h3>
        <p className="pb-4 pt-2 lg:text-md text-sm text-white text-center">
          Vb6.0 | MySQL
        </p>
        <a href="/">
          <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer lg:text-lg text-md">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectsItems;
