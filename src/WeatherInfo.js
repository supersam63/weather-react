import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h3>{props.data.city}</h3>
      <h1>
        <WeatherTemperature fahrenheit={props.data.temperature} />
        <div>
          <ul className="current-weather-conditions">
            <li>
              Wind: <span>{props.data.wind}</span>m/h,
            </li>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
          </ul>
        </div>
        <div className="current-condition">{props.data.description}</div>
      </h1>
      <img src={props.data.icon} alt={props.data.description} />
      <h6>
        <FormattedDate date={props.data.date} />
      </h6>
    </div>
  );
}
