import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineAppstore,
  AiOutlineProject,
} from "react-icons/ai";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    // console.log("State Changed");
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden lg:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#Home"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#Profile"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineUser size={20} />
            <span className="pl-4">Profile</span>
          </a>
          <a
            onClick={handleNav}
            href="#Experience"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineAppstore size={20} />
            <span className="pl-4">Work Experience</span>
          </a>
          <a
            onClick={handleNav}
            href="#Projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden lg:hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#Home"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#Profile"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineUser size={20} />
          </a>
          <a
            href="#Experience"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineAppstore size={20} />
          </a>
          <a
            href="#Projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </a>
        </div>
      </div>

      <div className="lg:block hidden fixed top-[10%] right-[5%] z-10">
        <div className="flex h-12">
          <a
            href="#Home"
            className="rounded shadow-sm hover:bg-gray-100 hover:shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <div className="flex p-3">
              <AiOutlineHome size={20} className="mr-2" />
              <span>Home</span>
            </div>
          </a>
          <a
            href="#Profile"
            className="rounded shadow-sm hover:bg-gray-100 hover:shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <div className="flex p-3">
              <AiOutlineUser size={20} className="mr-2" />
              <span>Profile</span>
            </div>
          </a>
          <a
            href="#Experience"
            className="rounded shadow-sm hover:bg-gray-100 hover:shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <div className="flex p-3">
              <AiOutlineAppstore size={20} className="mr-2" />
              <span>Experience</span>
            </div>
          </a>
          <a
            href="#Projects"
            className="rounded shadow-sm hover:bg-gray-100 hover:shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <div className="flex p-3">
              <AiOutlineProject size={20} className="mr-2" />
              <span>Projects</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
