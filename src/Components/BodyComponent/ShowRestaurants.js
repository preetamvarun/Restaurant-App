import useGetAllRestaurants from '../../Hooks/useGetAllRestaurants';
import Restaurant from './Restaurant.js';
import './ShowRestaurant.css';
import { useEffect, useState } from 'react';

const ShowRestaurants = () => {
  const allRestaurants = useGetAllRestaurants()?.data?.cards?.filter(
    (eachCard) => eachCard?.cardType !== 'carousel'
  )[0]?.data?.data?.cards;

  const [requiredRestaurants, setRequiredRestaurants] = useState();

  useEffect(() => {
    setRequiredRestaurants(allRestaurants);
  }, [allRestaurants]);

  const handleClick = (evt) => {
    const arr = [...requiredRestaurants];
    console.log(arr);
    // Filter Based on Rating
    if (evt.target.textContent === 'Rating') {
      arr.sort(
        (obj1, obj2) =>
          (isNaN(Number(obj2.data.avgRating))
            ? 0
            : Number(obj2.data.avgRating)) -
          (isNaN(Number(obj1.data.avgRating)) === '--'
            ? 0
            : Number(obj1.data.avgRating))
      );
    }
    // Filter Based on Delivery Time
    if (evt.target.textContent === 'Delivery Time') {
      arr.sort((obj1, obj2) => obj1.data.deliveryTime - obj2.data.deliveryTime);
    }
    // Filter Based on Cost : Low to High
    if (evt.target.textContent.includes('Low To High')) {
      arr.sort((obj1, obj2) => obj1.data.costForTwo - obj2.data.costForTwo);
    }

    if (evt.target.textContent.includes('High To Low')) {
      arr.sort((obj1, obj2) => obj2.data.costForTwo - obj1.data.costForTwo);
    }
    // Filter Based on Cost : Hight to Low
    setRequiredRestaurants(arr);
  };

  return (
    <div className='allRestaurantsWrapper'>
      <div className='Filters'>
        <h1>15 restaurants</h1>
        <ul>
          <li onClick={handleClick}>Delivery Time</li>
          <li onClick={handleClick}>Rating</li>
          <li onClick={handleClick}>Cost : Low To High</li>
          <li onClick={handleClick}>Cost : High To Low</li>
        </ul>
      </div>
      <div className='allRestaurants'>
        {requiredRestaurants &&
          requiredRestaurants?.map((restaurant) => (
            <Restaurant {...restaurant?.data} key={restaurant?.data?.id} />
          ))}
      </div>
    </div>
  );
};

export default ShowRestaurants;
