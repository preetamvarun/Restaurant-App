import React from 'react';
import Navigator from './NavigatorComponent/Navigator';
import Searchbar from './SearchBarComponent/Searchbar';

import './Header.css';

const Header = ({ handleFoodSearchChange }) => {
  return (
    <div className='FoodClass'>
      <Navigator />
      <Searchbar />
    </div>
  );
};

export default Header;
