// eslint-disable-next-line no-unused-vars
import React from "react";

const WeatherCard = ({ weatherData }) => {
  // console.log(weatherData)
  const { name, main, weather, wind,sys } = weatherData;
  // console.log(weather[0].main)
  // console.log(sys.country)
  return (
    <div className="weather-card">
      <img
        src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
        alt="weather Icon"
      />
      <h3>{weather[0].main}</h3>
      <h1>{name},{sys.country}</h1>
      <h2>{main.temp}°C</h2>
      <div className="details">
        <div>
          <h2>Humidity:</h2>
          <h3>{main.humidity}%</h3>
        </div>
        <div>
          <h2>Wind Speed:</h2>
          <h3>{wind.speed}m/s</h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
