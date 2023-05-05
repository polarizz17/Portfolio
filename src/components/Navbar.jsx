import React from "react";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import logo from "../assets/logo.svg";
import "../styles/navbar.css";

const hamClick = () => {
  let hamburger = document.querySelector(".hamburger");
  let slide = document.getElementById("slide");
  hamburger.classList.toggle("is-active");
  setTimeout(() => {
    slide.classList.toggle("-translate-y-full");
  }, 50);
};

const Navbar = () => {
  // const text-color-primary = `#05386b`;
  // const text-color-secendary = `#edf5e1`;
  // const bg-color = `#5cdb95`;
  //const bg-supp = `#8ee4af`
  return (
    <>
      <header className="lg:hidden sticky top-0 z-50">
        <nav className={`bg-[#05386b] relative top-0 z-40`}>
          <div
            className="flex flex-wrap items-center justify-between px-5 py-4 "
            id="sm"
          >
            <a href="/">
              <img src={logo} alt="Arka" className="w-14 h-14" />
            </a>
            <div id="nav">
              <button
                className="hamburger hamburger--slider"
                type="button"
                onClick={hamClick}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </nav>
        <div
          className="absolute z-30  w-full -translate-y-full transform duration-500 ease-in-out"
          id="slide"
        >
          <div
            className={`flex flex-col justify-center items-center pb-8 bg-[#05386b] space-y-5 text-xl font-bold text-[#edf5e1] tracking-wider`}
            id="wc"
          >
            <a href="#home" className="flex space-x-1" onClick={hamClick}>
              <span className="pt-[2.34px]">
                <AiOutlineHome />
              </span>
              <span>Home</span>
            </a>
            <a href="#about" className="flex space-x-1" onClick={hamClick}>
              <span className="pt-[2.6px]">
                <BsPerson />
              </span>
              <span>About</span>
            </a>
            <a href="#projects" className="flex space-x-1" onClick={hamClick}>
              <span className="pt-[2.4px]">
                <AiOutlineProject />
              </span>
              <span>Projects</span>
            </a>
            {/* <a href="#services" className="flex space-x-1" onClick={hamClick}>
              <span className="pt-[2.5px]">
                <MdHomeRepairService />
              </span>
              <span>Services</span>
            </a>
            <a href="#contact" className="flex space-x-1" onClick={hamClick}>
              <span className="pt-[2.4px]">
                <BiMessageSquareDetail />
              </span>
              <span>Contact Me</span>
            </a> */}
            <a href="" className="" onClick={hamClick}>
              <button className="px-3 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg text-white font-normal">
                My Resume
              </button>
            </a>
          </div>
        </div>
      </header>

      <header
        id="wc"
        className={`hidden lg:flex justify-between items-center px-6 py-5 tracking-wider bg-[#03045e] sticky top-0 z-20`}
      >
        <nav className="flex items-center space-x-3">
          <a href="/">
            <img
              id="img"
              src={logo}
              alt="Arka"
              className="w-14 h-14 cursor-pointer"
            />
          </a>
        </nav>
        <div className="flex items-center text-xl font-bold space-x-6 text-[#edf5e1]">
          <a href="#home">
            <span className="flex space-x-1 hover:text-[#5cdb95]">
              <span className="pt-[2.34px]">
                <AiOutlineHome />
              </span>
              <span className="cursor-pointer">Home</span>
            </span>
          </a>
          <a href="#about">
            <span className="flex space-x-1 hover:text-[#5cdb95]">
              <span className="pt-[2.6px]">
                <BsPerson />
              </span>
              <span className="cursor-pointer">About</span>
            </span>
          </a>
          <a href="#projects">
            <span className="flex space-x-1 hover:text-[#5cdb95]">
              <span className="pt-[2.4px]">
                <AiOutlineProject />
              </span>
              <span className="cursor-pointer">Projects</span>
            </span>
          </a>
          {/* <a href="#services">
            <span className="flex space-x-1 hover:text-[#5cdb95]">
              <span className="pt-[2.5px]">
                <MdHomeRepairService />
              </span>
              <span className="cursor-pointer">Services</span>
            </span>
          </a>

          <a href="#contact">
            <span className="flex space-x-1 hover:text-[#5cdb95]">
              <span className="pt-[2.4px]">
                <BiMessageSquareDetail />
              </span>
              <span className="cursor-pointer">Contact Me</span>
            </span>
          </a> */}
          <a href="" id="wc" className="tracking-wider" onClick={hamClick}>
            <button className="px-3 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg text-white font-normal">
              My Resume
            </button>
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
