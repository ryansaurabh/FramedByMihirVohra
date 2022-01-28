import React from "react";
import "./landingEnd.css";
import aboutBackground from "./images/aboutbackground.jpg";
import portfolioBackground from "./images/portfoliobackground.jpg";
import contactBackground from "./images/contactbackground.jpg";

export default function LandingEnd() {
  return (
    <div className="jcac">
      <div
        className="end"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      >
        {" "}
        <h1 className="txt">About</h1>
      </div>
      <div
        className="end"
        style={{ backgroundImage: `url(${portfolioBackground})` }}
      >
        {" "}
        <h1 className="txt">Portfolio</h1>
      </div>
      <div
        className="end"
        style={{ backgroundImage: `url(${contactBackground})` }}
      >
        {" "}
        <h1 className="txt">Contact</h1>
      </div>
    </div>
  );
}
