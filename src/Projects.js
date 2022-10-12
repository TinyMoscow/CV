import React, { useState } from "react";
import "./Projects.css";
import { ProjectsDesc } from "./ProjectsDesc";

export const Projects = () => {
  const [description, setDescription] = useState("");

  const changer = (id) => {
    if (id === description) {
      setDescription(" ");
    } else setDescription(id);
  };

  return (
    <main className="wrapper">
      <div className="container projects-bg">
        <div className="projects">
          <span className="projects-head-title pr-tab">
            Select the desired project:
          </span>
          <br />
          <br />
          <span
            onClick={() => changer("firstLayout")}
            className={`projects__elem pr-tab ${
              description === "firstLayout" && "active"
            }`}
          >
            {"C:/users/trs/projects/First_Layout.html "}
          </span>
          <br />
          <span
            onClick={() => changer("phoneCall")}
            className={`projects__elem pr-tab ${
              description === "phoneCall" && "active"
            }`}
          >
            {"C:/users/trs/projects/Phone_Caller.ts "}
          </span>
          {description === "firstLayout" && (
            <ProjectsDesc
              img="/portfolio-ban-first.png"
              desc="First layout of free psd template."
              stack="HTML, CSS"
              url={description}
              git="https://github.com/TinyMoscow/firstLayout"
            />
          )}
          {description === "phoneCall" && (
            <ProjectsDesc
              img="/portfolio-ban-phone.png"
              desc="Phonebook application."
              stack="HTML, CSS, TypeScript, React.js"
              url={description}
              git="https://github.com/TinyMoscow/phoneCaller.FullStack"
            />
          )}
        </div>
      </div>
    </main>
  );
};
