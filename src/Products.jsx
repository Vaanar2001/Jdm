import React from 'react';
import Navbar from "./Navbar.jsx";
import "./products.css";
import Cards from "./Cards.jsx";
function Products(){
  return(
      <>
        <Navbar />
        <div className="products">
          <h3>Our Products</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Cards title="Wall Tiles" price="150rs/Box" imgsrc="./images/wall.jpg" alter="wall" lk="/products/wall" />
          </div>
          <div className="Card middle">
            <Cards title="Floor Tiles" price="250rs/Box" imgsrc="./images/floor.jpg" alter="floor" lk="/products/floor" />
          </div>
          <div className="Card right">
            <Cards title="Sanitary-Wares" price="300rs/peice" imgsrc="./images/sanitary.jpg" alter="sanitary" lk="/products/sanitary" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Cards title="Adhesive" price="100rs/kg" imgsrc="./images/adhesive.jpg" alter="acc" lk="/products/adhesive" />
          </div>
          <div className="Card middle">
            <Cards title="Accesories" price="100rs/peice" imgsrc="./images/acc.jpg" alter="acc" lk="/products/Accesories" />
          </div>
          <div className="Card right">
            <Cards title="Taps" price="500rs/peice" imgsrc="./images/taps.jpg" alter="taps" lk="/products/taps" />
          </div>
        </div>
      </>
  )
}
export default Products
