import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/wall/201.jpg";
import Img2  from "../src/images/wall/202.jpg";
import Img3  from "../src/images/wall/203.jpg";
import Img4  from "../src/images/wall/204.jpg";
import Img5  from "../src/images/wall/205.jpg";
import Img6  from "../src/images/wall/206.jpg";
function Wallo(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>10*20</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Room" price="220RS/Box" imgsrc={Img1} alter="wall" brand="ceramics" />
          </div>
          <div className="Card middle">
            <Card title="Kitchen" price="220Rs/Box" imgsrc={Img2} alter="floor" brand="ceramics" />
          </div>
          <div className="Card right">
            <Card title="Elevation" price="220Rs/Box" imgsrc={Img3} alter="sanitary" brand="ceramics" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="BathRoom" price="220Rs/Box" imgsrc={Img4} alter="acc" brand="ceramics" />
          </div>
          <div className="Card middle">
            <Card title="Toilet" price="220Rs/Box" imgsrc={Img5} alter="acc" brand="ceramics" />
          </div>
          <div className="Card right">
            <Card title="others" price="220Rs/Box" imgsrc={Img6} alter="taps" brand="ceramics" />
          </div>
        </div>
      </>
  )
}
export default Wallo;
