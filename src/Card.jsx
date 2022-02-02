import React from "react";
import './cards.css';
function Card(props){
  return(
    <>
    <div class="card">
     <img src={props.imgsrc} className="card-img-top" alt={props.alter} />
     <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">Brand:{props.brand}<br/>Price Starting at: {props.price} .</p>
     </div>
    </div>

    </>
  )
}
export default Card;
