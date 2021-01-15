import React,{useState} from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import FormattedHours from "./FormattedHours"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "axios";


export default function Weather(props) {
let [weatherData, setWeatherData]=useState({ready:false});


function displayTemperature(response){
  console.log (response.data);
  setWeatherData({
ready:true,
temperature:response.data.main.temp,
wind:response.data.wind.speed,
humidity: response.data.main.humidity,
feels: response.data.main.feels_like,
city: response.data.name,
description: response.data.weather[0].description,
max: response.data.main.temp_max,
date: new Date (response.data.dt*1000),

  })
 
}
if (weatherData.ready){
  return (
   <div className="Weather">
     <div className="row">
        <form className="form-inline">
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Enter a City"
            autoComplete={false}
            autoFocus={true}
            />
          <button type="submit" className="btn btn-primary">
            <FontAwesomeIcon icon="search" className="search-icon" />
          </button>
          <button type="submit" className="btn btn-primary">
           <FontAwesomeIcon icon="map-marker-alt"/>
          </button>
        </form>
      </div>
      <div className="row">
        <div className="col-6 city-day">
          <ul className="info">
  <li className="city-headline">{weatherData.city}</li>
  <li className="day-headline"><FormattedDate date={weatherData.date}/></li>
          </ul>
        </div>
        <div className="col-6 hours"><FormattedHours date={weatherData.date}/></div>
      </div>
<div className="row current-weather">
        <div className="col-6">
          <ul>
            <li>
              <img
                className="main-weather-icon"
                src="images/rainy-2.svg"
               alt="cloudy day"
              />
            </li>
            <li className="main-icon-description">
  {weatherData.description}
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <ul>
              <li>
  <span className="current-deegre">{Math.round(weatherData.temperature)}</span>
                <span className="main-deegre-units">
                  {" "}
                 
                  C˚ |
                  F˚
                </span>
              </li>
              <li>
                <span className="feels-like">
  Feels like <span>{Math.round(weatherData.feels)}</span>{" "}
                  <span className="feels-like-unit">C˚| F˚</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row description">
        <div className="col-4 px-0">
          <ul>
            <li className="second-desc-style">Wind</li>
            <li className="wind-box">
            <FontAwesomeIcon icon="wind" className="wind" />

            </li>
            <li className="second-desc-style">
  <span>{Math.round(weatherData.wind)}</span> km/h
            </li>
          </ul>
        </div>
        <div className="col-4 px-0">
          <ul>
            <li className="second-desc-style">Max Temp</li>
            <li className="max-box">
              <FontAwesomeIcon icon="temperature-high" className="high-temp"/>
            </li>
            <li className="second-desc-style">
  <span>{Math.round(weatherData.max)}</span> C˚
            </li>
          </ul>
        </div>
        <div className="col-4 px-0">
          <ul>
            <li className="second-desc-style">Humidity</li>
            <li className="humidity-box">
              <FontAwesomeIcon icon="tint" className="tint"/>
            </li>
            <li className="second-desc-style">
  <span>{weatherData.humidity}</span> %
            </li>
          </ul>
        </div>
      </div>
   </div>
);}
else {
    let apiKey ="f36e45e370221a0b671266843fbab2eb";
   
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
return "Loading ";
}
}










