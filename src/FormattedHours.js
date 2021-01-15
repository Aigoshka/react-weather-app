import React from "react";


export default function FormattedHours (props){

let hours = (props.date.getHours() < 10 ? "0" : "") + props.date.getHours();
let minutes = (props.date.getMinutes() < 10 ? "0" : "") + props.date.getMinutes();
return( <div className="FormattedHours">{hours}:{minutes}</div>);
}