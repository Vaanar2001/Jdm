import React from 'react'
import Navbar from './Navbar.jsx';
import './products.css';
import Cards from "./Cards.jsx";
function Sanitary(){
  return(
    <>
        <Navbar />
        <div className="products">
          <h3>Sanitary-Wares</h3>
        </div>
        <div className="Card_container">
          <div className="Card">
            <Cards title="Western Toilets" price="2800/peice" imgsrc="../images/s1.jpg" alter="wall" lk="/products/Sanitary/Western-Toilets" />
          </div>
          <div className="Card middle">
            <Cards title="Wash Basin" price="400rs/peice" imgsrc="../images/s3.jpg" alter="floor" lk="/products/Sanitary/Wash-Basin" />
          </div>
          <div className="Card right">
            <Cards title="Indian Toilets" price="350rs/peice" imgsrc="../images/s2.jpg" alter="sanitary" lk="/products/Sanitary/Indian-Toilets" />
          </div>
        </div>
    </>
  )
}
export default Sanitary
