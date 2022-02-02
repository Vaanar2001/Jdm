import React from 'react'
import Navbar from './Navbar.jsx';
import './products.css';
import Card from "./Card.jsx"
function Accesories(){
  return(
    <>
        <Navbar />
        <div className="products">
          <h3>Accesories</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Mirrors" price="300rs/peice" imgsrc="../images/acc1.jpg" alter="wall" brand="Steel-Bird" />
          </div>
          <div className="Card middle">
            <Card title="Towel-Stand" price="150rs/peice" imgsrc="../images/acc2.jpg" alter="floor" brand="Steel-Bird" />
          </div>
          <div className="Card right">
            <Card title="Soap-Dispensor" price="100rs/peice" imgsrc="../images/acc3.jpg" alter="sanitary" brand="Steel-Bird" />
          </div>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Card title="Corner" price="250rs/peice" imgsrc="../images/acc4.jpg" alter="acc" brand="Steel-Bird" />
          </div>
          <div className="Card middle">
            <Card title="sink-pipe" price="40rs/peice" imgsrc="../images/acc5.jpg" alter="acc" brand="Steel-Bird" />
          </div>
          <div className="Card right">
            <Card title="Cover/Cistern" price="300rs/peice" imgsrc="../images/acc6.jpg" alter="taps" brand="Steel-Bird/Sonet/Spyder" />
          </div>
        </div>
    </>
  )
}
export default Accesories
