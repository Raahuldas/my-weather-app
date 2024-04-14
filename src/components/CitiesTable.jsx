import React from "react";

function CitiesTable({ citiesData, handleShowWeather }) {
  return (
    <div className="container-fluid overflow-x-scroll table-box">
      <table className="table table-bordered table-dark table-striped-columns table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">geoname ID</th>
            <th scope="col">city</th>
            <th scope="col">country</th>
            <th scope="col">country code</th>
            <th scope="col">timezone</th>
            <th scope="col">population</th>
            <th scope="col">
              coordinates <br />
              (lat, lon)
            </th>
          </tr>
        </thead>
        <tbody>
          {citiesData.map((item, index) => {
            return (
              <tr
                key={item.geoname_id}
                onClick={() => handleShowWeather(item.coordinates, item)}
              >
                <th scope="row"> {index + 1} </th>
                <td>{item.geoname_id}</td>
                <td>{item.name}</td>
                <td>{item.cou_name_en}</td>
                <td>{item.country_code}</td>
                <td>{item.timezone}</td>
                <td>{item.population}</td>
                <td>
                  lat: {item.coordinates.lat}
                  <br />
                  lon: {item.coordinates.lon}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CitiesTable