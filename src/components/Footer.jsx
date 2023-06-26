import React from "react";
import { ToolTip } from "./ToolTip";
import { FaFacebookF, FaGoogle, FaPhoneAlt, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="block bottom-0 bg-[#373d49] w-full h-60">
        <div className="max-w-[1040px] m-auto p-2 justify-center flex text-white">
          <div className="flex justify-between pt-6 max-w-[200px] w-full ">
            <a href="#" target="_blank" rel="noreferrer noopener">
              <ToolTip text={"Contact No : 09688808527"}>
                <FaPhoneAlt className="cursor-pointer" size={25} />
              </ToolTip>
            </a>
            <a
              href="https://www.youtube.com/channel/UC6vME2CeLWplEVkY2PC7jJQ"
              target="_blank"
              rel="noreferrer noopener"
            >
              <ToolTip text={"Youtube"}>
                <FaYoutube className="cursor-pointer" size={25} />
              </ToolTip>
            </a>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <ToolTip text={"Gmail Account : raymarthipsagel@gmail.com"}>
                <FaGoogle className="cursor-pointer" size={25} />
              </ToolTip>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
