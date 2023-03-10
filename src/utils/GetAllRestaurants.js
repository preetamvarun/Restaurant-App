import { useEffect, useState } from 'react';
import { API_URL } from './Config';

const GetAllRestaurants = () => {
  async function getAllRestaurants() {
    const res = await fetch(API_URL);
    const resData = await res.json();
    SetAllRestaurants(resData);
  }

  const [AllRestaurants, SetAllRestaurants] = useState();

  useEffect(() => {
    getAllRestaurants();
  }, []);

  return AllRestaurants;
};

export default GetAllRestaurants;
