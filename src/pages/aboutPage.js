import React from "react";
import "./about.css";
import Monochrome from "./images/monochrome.jpg";

export default function AboutPage() {
  return (
    <div className="main">
      <div className="about">
        <img
          className="aboutImg"
          src={Monochrome}
          alt="BusinessCard Inc. logo"
        />
      </div>

      <div className="aboutblah">
        <h1>CONTENT</h1>
      </div>
    </div>
  );
}
