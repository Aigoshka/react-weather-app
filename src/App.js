
import './App.css';
import Weather from "./Weather";
import Prediction from "./Prediction";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="weather-app-wrapper">
        <div className="card">
          <Weather defaultCity="Prague"/>
          <Prediction/>
        </div>
        <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
