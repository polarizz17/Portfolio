import { Controls, Player } from "@lottiefiles/react-lottie-player";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import animationData from "../assets/about.json";
AOS.init();

const About = () => {
  return (
    <div id="about" className="min-h-screen ">
      <h2 className="text-center text-5xl text-[#05386b] font-bold" id="wc">
        About
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div data-aos="fade-up" className=" md:w-[70%] lg:w-[40%]">
          <Player autoplay loop src={animationData}>
            <Controls buttons={["play", "repeat", "frame", "debug"]} />
          </Player>
        </div>
        <div>
          <section
            className="left text-lg text-[#05386b] font-semibold px-6 md:px-10"
            data-aos="fade-left"
          >
            <h3 className="mb-7 text-3xl text-center font-semibold" id="wc">
              Know Who <span className="text-[#edf5e1]">I'M</span>
            </h3>
            <p>
              Hi Everyone, I am{" "}
              <span className="text-[#edf5e1]">Arka Provo Sen</span> from
              <span className="text-[#edf5e1]"> Jalpaiguri, West Bengal.</span>
            </p>
            <p className="mb-5">
              I am a junior web developer, pursuing B.tech in CSE from Cooch
              Behar Govt. Engineering College.
            </p>
            <p>Apart from coding, some other activities that I love to do!</p>
            <div className="ml-4 mx-2">
              <p>👉🏻 Playing Video Games</p>
              <p>👉🏻 Listening Music</p>
              <p>👉🏻 Travelling</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
