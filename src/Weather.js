import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";
import { ThreeDots } from "react-loader-spinner";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function search() {
    const apiKey = "4a240de8db217dtodb6166f343d5aa4a";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(url).then(showWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function currentLocationWeather(coordinates) {
    let latitude = coordinates.coords.latitude;
    let longitude = coordinates.coords.longitude;
    const apiKey = "4a240de8db217dtodb6166f343d5aa4a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleCurrentLocation(event) {
    event.preventDefault();

    navigator.geolocation.getCurrentPosition(currentLocationWeather);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="container-fluid remove-margin">
          <div className="row">
            <div className="col-lg-6 current-temp">
              <span className="weather-border"></span>
              <WeatherInfo data={weather} />

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput"
                    className="form-label"></label>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search for a City"
                    autoFocus="on"
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
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={handleCurrentLocation}>
                    Current Location
                  </button>
                </span>
              </form>
            </div>
            <div className="col-lg-5 forcast-grid">
              <WeatherForecast city={weather.city} />
            </div>
          </div>
        </div>
        <div className="open-source">
          <a
            href="https://github.com/supersam63/weather-react"
            target="_blank"
            rel="noreferrer">
            Open-source code
          </a>
          , by{" "}
          <a
            href="https://samantha-portfolio-e9d0c1.netlify.app"
            tartet="_blank"
            rel="noreferrer">
            Samantha Vellinga
          </a>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <ThreeDots
        height="80"
        width="1500"
        radius="100"
        color="#14BAC3"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
}
