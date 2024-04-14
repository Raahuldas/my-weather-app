import { createContext } from "react";

const CitiesContext = createContext(
    {
    coordinates:"",
    currCity:[],
    citiesData:[],
    setCitiesData:()=>{},
    handleShowWeather:()=>{},
    setCoordinates:()=>{},
    offset:"",
    setOffset:()=>{},
    weatherData:[],
    setWeatherData:()=>{},
    forecastData:[],
    setForecastData:()=>{},
    forecastState:"",
    setForecastState:()=>{},
    handleForecastState:()=>{},
    handleSearchCity:()=>{},
    searchElement:"",
    search:""
    }
)

export default CitiesContext;