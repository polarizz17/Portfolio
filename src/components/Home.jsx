import { Controls, Player } from "@lottiefiles/react-lottie-player";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import animationData from "../assets/home.json";
import "../styles/home.css";
AOS.init();

const Home = () => {
  return (
    <>
      <div
        className="flex flex-col lg:flex-row justify-evenly lg:py-28 items-center min-h-screen"
        id="home"
      >
        <div
          data-aos="fade-right"
          id="wc"
          className="text-5xl flex flex-col px-8 py-14 text-[#edf5e1]"
        >
          <span className="flex items-center ">
            Hi There!<span className="wave">👋🏻</span>
          </span>
          <p>
            I'M <span className="text-[#05386b]">Arka Provo Sen</span>
          </p>
          <div className="type my-5">
            <Typewriter
              options={{
                strings: ["A MERN Developer", "A Designer", "A Creator"],
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: `text-[#05386b] tracking-wider font-semibold text-2xl`,
              }}
            />
          </div>
          <div
            className="flex gap-3 items-center text-base flex-wrap text-[#edf5e1] mr-3"
            data-aos="fade-right"
          >
            <a href="mailto:arkasen2002@gmail.com">
              <button className="btn-body">
                <span className="btn-body-cont text-md">Hire Me</span>
              </button>
            </a>

            <a href="#projects" className=" /*flex space-x-1 items-center*/">
              <button className="btn-body">
                <span className="flex items-center btn-body-cont space-x-1">
                  Projects <BsArrowUpRight />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div>
          <div data-aos="fade-up" className="pb-14 lg:pt-14">
            <Player autoplay loop src={animationData}>
              <Controls buttons={["play", "repeat", "frame", "debug"]} />
            </Player>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
