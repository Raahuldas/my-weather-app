import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { useRef, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import CitiesContext from "./store/CitiesContext";

function App() {
  const searchElement = useRef();
  const [search,setSearch] = useState("")

  const [currCity, setCurrCity] = useState();
  const [forecastState, setForecastState] = useState("today");
  const [coordinates, setCoordinates] = useState();
  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();
  const [citiesData, setCitiesData] = useState([]);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  const handleShowWeather = (coordinate, currItem) => {
    setCoordinates(coordinate);
    setCurrCity(currItem);
    navigate("/weather");
  };


  const handleForecastState = (state)=>{
    setForecastState(state);
  }

  const handleSearchCity = (event)=>{
    event.preventDefault()
    setSearch(searchElement.current.value)
  }

  return (
    <CitiesContext.Provider
      value={{
        coordinates,
        currCity,
        citiesData,
        setCitiesData,
        handleShowWeather,
        setCoordinates,
        offset,
        setOffset,
        weatherData,
        setWeatherData,
        forecastData,
        setForecastData,
        forecastState,
        setForecastState,
        handleForecastState,
        handleSearchCity,
        searchElement,
        search
      }}
    >
      <Outlet />
    </CitiesContext.Provider>
  );
}

export default App;
