import React from 'react'
import Navbar from './Navbar.jsx';
import './products.css';
import Cards from "./Cards.jsx";
function Floor(){
  return(
    <>
        <Navbar />
        <div className="products">
          <h3>Floor Tiles</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Cards title="10*10" price="13rs/peice" imgsrc="../images/f1.jpg" alter="wall" lk="/products/floor/10*10" />
          </div>
          <div className="Card middle">
            <Cards title="12*12" price="250rs/Box" imgsrc="../images/f2.jpg" alter="floor" lk="/products/floor/12*12" />
          </div>
          <div className="Card right">
            <Cards title="16*16" price="320rs/box" imgsrc="../images/f3.jpg" alter="sanitary" lk="/products/floor/16*16" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Cards title="24*24" price="35rs/square_feet" imgsrc="../images/f4.jpg" alter="acc" lk="/products/floor/24*24" />
          </div>
          <div className="Card middle">
            <Cards title="24*48" price="55rs/square_feet" imgsrc="../images/f5.jpg" alter="acc" lk="/products/floor/24*48" />
          </div>
          <div className="Card right">
            <Cards title="48*48" price="60rs/square_feet" imgsrc="../images/f6.jpg" alter="taps" lk="/products/floor/48*48" />
          </div>
        </div>
    </>
  )
}
export default Floor
