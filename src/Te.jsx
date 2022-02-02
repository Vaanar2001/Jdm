import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/ad/e1.jpg";
import Img2  from "../src/images/ad/e1.jpg";
import Img3  from "../src/images/ad/e1.jpg";
import Img4  from "../src/images/ad/e1.jpg";
import Img5  from "../src/images/ad/e1.jpg";
import Img6  from "../src/images/ad/e1.jpg";
function Te(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>Epoxy</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
          <Card title="Silver-Black" price="600RS/Kg" imgsrc={Img1} alter="wall" brand="Tile-O-Bond" />
          </div>
          <div className="Card middle">
            <Card title="Golden-Black" price="600/Kg" imgsrc={Img2} alter="floor" brand="Tile-O-Bond" />
          </div>
          <div className="Card right">
            <Card title="Teracota" price="500/Kg" imgsrc={Img3} alter="sanitary" brand="Tile-O-Bond" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Ruby-Red" price="600/Kg" imgsrc={Img4} alter="acc" brand="Tile-O-Bond" />
          </div>
          <div className="Card middle">
            <Card title="Copper" price="600RS/Kg" imgsrc={Img5} alter="acc" brand="Tile-O-Bond" />
          </div>
          <div className="Card right">
            <Card title="White" price="500RS/Kg" imgsrc={Img6} alter="taps" brand="Tile-O-Bond" />
          </div>
        </div>
      </>
  )
}
export default Te;
