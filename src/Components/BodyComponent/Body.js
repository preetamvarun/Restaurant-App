import React from 'react';
import Navigator from './NavigatorComponent/Navigator';
import Searchbar from './SearchBarComponent/Searchbar';

const Body = () => {
  return (
    <React.Fragment>
      <Navigator />
      <Searchbar />
    </React.Fragment>
  );
};

export default Body;
