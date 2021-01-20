import React, {useState} from "react";
import "./Weather.css";

export default function WeatherTemperatureFeels (props){
let [unit, setUnit]=useState ("celsiusFeels");

function converToFahrenheitFeels (event){
   event.preventDefault();
setUnit("fahrenheit");
}

function convertToCelsiusFeels(event){
    event.preventDefault();
    setUnit("celsiusFeels");
}
    
if (unit==="celsiusFeels"){
return (
    <div className="WeatherTemperatureFeels">
    <span className="feels-like">Feels like {Math.round(props.celsiusFeels)}</span>
               <span className="feels-like-unit">
                 
C˚ |{""} <a href="/" onClick={converToFahrenheitFeels}> {""}F˚</a></span>
                
                
                </div>
);
} else {
    let fahrenheit=(props.celsiusFeels*9/5)+32;
    return (
    <div className="WeatherTemperature">
    <span className="feels-like">Feels like {Math.round(fahrenheit)}</span>
               <span className="feels-like-unit">
                 
                  <a href="/" on onClick={convertToCelsiusFeels}>C˚</a> | {""}
                    F˚</span>
                
                
                </div>
);
}
}
























