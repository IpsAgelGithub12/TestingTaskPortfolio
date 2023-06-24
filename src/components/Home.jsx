import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import iconCSS from "../assets/css.png";
import iconGit from "../assets/git.png";
import iconGitHub from "../assets/github.png";
import iconHtml from "../assets/html.png";
import iconJavascript from "../assets/javascript.png";
import iconJquery from "../assets/jquery.png";
import iconMysql from "../assets/mysql.png";
import iconNetlify from "../assets/netlify.png";
import iconNode from "../assets/node.png";
import iconReact from "../assets/react.png";
import iconTailwind from "../assets/tailwind.png";
import iconBootstrap from "../assets/bootstrap.png";
import iconPhp from "../assets/php.png";
import iconVsCode from "../assets/vscode.png";
import iconSqlServer from "../assets/sqlserver.png";
import iconVbnet from "../assets/vbnet.png";
import iconVb6 from "../assets/vb6.png";
import iconVite from "../assets/vitejs.png";
import Background from "../assets/background.jpg";
import { ToolTip } from "./ToolTip";
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
        // data-aos="fade-down"
        className="w-full h-screen object-cover object-right opacity-[30%]"
        // src="https://media.istockphoto.com/id/1434947698/photo/working-computer-email-and-business-man-from-china-serious-about-fixing-a-laptop-glitch.jpg?s=2048x2048&w=is&k=20&c=4EbKCdbTwpQYpiVVVeSEtBPctjYoqP363pu3kXmncnU="
        src={Background}
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
              style={{ fontSize: "1.8em", display: "inline-block" }}
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
            <h2 id="objerctive" className="font-bold">
              OBJECTIVE
            </h2>
            <p className="text-base font-normal text-stone-600">
              I am looking for a full-time position as a software developer. I
              would like to utilize my skills and experience. Moreover, I would
              like to work with other professionals to improve my skills as a
              software developer which will allow me to further contribute in
              the field of Information Technology.
            </p>

            <div className="grid grid-cols-12 gap-1 mt-5">
              <ToolTip text={"HTML"}>
                <img data-aos="flip-left" src={iconHtml} alt="" />
              </ToolTip>
              <ToolTip text={"CSS"}>
                <img data-aos="flip-left" src={iconCSS} alt="" />
              </ToolTip>
              <ToolTip text={"BOOTSTRAP"}>
                <img data-aos="flip-left" src={iconBootstrap} alt="" />
              </ToolTip>
              <ToolTip text={"JAVASCRIPT"}>
                <img data-aos="flip-left" src={iconJavascript} alt="" />
              </ToolTip>
              <ToolTip text={"REACT"}>
                <img data-aos="flip-left" src={iconReact} alt="" />
              </ToolTip>
              <ToolTip text={"TAILWIND"}>
                <img data-aos="flip-left" src={iconTailwind} alt="" />
              </ToolTip>
              <ToolTip text={"PHP"}>
                <img data-aos="flip-left" src={iconPhp} alt="" />
              </ToolTip>
              <ToolTip text={"NODE.JS"}>
                <img data-aos="flip-left" src={iconNode} alt="" />
              </ToolTip>
              <ToolTip text={"VITE.JS"}>
                <img data-aos="flip-left" src={iconVite} alt="" />
              </ToolTip>
            </div>
            <div className="grid grid-cols-12 gap-1 mt-5">
              <ToolTip text={"JQUERY"}>
                <img data-aos="flip-left" src={iconJquery} alt="" />
              </ToolTip>
              <ToolTip text={"MYSQL"}>
                <img data-aos="flip-left" src={iconMysql} alt="" />
              </ToolTip>
              <ToolTip text={"SQLSERVER"}>
                <img data-aos="flip-left" src={iconSqlServer} alt="" />
              </ToolTip>
              <ToolTip text={"VSCODE"}>
                <img data-aos="flip-left" src={iconVsCode} alt="" />
              </ToolTip>
              <ToolTip text={"VB6.0"}>
                <img data-aos="flip-left" src={iconVb6} alt="" />
              </ToolTip>
              <ToolTip text={"VB.NET"}>
                <img data-aos="flip-left" src={iconVbnet} alt="" />
              </ToolTip>
              <ToolTip text={"GIT"}>
                <img data-aos="flip-left" src={iconGit} alt="" />
              </ToolTip>
              <ToolTip text={"GITHUB"}>
                <img data-aos="flip-left" src={iconGitHub} alt="" />
              </ToolTip>
              <ToolTip text={"NETLIFY"}>
                <img data-aos="flip-left" src={iconNetlify} alt="" />
              </ToolTip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
