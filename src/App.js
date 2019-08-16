import React from 'react';
import './App.css';

import WeatherCard from './WeatherCard/index';

function App() {
  return (
    <div className="base">
      <main className="content">
        <WeatherCard/>
      </main>
    </div>
  );
}

export default App;
