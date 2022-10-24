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
            onClick={() => changer("aim")}
            className={`projects__elem pr-tab ${
              description === "aim" && "active"
            }`}
          >
            {"C:/trs/game/aim_trainer.js "}
          </span>
          <br />
          <span
            onClick={() => changer("drawing")}
            className={`projects__elem pr-tab ${
              description === "drawing" && "active"
            }`}
          >
            {"C:/trs/game/drawing.js "}
          </span>
          <br />
          <span
            onClick={() => changer("slider")}
            className={`projects__elem pr-tab ${
              description === "slider" && "active"
            }`}
          >
            {"C:/trs/elements/slider.js "}
          </span>
          <br />
          <span
            onClick={() => changer("dragndrop")}
            className={`projects__elem pr-tab ${
              description === "dragndrop" && "active"
            }`}
          >
            {"C:/trs/elements/dragndrop.js "}
          </span>
          <br />
          <span
            onClick={() => changer("cards")}
            className={`projects__elem pr-tab ${
              description === "cards" && "active"
            }`}
          >
            {"C:/trs/elements/cards.js "}
          </span>
          <br />
          <span
            onClick={() => changer("phoneCall")}
            className={`projects__elem pr-tab ${
              description === "phoneCall" && "active"
            }`}
          >
            {"C:/trs/projects/Phone_Caller.ts "}
          </span>
          {description === "phoneCall" && (
            <ProjectsDesc
              img="/portfolio_preview/phone.png"
              desc="Phonebook application."
              stack="HTML, CSS, TypeScript, React.js"
              url={description}
              git="https://github.com/TinyMoscow/phoneCaller.FullStack"
            />
          )}
          {description === "cards" && (
            <ProjectsDesc
              img="/portfolio_preview/cards.jpg"
              desc="Resizing cards element for web-sites."
              stack="HTML, CSS, JavaScript"
              url="https://codepen.io/TinyMoscow/pen/eYraeXw"
            />
          )}
          {description === "dragndrop" && (
            <ProjectsDesc
              img="/portfolio_preview/dragndrop.png"
              desc="Drag and drop element for web-sites."
              stack="HTML, CSS, JavaScript"
              url="https://codepen.io/TinyMoscow/pen/rNvgoVB"
            />
          )}
          {description === "slider" && (
            <ProjectsDesc
              img="/portfolio_preview/slider.jpg"
              desc="Slider element for web-sites."
              stack="HTML, CSS, JavaScript"
              url="https://codepen.io/TinyMoscow/pen/qBYGGvL"
            />
          )}
          {description === "drawing" && (
            <ProjectsDesc
              img="/portfolio_preview/draw.png"
              desc="JS browser mini game. Move your mouse to draw a picture."
              stack="HTML, CSS, JavaScript"
              url="https://codepen.io/TinyMoscow/pen/poVXbqO"
            />
          )}
          {description === "aim" && (
            <ProjectsDesc
              img="/portfolio_preview/aim.png"
              desc="JS browser mini game. Develop your aim skill."
              stack="HTML, CSS, JavaScript"
              url="https://codepen.io/TinyMoscow/pen/VwxJGBz"
            />
          )}
        </div>
      </div>
    </main>
  );
};
