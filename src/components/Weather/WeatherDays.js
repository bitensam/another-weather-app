import React from 'react';
// style
import './WeatherDays.scss';
// ui domponents
import { Grid } from '@mui/material';
import {
  WiDaySunny,
  WiDaySnow,
  WiDayStormShowers,
  WiDayShowers,
  WiDayCloudy,
  // WiFog,
  // WiDayWindy,
} from 'react-icons/wi';

const WeatherDays = () => {
  return (
    <div className='weather-days'>
      <Grid container spacing={1}>
        <Grid item xs>
          <Grid item xs={12}>
            <div className='weather-days-temp'>
              <p>11*C</p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className='weather-days-icon'>
              <WiDaySunny />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className='weather-days-weekday'>
              <p>Mon</p>
            </div>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid item xs={12}>
            <div className='weather-days-temp'>11*C</div>
          </Grid>
          <Grid item xs={12}>
            <div className='weather-days-icon'>
              <WiDayStormShowers />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className='weather-days-weekday'>Mon</div>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid item xs={12}>
            <div className='weather-days-temp'>11*C</div>
          </Grid>
          <Grid item xs={12}>
            <div className='weather-days-icon'>
              <WiDaySnow />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className='weather-days-weekday'>Mon</div>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid item xs={12}>
            <div className='weather-days-temp'>11*C</div>
          </Grid>
          <Grid item xs={12}>
            <div className='weather-days-icon'>
              <WiDayCloudy />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className='weather-days-weekday'>Mon</div>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid item xs={12}>
            <div className='weather-days-temp'>11*C</div>
          </Grid>
          <Grid item xs={12}>
            <div className='weather-days-icon'>
              <WiDayShowers />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className='weather-days-weekday'>Mon</div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default WeatherDays;
