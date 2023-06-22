import React from "react";
import my2x2pic from "../assets/2x2.jpg";

const Profile = () => {
  return (
    <div id="Profile">
      <img
        className="absolute w-full h-[30%] object-cover object-left"
        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1085&q=80"
        alt=""
      />
      <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] mt-5 mb-5">
          Profile
        </h1>
        <div className="w-full flex items-center justify-center">
          <div className="border-2 relative flex items-center justify-center h-[50%] w-[50%] lg:h-[30%] lg:w-[30%] shadow-xl shadow-gray-400 rounded-xl">
            <img src={my2x2pic} alt="" className="rounded-xl" />
          </div>
        </div>
        <h5 className="text-2xl font-semibold text-center text-[#001b5e] mt-5 mb-5">
          Background Highlights
        </h5>
      </div>
    </div>
  );
};

export default Profile;
