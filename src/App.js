import './App.css';
import Header from './Components/HeaderComponent/Header';
import RestaurantsWrapper from './Components/BodyComponent/RestaurantsWrapper';
import { useState } from 'react';
import { FoodContext } from './Utils/SearchFoodContext';

function App() {
  const [searchFood, setSearchFood] = useState('');

  const handleSearchFood = (newValue) => {
    setSearchFood(newValue);
  };

  return (
    <div className='App'>
      <FoodContext.Provider value={{ searchFood, handleSearchFood }}>
        <Header />
        <RestaurantsWrapper />
      </FoodContext.Provider>
    </div>
  );
}

export default App;
