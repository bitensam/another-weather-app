import { useState } from 'react';
import Axios from 'axios';

const {
  REACT_APP_ANOTHER_WEATHER_APP_KEY,
  REACT_APP_ANOTHER_WEATHER_APP_HOST,
  REACT_APP_ANOTHER_WEATHER_APP_URL,
} = process.env;

const useWeather = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // call the api

  const submitRequest = async (location) => {
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

    const data = await Axios.request(options)
      .then(function (response) {
        return response.data.locations;
      })

      .catch(function (error) {
        console.error(error);
      });

    console.log('data:', data);

    if (!data || data.length === 0) {
      setIsError('There is no such location');
      return;
    }
  };

  return {
    isError,
    isLoading,
    submitRequest,
  };
};

export default useWeather;
