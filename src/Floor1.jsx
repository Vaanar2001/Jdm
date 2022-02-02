import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/floor/11.jpg";
import Img2  from "../src/images/floor/12.jpg";
import Img3  from "../src/images/floor/13.jpg";
import Img4  from "../src/images/floor/14.jpg";
import Img5  from "../src/images/floor/15.jpg";
import Img6  from "../src/images/floor/16.jpg";
function Floor1(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>10*10</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Room" price="13RS/peice" imgsrc={Img1} alter="wall" brand="Spentagon" />
          </div>
          <div className="Card middle">
            <Card title="Kitchen" price="13RS/peice" imgsrc={Img2} alter="floor" brand="Spentagon" />
          </div>
          <div className="Card right">
            <Card title="BathRoom" price="13RS/peice" imgsrc={Img3} alter="sanitary" brand="Spentagon" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="parking" price="13RS/peice" imgsrc={Img4} alter="acc" brand="Spentagon" />
          </div>
          <div className="Card middle">
            <Card title="Lobby" price="13RS/peice" imgsrc={Img5} alter="acc" brand="Spentagon" />
          </div>
          <div className="Card right">
            <Card title="Terrace" price="13RS/peice" imgsrc={Img6} alter="taps" brand="Spentagon" />
          </div>
        </div>
      </>
  )
}
export default Floor1;
