import { useSelector } from 'react-redux';

const Offers = () => {
  const offerItems = useSelector((store) => store.offer.offerItems);
  const restaurantCount = useSelector((store) => store.offer.restaurantCount);
  return (
    <div>
      <p>This is an offers Component</p>
    </div>
  );
};

export default Offers;
