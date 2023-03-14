import './App.css';
import Header from './Components/HeaderComponent/Header';
import RestaurantsWrapper from './Components/BodyComponent/RestaurantsWrapper';
import { useState } from 'react';
import { FoodContext } from './Utils/SearchFoodContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/AboutComponent/About';
import Help from './Components/HelpComponent/Help';
import Offers from './Components/OffersComponent/Offers';
import RestaurantMenu from './Components/RestaurantMenu/RestaurantMenu';

function App() {
  const [searchFood, setSearchFood] = useState('');

  const handleSearchFood = (newValue) => {
    setSearchFood(newValue);
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <FoodContext.Provider value={{ searchFood, handleSearchFood }}>
          <Header />
          <Routes>
            <Route path='/about' Component={About} />
            <Route path='/' Component={RestaurantsWrapper} />
            <Route path='/help' Component={Help} />
            <Route path='/offers' Component={Offers} />
            <Route path='/restaurant/:name' Component={RestaurantMenu} />
          </Routes>
        </FoodContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
