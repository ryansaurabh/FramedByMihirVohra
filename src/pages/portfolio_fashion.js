import React from "react";
import { useState } from "react";
import "./gallery.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "./images/img1.jpeg";
import Img2 from "./images/img2.jpeg";
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
    { id: 1, imgSrc: Img1 },
    { id: 2, imgSrc: Img2 },
    { id: 3, imgSrc: Img3 },
    { id: 4, imgSrc: Img4 },
    { id: 5, imgSrc: Img5 },
    { id: 6, imgSrc: Img6 },
    { id: 7, imgSrc: Img7 },
    { id: 8, imgSrc: Img8 },
    { id: 9, imgSrc: Img9 },
    { id: 10, imgSrc: Img10 },
    { id: 11, imgSrc: Img11 },
    { id: 12, imgSrc: Img12 },
    { id: 13, imgSrc: Img13 },
    { id: 14, imgSrc: Img14 },
    { id: 15, imgSrc: Img15 },
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
      
            <div
              className="pic"
              onClick={() => getImg(images[0].imgSrc)}
            >
              <img src={images[0].imgSrc} style={{ width: "100%" }} />
            </div>
            <div
              className="pic"
              onClick={() => getImg(images[1].imgSrc)}
            >
              <img src={images[1].imgSrc} style={{ width: "100%" }} />
            </div>
            <div
              className="pic"
              onClick={() => getImg(images[2].imgSrc)}
            >
              <img src={images[2].imgSrc} style={{ width: "100%" }} />
            </div>
            <div
              className="pic"
              onClick={() => getImg(images[3].imgSrc)}
            >
              <img src={images[3].imgSrc} style={{ width: "100%" }} />
            </div>
            <div
              className="pic"
              onClick={() => getImg(images[4].imgSrc)}
            >
              <img src={images[4].imgSrc} style={{ width: "100%" }} />
            </div>
            <div
              className="pic"
              onClick={() => getImg(images[5].imgSrc)}
            >
              <img src={images[5].imgSrc} style={{ width: "100%" }} />
            </div>
            <div
              className="pic"
              onClick={() => getImg(images[6].imgSrc)}
            >
              <img src={images[6].imgSrc} style={{ width: "100%" }} />
            </div>
            <div
              className="pic"
              onClick={() => getImg(images[7].imgSrc)}
            >
              <img src={images[7].imgSrc} style={{ width: "100%" }} />
            </div>
            <div
              className="pic"
              onClick={() => getImg(images[8].imgSrc)}
            >
              <img src={images[8].imgSrc} style={{ width: "100%" }} />
            </div>
            <div
              className="pic"
              onClick={() => getImg(images[9].imgSrc)}
            >
              <img src={images[9].imgSrc} style={{ width: "100%" }} />
            </div>
            <div
              className="pic"
              onClick={() => getImg(images[10].imgSrc)}
            >
              <img src={images[10].imgSrc} style={{ width: "100%" }} />
            </div>
            <div
              className="pic"
              onClick={() => getImg(images[11].imgSrc)}
            >
              <img src={images[11].imgSrc} style={{ width: "100%" }} />
            </div>
            <div
              className="pic"
              onClick={() => getImg(images[12].imgSrc)}
            >
              <img src={images[12].imgSrc} style={{ width: "100%" }} />
            </div>
            <div
              className="pic"
              onClick={() => getImg(images[13].imgSrc)}
            >
              <img src={images[13].imgSrc} style={{ width: "100%" }} />
            </div>
            <div
              className="pic"
              onClick={() => getImg(images[14].imgSrc)}
            >
              <img src={images[14].imgSrc} style={{ width: "100%" }} />
            </div>
        
 
      </div>
    </>
  );
};

export default Gallery;
