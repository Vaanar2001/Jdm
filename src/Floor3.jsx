import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/floor/31.jpg";
import Img2  from "../src/images/floor/32.jpg";
import Img3  from "../src/images/floor/33.jpg";
import Img4  from "../src/images/floor/34.jpg";
import Img5  from "../src/images/floor/35.jpg";
import Img6  from "../src/images/floor/36.jpg";
function Floor3(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>16*16</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Room" price="320RS/box" imgsrc={Img1} alter="wall" brand="Spanton" />
          </div>
          <div className="Card middle">
            <Card title="Kitchen" price="320RS/box" imgsrc={Img2} alter="floor" brand="Spanton" />
          </div>
          <div className="Card right">
            <Card title="BathRoom" price="320RS/box" imgsrc={Img3} alter="sanitary" brand="Spanton" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="parking" price="320RS/box" imgsrc={Img4} alter="acc" brand="Spanton" />
          </div>
          <div className="Card middle">
            <Card title="Lobby" price="320RS/box" imgsrc={Img5} alter="acc" brand="Spanton" />
          </div>
          <div className="Card right">
            <Card title="Terrace" price="320RS/box" imgsrc={Img6} alter="taps" brand="Spanton" />
          </div>
        </div>
      </>
  )
}
export default Floor3;
