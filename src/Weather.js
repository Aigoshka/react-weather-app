import React,{useState} from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "axios";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add (faSearch)

export default function Weather(props) {
let [weatherData, setWeatherData]=useState({ready:false});
let [city, setCity]=useState (props.defaultCity);

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
icon: response.data.weather[0].icon,
  });
 
}
function search(){
 let apiKey ="f36e45e370221a0b671266843fbab2eb";
   
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
}

    function handleSubmit(event){
    event.preventDefault();
    search()
    }
    
    function handleCityChange(event){
      event.preventDefault();
      setCity(event.target.value);
    }

if (weatherData.ready){
  return (
   <div className="Weather">
     <div className="row">
        <form onSubmit={handleSubmit} className="form-inline">
          <input onChange={handleCityChange}
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
      <WeatherInfo data={weatherData}/>
   </div>
);}
else {
  search();
   return "Loading ";
}
}










