import React from "react";

const WeatherDisplay = ({ weather }) => {
  console.log("weather props", weather);
  const { temperature, conditions } = weather;

  const temperatureStyle = {
    color: parseInt(temperature) > 20 ? "red" : "blue",
  };

  return (
    <div>
      <p style={temperatureStyle}>
        Temperature: {temperature}
        <span>°C</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
