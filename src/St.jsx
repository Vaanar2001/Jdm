import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/tap/st1.png";
import Img2  from "../src/images/tap/st2.jpg";
import Img3  from "../src/images/tap/st3.jpeg";
import Img4  from "../src/images/tap/st4.jpg";
function St(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>Steel-Taps</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
          <Card title="Big-Cock" price="300RS/peice" imgsrc={Img1} alter="wall" brand="Maxima/bella/Cera" />
          </div>
          <div className="Card right">
            <Card title="Swan-Neck" price="700/peice" imgsrc={Img2} alter="sanitary" brand="Maxima/bella/Cera" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Long-Body" price="500Rs/peice" imgsrc={Img3} alter="acc" brand="Maxima/bella/Cera" />
          </div>
          <div className="Card right">
            <Card title="Sink-Cock" price="700RS/peice" imgsrc={Img4} alter="taps" brand="Maxima/bella/Cera" />
          </div>
        </div>
      </>
  )
}
export default St;
