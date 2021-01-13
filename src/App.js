
import './App.css';
import Search from "./Search";
import Current from "./Current";
import Weather from "./Weather";
import Description from "./Description";
import Prediction from "./Prediction";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="weather-app-wrapper">
        <div className="card">
          <Search />
          <Current/>
          <Weather/>
          <Description />
          <Prediction/>
        </div>
        <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
