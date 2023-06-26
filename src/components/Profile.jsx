import React from "react";
import my2x2pic from "../assets/2x2.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaDownload } from "react-icons/fa";
import MyResume from "../assets/RAYMARTH-MESERICORDIA-LEGASPI.pdf";
import { BiCodeAlt } from "react-icons/bi";
import {
  AiOutlineDesktop,
  AiOutlineDatabase,
  AiOutlineHighlight,
  AiOutlineCamera,
} from "react-icons/ai";

const Profile = () => {
  useEffect(function () {
    // Aos.init({
    //   offset: 850,
    //   duration: 600,
    //   easing: "ease-in-sine",
    //   delay: 100,
    Aos.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const dataDesktopApps = [
    {
      Title: "MMS",
      Description: "(MATERIAL MANAGEMENT SYSTEM)",
    },
    {
      Title: "CUSTOMIZED MMS",
      Description: "(MATERIAL MANAGEMENT SYSTEM)",
    },
    {
      Title: "PROCESSING",
      Description: "(MATERIAL MANAGEMENT SYSTEM)",
    },
    {
      Title: "INV RETAIL",
      Description: "(INVENTORY SYSTEM RETAIL)",
    },
    {
      Title: "INV DINE-IN",
      Description: "(INVENTORY SYSTEM DINE-IN)",
    },
    {
      Title: "POS RETAIL",
      Description: "(POINT OF SALES RETAIL)",
    },
    {
      Title: "POS DINE-IN",
      Description: " (POINT OF SALES DINE-IN)",
    },
    {
      Title: "TMS",
      Description: "(TERMINAL MANAGEMENT SYSTEM)",
    },
    {
      Title: "DMS",
      Description: "(DEALER MANAGEMENT SYSTEM)",
    },
  ];

  const dataDotNetApps = [
    {
      Title: "MMS",
      Description: "(MATERIAL MANAGEMENT SYSTEM)",
    },
    {
      Title: "POS GROCERY",
      Description: "(POINT OF SALES GROCERY)",
    },
    {
      Title: "QUICKY SYSTEM",
      Description: "(MOTEL SYSTEM)",
    },
    {
      Title: "PLMS",
      Description: "(PARKING LOT MANAGEMENT SYSTEM)",
    },
    {
      Title: "MCP",
      Description: "(MASTER CONTROL PROGRAM)",
    },
  ];

  const dataWebAppsPHP = [
    {
      Title: "PIS",
      Description: "(PATIENT INFORMATION SYSTEM)",
    },
    {
      Title: "MMS",
      Description: "(MATERIAL MANAGEMENT SYSTEM)",
    },
    {
      Title: "DMS",
      Description: "(DEALER MANAGEMENT SYSTEM)",
    },
  ];

  const dataWebAppsREACT = [
    {
      Title: "MY PORTFOLIO",
      Description: "MY FIRTST REACT WEB PROJECT",
    },
  ];

  function Applications(props) {
    return (
      <li>
        <div cla>
          <div className="absolute w-1.5 h-1.5 bg-stone-500 rounded-full border-white mx-[-12px] my-[10px]" />
          <div className="flex mt-3">
            <div className="text-[15px] font-bold mr-3">{props.Title}</div>
            <div className="my-1 text-sm font-normal leading-none text-stone-400">
              {props.Description}
            </div>
          </div>
        </div>
      </li>
    );
  }

  return (
    <div id="Profile">
      <img
        // data-aos="fade-down"
        className="absolute w-full h-[30%] object-cover"
        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1085&q=80"
        alt="Banner"
      />
      <div className="max-w-[1040px] m-auto md:pl-20 lg:p-4 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] mt-5 mb-5">
          Profile
        </h1>
        <div className="w-full flex items-center justify-center">
          <div className="border-2 relative flex items-center justify-center h-[50%] w-[50%] lg:h-[30%] lg:w-[30%] shadow-xl shadow-gray-400 rounded-full">
            <img src={my2x2pic} alt="" className="rounded-full" />
          </div>
        </div>
        <div className="w-full lg:flex items-center justify-center">
          <a
            href={MyResume}
            download="Raymarth.M.Legaspi.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h5
              data-aos="fade-down"
              className="flex justify-between text-2xl font-semibold text-center text-[#ffffff] mt-10 mb-5 rounded-xl bg-green-700 p-3 cursor-pointer hover:bg-green-800 lg:w-[100%] shadow-md shadow-gray-500"
            >
              DOWNLOAD MY CV
              <FaDownload className="text-white ml-3" size={30} />
            </h5>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-10">
          {/* <div className="absolute mx-[220px]">
            <div className="block rounded-full my-[-30px] pl-3 pt-3 bg-[#e29912] h-[50px] w-[50px]">
              <AiOutlineDesktop className="text-white" size={25} />
            </div>
          </div> */}

          <div className="border-3 rounded-xl p-4 bg-[#373d49] h-full shadow-md shadow-gray-500">
            <div className="flex mt-[-5px]">
              <div className="flex bg-[#b97d0e] shadow-sm shadow-gray-900 p-1 w-full justify-center rounded-lg font-bold">
                <h2 className=" text-[#fcfcfc] mr-2">FRONTEND</h2>
                <AiOutlineDesktop className="text-white mt-0.5" size={20} />
              </div>
            </div>
            <p className="my-2 text-base font-normal text-stone-200">
              I can create application using vitejs, react, tailwindCSS, php,
              Bootstrap and other tools and frameworks.
            </p>
          </div>

          <div className="border-3 rounded-xl p-4 bg-[#373d49] h-full shadow-md shadow-gray-500">
            <div className="flex mt-[-5px]">
              <div className="flex bg-[#b97d0e] shadow-sm shadow-gray-900 p-1 w-full justify-center rounded-lg font-bold">
                <h2 className=" text-[#fcfcfc] mr-2">BACKEND</h2>
                <AiOutlineDatabase className="text-white mt-0.5" size={20} />
              </div>
            </div>

            <p className="my-2 text-base font-normal text-stone-200">
              I can handle backend side using Node.js, Visual Studio, WebAPI,
              Entity Frameworks, MySql and SqlServer.
            </p>
          </div>

          <div className="border-3 rounded-xl p-4 bg-[#373d49] h-full shadow-md shadow-gray-500">
            <div className="flex mt-[-5px]">
              <div className="flex bg-[#b97d0e] shadow-sm shadow-gray-900 p-1 w-full justify-center rounded-lg font-bold">
                <h2 className=" text-[#fcfcfc] mr-2">UI/UX DESIGN</h2>
                <AiOutlineHighlight className="text-white mt-0.5" size={20} />
              </div>
            </div>

            <p className="my-2 text-base font-normal text-stone-200">
              I can design using adobe applications such as Adobe Photoshop,
              Illustrator, InDesign, Lightroom and Adobe XD.
            </p>
          </div>

          <div className="border-3 rounded-xl p-4 bg-[#373d49] h-full shadow-md shadow-gray-500">
            <div className="flex mt-[-5px]">
              <div className="flex bg-[#b97d0e] shadow-sm shadow-gray-900 p-1 w-full justify-center rounded-lg font-bold">
                <h2 className=" text-[#fcfcfc] mr-2">MULTI MEDIA</h2>
                <AiOutlineCamera className="text-white mt-0.5" size={20} />
              </div>
            </div>

            <p className="my-2 text-base font-normal text-stone-200">
              I can do animation, 2d, 3d design and video making using Adobe
              Premiere, After Effects, SketchUp, Marvelous Designer and Adobe
              Audition for sound design and voice recording.
            </p>
          </div>
        </div>
      </div>

      {/* BACK GROUND HIGHLIGHTS */}
      <div className="h-full w-full bg-slate-100">
        <div className="max-w-[1040px] m-auto p-4 py-5">
          <div>
            <h1 className="text-4xl font-bold text-center text-[#001b5e] mt-5 mb-5">
              Applications Highlights
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:pl-20 lg:p-4 p-4 mt-10">
          {/* DESKTOP APPLICATION VB6.0 */}
          <div className="border-2 border-green-800 border-opacity-10 rounded-xl bg-white h-full justify-between flex flex-col">
            <div className=" p-4">
              <div className="flex mt-[-5px]">
                <div className="flex bg-[#4d4c4c] shadow-sm shadow-gray-900 p-1 w-full justify-center rounded-lg font-bold">
                  <div>
                    <h2 className=" text-[#fcfcfc] mr-2 font-bold">
                      DESKTOP APPLICATION
                    </h2>
                  </div>
                  <div className=" text-[#fcfcfc] mr-2 text-[12px] mt-1">
                    VB6.0
                  </div>
                  <AiOutlineDesktop className="text-white mt-0.5" size={20} />
                </div>
              </div>

              <ul className="flex flex-col md:flex-row relative border-l border-stone-200 ml-5 mt-2">
                <div className="block gap-5 ml-2">
                  {dataDesktopApps.map((systemName, idx) => (
                    <Applications
                      key={idx}
                      Title={systemName.Title}
                      Description={systemName.Description}
                    />
                  ))}
                </div>
              </ul>
            </div>

            <div className="items-center rounded-b-xl justify-center group p-0 mt-2 w-[100%] h-[100px] bg-green-800">
              <div className="text-white p-3 text-[14px]">
                <p>
                  I'm the one who participate to debug, fixed and create new
                  features to those applications based on the client
                  requirements for almost.
                  <span className="bg-[#b97d0e] font-bold rounded px-2.5 py-0.5 ml-2">
                    7 years
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* DESKTOP APPLICATION VB6.0 */}

          {/* DESKTOP APPLICATION VB.NET */}
          <div className="border-2 border-green-800 border-opacity-10 rounded-xl bg-white h-full justify-between flex flex-col">
            <div className=" p-4">
              <div className="flex mt-[-5px]">
                <div className="flex bg-[#4d4c4c] shadow-sm shadow-gray-900 p-1 w-full justify-center rounded-lg font-bold">
                  <div>
                    <h2 className=" text-[#fcfcfc] mr-2 font-bold">
                      DESKTOP APPLICATION
                    </h2>
                  </div>
                  <div className=" text-[#fcfcfc] mr-2 text-[12px] mt-1">
                    VB.NET
                  </div>
                  <AiOutlineDesktop className="text-white mt-0.5" size={20} />
                </div>
              </div>

              <ul className="flex flex-col md:flex-row relative border-l border-stone-200 ml-5 mt-2">
                <div className="block gap-5 ml-2">
                  {dataDotNetApps.map((systemName, idx) => (
                    <Applications
                      key={idx}
                      Title={systemName.Title}
                      Description={systemName.Description}
                    />
                  ))}
                </div>
              </ul>
            </div>

            <div className="relative flex items-center rounded-b-xl justify-center group p-0 mt-2 w-[100%] h-[100px] bg-green-800">
              <div className="text-white p-3 text-[14px]">
                <p>
                  PLMS is my first created vb.net software way back 2015, I
                  tried to convert MMS V6.0 to MMS VB.Net programming language
                  to have amazing and user friendly design. MCP is my latest
                  vb.net project started from the scratch.
                  <span className="bg-[#b97d0e] font-bold rounded px-2.5 py-0.5 ml-2">
                    6 years
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* DESKTOP APPLICATION VB.NET */}

          {/* WEB APPLICATION PHP */}
          <div className="border-2 border-green-800 border-opacity-10 rounded-xl bg-white h-full justify-between flex flex-col">
            <div className=" p-4">
              <div className="flex mt-[-5px]">
                <div className="flex bg-[#4d4c4c] shadow-sm shadow-gray-900 p-1 w-full justify-center rounded-lg font-bold">
                  <div>
                    <h2 className=" text-[#fcfcfc] mr-2 font-bold">
                      WEB APPLICATION
                    </h2>
                  </div>
                  <div className=" text-[#fcfcfc] mr-2 text-[12px] mt-1">
                    PHP - BOOTSTRAP CSS
                  </div>
                  <AiOutlineDesktop className="text-white mt-0.5" size={20} />
                </div>
              </div>

              <ul className="flex flex-col md:flex-row relative border-l border-stone-200 ml-5 mt-2">
                <div className="block gap-5 ml-2">
                  {dataWebAppsPHP.map((systemName, idx) => (
                    <Applications
                      key={idx}
                      Title={systemName.Title}
                      Description={systemName.Description}
                    />
                  ))}
                </div>
              </ul>
            </div>

            <div className="relative flex items-center rounded-b-xl justify-center group p-0 mt-2 w-[100%] h-[100px] bg-green-800">
              <div className="text-white p-3 text-[14px]">
                <p>
                  I'm part of web developer to help our programmers if necessary
                  to meet our client deadlines. I also tried to convert MMS V6.0
                  to MMS Web Application.
                  <span className="bg-[#b97d0e] font-bold rounded px-2.5 py-0.5 ml-2">
                    3 years
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* WEB APPLICATION PHP */}

          {/* WEB APPLICATION REACT */}
          <div className="border-2 border-green-800 border-opacity-10 rounded-xl bg-white h-full justify-between flex flex-col">
            <div className="p-4">
              <div className="flex mt-[-5px]">
                <div className="flex bg-[#4d4c4c] shadow-sm shadow-gray-900 p-1 w-full justify-center rounded-lg font-bold">
                  <div>
                    <h2 className=" text-[#fcfcfc] mr-2 font-bold">
                      WEB APPLICATION
                    </h2>
                  </div>
                  <div className=" text-[#fcfcfc] mr-2 text-[12px] mt-1">
                    REACT- VITE - TAILWINDCSS
                  </div>
                  <AiOutlineDesktop className="text-white mt-0.5" size={20} />
                </div>
              </div>

              <ul className="flex flex-col md:flex-row relative border-l border-stone-200 ml-5 mt-2">
                <div className="block gap-5 ml-2">
                  {dataWebAppsREACT.map((systemName, idx) => (
                    <Applications
                      key={idx}
                      Title={systemName.Title}
                      Description={systemName.Description}
                    />
                  ))}
                </div>
              </ul>
            </div>

            <div className="relative items-center rounded-b-xl p-0 mt-2 w-[100%] h-auto bg-green-800">
              <div className="text-white p-3 text-[14px]">
                <p>
                  These past few months, I decided to learned something new
                  that's why I crated my first portfolio using React JS, Vites
                  JS and Tailwind CSS for almost 2 weeks.
                  <span className="bg-[#b97d0e] font-bold rounded px-2.5 py-0.5 ml-2">
                    3 months
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* WEB APPLICATION REACT */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
