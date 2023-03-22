import { useEffect, useState } from 'react';
import { API_URL } from '../utils/Config';

const GetAllRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState('');

  async function getAllRestaurants() {
    const res = await fetch(API_URL);
    const resData = await res.json();
    setTimeout(() => {
      setAllRestaurants(resData);
    }, 5000);
  }

  useEffect(() => {
    getAllRestaurants();
  }, []);

  return allRestaurants;
};

export default GetAllRestaurants;
