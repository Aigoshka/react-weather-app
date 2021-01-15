import React from "react";

export default function FormattedDate(props){
     let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
let day=days[props.date.getDay()];
   let month=months[props.date.getMonth()];
    let currentDate=props.date.getDate();
    return <div className="FormattedDate">
{day}, {currentDate} {month}

    </div>
}