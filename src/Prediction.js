
import React, {useState} from "react";
import axios from "axios";
import "./Prediction.css";
import PredictionData from "./PredictionData";

export default function Prediction (props){
let [loaded, setLoaded]=useState(false);
let [forecast,setForecast]=useState(null);

function handlePredictionResponse(response){
setForecast(response.data);
setLoaded(true);
}

if (loaded && props.city===forecast.city.name){
  
  return (
<div className="Prediction">
<div className="row row-cols-5">
            <PredictionData data={forecast.list[0]}/>
            <PredictionData data={forecast.list[1]}/>
            <PredictionData data={forecast.list[2]}/>
            <PredictionData data={forecast.list[3]}/>
            <PredictionData data={forecast.list[4]}/>
            </div>
          
        </div>);
  
}else{
  let apiKey= "f36e45e370221a0b671266843fbab2eb";
  let url= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get (url).then(handlePredictionResponse); 
  return null ;

}

}