import React, { Component } from 'react';
import { HamburgerSqueeze } from 'react-animated-burgers';

const Menu = ({ toggleButton, isActive }) => {
  return (
    <div>
      <HamburgerSqueeze
        isActive={isActive}
        toggleButton={() => toggleButton()}
        barColor="white"
      />
    </div>
  );
};

export default Menu;
