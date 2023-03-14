import React from 'react';
import Navigator from '../HeaderComponent/NavigatorComponent/Navigator';
import Searchbar from './SearchBarComponent/Searchbar';

import './Header.css';

const Header = () => {
  return (
    <div className='FoodClass'>
      <Navigator />
      <Searchbar />
    </div>
  );
};

export default Header;
