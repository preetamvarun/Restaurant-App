import { useEffect, useState } from 'react';
import useGetAllRestaurants from '../../utils/useGetAllRestaurants';
import './ShowRestaurant.css';

const ShowRestaurants = () => {
  const allRestaurants = useGetAllRestaurants();

  const [filteredRestaurants, setfilteredRestaurants] = useState();

  useEffect(() => {
    setfilteredRestaurants(allRestaurants);
  }, [allRestaurants]);

  const arr = allRestaurants?.data?.cards?.filter(
    (eachCard) => eachCard?.cardType !== 'carousel'
  )[0];

  const oneRestaurant = arr?.data?.data?.cards[0];

  console.log(oneRestaurant?.data);

  return (
    <div className='allRestaurants'>
      <h1>About to show some Restaurants</h1>
    </div>
  );
};

export default ShowRestaurants;
