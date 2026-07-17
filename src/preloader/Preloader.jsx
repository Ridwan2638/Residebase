import React from "react";
import residebase from "../assets/residebase.gif";

const Preloader = () => {
  return (
    <div className=" flex flex-col w-full h-full items-center">
      <img src={residebase} className="w-[30rem] mt-10" alt="Reside Project Ongoing" />
      <p className="font-inter font-semibold text-3xl mt-15">
        Watch Out, Our developer are working on the Project
      </p>
    </div>
  );
};

export default Preloader;
