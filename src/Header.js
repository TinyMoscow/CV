import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="container ">
      <div className="border-bottom">
        <Link to="/">
          <img className="header__logo" src="/logo.png" alt="<trs/>" />
        </Link>
        <ul className="header__nav">
          <li>
            <Link className="header__nav-link" to="/">
              <span className="blue">me</span>.
              <span className="yellow">about</span>()
            </Link>
          </li>

          <li>
            <Link className="header__nav-link" to="/portfolio">
              <span className="blue">me</span>.
              <span className="yellow">portfolio</span>()
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
