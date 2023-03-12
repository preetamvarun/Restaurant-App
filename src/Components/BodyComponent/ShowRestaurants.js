import useGetAllRestaurants from '../../Hooks/useGetAllRestaurants';
import Restaurant from './Restaurant.js';
import './ShowRestaurant.css';

const ShowRestaurants = () => {
  const allRestaurants = useGetAllRestaurants();

  const arrOfRestaurants = allRestaurants?.data?.cards?.filter(
    (eachCard) => eachCard?.cardType !== 'carousel'
  )[0]?.data?.data?.cards;

  return (
    <div className='allRestaurants'>
      {arrOfRestaurants?.map((restaurant) => (
        <Restaurant {...restaurant?.data} key={restaurant?.data?.id} />
      ))}
    </div>
  );
};

export default ShowRestaurants;
