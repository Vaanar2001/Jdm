import React from 'react'
import Navbar from './Navbar.jsx';
import './products.css';
import Cards from "./Cards.jsx";
import Card from "./Card.jsx";
function Taps(){
  return(
    <>
        <Navbar />
        <div className="products">
          <h3>Taps</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Cards title="Taps" price="300rs/peice" imgsrc="../images/t1.jpg" alter="wall" lk="/products/taps/steel-taps" />
          </div>
          <div className="Card middle">
            <Cards title="PVC-Taps" price="150rs/peice" imgsrc="../images/t3.jpg" alter="floor" lk="/products/taps/pvc-taps" />
          </div>
          <div className="Card right">
            <Card title="Angel-Wall" price="250Rs/peice" imgsrc="../images/t2.jpeg" alter="sanitary" brand="Maxima/bella/cera" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Hand_Fuget" price="250rs/peice" imgsrc="../images/t4.png" alter="acc" brand="Maxima/bella/cera" />
          </div>
          <div className="Card middle">
            <Card title="Shower" price="600Rs/peice" imgsrc="../images/t5.jpg" alter="acc" brand="Maxima/bella/cera" />
          </div>
          <div className="Card right">
            <Card title="Sink" price="800rs/peice" imgsrc="../images/t6.jpg" alter="taps" brand="Maxima/Ganga/Hand-Made" />
          </div>
        </div>
    </>
  )
}
export default Taps;
