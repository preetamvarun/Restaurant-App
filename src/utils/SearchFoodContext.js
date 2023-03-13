import { createContext } from 'react';

export const FoodContext = createContext({
  searchFood: '',
  handleSearchFood: () => {},
});
