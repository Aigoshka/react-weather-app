
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
                      id="iconday1"
                    />
                  </li>
                  <li className="first-day-pred">
                    <span id="day1"></span><span class="pred-units"> C˚</span>
                  </li>
                  
              </ul>
                </div>
            </div>
            <div class="forecast-1 col">
              <div class="pred-style">
                <ul>
                   <li><span>Tue</span></li>
                  
                  <li>
                    <img
                      class="prediction-icon"
                      src="images/cloudy-day-3.svg"
                      alt="cloudy"
                      id="iconday2"
                    />
                  </li>
                  <li class="first-day-pred">
                    <span id="day2"></span><span class="pred-units"> C˚</span>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div class="forecast-2 col">
              <div class="pred-style">
                <ul>
                    <li><span>Wed</span></li>
                  
                  <li>
                    <img
                      class="prediction-icon"
                      src="images/cloudy-day-3.svg"
                      alt="cloudy"
                      id="iconday3"
                    />
                  </li>
                  <li class="first-day-pred">
                    <span id="day3"></span><span class="pred-units"> C˚</span>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div class="forecast-3 col">
               <div class="pred-style">
                <ul>
                    <li><span>Thur</span></li>
                  
                  <li>
                    <img
                      class="prediction-icon"
                      src="images/cloudy-day-3.svg"
                      alt="cloudy"
                      id="iconday4"
                    />
                  </li>
                  <li class="first-day-pred">
                    <span id="day4"></span><span class="pred-units"> C˚</span>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div class="forecast-4 col">
               <div class="pred-style">
                <ul>
                    <li><span>Fri</span></li>
                  
                  <li>
                    <img
                      class="prediction-icon"
                      src="images/cloudy-day-3.svg"
                      alt="cloudy"
                      id="iconday5"
                    />
                  </li>
                  <li class="first-day-pred">
                    <span id="day5"></span><span class="pred-units"> C˚</span>
                  </li>
                 
                </ul>
              </div>
          </div>
        </div>
        </div>);
}