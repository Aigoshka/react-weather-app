import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function PredictionData (props){
function hours(){
let date = new Date(props.data.dt*1000);
let hours = date.getHours();
return `${hours}:00`;
}

function temperature (){
 let temperature= Math.round(props.data.main.temp);
 return `${temperature}`;
}

    return (
        
 <div className="forecast px-0">
                <div className="pred-style">
              <ul className="first-pred">
  <li><span className="prediction-hours">{hours()}</span></li>
                  
                  <li>
                    <WeatherIcon
              code={props.data.weather[0].icon}
              alt={props.data.weather[0].description}
            />
                  </li>
                  <li className="first-day-pred">
                    <span> {temperature()}</span><span className="pred-units"> C˚</span>
                  </li>
                  
              </ul>
                </div>
            </div>
            
    );
}