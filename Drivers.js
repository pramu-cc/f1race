import React, { useEffect, useState } from 'react';

function Drivers() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch('https://api.openf1.org/v1/drivers')
      .then(response => response.json())
      .then(data => setDrivers(data));
  }, []);

  return (
    <div>
      <h2>Drivers</h2>
      <ul>
        {drivers.map((driver, index) => (
          <li key={index}>
            {driver.name} - {driver.team}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Drivers;
