import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/wall/241.jpg";
import Img2  from "../src/images/wall/242.jpg";
import Img3  from "../src/images/wall/243.jpg";
import Img4  from "../src/images/wall/244.jpg";
import Img5  from "../src/images/wall/245.jpg";
import Img6  from "../src/images/wall/246.jpg";
function Wallb(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>8*24</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Room" price="280RS/Box" imgsrc={Img1} alter="wall" brand="Rich" />
          </div>
          <div className="Card middle">
            <Card title="Kitchen" price="280Rs/Box" imgsrc={Img2} alter="floor" brand="Rich" />
          </div>
          <div className="Card right">
            <Card title="Elevation" price="280Rs/Box" imgsrc={Img3} alter="sanitary" brand="Rich" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="BathRoom" price="280Rs/Box" imgsrc={Img4} alter="acc" brand="Rich" />
          </div>
          <div className="Card middle">
            <Card title="Toilet" price="280Rs/Box" imgsrc={Img5} alter="acc" brand="Rich" />
          </div>
          <div className="Card right">
            <Card title="others" price="280Rs/Box" imgsrc={Img6} alter="taps" brand="Rich" />
          </div>
        </div>
      </>
  )
}
export default Wallb;
