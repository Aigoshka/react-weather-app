import React, {useState} from "react";

export default function WeatherTemperature (props){
let [unit, setUnit]=useState ("celsius");

function converToFahrenheit (event){
   event.preventDefault();
setUnit("fahrenheit");
}

function convertToCelsius(event){
    event.preventDefault();
    setUnit("celsius");
}
    
if (unit==="celsius"){
return (
    <div className="WeatherTemperature">
    <span className="current-deegre">{Math.round(props.celsius)}</span>
               <span className="main-deegre-units">
                 
C˚ |{""} <a href="/" onClick={converToFahrenheit}> {""}F˚</a></span>
                
                
                </div>
);
} else {
    let fahrenheit=(props.celsius*9/5)+32;
    return (
    <div className="WeatherTemperature">
    <span className="current-deegre">{Math.round(fahrenheit)}</span>
               <span className="main-deegre-units">
                 
                  <a href="/" on onClick={convertToCelsius}>C˚</a> | {""}
                    F˚</span>
                
                
                </div>
);
}
}