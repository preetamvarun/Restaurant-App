import useGetAllRestaurants from '../../Hooks/useGetAllRestaurants';
import Restaurant from './Restaurant.js';
import './ShowRestaurant.css';
import { useEffect, useState } from 'react';
import UseFilterFoods from '../../Hooks/UseFilterFoods';
import { useContext } from 'react';
import { FoodContext } from '../../utils/SearchFoodContext';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../utils/OffersSlice';
import { setRestaurantCount } from '../../utils/OffersSlice';
import BounceLoader from 'react-spinners/BounceLoader';

const ShowRestaurants = () => {
  const { searchFood } = useContext(FoodContext);

  const dispatch = useDispatch();

  // const offerItems = useSelector((store) => store.offer.offerItems);

  const allRestaurants = useGetAllRestaurants()?.data?.cards?.filter(
    (eachCard) => eachCard?.cardType !== 'carousel'
  )[0]?.data?.data?.cards;

  const [requiredRestaurants, setRequiredRestaurants] = useState([]);

  // Filtering out restaurants when users search something
  useEffect(() => {
    const arr = allRestaurants?.filter((resObj) =>
      resObj.data.name.includes(searchFood)
    );
    setRequiredRestaurants(arr);
    // eslint-disable-next-line
  }, [searchFood]);

  // Intially, allRestaurants === requiredRestaurants
  useEffect(() => {
    setRequiredRestaurants(allRestaurants);
  }, [allRestaurants]);

  const handleClick = (evt) => {
    const filterMode = evt.target.textContent;
    const cuisines = UseFilterFoods(requiredRestaurants, filterMode);
    setRequiredRestaurants(cuisines);
  };

  if (allRestaurants) {
    dispatch(setRestaurantCount(allRestaurants.length));
    allRestaurants.forEach((eachRestaurant) => {
      dispatch(addItem(eachRestaurant.data));
    });
  }

  return (
    <div className='allRestaurantsWrapper'>
      <div className='Filters'>
        <h1>{requiredRestaurants?.length} restaurants</h1>
        <ul>
          <li onClick={handleClick}>Delivery Time</li>
          <li onClick={handleClick}>Rating</li>
          <li onClick={handleClick}>Cost : Low To High</li>
          <li onClick={handleClick}>Cost : High To Low</li>
        </ul>
      </div>
      {!allRestaurants ? (
        <center>
          <BounceLoader color='#3D4152' />
        </center>
      ) : (
        <div className='allRestaurants'>
          {requiredRestaurants &&
            requiredRestaurants?.map((restaurant) => (
              <Link
                key={restaurant?.data?.id}
                to={`/restaurant/${restaurant?.data?.id}`}
                style={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  color: 'black',
                }}>
                <Restaurant {...restaurant?.data} />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default ShowRestaurants;
