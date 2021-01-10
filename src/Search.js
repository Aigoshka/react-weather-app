import React from "react";
import "./Search.css";

export default function Search (){
    return (
       <div className="Search">
      <div className="row">
        <form className="form-inline">
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Enter a City"
            autoComplete="off"
            autoFocus="on"
          />
          <button type="submit" className="btn btn-primary">
            <i className="fas fa-search"></i>
          </button>
          <button type="submit" className="btn btn-primary">
            <i className="fas fa-map-marker-alt"></i>
          </button>
        </form>
      </div>
    </div>
  );
}