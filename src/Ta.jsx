import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/ad/ta1.png";
import Img2  from "../src/images/ad/ta1.png";
import Img3  from "../src/images/ad/ta2.jpg";
function Ta(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>Tile_Adhesive</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
          <Card title="Revox-Premium" price="800Rs/peice" imgsrc={Img1} alter="wall" brand="Revox" />
          </div>
          <div className="Card middle">
            <Card title="Revox" price="500/peice" imgsrc={Img2} alter="floor" brand="Revox" />
          </div>
          <div className="Card right">
            <Card title="Tile-O-Bond" price="350/Peice" imgsrc={Img3} alter="sanitary" brand="Tile-O-Bond" />
          </div>
        </div>
      </>
  )
}
export default Ta;
