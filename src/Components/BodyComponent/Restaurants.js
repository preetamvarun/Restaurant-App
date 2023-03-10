import './Restaurant.css';
import ShowRestaurants from './ShowRestaurants';

const Restaurant = () => {
  return (
    <div className='RestaurantDiv'>
      <h1>Featured Restaurants: Discover Our Top Picks</h1>
      <ShowRestaurants />
    </div>
  );
};

export default Restaurant;
