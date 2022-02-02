import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/wall/181.jpg";
import Img2  from "../src/images/wall/182.jpg";
import Img3  from "../src/images/wall/183.jpg";
import Img4  from "../src/images/wall/184.jpg";
import Img5  from "../src/images/wall/185.jpg";
import Img6  from "../src/images/wall/186.jpg";
function Walle(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>12*18</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Room" price="250RS/Box" imgsrc={Img1} alter="wall" brand="Orient_bell" />
          </div>
          <div className="Card middle">
            <Card title="Kitchen" price="250Rs/Box" imgsrc={Img2} alter="floor" brand="Orient_bella" />
          </div>
          <div className="Card right">
            <Card title="Elevation" price="250Rs/Box" imgsrc={Img3} alter="sanitary" brand="Orient_bell" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="BathRoom" price="250Rs/Box" imgsrc={Img4} alter="acc" brand="Orient_bell" />
          </div>
          <div className="Card middle">
            <Card title="Toilet" price="250Rs/Box" imgsrc={Img5} alter="acc" brand="Orient_bell" />
          </div>
          <div className="Card right">
            <Card title="others" price="250Rs/Box" imgsrc={Img6} alter="taps" brand="Orient_bell" />
          </div>
        </div>
      </>
  )
}
export default Walle;
