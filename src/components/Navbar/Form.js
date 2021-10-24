import React, { useState } from 'react';
// ui components
import { Grid } from '@mui/material';
// styles
import './Form.scss';

const Form = ({ closeBurger, submitForm }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || location === '') return;
    closeBurger(e);
    submitForm(location);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);

    console.log('location is:', e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={0}>
        <Grid className='nav-menu-item' item xs={12}>
          <label htmlFor='search'>Search by City:</label>
        </Grid>
        <Grid className='nav-menu-item' item xs={12}>
          <input
            type='text'
            name='search'
            placeholder='ex: London, UK'
            value={location}
            onChange={handleLocationChange}
          ></input>
        </Grid>
        <Grid className='nav-menu-item' item xs={12}>
          <button type='submit'>Search</button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
