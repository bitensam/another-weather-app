import React, { useState } from 'react';
//components
import Form from './Form';
import Error from '../Utils/Error';
import Loading from '../Utils/Loading';
//hooks
import useWeather from '../Utils/useWeather';
//styles
import './NavMenu.scss';
//ui components
import { push as Menu } from 'react-burger-menu';

const NavMenu = ({ submitForm, closeBurger }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { isError, isLoading } = useWeather();

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <Menu
      right
      width={320}
      isOpen={isOpen}
      isClose={handleCloseMenu}
      onClose={closeBurger}
    >
      {!isLoading && (
        <Form submitForm={submitForm} closeBurger={handleCloseMenu} />
      )}
      {isError && Error}
      {isLoading && Loading}
    </Menu>
  );
};

export default NavMenu;
