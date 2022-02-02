import React from 'react'
import Navbar from './Navbar.jsx';
import './products.css';
import Cards from "./Cards.jsx";
function Adhesive(){
  return(
    <>
        <Navbar />
        <div className="products">
          <h3>Adhesives</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Cards title="Tiles_Adhesive" price="350/bag(20kg)" imgsrc="../images/ad1.jpg" alter="wall" lk="/products/adhesive/Tile-Adhesive" />
          </div>
          <div className="Card middle">
            <Cards title="Epoxy" price="500rs/Kg" imgsrc="../images/ad2.jpg" alter="floor" lk="/products/adhesive/Epoxy" />
          </div>
          <div className="Card right">
            <Cards title="Tiles_Grout" price="100rs/Kg" imgsrc="../images/ad3.jpg" alter="sanitary" lk="/products/adhesive/Tile-Grout" />
          </div>
        </div>
    </>
  )
}
export default Adhesive
