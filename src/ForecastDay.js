import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  return (
    <div className="ForecastDay">
      <div className="grid">
        <div className="item forecast-day">{day()}</div>
        <div className="item forecast-img">
          <img
            src={props.data.condition.icon_url}
            alt={props.data.condition.description}
          />
        </div>
        <div className="item forecast-high">
          {Math.round(props.data.temperature.maximum)}°
        </div>
        <div className="item forecast-low">
          {Math.round(props.data.temperature.minimum)}°
        </div>
      </div>
    </div>
  );
}
