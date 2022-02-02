import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Card from "./Card.jsx";
import Img1  from "../src/images/Sn/wb1.jpg";
import Img2  from "../src/images/Sn/wb2.jpg";
import Img3  from "../src/images/Sn/wb3.jpg";
import Img4  from "../src/images/Sn/wb4.jpg";
import Img5  from "../src/images/Sn/wb5.jpg";
import Img6  from "../src/images/Sn/wb6.jpg";
function Wb(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>Wash_Basins</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
          <Card title="Integrated_Padestal_Basin" price="3200Rs/peice" imgsrc={Img1} alter="wall" brand="Syphon" />
          </div>
          <div className="Card middle">
            <Card title="Half_padestal_Basin" price="1000/peice" imgsrc={Img2} alter="floor" brand="Star" />
          </div>
          <div className="Card right">
            <Card title="Full_Padestal_Basin" price="2500/Peice" imgsrc={Img3} alter="sanitary" brand="Sonet" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Table_Top" price="7000/peice" imgsrc={Img4} alter="acc" brand="Sonet" />
          </div>
          <div className="Card middle">
            <Card title="Counter_Top" price="8000/peice" imgsrc={Img5} alter="acc" brand="Cera" />
          </div>
          <div className="Card right">
            <Card title="vanity" price="10000/peice" imgsrc={Img6} alter="taps" brand="Cera" />
          </div>
        </div>
      </>
  )
}
export default Wb;
