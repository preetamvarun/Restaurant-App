import { useEffect, useState } from 'react';
import { API_URL } from '../Utils/Config';

const GetAllRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState('');

  async function getAllRestaurants() {
    const res = await fetch(API_URL);
    const resData = await res.json();
    setAllRestaurants(resData);
  }

  useEffect(() => {
    getAllRestaurants();
  }, []);

  return allRestaurants;
};

export default GetAllRestaurants;
