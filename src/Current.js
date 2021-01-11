import React from "react";
import "./Current.css";

export default function Current (){
   
  return (
    <div className="Current">
      <div className="row">
        <div className="col-6 city-day">
          <ul className="info">
            <li className="city-headline">Prague</li>
            <li className="day-headline">Monday, 28 Dec</li>
          </ul>
        </div>
        <div className="col-6 hours">20:00</div>
      </div>
    </div>
  );
}