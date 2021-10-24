import { useState } from 'react';

const useWeather = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return {
    isError,
    isLoading,
  };
};

export default useWeather;
