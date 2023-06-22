import React from "react";
import { TypeAnimation } from "react-type-animation";
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
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="font-bold">HI MY NAME IS</h1>
          <h2 className="font-bold">
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
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaFacebookF className="cursor-pointer" size={20} />
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
