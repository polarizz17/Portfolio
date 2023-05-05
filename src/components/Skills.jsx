import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { IoLogoNodejs } from "react-icons/io";
import {
  SiCplusplus,
  SiExpress,
  SiGit,
  SiGithub,
  SiHeroku,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
AOS.init();

const Skills = () => {
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="lg:w-[50%]">
        <h2
          className="text-center text-5xl text-[#05386b] font-bold py-10"
          id="wc"
        >
          My Skills
        </h2>
        <div
          className="flex justify-center flex-wrap gap-5 md:gap-8 lg:gap-14 xl:gap-20 text-[#379683] text-6xl xl:text-7xl"
          data-aos="fade-left"
        >
          <div className="px-2 hover:scale-[1.1] hover:text-[#05386b] transform duration-500 ease-out cursor-pointer">
            <SiCplusplus />
          </div>
          <div className="px-2 hover:scale-[1.1] hover:text-[#05386b] transform duration-500 ease-out cursor-pointer">
            <SiJavascript />
          </div>
          <div className="px-2 hover:scale-[1.1] hover:text-[#05386b] transform duration-500 ease-out cursor-pointer">
            <SiReact />
          </div>
          <div className="px-2 hover:scale-[1.1] hover:text-[#05386b] transform duration-500 ease-out cursor-pointer">
            <IoLogoNodejs />
          </div>
          <div className="px-2 hover:scale-[1.1] hover:text-[#05386b] transform duration-500 ease-out cursor-pointer">
            <SiExpress />
          </div>
          <div className="px-2 hover:scale-[1.1] hover:text-[#05386b] transform duration-500 ease-out cursor-pointer">
            <SiMongodb />
          </div>
          <div className="px-2 hover:scale-[1.1] hover:text-[#05386b] transform duration-500 ease-out cursor-pointer">
            <SiTailwindcss />
          </div>
          <div className="px-2 hover:scale-[1.1] hover:text-[#05386b] transform duration-500 ease-out cursor-pointer">
            <SiNextdotjs />
          </div>
          <div className="px-2 hover:scale-[1.1] hover:text-[#05386b] transform duration-500 ease-out cursor-pointer">
            <SiGit />
          </div>
        </div>
      </div>
      <div className="lg:w-[50%]">
        <h2
          className="text-center text-5xl text-[#05386b] font-bold py-10"
          id="wc"
        >
          My Tools
        </h2>
        <div
          className="flex justify-center flex-wrap gap-5 md:gap-8 lg:gap-14 xl:gap-20 text-[#379683] text-6xl xl:text-7xl"
          data-aos="fade-right"
        >
          <div className="px-2 hover:scale-[1.1] hover:text-[#05386b] transform duration-500 ease-out cursor-pointer">
            <SiVisualstudiocode />
          </div>
          <div className="px-2 hover:scale-[1.1] hover:text-[#05386b] transform duration-500 ease-out cursor-pointer">
            <SiGithub />
          </div>
          <div className="px-2 hover:scale-[1.1] hover:text-[#05386b] transform duration-500 ease-out cursor-pointer">
            <SiPostman />
          </div>
          <div className="px-2 hover:scale-[1.1] hover:text-[#05386b] transform duration-500 ease-out cursor-pointer">
            <SiVercel />
          </div>
          <div className="px-2 hover:scale-[1.1] hover:text-[#05386b] transform duration-500 ease-out cursor-pointer">
            <SiHeroku />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
