import React from 'react';
//components
import WeatherDays from './WeatherDays';
// styles
import './Weatherbox.scss';
// ui domponents
import { Grid } from '@mui/material';

const WeatherBox = ({ currentWeather }) => {
  return (
    <div className='weather-box'>
      <Grid>
        <Grid className='weather-temp-box' item xs={12}>
          <div className='weather-temp'>
            <p>
              {currentWeather.temp}
              <span>°C</span>
            </p>
          </div>
          <div className='weather-temp-details'>
            <div className='weather-temp-wind-speed'>
              <p>
                wind speed: <span>{currentWeather.wind}</span>
                <span> km/h</span>
              </p>
            </div>
            <div className='weather-temp-visibility'>
              <p>
                cloud cover: <span>{currentWeather.cloudCover}</span>
                <span>%</span>
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className='weather-description'>
            {currentWeather.description}
          </div>
        </Grid>
        <Grid item xs={12}>
          <WeatherDays />
        </Grid>
      </Grid>
    </div>
  );
};

export default WeatherBox;
