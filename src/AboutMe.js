import React from "react";
import "./AboutMe.css";

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
            </div>
            <span className="string-line ">
              <span className="yellow">biography</span>
              {"() => "}
              <span className="">
                "I was born in Tajikistan. When I was 3 years old, our family
                moved to Moscow. In 2013, graduated from the "Moscow Technical
                School of Space Engineering" with a degree in Automation of
                Technological Processes and Productions. For the last five years
                I have been building my career in aviation and became a flight
                instructor with Pobeda Airlines. I create music in two projects
                TRS, Meat Radio. I love my family very much and am happy to be
                the father of two sons.";
              </span>
            </span>

            <br />
            <br />

            <a
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
            <span className="string-line">
              <span className="darkBlue">const </span>
              <span className="blue">contacts</span>
              {" = "}
              <span className="yellow">{"{ "}</span>
              <br />
              <span className="gray tab">{"// Press to propery for call"}</span>
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
              <a className="header__nav-link" href="https://TRS_prod.t.me/">
                <span className="blue tab">telegram</span>
                {": @TRS_Prod"}
              </a>
              <br />
              <span className="yellow ">{"}"}</span>
              {";"}
            </span>
          </div>
          <div className="stack__terminal">
            <span className="string-line stack__terminal-up">TERMINAL</span>
            <div className="stack__terminal-down tab">
              <span className="string-line">
                {`MY:Stack> `}
                <span className="yellow">trs </span>
                status
              </span>
              <br />
              <br />
              <span className="string-line">
                {`[`}
                <span className="stack__progress-done">##############</span>
                <span className="stack__progress-none">....</span>
                {`] | `}
                <span className="blue">HTML </span>
                Complited in 80%
              </span>
              <br />
              <span className="string-line">
                {`[`}
                <span className="stack__progress-done">###########</span>
                <span className="stack__progress-none">.......</span>
                {`] | `}
                <span className="blue">CSS </span>
                Complited in 60%
              </span>
              <br />
              <span className="string-line">
                {`[`}
                <span className="stack__progress-done">#############</span>
                <span className="stack__progress-none">.....</span>
                {`] | `}
                <span className="blue">JavaScript </span>
                Complited in 75%
              </span>
              <br />
              <span className="string-line">
                {`[`}
                <span className="stack__progress-done">######</span>
                <span className="stack__progress-none">............</span>
                {`] | `}
                <span className="blue">React.js </span>
                Complited in 30%
              </span>
              <br />
              <span className="string-line">
                {`[`}
                <span className="stack__progress-done">#####</span>
                <span className="stack__progress-none">.............</span>
                {`] | `}
                <span className="blue">TypeScript </span>
                Complited in 25%
              </span>
              <br />
              <span className="string-line">
                {`[`}
                <span className="stack__progress-done">###</span>
                <span className="stack__progress-none">...............</span>
                {`] | `}
                <span className="blue">Linux </span>
                Complited in 15%
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
