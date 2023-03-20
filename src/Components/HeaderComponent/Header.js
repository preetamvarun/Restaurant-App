import React from 'react';
import Navigator from '../HeaderComponent/Navigator/Navigator';
import Searchbar from '../HeaderComponent/SearchBar/Searchbar';

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
