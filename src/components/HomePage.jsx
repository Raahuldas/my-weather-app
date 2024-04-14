import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import CitiesTable from "./CitiesTable"
import CitiesContext from "../store/CitiesContext";

function HomePage() {
  const {offset, setOffset,citiesData, setCitiesData,handleShowWeather,search} = useContext(CitiesContext);
  const [orderBy, setOrderBy] = useState("name");
  const [sortBy, setSortBy] = useState("asc");

  
  const handleSuggestion=(value)=>{
    // fetch(
    //   `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20&order_by=${value}`
    // )
    // .then(res=>res.json())
    // .then((data)=>{console.log(data)})
  }

  const handleOrderBy = (e)=>{
    setCitiesData([]);
    setOrderBy(e.target.value);
  }

  const handleSortBy=(e)=>{
    setCitiesData([]);
    setSortBy(e.target.value);
  }

  useEffect(() => {
    let searched="";
    if (search) {
      searched = '&where=search(name,"'+search+'")';
    }else{
      searched = "";
    }
    fetch(
      `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20&order_by=${orderBy} ${sortBy}&offset=${offset}${searched}`
    )
      .then((res) => res.json())
      .then((data) => {
        const newCitiesData = data.results;
        if (!search) {
          setCitiesData([...citiesData, ...newCitiesData]);
        }else{
          setCitiesData(newCitiesData);
        }
      })
      .catch((error) => console.log(error));

  }, [offset,search,orderBy,sortBy]);


  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      setOffset(offset + 20);
    }
  });

  return (
    <>
    <div className="w-100 bg-dark">


      <Header handleOrderBy={handleOrderBy} handleSortBy={handleSortBy} handleSuggestion={handleSuggestion} />
      <CitiesTable
        citiesData={citiesData}
        handleShowWeather={handleShowWeather}
        />
        </div>
    </>
  );
}

export default HomePage;