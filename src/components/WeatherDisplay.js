import React from "react";

const WeatherDisplay = ({ weather }) => {
  console.log("weather props", weather);
  const { temperature, conditions } = weather;

  const temperatureStyle = {
    color: temperature > "20°C" ? "red" : "blue",
  };

  return (
    <div>
      <p style={temperatureStyle}>Temperature: {temperature}</p>
      <p></p>
      <span>Conditions: {conditions}</span>
    </div>
  );
};

export default WeatherDisplay;
