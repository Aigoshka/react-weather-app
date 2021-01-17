import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedHours from "./FormattedHours";
import WeatherIcon from "./WeatherIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WeatherInfo (props){
    return (
        <div className="WeatherInfo">
        <div className="row">
        <div className="col-6 city-day">
          <ul className="info">
  <li className="city-headline">{props.data.city}</li>
  <li className="day-headline"><FormattedDate date={props.data.date}/></li>
          </ul>
        </div>
        <div className="col-6 hours"><FormattedHours date={props.data.date}/></div>
      </div>
<div className="row current-weather">
        <div className="col-6">
          <ul>
            <li>
                <div className="main-weather-icon">
                <WeatherIcon code={props.data.icon} alt={props.data.description}/>
              </div>
            </li>
            <li className="main-icon-description">
  {props.data.description}
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <ul>
              <li>
  <span className="current-deegre">{Math.round(props.data.temperature)}</span>
                <span className="main-deegre-units">
                  {" "}
                 
                  C˚ |
                  F˚
                </span>
              </li>
              <li>
                <span className="feels-like">
  Feels like <span>{Math.round(props.data.feels)}</span>{" "}
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
  <span>{Math.round(props.data.wind)}</span> km/h
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
  <span>{Math.round(props.data.max)}</span> C˚
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
  <span>{props.data.humidity}</span> %
            </li>
          </ul>
        </div>
      </div>
     </div>
    );
}