import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    const wetherData = { temperature: 25, conditions: "Sunny" };
    setWeather(wetherData);
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
