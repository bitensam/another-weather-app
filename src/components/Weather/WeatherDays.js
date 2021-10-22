import React from 'react';
// style
import './WeatherDays.scss';
// ui domponents
import { Grid } from '@mui/material';

const WeatherDays = () => {
  return (
    <div className='weather-days'>
      <Grid container spacing={1}>
        <Grid item xs>
          <Grid item xs={12}>
            <div className='weather-days-temp'>11*C</div>
          </Grid>
          <Grid item xs={12}>
            <div className='weather-days-icon'>icon</div>
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
            <div className='weather-days-icon'>icon</div>
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
            <div className='weather-days-icon'>icon</div>
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
            <div className='weather-days-icon'>icon</div>
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
            <div className='weather-days-icon'>icon</div>
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
            <div className='weather-days-icon'>icon</div>
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
            <div className='weather-days-icon'>icon</div>
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
