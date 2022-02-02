import React from 'react';
import "./about.css";
import "./products.css";
import Navbar from "./Navbar.jsx";
import Acard from "./Acard.jsx"
import Img1  from "../src/images/logo/l1.jpg";
import Img2  from "../src/images/logo/l2.jpg";
import Img3  from "../src/images/logo/l3.jpg";
function About(){
  return(
    <>
     <Navbar />
     <div className="products">
       <h3>Authorized Dealer</h3>
     </div>
     <div className="Card_container">
       <div className="Card">
       <Acard title="Kajaria" imgsrc={Img1} alter="wall" product="All" />
       </div>
       <div className="Card middle">
         <Acard title="Sonet" imgsrc={Img2} alter="wall" product="All" />
       </div>
       <div className="Card right">
         <Acard title="Orient-bell" imgsrc={Img3} alter="wall" product="All" />
       </div>
     </div>
     <div className="dealer">
       <h3>Authorized Partner</h3>
     </div>
     <div className="partner">
       <h3 className="name">Sharda Traders</h3><br />
       <h6>Prop-Writter: Mrs Piyush Garg</h6>
       <h6>Phone-No: 9412582796,8630876864</h6>
      </div>
      <div className="dealer">
        <h3>About us</h3>
      </div>
      <div className="para">
        <p>Jai Durga Marbales is the oldest seller of ceramics/vitrified tiles in Shamli district of Uttar Pradesh.<br />
            We are Equipped with skilled employee and best designs from all over India.<br />We are serving people more than 20 years.
        </p>
        <h3 className="name">Jai Durga Marbales</h3><br />
        <h6>Prop-Writter: Mrs Parag Garg</h6>
        <h6>Phone-No: 9412114038,8433176622</h6>
        <h6>E-mail: paraggarg2019@gmail.com</h6>
      </div>
    </>
  )
}
export default About;
