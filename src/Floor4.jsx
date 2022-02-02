import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/floor/41.jpg";
import Img2  from "../src/images/floor/42.jpg";
import Img3  from "../src/images/floor/43.jpg";
import Img4  from "../src/images/floor/44.jpg";
import Img5  from "../src/images/floor/45.jpg";
import Img6  from "../src/images/floor/46.jpg";
function Floor4(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>24*24</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Room" price="35RS/Feet_sqaure" imgsrc={Img1} alter="wall" brand="Rich" />
          </div>
          <div className="Card middle">
            <Card title="Kitchen" price="35RS/Feet_sqaure" imgsrc={Img2} alter="floor" brand="Rich" />
          </div>
          <div className="Card right">
            <Card title="BathRoom" price="35RS/Feet_sqaure" imgsrc={Img3} alter="sanitary" brand="Rich" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="parking" price="35RS/Feet_sqaure" imgsrc={Img4} alter="acc" brand="Rich" />
          </div>
          <div className="Card middle">
            <Card title="Lobby" price="35RS/Feet_sqaure" imgsrc={Img5} alter="acc" brand="Rich" />
          </div>
          <div className="Card right">
            <Card title="Terrace" price="35RS/Feet_sqaure" imgsrc={Img6} alter="taps" brand="Rich" />
          </div>
        </div>
      </>
  )
}
export default Floor4;
