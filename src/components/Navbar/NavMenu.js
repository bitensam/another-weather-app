import React, { useState } from 'react';
//components
import Form from './Form';
//styles
import './NavMenu.scss';
//ui components
import { Grid } from '@mui/material';
import { push as Menu } from 'react-burger-menu';

const NavMenu = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <Menu
      right
      width={320}
      isOpen={isOpen}
      isClose={handleCloseMenu}
      onClose={props.closeBurger}
    >
      <Grid container spacing={0}>
        <Grid className='nav-menu-item' item xs={12}>
          <p>Search by City:</p>
        </Grid>
        <Form closeBurger={props.closeBurger} />
        {/* <form onSubmit={handleSubmit}>
          <Grid className='nav-menu-item' item xs={12}>
            <input type='text' placeholder='ex: London, UK'></input>
          </Grid>
          <Grid className='nav-menu-item' item xs={12}>
            <button onClick={props.closeBurger} type='submit'>
              Search...
            </button>
          </Grid>
        </form> */}
      </Grid>
    </Menu>
  );
};

export default NavMenu;
