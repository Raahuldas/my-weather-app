import React from "react";
import ForecastCard from "./ForecastCard";

function WeatherRight({
  weatherData,
  forecastData,
  handleTime,
  handleForecastState,
  forecastState,
}) {
  return (
    <div className="col col-sm-12 col-md-8 col-lg-9 px-3">
      <nav className="d-flex pe-5 mt-3">
        <div className="d-flex px-1 me-auto align-items-end">
          <div className="fs-4 pt-1 me-4 me-sm-0">Forecast</div>
        </div>
        <div className="d-flex">
          <button
            className={`px-3 mx-2 ms-auto rounded btn btn-outline-light text-dar fw-medium ${
              forecastState === "today" && "active"
            } `}
            onClick={() => handleForecastState("today")}
          >
            Today
          </button>
          <button
            className={`px-3 mx-2  rounded btn btn-outline-light text-dar fw-medium ${
              forecastState === "week" && "active"
            }`}
            onClick={() => handleForecastState("week")}
          >
            Week
          </button>
        </div>
      </nav>

      <div className="pe-2">
        <div className=" days d-flex mt-3 overflow-x-scroll">
          {forecastData?.list.map((item) => (
              <ForecastCard
                key={item.weather[0].id}
                handleTime={handleTime}
                item={item}
              />
            ))}
        </div>
      </div>

      <h4 className="fs-4 fw-medium mt-4 mb-3">Today's Highlights</h4>

      <div className="pe-2 ">
        <div className="contents row  row-cols-lg-4 row-cols-sm-2  justify-content-between p-3 overflow-y-scroll text-dark fs-5 fw-medium ">
          <div className="content-item p-2 border border-dark bg-primary-subtle d-flex justify-content-center align-items-center flex-column h-50 rounded-4 border-5">
            <div className="fw-semibold fs-4 mb-2 item-heading">Temprature</div>
            <div>Max: {weatherData?.main.temp_max}&deg;C</div>
            <div>Min: {weatherData?.main.temp_min}&deg;C</div>
          </div>

          <div className="content-item p-2 border border-dark bg-primary-subtle d-flex justify-content-center align-items-center flex-column h-50 rounded-4 border-5">
            <div className="fw-semibold fs-4 mb-2 item-heading ">Humidity</div>
            <div>{weatherData?.main?.humidity}%</div>
          </div>

          <div className="content-item p-2 border border-dark bg-primary-subtle d-flex justify-content-center align-items-center flex-column h-50 rounded-4 border-5 ">
            <div className="fw-semibold fs-4 mb-2 item-heading ">Rain</div>
            <div>{weatherData?.rain ? weatherData?.rain["1h"] : 0}mm</div>
          </div>

          <div className="content-item p-2 border border-dark bg-primary-subtle d-flex justify-content-center align-items-center flex-column h-50 rounded-4 border-5">
            <div className="fw-semibold fs-4 mb-2 item-heading ">Visibility</div>
            <div>{weatherData?.visibility / 1000} km</div>
          </div>

          <div className="content-item p-2 border border-dark bg-primary-subtle d-flex justify-content-center align-items-center flex-column h-50 rounded-4 border-5 ">
            <div className="fw-semibold fs-4 mb-2 item-heading ">Cloudiness</div>
            <div>{weatherData?.clouds?.all}%</div>
          </div>

          <div className="content-item p-2 border border-dark bg-primary-subtle d-flex justify-content-center align-items-center flex-column h-50 rounded-4 border-5 ">
            <div className="fw-semibold fs-4 mb-2 item-heading ">Pressure</div>
            <div>{weatherData?.main.pressure} hPa</div>
          </div>

          <div className="content-item p-2 border border-dark bg-primary-subtle d-flex justify-content-center align-items-center flex-column h-50 rounded-4 border-5 ">
            <div className="fw-semibold fs-4 mb-2 item-heading">Wind</div>
            <div className="text-center">Speed: {weatherData?.wind.speed} m/sec</div>
            <div>Degree: {weatherData?.wind.deg}&deg;</div>
          </div>

          <div className="content-item p-2 border border-dark bg-primary-subtle d-flex justify-content-center align-items-center flex-column h-50 rounded-4 border-5">
            <div className="fw-semibold fs-4 mb-2 item-heading ">Gust</div>
            <div>{weatherData?.wind.gust} m/sec</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherRight;
