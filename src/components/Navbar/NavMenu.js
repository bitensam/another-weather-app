import React, { useState } from 'react';
//components
import Form from './Form';
//styles
import './NavMenu.scss';
//ui components
import { push as Menu } from 'react-burger-menu';

const NavMenu = ({ submitForm, closeBurger }) => {
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
      onClose={closeBurger}
    >
      <Form
        submitForm={submitForm}
        closeBurger={closeBurger}
        closeMenu={handleCloseMenu}
      />
    </Menu>
  );
};

export default NavMenu;
