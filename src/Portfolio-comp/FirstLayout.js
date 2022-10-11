import React from "react";

export const FirstLayout = () => {
  return (
    <div className="portfolio__window-description">
      <span className="portfolio-title">Preview:</span>
      <img
        className="portfolio__description-img"
        src="/portfolio-ban-first.png"
        alt="layout"
      ></img>
      <span className="portfolio-title">Description:</span>
      <span className="portfolio-text">First layout of free psd template.</span>
      <span className="portfolio-title">Stack:</span>
      <span className="portfolio-text">HTML, CSS </span>
      <button className="run-btn">Run</button>
    </div>
  );
};
