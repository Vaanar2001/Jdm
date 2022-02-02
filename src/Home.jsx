import React from 'react';
import './Home.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import {NavLink} from "react-router-dom";
import Navbar from './Navbar.jsx';
function Home(){
  return(
    <>
     <div className="home_container">
       <img className="logo" src="./images/logo.jpg" />
       <div className="Name">
        <h2>Jai Durga Marbales.....</h2>
        <h4>We Build Dreams!</h4>
       </div>
      </div>
      <Navbar />
      <section id="header" className="d-flex align-item-center">
      <div className="container-fluid nav_bg">
               <div className="col-10 mx-auto">
                <div className="row">
                 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 tags">
                    <h1>Build your Dream Home With <strong ClassName="brand">Jai Durga Marbales</strong></h1>
                 </div>
                    <div className="dis">
                      <h4>We Have The Best Collection For Your Home </h4>
                    </div>
                 <div className="mt-3">
                   <NavLink to="/products" className="btn-get-started"> Welcome </NavLink>
                 </div>
                 <div className="col-lg-6 order-1 order-lg-2 room ">
                   <img src="./images/room3.jpg" className="img-fluid animated" alt="house" />
                 </div>
               </div>
          </div>
       </div>
      </section>
    </>
  );
}
export default Home;
