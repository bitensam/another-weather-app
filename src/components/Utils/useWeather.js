import { useState } from 'react';

const useWeather = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // call the api

  const submitRequest = (location) => {
    console.log({ location });
  };

  return {
    isError,
    isLoading,
    submitRequest,
  };
};

export default useWeather;
