import React from 'react';
//styles
import './Navbar.scss';
//ui components
import { Grid } from '@mui/material';

const Navbar = () => {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={5}>
          <div className='date'>11:30 am, Fri Jan 4</div>
          <div className='location'>Warsaw, PL</div>
        </Grid>
        <Grid item xs={5} />
        <Grid item className='icon-menu' xs={2}>
          <nav role='navigation'>
            <div id='menuToggle'>
              <input type='checkbox' />
              <span></span>
              <span></span>
              <span></span>
              <ul id='menu'></ul>
            </div>
          </nav>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
