import React, { useContext } from "react";
import CitiesContext from "../store/CitiesContext";
import { PiSunLight } from "react-icons/pi";
import SuggessionBox from "./SuggessionBox";

function Header({ handleOrderBy, handleSortBy, handleSuggestion, suggest }) {
  const { handleSearchCity, searchElement } = useContext(CitiesContext);

  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body text-light"
      data-bs-theme="dark"
    >
      <div className="container-fluid bg-dark">
        <a className="navbar-brand" href="#">
          <span className="fs-4">
            <PiSunLight />{" "}
          </span>{" "}
          MyWeather App
        </a>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
            <li className="w-25 ms-lg-1">
              <select
                className="form-select w-100 ms-auto"
                onChange={(e) => handleOrderBy(e)}
              >
                <option className="dropdown-item" defaultValue>
                  Order by
                </option>
                <option value="name" className="dropdown-item">
                  city name
                </option>
                <option value="cou_name_en" className="dropdown-item">
                  country name
                </option>
                <option value="population" className="dropdown-item">
                  population
                </option>
              </select>
            </li>

            <li className="w-25 ms-lg-1">
              <select
                className="form-select w-100 "
                onChange={(e) => handleSortBy(e)}
                aria-label="Default select example"
              >
                <option className="dropdown-item" defaultValue>
                  Sort by
                </option>
                <option value="asc" className="dropdown-item">
                  Assending
                </option>
                <option value="desc" className="dropdown-item">
                  Descending
                </option>
              </select>
            </li>
          </ul>

          <form
            className="d-flex ms-lg-1 mb-3 mb-lg-1 position-relative"
            role="search"
            onSubmit={(e) => handleSearchCity(e)}
          >
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search your city..."
              aria-label="Search"
              ref={searchElement}
              onChange={(e) => handleSuggestion(e.target.value)}
            />
            {
              suggest.length > 0 && <SuggessionBox suggest={suggest} handleSearchCity={handleSearchCity} />
            }
              
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Header;
