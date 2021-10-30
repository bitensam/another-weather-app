import React from 'react';
// components
import Navbar from './components/Navbar/Navbar';
import WeatherBox from './components/Weather/WeatherBox';
import Error from './components/Utils/Error';
import Loading from './components/Utils/Loading';
//hooks
import useWeather from './components/Utils/useWeather';
//styles
import './App.scss';
// ui components
import { Container, Grid } from '@mui/material';

const App = () => {
  const { isError, isLoading, submitRequest, weather } = useWeather();

  const onSubmitForm = (value) => {
    submitRequest(value);
  };

  return (
    <div className='app chilly'>
      <Container>
        <Grid container spacing={54}>
          <Grid item xs={12}>
            <Navbar submitForm={onSubmitForm} currentWeather={weather} />
          </Grid>
          <Grid item xs={12}>
            {!isLoading && <WeatherBox currentWeather={weather} />}
            {isError && <Error />}
            {isLoading && <Loading />}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
