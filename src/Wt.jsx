import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/Sn/w1.jpg";
import Img2  from "../src/images/Sn/w2.jpg";
import Img3  from "../src/images/Sn/w3.jpg";
import Img4  from "../src/images/Sn/w4.jpg";
import Img5  from "../src/images/Sn/w5.jpg";
import Img6  from "../src/images/Sn/w6.jpg";
function Wt(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>Western-Toilets</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="EWC(Roud)" price="2800Rs/peice" imgsrc={Img1} alter="wall" brand="Syphon" />
          </div>
          <div className="Card middle">
            <Card title="EWC(Square)" price="3000/peice" imgsrc={Img2} alter="floor" brand="Sonet" />
          </div>
          <div className="Card right">
            <Card title="One-Peice(Roud)" price="3500/Peice" imgsrc={Img3} alter="sanitary" brand="Star" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="One-peice(Square)" price="7000/peice" imgsrc={Img4} alter="acc" brand="Sonet" />
          </div>
          <div className="Card middle">
            <Card title="Wall-Hung(Round)" price="8000/peice" imgsrc={Img5} alter="acc" brand="Cera" />
          </div>
          <div className="Card right">
            <Card title="Wall-Hung(Square)" price="10000/peice" imgsrc={Img6} alter="taps" brand="Cera" />
          </div>
        </div>
      </>
  )
}
export default Wt;
