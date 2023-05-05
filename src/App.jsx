import React, { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 3000);

  return (
    <>
      <div className="scroll-smooth">
        {loader ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <div className="bg-[#5cdb95]">
              <Home />
              <About />
              <Skills />
              <Projects />
              <Footer />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
