import React from "react";
import "./ProjectDetails.css";
import WorkData from "./WorkData";
import ProjectCard from "./ProjectCard";
export default function Work() {
  return (
    <>
      <div className="work-container">
        <h1 className="project-heading"> Projects</h1>
        <div className="project-container">
          {WorkData.map((val, ind) => {
            return (
              <ProjectCard
                key={ind}
                imgscr={val.imgscr}
                title={val.title}
                text={val.text}
                view={val.view}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
