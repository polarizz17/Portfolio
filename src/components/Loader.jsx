import React from "react";
import "../styles/loader.css";

const Loader = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-[#05386b]">
      <div className="loader">
        <div className="box box-1">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
        <div className="box box-2">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
        <div className="box box-3">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
        <div className="box box-4">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
