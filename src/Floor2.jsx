import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/floor/21.jpg";
import Img2  from "../src/images/floor/22.jpg";
import Img3  from "../src/images/floor/23.jpg";
import Img4  from "../src/images/floor/24.jpg";
import Img5  from "../src/images/floor/25.jpg";
import Img6  from "../src/images/floor/26.jpg";
function Floor2(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>12*12</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Room" price="250RS/Box" imgsrc={Img1} alter="wall" brand="Bicero" />
          </div>
          <div className="Card middle">
            <Card title="Kitchen" price="250RS/Box" imgsrc={Img2} alter="floor" brand="Bicero" />
          </div>
          <div className="Card right">
            <Card title="BathRoom" price="250RS/Box" imgsrc={Img3} alter="sanitary" brand="Bicero" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="parking" price="250RS/Box" imgsrc={Img4} alter="acc" brand="Bicero" />
          </div>
          <div className="Card middle">
            <Card title="Lobby" price="250RS/Box" imgsrc={Img5} alter="acc" brand="Bicero" />
          </div>
          <div className="Card right">
            <Card title="Terrace" price="250RS/Box" imgsrc={Img6} alter="taps" brand="Bicero" />
          </div>
        </div>
      </>
  )
}
export default Floor2;
