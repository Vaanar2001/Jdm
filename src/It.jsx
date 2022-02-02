import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/Sn/it1.jpg";
import Img2  from "../src/images/Sn/it2.jpg";
import Img3  from "../src/images/Sn/it3.jpg";
import Img4  from "../src/images/Sn/it4.jpg";
import Img5  from "../src/images/Sn/it5.jpg";
import Img6  from "../src/images/Sn/it6.jpg";
function It(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>Indian_Toilets</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
          <Card title="White" price="700Rs/peice" imgsrc={Img1} alter="wall" brand="Sonet" />
          </div>
          <div className="Card middle">
            <Card title="Cream" price="750/peice" imgsrc={Img2} alter="floor" brand="Sonet" />
          </div>
          <div className="Card right">
            <Card title="Green" price="450/Peice" imgsrc={Img3} alter="sanitary" brand="Syphon" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Pink" price="450/peice" imgsrc={Img4} alter="acc" brand="Syphon" />
          </div>
          <div className="Card middle">
            <Card title="Blue" price="450/peice" imgsrc={Img5} alter="acc" brand="Syphon" />
          </div>
          <div className="Card right">
            <Card title="Choclate" price="450/peice" imgsrc={Img6} alter="taps" brand="Star" />
          </div>
        </div>
      </>
  )
}
export default It;
