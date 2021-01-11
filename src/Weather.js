import React from "react";
import "./Weather.css";
export default function Wether() {
  let weatherData = {
    iconDescription: "Cloudy Day",
    temp: "6",
    feels: "- 3"
  };
  return (
    <div className="Weather">
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
              {weatherData.iconDescription}
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <ul>
              <li>
                <span className="current-deegre">{weatherData.temp}</span>
                <span className="main-deegre-units">
                  {" "}
                  <a href="" className="deegres-c" />
                  C˚ |
                  <a href="" className="deegres-f" /> F˚
                </span>
              </li>
              <li>
                <span className="feels-like">
                  Feels like <span>{weatherData.feels}</span>{" "}
                  <span className="feels-like-unit">C˚</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}