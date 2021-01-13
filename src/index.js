import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faSearch,faMapMarkerAlt,faWind,faTemperatureHigh,faTint } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faMapMarkerAlt,faWind, faTemperatureHigh,faTint)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
