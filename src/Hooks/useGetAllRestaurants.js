import { useEffect, useState } from 'react';
import { API_URL } from '../utils/Config';

const GetAllRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState('');

  async function getAllRestaurants() {
    const res = await fetch(API_URL,{
   headers: {
     "Access-Control-Allow-Origin": '*'
   }
  });
    const resData = await res.json();
    setAllRestaurants(resData);
  }

  useEffect(() => {
    getAllRestaurants();
  }, []);

  return allRestaurants;
};

export default GetAllRestaurants;
