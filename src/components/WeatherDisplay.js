import React from "react";

const WeatherDisplay = ({ weather }) => {
  const temperatureStyle = {
    color: temperature > 20 ? "red" : "blue",
  };

  return (
    <div>
      <p style={temperatureStyle}>Temperature: {temperature}°C</p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
