import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({
    temperature: "0°C",
    conditions: "",
  });

  useEffect(() => {
    const weatherData = { temperature: 25, conditions: "Sunny" };
    setWeather(weatherData);
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
