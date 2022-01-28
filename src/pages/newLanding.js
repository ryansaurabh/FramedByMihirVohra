import React from "react";
import { Pressable } from "react";
import "./newLanding.css";
import Logo from "./images/BusinessCard.jpg";
import { Link } from "react-router-dom";

export default function NewLanding() {
  return (
    <div className="background">
      <div className="logo-placing">
        {" "}
        <img src={Logo} style={{ height: "10vh" }} />{" "}
      </div>
      <div className="navigation-text">
        {" "}
        <Link to={"/abou"}>
          {" "}
          <h1 style={{ marginBottom: "20vh" }}>About</h1>{" "}
        </Link>
        <Link to={"/portfoli"}>
          {" "}
          <h1 style={{ marginBottom: "20vh" }}>Portfolio</h1>{" "}
        </Link>
        <h1 style={{ marginBottom: "20vh" }}>Contact</h1>
      </div>
    </div>
  );
}
