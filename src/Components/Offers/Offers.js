import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Restaurant from '../Body/Restaurant';

const Offers = () => {
  const offerItems = useSelector((store) => store.offer.offerItems);
  const renderOfferItems = offerItems.filter(
    (eachItem) => eachItem.aggregatedDiscountInfo
  );
  return (
    <div>
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
  );
};

export default Offers;
