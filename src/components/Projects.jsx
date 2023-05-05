import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { ProjectsCardData, ProjectsData } from "../data/ProjectsData";
import "../styles/projects.css";
import ProjectsCard from "./ProjectCard";
AOS.init();

function Projects() {
  return (
    <>
      <section id="projects" className="min-h-screen">
        <div className="projects container-fluid">
          <div
            className="projects_head text-center text-5xl text-[#05386b] font-bold py-10"
            id="wc"
          >
            <h1>{ProjectsData.projects_head_title}</h1>
          </div>
          <div className=" flex flex-col lg:flex-row">
            <div className="projects_content">
              {ProjectsCardData.map((val) => {
                return (
                  <ProjectsCard
                    key={val.id}
                    src={val.project_img}
                    alt={val.project_alt}
                    icon={val.project_icon}
                    title={val.project_title}
                    link={val.project_link}
                    bg={val.project_bg}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
