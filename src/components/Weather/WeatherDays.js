import React from 'react';
// style
import './WeatherDays.scss';
// ui domponents
import { Grid } from '@mui/material';
import {
  TiWeatherSunny,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherShower,
  TiWeatherCloudy,
  TiWeatherPartlySunny,
  TiWeatherWindy,
} from 'react-icons/ti';

const WeatherDays = () => {
  return (
    <div className='weather-days'>
      <Grid container spacing={1}>
        <Grid item xs>
          <Grid item xs={12}>
            <div className='weather-days-temp'>11*C</div>
          </Grid>
          <Grid item xs={12}>
            <div className='weather-days-icon'>
              <TiWeatherPartlySunny />
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
              <TiWeatherCloudy />
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
              <TiWeatherSnow />
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
              <TiWeatherWindy />
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
              <TiWeatherShower />
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
              <TiWeatherSunny />
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
              <TiWeatherStormy />
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
