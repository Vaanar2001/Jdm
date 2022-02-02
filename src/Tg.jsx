import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/ad/g1.jpg";
import Img2  from "../src/images/ad/g1.jpg";
import Img3  from "../src/images/ad/g1.jpg";
import Img4  from "../src/images/ad/g1.jpg";
import Img5  from "../src/images/ad/g1.jpg";
import Img6  from "../src/images/ad/g1.jpg";
function Tg(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>Tile-Grout</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
          <Card title="White" price="100RS/Kg" imgsrc={Img1} alter="wall" brand="Revox" />
          </div>
          <div className="Card middle">
            <Card title="Ivory" price="100RS/kg" imgsrc={Img2} alter="floor" brand="Revox" />
          </div>
          <div className="Card right">
            <Card title="Black" price="100RS/Kg" imgsrc={Img3} alter="sanitary" brand="Revox" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Blue" price="100RS/Kg" imgsrc={Img4} alter="acc" brand="Revox" />
          </div>
          <div className="Card middle">
            <Card title="Teracota" price="100RS/Kg" imgsrc={Img5} alter="acc" brand="Revox" />
          </div>
          <div className="Card right">
            <Card title="Brown" price="100RS/Kg" imgsrc={Img6} alter="taps" brand="Revox" />
          </div>
        </div>
      </>
  )
}
export default Tg;
