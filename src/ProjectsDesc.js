import React from "react";

export const ProjectsDesc = ({ img, desc, stack, url, git }) => {
  return (
    <div className="projects__description">
      <span className=" mobile-warning">
        !RECOMENDED TO USE PC FOR BETTER EXPIRIENCE
        <br />
      </span>
      <span className="projects-title pr-tab">Preview:</span>
      <img className="projects__description-img" src={img} alt="layout"></img>
      <a target="_blank" rel="noreferrer" className="run-btn" href={`${git}`}>
        git
      </a>
      <a className="run-btn" href={`/portfolio/${url}`}>
        run
      </a>
      <div className="projects__description-mobile-tab">
        <span className="projects-title pr-tab ">Description: </span>
        <span>{desc}</span>
        <br />
        <span className="projects-title pr-tab">Stack: </span>
        <span>{stack}</span>
      </div>
    </div>
  );
};
