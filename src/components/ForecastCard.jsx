import React from "react";

function ForecastCard({handleTime, item}) {
  return (
    <div
      className=" border border-1 rounded text-center me-2 px-4 bg-danger-subtle text-dark"
    >
      <p className="mb-0">{handleTime(item.dt).day}</p>
      <p className="mb-1 mt-0">{handleTime(item.dt).time}</p>
      <div
        className="img mx-auto rounded-circle overflow-hidden bg-black -subtle"
        style={{ height: "6rem", width: "6rem" }}
      >
        <img
          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
          alt="img"
          className="w-100 h-100 object-fit-cover"
        />
      </div>
        <p className="m-0 p-0 fw-light">
            {item.weather[0].description}
        </p>
      <p className="m-0">{Math.round(item.main.temp_min)}&deg;C - {Math.round(item.main.temp_max)}&deg;C</p>
    </div>
  );
}

export default ForecastCard;
