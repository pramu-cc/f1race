import React, { useEffect, useState } from 'react';

function Weather() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch('https://api.openf1.org/v1/weather')
      .then(response => response.json())
      .then(data => setWeather(data));
  }, []);

  return (
    <div>
      <h2>Weather Conditions</h2>
      <p>Track Temperature: {weather.track_temperature} °C</p>
      <p>Air Temperature: {weather.air_temperature} °C</p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
}

export default Weather;
