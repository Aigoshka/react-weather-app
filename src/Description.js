import React from "react";
import "./Description.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Description() {
  let weatherData = {
    wind: "20",
    max: "8",
    humidity: "70"
  };
  return (
    <div className="Description">
      <div className="row description">
        <div className="col-4 wind-col">
          <ul>
            <li className="second-desc-style">Wind</li>
            <li className="wind-box">
            <FontAwesomeIcon icon="wind" className="wind" />

            </li>
            <li className="second-desc-style">
              <span>{weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>
        <div className="col-4 perc-col">
          <ul>
            <li className="second-desc-style">Max Temp</li>
            <li className="max-box">
              <FontAwesomeIcon icon="temperature-high" className="high-temp"/>
            </li>
            <li className="second-desc-style">
              <span>{weatherData.max}</span> C˚
            </li>
          </ul>
        </div>
        <div className="col-4 humidity-col">
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
  );
}
