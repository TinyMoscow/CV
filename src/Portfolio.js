import React, { useState } from "react";
import "./Portfolio.css";
import { FirstLayout } from "./Portfolio-comp/FirstLayout";
import { PhoneCall } from "./Portfolio-comp/PhoneCall";
import { PortfolioTab } from "./PortfolioTab";

export const Portfolio = () => {
  const [description, setDescription] = useState();

  return (
    <main className="wrapper">
      <div className="container portfolio">
        <div id="pojects" className="portfolio__window-projects">
          <PortfolioTab
            id="FirstLayout"
            description={description}
            setDescription={setDescription}
            img="portfolio-ie.png"
            text="FirstLayout .html"
          />
          <PortfolioTab
            id="PhoneCall"
            description={description}
            setDescription={setDescription}
            img="portfolio-phone.png"
            text="Phone_Call .js"
          />
        </div>
        {description === "FirstLayout" && <FirstLayout />}
        {description === "PhoneCall" && <PhoneCall />}
      </div>
    </main>
  );
};
