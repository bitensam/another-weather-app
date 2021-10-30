import React, { useState } from 'react';
//components
import NavMenu from './NavMenu';
//styles
import './Navbar.scss';
//ui components
import { Grid } from '@mui/material';
import { Sling as Hamburger } from 'hamburger-react';

const Navbar = ({ submitForm, currentWeather }) => {
  const [clicked, setClicked] = useState(false);

  const handleCloseBurger = () => {
    setClicked(false);
  };

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={5}>
          <div className='date'>
            {currentWeather.date}, {currentWeather.weekday}
          </div>
          <div className='location'>{currentWeather.location}</div>
        </Grid>
        <Grid item xs={5} />
        <Grid item className='icon-menu' xs={2}>
          <Hamburger toggled={clicked} toggle={setClicked} duration={0.8} />
          {clicked && (
            <NavMenu submitForm={submitForm} closeBurger={handleCloseBurger} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
