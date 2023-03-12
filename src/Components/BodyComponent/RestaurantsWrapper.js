import ShowRestaurants from './ShowRestaurants';
import './RestaurantsWrapper.css';

const RestaurantsWrapper = () => {
  return (
    <div className='RestaurantWrapperDiv'>
      <h1>Featured Restaurants: Discover Our Top Picks</h1>
      <ShowRestaurants />
    </div>
  );
};

export default RestaurantsWrapper;
