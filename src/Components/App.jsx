import React, { useRef, useState } from 'react';
import '../Components/App.css';
import InputForm from './InputForm';

function App() {
  // weatherData.push({
  //     "location": {
  //       "name": "London",
  //       "region": "City of London, Greater London",
  //       "country": "United Kingdom",
  //       "lat": 51.52,
  //       "lon": -0.11,
  //       "tz_id": "Europe/London",
  //       "localtime_epoch": 1692976074,
  //       "localtime": "2023-08-25 16:07"
  //     },
  //     "current": {
  //       "last_updated_epoch": 1692975600,
  //       "last_updated": "2023-08-25 16:00",
  //       "temp_c": 20.0,
  //       "temp_f": 68.0,
  //       "is_day": 1,
  //       "condition": {
  //         "text": "Partly cloudy",
  //         "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
  //         "code": 1003
  //       },
  //       "wind_mph": 11.9,
  //       "wind_kph": 19.1,
  //       "wind_degree": 250,
  //       "wind_dir": "WSW",
  //       "pressure_mb": 1009.0,
  //       "pressure_in": 29.8,
  //       "precip_mm": 0.0,
  //       "precip_in": 0.0,
  //       "humidity": 49,
  //       "cloud": 50,
  //       "feelslike_c": 20.0,
  //       "feelslike_f": 68.0,
  //       "vis_km": 10.0,
  //       "vis_miles": 6.0,
  //       "uv": 6.0,
  //       "gust_mph": 12.3,
  //       "gust_kph": 19.8
  //     }
  //   })

  return (
    <div className="form-container">
      <script src="https://unpkg.com/feather-icons"></script>
      <div className="row">
        <div className="col-sm-12">
          <div className="input_container">
            <h1>Weather App</h1>
            <p>Enter your city below to get the weather updates.</p>
            <InputForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
