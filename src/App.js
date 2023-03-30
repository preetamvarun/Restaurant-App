import './App.css';
import Header from './Components/HeaderComponent/Header';
import RestaurantsWrapper from './Components/Body/RestaurantsWrapper';
import { useState } from 'react';
import { FoodContext } from './utils/SearchFoodContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About/About';
import Help from './Components/Help/Help';
import Offers from './Components/Offers/Offers';
import RestaurantMenu from './Components/RestaurantMenu/RestaurantMenu';
import Cart from './Components/Cart/Cart';
import NotFound from './Components/NotFound';

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
            <Route path='/restaurant/:id' Component={RestaurantMenu} />
            <Route path='/cart' Component={Cart} />
            <Route path='*' Component={NotFound} />
          </Routes>
        </FoodContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
