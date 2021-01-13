import React from "react";
import "./Weather.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






export default function Weather() {
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
            <li className="city-headline">Prague</li>
            <li className="day-headline">Monday, 28 Dec</li>
          </ul>
        </div>
        <div className="col-6 hours">20:00</div>
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
              Cloudy Day
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <ul>
              <li>
                <span className="current-deegre">6</span>
                <span className="main-deegre-units">
                  {" "}
                 
                  C˚ |
                  F˚
                </span>
              </li>
              <li>
                <span className="feels-like">
                  Feels like <span>3</span>{" "}
                  <span className="feels-like-unit">C˚</span>
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
              <span>20</span> km/h
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
              <span>10</span> C˚
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
              <span>80</span> %
            </li>
          </ul>
        </div>
      </div>
   </div>
);
}











