import React, { useEffect, useState } from "react";
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

  const [colorChange, setColorchange] = useState(true);
  const [scrollY, setscrollY] = useState(window.scrollY);
  const [mousePos, setMousePos] = useState({});

  const changeNavbarColor = () => {
    if (window.scrollY < scrollY) {
      setColorchange(true);
    } else {
      setscrollY(window.scrollY);
      setColorchange(false);
    }
    // console.log("Y-Axis -" + mousePos.y);
    // console.log("Scroll -" + scrollY);
    // console.log("ColorChange -" + colorChange);
  };
  window.addEventListener("scroll", changeNavbarColor);
  window.addEventListener("click", changeNavbarColor);

  const classNav = window.scrollY
    ? "bg-[#373d49]  opacity-95 bg shadow-md"
    : null;

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
      if (event.clientY === 0) {
        setColorchange(true);
        setscrollY(window.scrollY);
        // console.log("Y-Axis -" + event.clientY);
        // console.log("Scroll -" + scrollY);
        // console.log("ColorChange -" + colorChange);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* <div>
        The mouse is at position{" "}
        <b>
          ({mousePos.x}, {mousePos.y})
        </b>
      </div> */}

      <div
        className={
          colorChange
            ? `${classNav} z-20 fixed flex ease-in-out md:hidden lg:hidden duration-500 items-center top-0 w-screen h-16 text-white `
            : `fixed  z-20 flex justify-between items-center md:hidden lg:hidden w-screen ease-out-in duration-500 top-[-100%] h-16 text-white`
        }
      >
        <div className="flex flex-col justify-between">
          <a href="#Profile" className="font-bold ml-3 text-[30px]">
            Marth
          </a>
          <AiOutlineMenu
            onClick={handleNav}
            className={
              classNav
                ? "absolute top-4 right-10 z-[10] md:hidden lg:hidden size={20} text-white cursor-pointer"
                : "absolute top-4 right-10 z-[10] md:hidden lg:hidden text-[#373d49] cursor-pointer"
            }
            size={30}
          />
        </div>
      </div>
      {nav && (
        <div
          onClick={handleNav}
          className="fixed w-full h-screen bg-gray-200 flex flex-col justify-center items-center z-20"
        >
          <a
            onClick={handleNav}
            href="#Home"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4 font-bold">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#Profile"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineUser size={20} />
            <span className="pl-4 font-bold">Profile</span>
          </a>
          <a
            onClick={handleNav}
            href="#Experience"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineAppstore size={20} />
            <span className="pl-4 font-bold">Work Experience</span>
          </a>
          <a
            onClick={handleNav}
            href="#Projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4 font-bold">Projects</span>
          </a>
        </div>
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

      <div className={classNav ? "lg:block hidden" : "hidden"}>
        <div
          className={
            colorChange
              ? `${classNav} z-20 fixed flex justify-end ease-in-out px-16 duration-500 items-center  top-0 w-screen h-16 text-white `
              : `fixed  z-20 flex justify-between items-center w-screen ease-out-in duration-500 top-[-100%] h-16 text-white`
          }
        >
          <div>
            <div className="flex h-12 right-[2%]">
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
      </div>

      {/* <div className="fixed block bottom-0 bg-[#373d49] w-full h-12 z-10"></div> */}
    </div>
  );
};

export default Sidenav;
