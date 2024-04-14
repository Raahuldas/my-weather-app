import React from "react";

function SuggessionBox({ suggest, handleSearchCity }) {
  return (
    <div className="suggession-box position-absolute top-100 bg-light-subtle border border-5 w-100 rounded mt-3 overflow-y-scroll">
      <div className="border p-2 fw-semibold text-warning text-center text-capitalize">
        are you searching for?
      </div>
      {suggest &&
        suggest.map((item) => (
          <div
            className="border p-2  text-center text-capitalize pointer suggested-item"
            onClick={(e) => handleSearchCity(e)} 
            key={item.geoname_id}
          >
            {item.name}
          </div>
        ))}
    </div>
  );
}

export default SuggessionBox;
