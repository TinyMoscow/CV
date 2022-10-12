import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Header.js";
import { AboutMe } from "./AboutMe.js";
import { Projects } from "./Projects.js";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
};
