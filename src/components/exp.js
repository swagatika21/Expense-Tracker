import "./exp.css";
import React from "react";
import ExpDate from "./ExpDate";

let ExpItem=(props)=>{

 return(
    <div className="exp-item">
      <ExpDate date={props.date}/>
       <div className="exp-desc">
        <h2>{props.title}</h2>
       </div>
       <div className="exp-price">${props.amount}</div>
    </div>
 )
}
export default ExpItem;