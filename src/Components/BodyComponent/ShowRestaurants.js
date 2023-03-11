import { useEffect, useState } from 'react';
import useGetAllRestaurants from '../../utils/useGetAllRestaurants';
import Restaurant from './Restaurant';
import './ShowRestaurant.css';

const ShowRestaurants = () => {
  const allRestaurants = useGetAllRestaurants();

  const [filteredRestaurants, setfilteredRestaurants] = useState();

  useEffect(() => {
    setfilteredRestaurants(allRestaurants);
  }, [allRestaurants]);

  const arrOfRestaurants = allRestaurants?.data?.cards?.filter(
    (eachCard) => eachCard?.cardType !== 'carousel'
  )[0]?.data?.data?.cards;

  console.log(arrOfRestaurants);

  return <div className='allRestaurants'></div>;
};

export default ShowRestaurants;
