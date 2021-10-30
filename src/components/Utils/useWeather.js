import { useState } from 'react';
import Axios from 'axios';

import getCurrentDayWeather from './getCurrentDayWeather';

const {
  REACT_APP_ANOTHER_WEATHER_APP_KEY,
  REACT_APP_ANOTHER_WEATHER_APP_HOST,
  REACT_APP_ANOTHER_WEATHER_APP_URL,
} = process.env;

const useWeather = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState({});

  const getWeatherData = async (location) => {
    const searchLocation = location;

    const options = {
      method: 'GET',
      url: `${REACT_APP_ANOTHER_WEATHER_APP_URL}`,
      params: {
        aggregateHours: '24',
        location: searchLocation,
        contentType: 'json',
        unitGroup: 'metric',
        shortColumnNames: '0',
      },
      headers: {
        'x-rapidapi-host': `${REACT_APP_ANOTHER_WEATHER_APP_HOST}`,
        'x-rapidapi-key': `${REACT_APP_ANOTHER_WEATHER_APP_KEY}`,
      },
    };

    const req = Axios.request(options);
    const dataPromise = await req
      .then((response) => response.data.locations[searchLocation])

      .catch((error) => {
        throw error;
      });
    return dataPromise;
  };

  // call the api

  const gatherWeatherData = (data) => {
    const currentDay = getCurrentDayWeather(
      data.currentConditions,
      data.address
    );

    console.log(data);
    setWeather(currentDay);
    setIsLoading(false);
  };

  const submitRequest = async (location) => {
    setIsLoading(true);
    setIsError(false);
    const data = await getWeatherData(location);

    if (!data) return;

    gatherWeatherData(data);
  };

  return {
    isError,
    isLoading,
    weather,
    submitRequest,
  };
};

export default useWeather;
