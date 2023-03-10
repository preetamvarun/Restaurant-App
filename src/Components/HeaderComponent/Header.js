import React from 'react';
import Navigator from './NavigatorComponent/Navigator';
import Searchbar from './SearchBarComponent/Searchbar';

import './Header.css';

const Header = () => {
  return (
    <React.Fragment>
      <div className='FoodClass'>
        <Navigator />
        <Searchbar />
      </div>
    </React.Fragment>
  );
};

export default Header;
