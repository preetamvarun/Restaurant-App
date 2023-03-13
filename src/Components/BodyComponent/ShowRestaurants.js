import useGetAllRestaurants from '../../Hooks/useGetAllRestaurants';
import Restaurant from './Restaurant.js';
import './ShowRestaurant.css';

const ShowRestaurants = () => {
  const allRestaurants = useGetAllRestaurants();

  const arrOfRestaurants = allRestaurants?.data?.cards?.filter(
    (eachCard) => eachCard?.cardType !== 'carousel'
  )[0]?.data?.data?.cards;

  return (
    <div className='allRestaurantsWrapper'>
      <div className='Filters'>
        <h1>15 restaurants</h1>
        <ul>
          <li>
            <a href='/'>Delivery Time</a>
          </li>
          <li>
            <a href='/'>Rating</a>
          </li>
          <li>
            <a href='/'>Cost : Low To High</a>
          </li>
          <li>
            <a href='/'>Cost : High To Low</a>
          </li>
        </ul>
      </div>
      <div className='allRestaurants'>
        {arrOfRestaurants?.map((restaurant) => (
          <Restaurant {...restaurant?.data} key={restaurant?.data?.id} />
        ))}
      </div>
    </div>
  );
};

export default ShowRestaurants;
