import moment from 'moment';

const getCurrentDayWeather = (data, name) => ({
  weekday: moment(data.datetime).format('dddd'),
  date: moment(data.datetime).format('MMMM Do'),
  location: name,
  temp: Math.round(data.temp),
  description: data.icon,
  wind: data.wgust,
  cloudCover: data.cloudcover,
});

export default getCurrentDayWeather;
