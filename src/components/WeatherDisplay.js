import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;
  const temperatureStyle = {
    color: temperature > "20°C" ? "red" : "blue",
  };

  return (
    <div>
      <p style={temperatureStyle}>Temperature: {temperature}</p>
      <span>Conditions: {conditions}</span>
    </div>
  );
};

export default WeatherDisplay;
