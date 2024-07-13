import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;
  const temperatureStyle = {
    color: parseInt(temperature) > 20 ? "red" : "blue",
  };

  return (
    <div>
      <p style={temperatureStyle}>Temperature: {temperature}</p>
      <span>Conditions: {conditions}</span>
    </div>
  );
};

export default WeatherDisplay;
