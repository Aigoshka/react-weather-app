import React from "react";
import "./WeatherIcon.css"
export default function WeatherIcon (props){
    console.log(props.code);
    let codeMapping={
        "01d":"images/clear-day.svg",
        "01n": "images/clear-night.svg",
        "02d": "images/cloudy-day-2.svg",
        "02n": "images/cloudy-night-3.svg",
        "03d": "images/cloudy.svg",
        "03n": "images/cloudy.svg",
        "04d":"images/cloudy.svg",
        "04n":"images/cloudy-night-2.svg",
        "09d":"images/rainy-6.svg",
        "09n":"images/rainy-6.svg",
        "10d":"images/rainy-3.svg",
        "10n":"images/rainy-6.svg",
        "11d":"images/thunder.svg",
        "11n":"images/thunder.svg",
        "13d":"images/snowy-6.svg",
        "13n":"images/snowy-6.svg",
        "50d":"images/cloudy.svg",
        "50n":"images/cloudy.svg",
    };
    
    return (
    <img className="main-icon" 
    src={codeMapping[props.code]} 
    alt={props.alt}/>
    
    );
    }
