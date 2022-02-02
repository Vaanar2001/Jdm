import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/tap/pt1.jpg";
import Img2  from "../src/images/tap/pt2.jpg";
import Img3  from "../src/images/tap/pt3.jpg";
import Img4  from "../src/images/tap/pt4.jpg";
function Pt(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>PVC-Taps</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
          <Card title="Big-Cock" price="300RS/peice" imgsrc={Img1} alter="wall" brand="Steel-Bird" />
          </div>
          <div className="Card right">
            <Card title="Swan-Neck" price="450/peice" imgsrc={Img2} alter="sanitary" brand="Steel-Bird" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Long-Body" price="450Rs/peice" imgsrc={Img3} alter="acc" brand="Steel-Bird" />
          </div>
          <div className="Card right">
            <Card title="Sink-Cock" price="700RS/peice" imgsrc={Img4} alter="taps" brand="Steel-Bird" />
          </div>
        </div>
      </>
  )
}
export default Pt;
