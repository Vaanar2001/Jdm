import React from 'react'
import Navbar from "./Navbar.jsx";
import "./contact.css";
function Contact(){
  return(
    <>
     <Navbar />
     <div className="dealer">
       <h3>Address:</h3>
     </div>
     <div className="address">
      <p>Lane: Jai Durga Marbales,Jawaher ganj Mandi Gate,<br />
         LandMark: Near Nagar Palika,<br />
         District: Shamli,<br />
         Pincode: 247776,<br />
         State: Uttar Pradesh.
        </p>
     </div>
     <div className="dealer">
       <h3>Call</h3>
     </div>
     <div className="address">
      <p>Phone-No: 9412114038<br />
         Phone-No: 8433176622<br />
         Phone-No: 9412582796<br />
         Phone-No: 8630876864
        </p>
     </div>
     <div className="dealer">
       <h3>E-Mail</h3>
     </div>
     <div className="address">
      <p>E-Mail: paraggarg2019@gmail.com
        </p>
     </div>
    </>
  )
}
export default Contact;
