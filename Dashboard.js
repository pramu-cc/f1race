import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [carData, setCarData] = useState([]);
  const [lapData, setLapData] = useState([]);

  useEffect(() => {
    // Fetch car data
    fetch('https://api.openf1.org/v1/car_data')
      .then(response => response.json())
      .then(data => setCarData(data));

    // Fetch lap data
    fetch('https://api.openf1.org/v1/laps')
      .then(response => response.json())
      .then(data => setLapData(data));
  }, []);

  return (
    <div>
      <h2>Race Dashboard</h2>
      <div className="race-data">
        <h3>Live Car Data</h3>
        <ul>
          {carData.map((car, index) => (
            <li key={index}>
              Car {car.car_number}: Speed {car.speed} km/h
            </li>
          ))}
        </ul>
      </div>

      <div className="lap-data">
        <h3>Lap Data</h3>
        <ul>
          {lapData.map((lap, index) => (
            <li key={index}>
              Driver {lap.driver_id}: Best Lap Time {lap.best_lap_time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
