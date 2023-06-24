import React from "react";
import my2x2pic from "../assets/2x2.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaDownload } from "react-icons/fa";
import { FcAcceptDatabase } from "react-icons/fc";
import { SiMaterialdesignicons } from "react-icons/si";
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
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div id="Profile">
      <img
        // data-aos="fade-down"
        className="absolute w-full h-[30%] object-cover"
        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1085&q=80"
        alt="Banner"
      />
      <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] mt-5 mb-5">
          Profile
        </h1>
        <div className="w-full flex items-center justify-center">
          <div className="border-2 relative flex items-center justify-center h-[50%] w-[50%] lg:h-[30%] lg:w-[30%] shadow-xl shadow-gray-400 rounded-full">
            <img src={my2x2pic} alt="" className="rounded-full" />
          </div>
        </div>
        <div className="w-full lg:flex items-center justify-center">
          <h5
            data-aos="fade-down"
            className="flex justify-between text-2xl font-semibold text-center text-[#ffffff] mt-10 mb-5 rounded-xl bg-green-700 p-3 cursor-pointer hover:bg-green-800 lg:w-[40%] shadow-md shadow-gray-500"
          >
            DOWNLOAD MY CV
            <FaDownload className="text-white ml-3" size={30} />
          </h5>
        </div>

        <div className="grid sm:grid-cols-4 gap-3 mt-5">
          <div className="border-3 rounded-xl p-4 bg-[#373d49] h-full shadow-md shadow-gray-500">
            <div className="flex">
              <h2 className="font-bold mr-3 text-[#fcfcfc]">FRONTEND</h2>
              <AiOutlineDesktop className="text-white" size={25} />
            </div>
            <p className="my-2 text-base font-normal text-stone-200">
              I can create application using vitejs, react, tailwind and other
              tools and frameworks.
            </p>
          </div>

          <div className="border-3 rounded-xl p-4 bg-[#373d49] h-full shadow-md shadow-gray-500">
            <div className="flex">
              <h2 className="font-bold mr-3 text-[#fcfcfc]">BACKEND</h2>
              <AiOutlineDatabase className="text-white" size={25} />
            </div>
            <p className="my-2 text-base font-normal text-stone-200">
              I can handle backend side using Node.js, Visual Studio, WebAPI,
              Entity Frameworks, MySql and SqlServer.
            </p>
          </div>

          <div className="border-3 rounded-xl p-4 bg-[#373d49] h-full shadow-md shadow-gray-500">
            <div className="flex">
              <h2 className="font-bold mr-3 text-[#fcfcfc]">UI/UX DESIGN</h2>
              <AiOutlineHighlight className="text-white" size={25} />
            </div>
            <p className="my-2 text-base font-normal text-stone-200">
              I can design using adobe applications such as Adobe Photoshop,
              Illustrator, InDesign, Lightroom and Adobe XD.
            </p>
          </div>

          <div className="border-3 rounded-xl p-4 bg-[#373d49] h-full shadow-md shadow-gray-500">
            <div className="flex">
              <h2 className="font-bold mr-3 text-[#fcfcfc]">
                AUDIO VIDEO 2D 3D
              </h2>
              <AiOutlineCamera className="text-white" size={25} />
            </div>
            <p className="my-2 text-base font-normal text-stone-200">
              I can do animation, 2d, 3d design and video making using Adobe
              Premiere, After Effects, SketchUp, Marvelous Designer and Adobe
              Audition for sound design and voice recording.
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen w-full bg-slate-100">
        <div className="max-w-[1040px] m-auto p-4 py-5">
          <h1 className="text-4xl font-bold text-center text-[#001b5e] mt-5 mb-5">
            Background Highlights
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
