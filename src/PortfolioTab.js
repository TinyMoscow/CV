import React from "react";

export const PortfolioTab = ({
  id,
  description,
  setDescription,
  img,
  text,
}) => {
  return (
    <div
      id={id}
      className={`portfolio__window-content ${description === id && "active"}`}
      onClick={() => setDescription(id)}
    >
      <img className="portfolio__window-icon" src={img} alt="IMG" />
      <p className="portfolio-text">{text}</p>
    </div>
  );
};
