import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Drivers from './components/Drivers';
import Weather from './components/Weather';
import TrackMap from './components/TrackMap';

function App() {
  return (
    <div className="App">
      <header>
        <h1>F1 Live Race Dashboard</h1>
        <nav>
          <a href="#dashboard">Dashboard</a>
          <a href="#drivers">Drivers</a>
          <a href="#weather">Weather</a>
        </nav>
      </header>

      <main>
        <section id="dashboard">
          <Dashboard />
        </section>

        <section id="drivers">
          <Drivers />
        </section>

        <section id="weather">
          <Weather />
        </section>

        <section id="track-map">
          <TrackMap />
        </section>
      </main>
    </div>
  );
}

export default App;
