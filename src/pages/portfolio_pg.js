import React from "react";
import { useState } from "react";
import "./gallery.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "./images/img1.jpeg";
import Img2 from "./images/photogallery.png";
import Img3 from "./images/img3.jpeg";
import Img4 from "./images/img4.jpeg";
import Img5 from "./images/img5.jpeg";
import Img6 from "./images/img6.jpeg";
import Img7 from "./images/img7.jpeg";
import Img8 from "./images/img8.jpeg";
import Img9 from "./images/img9.jpg";
import Img10 from "./images/img10.jpeg";
import Img11 from "./images/img11.jpg";
import Img12 from "./images/img12.jpeg";
import Img13 from "./images/img13.jpeg";
import Img14 from "./images/img14.jpeg";
import Img15 from "./images/img15.jpeg";

const Gallery = () => {
  const images = [
    { id: 1, imgSrc: Img2},
    { id: 2, imgSrc: Img2 },
    { id: 3, imgSrc: Img2 },
    { id: 4, imgSrc: Img2 },
    { id: 5, imgSrc: Img2 },
    { id: 6, imgSrc: Img2 },
    { id: 7, imgSrc: Img2 },
    { id: 8, imgSrc: Img2 },
    { id: 9, imgSrc: Img2 },
    { id: 10, imgSrc: Img2 },
    { id: 11, imgSrc: Img2 },
    { id: 12, imgSrc: Img2 },
    { id: 13, imgSrc: Img2 },
    { id: 14, imgSrc: Img2 },
    { id: 15, imgSrc: Img2 },
  ];
  const [model, setModel] = useState(false);
  const [temping, setTemping] = useState("");

  const getImg = (imgSrc) => {
    setTemping(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={temping} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {images.map((item, index) => {
          return (
            <div
              className="pic"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
