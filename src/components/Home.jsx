import React from "react";
import { TypeAnimation } from "react-type-animation";
import iconCSS from "../assets/css.png";
import my2x2pic from "../assets/2x2.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Home = () => {
  return (
    <div id="Home">
      <img
        className="w-full h-screen object-cover object-left opacity-30"
        src="https://media.istockphoto.com/id/1434947698/photo/working-computer-email-and-business-man-from-china-serious-about-fixing-a-laptop-glitch.jpg?s=2048x2048&w=is&k=20&c=4EbKCdbTwpQYpiVVVeSEtBPctjYoqP363pu3kXmncnU="
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[80%] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="font-bold">HI MY NAME IS</h1>
          <div className="font-bold">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "RAYMARTH M. LEGASPI",
                1000,
                "",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaFacebookF className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
            <FaYoutube className="cursor-pointer" size={20} />
          </div>

          <div className="lg:p-0 p-5 mt-5 flex flex-col justify-center max-w-[650px] w-full lg:text-left text-center">
            <h2 className="font-bold">OBJECTIVE</h2>
            <p className="text-base font-normal text-stone-500">
              I am looking for a full-time position as a software developer. I
              would like to utilize my skills and experience. Moreover, I would
              like to work with other professionals to improve my skills as a
              software developer which will allow me to further contribute in
              the field of Information Technology.
            </p>
          </div>

          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <iconCSS className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
            <FaYoutube className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
