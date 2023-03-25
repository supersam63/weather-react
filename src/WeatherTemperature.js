import React, { useState } from "react";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }
  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span>{props.fahrenheit}</span>
        <span className="units">
          °F |{" "}
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span>{Math.round(celsius())}</span>
        <span className="units">
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
