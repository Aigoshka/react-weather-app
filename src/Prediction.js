
import React from "react";
import "./Prediction.css";

export default function Prediction (){
    return (
    <div className="Prediction">

<h1 className="five-days-headline">Next 5 Days</h1>
          <div className="row row-cols-5">
            <div className="forecast col">
                <div className="pred-style">
              <ul className="first-pred">
                  <li><span>Mon</span></li>
                  
                  <li>
                    <img
                      className="prediction-icon"
                      src="images/cloudy-day-3.svg"
                      alt="cloudy"
                     
                    />
                  </li>
                  <li className="first-day-pred">
                    <span> 5</span><span className="pred-units"> C˚</span>
                  </li>
                  
              </ul>
                </div>
            </div>
            <div className="forecast-1 col">
              <div className="pred-style">
                <ul>
                   <li><span>Tue</span></li>
                  
                  <li>
                    <img
                      className="prediction-icon"
                      src="images/cloudy-day-3.svg"
                      alt="cloudy"
                      
                    />
                  </li>
                  <li className="first-day-pred">
                    <span> 4</span><span className="pred-units"> C˚</span>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="forecast-2 col">
              <div className="pred-style">
                <ul>
                    <li><span>Wed</span></li>
                  
                  <li>
                    <img
                      className="prediction-icon"
                      src="images/cloudy-day-3.svg"
                      alt="cloudy"
                    />
                  </li>
                  <li className="first-day-pred">
                    <span >7</span><span className="pred-units"> C˚</span>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="forecast-3 col">
               <div className="pred-style">
                <ul>
                    <li><span>Thur</span></li>
                  
                  <li>
                    <img
                      className="prediction-icon"
                      src="images/cloudy-day-3.svg"
                      alt="cloudy"
                    />
                  </li>
                  <li className="first-day-pred">
                    <span>9</span><span className="pred-units"> C˚</span>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="forecast-4 col">
               <div className="pred-style">
                <ul>
                    <li><span>Fri</span></li>
                  
                  <li>
                    <img
                      className="prediction-icon"
                      src="images/cloudy-day-3.svg"
                      alt="cloudy"
                    />
                  </li>
                  <li className="first-day-pred">
                    <span>5</span><span className="pred-units"> C˚</span>
                  </li>
                 
                </ul>
              </div>
          </div>
        </div>
        </div>);
}