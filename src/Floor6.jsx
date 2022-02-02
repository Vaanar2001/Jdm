import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/floor/61.jpg";
import Img2  from "../src/images/floor/62.jpg";
import Img3  from "../src/images/floor/63.jpg";
import Img4  from "../src/images/floor/64.jpg";
import Img5  from "../src/images/floor/65.jpg";
import Img6  from "../src/images/floor/66.jpeg";
function Floor6(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>48*48</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Room" price="70RS/Feet_sqaure" imgsrc={Img1} alter="wall" brand="Kajaria" />
          </div>
          <div className="Card middle">
            <Card title="Kitchen" price="70RS/Feet_sqaure" imgsrc={Img2} alter="floor" brand="Kajaria" />
          </div>
          <div className="Card right">
            <Card title="BathRoom" price="70RS/Feet_sqaure" imgsrc={Img3} alter="sanitary" brand="Kajaria" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="parking" price="70RS/Feet_sqaure" imgsrc={Img4} alter="acc" brand="Kajaria" />
          </div>
          <div className="Card middle">
            <Card title="Lobby" price="70RS/Feet_sqaure" imgsrc={Img5} alter="acc" brand="Kajaria" />
          </div>
          <div className="Card right">
            <Card title="Terrace" price="70RS/Feet_sqaure" imgsrc={Img6} alter="taps" brand="Kajaria" />
          </div>
        </div>
      </>
  )
}
export default Floor6;
