import React from "react";
import "./gallery.css";
import "./portfolio.css";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

export default function Portfolio() {
  return (
    <>
      <MediaQuery minWidth={900}>
        <div className="grid-portfolio">
          <Link to={"/portfolio/food"} className="grid1 pic"></Link>
          <Link to={"/portfolio/product"} className="grid2 pic"></Link>
          <Link to={"/portfolio/events"} className="grid3 pic"></Link>
        </div>
        <div className="grid-portfolio">
        <Link to={"/portfolio/photoGallery"} className="grid4 pic"></Link>
          <Link to={"/portfolio/fashion"} className="grid5 pic"></Link>
          <Link to={"/portfolio/beauty"} className="grid6 pic"></Link>
        </div>
        <div className="gridbottom-portfolio">
        <Link to={"/portfolio/travel"} className="grid7 pic"></Link>
          <Link to={"/portfolio/landscape"} className="grid8 pic"></Link>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={900}>
        <div className="grid-portfolio-media">
          <Link to={"/grid1"} className="grid1 pic"></Link>

          <div className="grid2 pic"></div>
        </div>
        <div className="grid-portfolio-media">
          <div className="grid3 pic"></div>
          <div className="grid4 pic"></div>
        </div>

        <div className="grid-portfolio-media">
          <div className="grid5 pic"></div>
          <div className="grid6 pic"></div>
        </div>

        <div className="gridbottom-portfolio">
          <div className="grid7 pic"></div>
          <div className="grid8 pic"></div>
        </div>
      </MediaQuery>
    </>
  );
}
