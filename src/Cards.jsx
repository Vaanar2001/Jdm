import React from "react";
import {NavLink} from "react-router-dom";
import './cards.css';
function Cards(props){
  return(
    <>
    <div class="card">
     <img src={props.imgsrc} className="card-img-top" alt={props.alter} />
     <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">Price Starting at: {props.price} .</p>
      <NavLink to={props.lk} className="btn btn-primary">Explore </NavLink>
     </div>
    </div>

    </>
  )
}
export default Cards;
