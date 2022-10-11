import React from "react";

export const PhoneCall = () => {
  return (
    <div className="portfolio__window-description">
      <span className="portfolio-title">Preview:</span>
      <img
        className="portfolio__description-img"
        src="/portfolio-ban-phone.png"
        alt="layout"
      ></img>
      <span className="portfolio-title">Description:</span>
      <span className="portfolio-text">
        Call aplication for Phone DDOS Attacks
      </span>
      <span className="portfolio-title">Stack:</span>
      <span className="portfolio-text">HTML, CSS, TypeScript, React.js </span>
      <button className="run-btn">Run</button>
    </div>
  );
};
