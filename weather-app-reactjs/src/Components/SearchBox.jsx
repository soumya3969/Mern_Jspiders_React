// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css'
import WeatherCard from './WeatherCard';

const API_KEY = "59dffb9db87e7740ea261d5a4fc03294";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

function SearchBox() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  
  useEffect(() => {
   setTimeout(() => {
    if (city) {
      fetchData();
    }
   }, 3000);
  }, [city]);
  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching Data", error);
    }
  };

  return (
    <div className="search-sec">
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-success" onClick={fetchData}>Search</button>
      </div>
        {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default SearchBox;
