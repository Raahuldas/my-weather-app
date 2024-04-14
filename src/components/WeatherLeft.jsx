import { BsEmojiSmile } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import React, { useContext } from "react";
import { CiCloudOn } from "react-icons/ci";
import CitiesContext from "../store/CitiesContext";
import { WiSunrise } from "react-icons/wi";
import { TbSunset2 } from "react-icons/tb";
import { Link } from "react-router-dom";

function WeatherLeft({ handleTime }) {
  const { weatherData, currCity } = useContext(CitiesContext);

  return (
    <div className="col col-sm-12 col-md-4 col-lg-3 px-4 pt-5 text-center d-flex flex-column justify-content-center align-items-center border-end">
      <Link to={"/"}>
        <h3>
          <span className="badge text-bg-secondary">
            <IoMdArrowRoundBack /> Home
          </span>
        </h3>
      </Link>

      <div
        className="image rounded overflow-hidden m-auto"
        style={{ width: "12rem", height: "12rem" }}
      >
        <img
          src={`https://openweathermap.org/img/wn/${
            weatherData && weatherData?.weather[0].icon
          }@4x.png`}
          alt="img"
          className="h-100 w-100"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="py-1 px-5">
        <h2 className="fs-1">{weatherData && weatherData.main.temp}&#8451;</h2>
        {weatherData?.dt && (
          <p>
            {weatherData?.dt && handleTime(weatherData.dt).day},{" "}
            {weatherData?.dt && handleTime(weatherData.dt).time}
          </p>
        )}
      </div>
      
      <hr className="w-100 m-auto my-0" />

      <div className="mt-4 text-start lh-lg">
        <div className="fw-medium">
          <BsEmojiSmile /> Feels like: {weatherData?.main.feels_like}&deg;C
        </div>
        <div className="fw-medium">
          <CiCloudOn /> {weatherData && weatherData?.weather[0]?.description}
        </div>
        <div className="fw-medium">
          <WiSunrise /> Sunrise: {handleTime(weatherData?.sys.sunrise).time}
        </div>
        <div className="fw-medium">
          <TbSunset2 /> Sunset: {handleTime(weatherData?.sys.sunset).time}
        </div>
      </div>

      {currCity && (
        <p className="fs-5 pb-2 pt-5">
          {currCity?.name}, {currCity?.cou_name_en}
        </p>
      )}
    </div>
  );
}

export default WeatherLeft;
