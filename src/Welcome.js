import React from "react";
import "./Welcome.css";

export const Welcome = () => {
  return (
    <maim className="wrapper">
      <div className="container welcome">
        <span className="welcome-title">
          Welcome, on my interactive CV. Run function in the header.
          <span className="welcome-cursor">=</span>
        </span>
      </div>
    </maim>
  );
};
