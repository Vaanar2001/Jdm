import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/wall/81.jpg";
import Img2  from "../src/images/wall/82.jpg";
import Img3  from "../src/images/wall/83.jpg";
import Img4  from "../src/images/wall/84.jpg";
import Img5  from "../src/images/wall/85.jpg";
import Img6  from "../src/images/wall/86.jpg";
function Wallr(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>8*12</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Room" price="150RS/Box" imgsrc={Img1} alter="wall" brand="Atom" />
          </div>
          <div className="Card middle">
            <Card title="Kitchen" price="150rs/Box" imgsrc={Img2} alter="floor" brand="Atom" />
          </div>
          <div className="Card right">
            <Card title="Elevation" price="150Rs/Box" imgsrc={Img3} alter="sanitary"  brand="Atom" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="BathRoom" price="150Rs/Box" imgsrc={Img4} alter="acc" brand="Atom" />
          </div>
          <div className="Card middle">
            <Card title="Toilet" price="150rs/Box" imgsrc={Img5} alter="acc" brand="Atom" />
          </div>
          <div className="Card right">
            <Card title="others" price="150/Box" imgsrc={Img6} alter="taps" brand="Atom" />
          </div>
        </div>
      </>
  )
}
export default Wallr;
