import React from 'react';
//components
import WeatherDays from './WeatherDays';
// styles
import './Weatherbox.scss';
// ui domponents
import { Grid } from '@mui/material';

const WeatherBox = () => {
  return (
    <div className='weather-box'>
      <Grid spacing={2}>
        <Grid className='weather-temp-box' item xs={12}>
          <div className='weather-temp'>
            28<span>*C</span>
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
