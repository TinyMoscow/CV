import React from "react";
import "./AboutMe.css";
import { AboutMeBar } from "./AboutMeBar";

export const AboutMe = () => {
  return (
    <main className="wrapper">
      <div className="container aboutMe__flex">
        <div className="aboutMe__photo">
          <img src="/aboutMe-new.jpg" alt="Taras Nikitin" />
        </div>
        <div className="aboutMe__info">
          <div className="aboutMe__info-code">
            <div className="small-line-height">
              <span className="string-line">
                <span className="blue">name</span>:{" "}
                <span className="title1">Taras Nikitin</span>
              </span>
              <br />
              <span className="string-line">
                <span className="blue">dateOfBirth</span>
                {": "}
                <span className="title2">27.11.1993,</span>
              </span>
              <br />
              <span className="string-line">
                <span className="blue">occupation</span>
                {": "}
                <span className="title2">Junior Frontend Developer,</span>
              </span>
              <br />
            </div>
            <span className="string-line">
              <span className="blue">education</span>
              {": "}
              Moscow Technical School of Space Engineering / 2013,
            </span>
            <div className="bio-tab">
              <span className="string-line ">
                <span className="yellow bio-tab-back">biography</span>
                {"() => "}
                <span className="">
                  "For the last five years I have been building my career in
                  aviation and became a flight instructor with Pobeda Airlines.
                  During this time I have managed to develop my soft skills such
                  as teamwork and mentoring. I don't stop learning new things
                  and developing. A few month ago, I started to learn
                  web-development. ";
                </span>
              </span>
            </div>

            <br />
            <br />

            <a
              target="_blank"
              rel="noreferrer"
              className="header__nav-link"
              href="https://hh.ru/resume/74fae686ff00de43f60039ed1f714b53777766"
            >
              <span className="string-line">
                <span className="yellow">getCV</span>
                {"() => "}
                <span className="yellow">{"{ "}</span>
                <span className="blue">onClick</span>=
                <span className="blue">{"{"}</span>
                <span className="pink">return </span>CV
                <span className="blue">{"}"}</span>
                <span className="yellow">{"}"}</span>
                {";"}
              </span>
            </a>
            <br />
            <br />
            <br />
            <span className="string-line">
              <span className="darkBlue">const </span>
              <span className="blue">contacts</span>
              {" = "}
              <span className="yellow">{"{ "}</span>
              <br />
              <span className="gray tab">
                {"// Press to property for call"}
              </span>
              <br />
              <a
                className="header__nav-link"
                href="mailto:tiny.moscow@gmail.com"
              >
                {" "}
                <span className="blue tab">e-mail</span>
                {": tiny.moscow@gmail.com"}
              </a>
              <br />
              <a className="header__nav-link" href="tel:+79999879712">
                <span className="blue tab">phone</span>
                {": +7(999)987-97-12"}
              </a>
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                className="header__nav-link"
                href="https://TRS_prod.t.me/"
              >
                <span className="blue tab">telegram</span>
                {": @TRS_Prod"}
              </a>
              <br />
              <a
                target="_blank"
                className="header__nav-link"
                href="https://github.com/TinyMoscow"
                rel="noreferrer"
              >
                <span className="blue tab">git</span>
                {": @TinyMoscow"}
              </a>
              <br />
              <span className="yellow ">{"}"}</span>
              {";"}
            </span>
          </div>
          <div className="stack__terminal">
            <span className="string-line stack__terminal-up">TERMINAL</span>
            <div className="stack__terminal-down">
              <span className="string-line">
                {`MY:Stack> `}
                <span className="yellow">trs </span>
                status
              </span>
              <br />
              <br />
              <AboutMeBar tech="HTML" rate={80} />
              <br />
              <AboutMeBar tech="CSS" rate={60} />
              <br />
              <AboutMeBar tech="JavaScript" rate={75} />
              <br />
              <AboutMeBar tech="React.js" rate={40} />
              <br />
              <AboutMeBar tech="TypeScript" rate={25} />
              <br />
              <AboutMeBar tech="Linux" rate={15} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
