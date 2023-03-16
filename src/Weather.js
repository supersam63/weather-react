import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Forecast from "./Forecast";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setWeather({
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      city: response.data.city,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "4a240de8db217dtodb6166f343d5aa4a";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(url).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <div className="container-fluid remove-margin">
        <div className="row">
          <div className="col-lg-6 current-temp">
            <span className="weather-border"></span>

            <h3>{weather.city}</h3>
            <h1>
              <span>{weather.temperature}</span>
              <span className="units">
                <a href="/" className="active">
                  °F
                </a>{" "}
                | <a href="/">°C</a>
              </span>
              <div>
                <ul className="current-weather-conditions">
                  <li>
                    Wind: <span>{weather.wind}</span>m/h,
                  </li>
                  <li>
                    Humidity: <span>{weather.humidity}</span>%
                  </li>
                </ul>
              </div>
              <div className="current-condition">{weather.description}</div>
            </h1>
            <img src={weather.icon} alt="" />
            <h6>March 16th, 2023</h6>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  for="formGroupExampleInput"
                  className="form-label"></label>
                <input
                  type="search"
                  className="form-control show-on-large"
                  placeholder="Search for a City"
                  autocomplete="off"
                  onChange={updateCity}
                />
              </div>
              <span className="go-button ">
                <input
                  type="submit"
                  className="btn btn-outline-primary"
                  value="Go"
                />
              </span>
              <span className="current-location-button">
                <button type="button" className="btn btn-outline-success">
                  Current Location
                </button>
              </span>
            </form>
          </div>
          <div className="col-lg-5 forcast-grid">
            <Forecast />
          </div>
        </div>
      </div>
      <div className="open-source">
        <a
          href="https://github.com/supersam63/weather-project-sc"
          target="_blank"
          rel="noreferrer">
          Open-source code
        </a>
        , by Samantha Vellinga
      </div>
    </div>
  );
}
