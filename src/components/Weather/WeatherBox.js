import React from 'react';
//components
import WeatherDays from './WeatherDays';
//hooks
// styles
import './Weatherbox.scss';
// ui domponents
import { Grid } from '@mui/material';

const WeatherBox = () => {
  return (
    <div className='weather-box'>
      <Grid>
        <Grid className='weather-temp-box' item xs={12}>
          <div className='weather-temp'>
            <p></p>
            <span>*C</span>
          </div>
          <div className='weather-temp-details'>
            <div className='weather-temp-wind-speed'>
              <p>
                wind speed: <span>15 km/h</span>
              </p>
            </div>
            <div className='weather-temp-visibility'>
              <p>
                visibility: <span>89%</span>
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className='weather-description'>Clear and sunny</div>
        </Grid>
        <Grid item xs={12}>
          <WeatherDays />
        </Grid>
      </Grid>
    </div>
  );
};

export default WeatherBox;
