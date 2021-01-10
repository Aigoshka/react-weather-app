
import './App.css';
import Search from "./Search";
import Current from "./Current";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div clasName="App">
      <div className="weather-app-wrapper">
        <div className="card">
          <Search />
          <Current/>
          
        </div>
        
      </div>
    </div>
  );
}

export default App;
