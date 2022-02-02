import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/wall/121.jpg";
import Img2  from "../src/images/wall/122.jpg";
import Img3  from "../src/images/wall/123.jpg";
import Img4  from "../src/images/wall/124.jpg";
import Img5  from "../src/images/wall/125.jpg";
import Img6  from "../src/images/wall/126.jpg";
function Wallt(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>12*24</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Room" price="350RS/Box" imgsrc={Img1} alter="wall" brand="Kajaria" />
          </div>
          <div className="Card middle">
            <Card title="Kitchen" price="350Rs/Box" imgsrc={Img2} alter="floor" brand="Kajaria" />
          </div>
          <div className="Card right">
            <Card title="Elevation" price="350Rs/Box" imgsrc={Img3} alter="sanitary" brand="Kajaria" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="BathRoom" price="350Rs/Box" imgsrc={Img4} alter="acc" brand="Kajaria" />
          </div>
          <div className="Card middle">
            <Card title="Toilet" price="350Rs/Box" imgsrc={Img5} alter="acc" brand="Kajaria" />
          </div>
          <div className="Card right">
            <Card title="others" price="350Rs/Box" imgsrc={Img6} alter="taps" brand="Kajaria" />
          </div>
        </div>
      </>
  )
}
export default Wallt;
