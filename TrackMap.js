import React, { useEffect, useState } from 'react';

function TrackMap() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('https://api.openf1.org/v1/location')
      .then(response => response.json())
      .then(data => setLocations(data));
  }, []);

  return (
    <div>
      <h2>Track Map</h2>
      <ul>
        {locations.map((location, index) => (
          <li key={index}>
            Car {location.car_number} is at {location.position} on the track.
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrackMap;
