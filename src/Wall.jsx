import React from 'react'
import Navbar from './Navbar.jsx';
import './products.css';
import Cards from "./Cards.jsx";
function Wall(){
  return(
    <>
        <Navbar />
        <div className="products">
          <h3>Wall Tiles</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Cards title="8*12" price="120rs/Box" imgsrc="../images/w1.jpg" alter="wall" lk="/products/wall/8*12" />
          </div>
          <div className="Card middle">
            <Cards title="10*15" price="150rs/Box" imgsrc="../images/w2.jpg" alter="floor" lk="/products/wall/10*15" />
          </div>
          <div className="Card right">
            <Cards title="12*18" price="220/box" imgsrc="../images/w3.jpg" alter="sanitary" lk="/products/wall/12*18" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Cards title="12*24" price="300/box" imgsrc="../images/w4.jpg" alter="acc" lk="/products/wall/12*24" />
          </div>
          <div className="Card middle">
            <Cards title="8*24" price="250/box" imgsrc="../images/w5.jpg" alter="acc" lk="/products/wall/8*24" />
          </div>
          <div className="Card right">
            <Cards title="10*20" price="220/box" imgsrc="../images/w6.jpg" alter="taps" lk="/products/wall/10*20" />
          </div>
        </div>
    </>
  )
}
export default Wall
