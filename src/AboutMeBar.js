import React from "react";

export const AboutMeBar = ({ tech, rate }) => {
  let x = Math.round(0.18 * rate);
  let y = 18 - x;
  const positive = "#";
  const negative = ".";
  let plusBar = positive.repeat(x);
  let minusBar = negative.repeat(y);

  return (
    <span className="string-line">
      {`[`}
      <span className="stack__progress-done">{plusBar}</span>
      <span className="stack__progress-none">{minusBar}</span>
      {`] | `}
      <span className="blue">{tech} </span>
      <span className="hide-in-mobile">Completed in</span>
      {rate}%
    </span>
  );
};
