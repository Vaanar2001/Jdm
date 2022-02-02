import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/wall/91.jpg";
import Img2  from "../src/images/wall/92.jpg";
import Img3  from "../src/images/wall/93.jpg";
import Img4  from "../src/images/wall/94.jpg";
import Img5  from "../src/images/wall/95.png";
import Img6  from "../src/images/wall/96.jpg";
function Wallk(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>10*15</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Room" price="150RS/Box" imgsrc={Img1} alter="wall" brand="Spenza" />
          </div>
          <div className="Card middle">
            <Card title="Kitchen" price="150Rs/Box" imgsrc={Img2} alter="floor" brand="Spenza" />
          </div>
          <div className="Card right">
            <Card title="Elevation" price="150Rs/Box" imgsrc={Img3} alter="sanitary"  brand="Spenza" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="BathRoom" price="150Rs/Box" imgsrc={Img4} alter="acc" brand="Spenza" />
          </div>
          <div className="Card middle">
            <Card title="Toilet" price="150Rs/Box" imgsrc={Img5} alter="acc" brand="Spenza" />
          </div>
          <div className="Card right">
            <Card title="others" price="150Rs/Box" imgsrc={Img6} alter="taps" brand="Spenza" />
          </div>
        </div>
      </>
  )
}
export default Wallk;
