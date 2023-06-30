import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Restaurant from '../Body/Restaurant';
import '../Body/RestaurantsWrapper.css';

const Offers = () => {
  const offerItems = useSelector((store) => store.offer.offerItems);
  const renderOfferItems = offerItems.filter(
    (eachItem) => eachItem.aggregatedDiscountInfo
  );
  
  if (renderOfferItems.length === 0)
    return <h1 style={{ marginTop: '10px' }}>No offers at the moment🥲</h1>;

  return (
    <div className='RestaurantWrapperDiv'>
      <h1>Discount Dining: Check out these Offers</h1>
      <div className='allRestaurants'>
        {renderOfferItems?.map((restaurant) => (
          <Link
            key={restaurant?.id}
            to={`/restaurant/${restaurant?.id}`}
            style={{
              display: 'inline-block',
              textDecoration: 'none',
              color: 'black',
            }}>
            <Restaurant {...restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Offers;
