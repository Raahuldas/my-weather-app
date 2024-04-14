import { useContext, useEffect } from "react";
import WeatherLeft from "./WeatherLeft";
import WeatherRight from "./WeatherRight";
import CitiesContext from "../store/CitiesContext";

function Weather() {
  const API_KEY = "fc389768b5c3aba2f73ac9faf22987f7";
  const FORECAST_KEY = "c8fdff26267d70761fe22f8a88aac679";

  const { coordinates, weatherData, setWeatherData, forecastData, setForecastData, forecastState, handleForecastState } = useContext(CitiesContext);

  useEffect(() => {
    if (coordinates) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => setWeatherData(data))
        .catch((error) => console.log(error));

        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}${forecastState==='today'?'&cnt=10':''}&appid=${FORECAST_KEY}&units=metric`)
        .then((res)=>res.json())
        .then((data)=>setForecastData(data))
        .catch((error)=>console.log(error))
    }
  }, [coordinates,forecastState]);

  const handleTime = (seconds) => {
    let date = new Date(seconds * 1000);
    
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayIndex = date.getDay();
    const day = days[dayIndex];

    const hr = date.getHours();
    const min = date.getMinutes();

    const time = date.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });

    return { day, hr, min, time };
  };

  return (
    <div className=" w-100 p- ">
      <div className="car card-cover h100 overflow-hidden text-bg-dark rounde shadow-lg">
        <div className="row h-10">
          <WeatherLeft weatherData={weatherData} handleTime={handleTime} />
          <WeatherRight weatherData={weatherData} forecastData={forecastData} handleTime={handleTime} forecastState={forecastState} handleForecastState={handleForecastState} />
        </div>
      </div>
    </div>
  );
}

export default Weather;
