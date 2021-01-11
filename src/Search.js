import React,{useState} from "react";
import "./Search.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Search (){
    return (
       <div className="Search">
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
    </div>
  );
}