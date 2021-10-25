import { useState } from 'react';
import Axios from 'axios';

const URL = 'https://visual-crossing-weather.p.rapidapi.com/forecast';
const HEADERS_HOST = 'visual-crossing-weather.p.rapidapi.com';
const HEADERS_API_KEY = '592a31e457mshcfc3a701f886c21p16fcc8jsnba61229d9792';

const useWeather = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // call the api

  const submitRequest = async (location) => {
    const searchLocation = location;

    const options = {
      method: 'GET',
      url: URL,
      params: {
        aggregateHours: '24',
        location: searchLocation,
        contentType: 'json',
        unitGroup: 'metric',
        shortColumnNames: '0',
      },
      headers: {
        'x-rapidapi-host': HEADERS_HOST,
        'x-rapidapi-key': HEADERS_API_KEY,
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
