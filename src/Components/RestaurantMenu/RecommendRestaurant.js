import './RecommendRestaurantStyles.css';
import { IMG_URL } from '../../utils/Config';
import backupImage from '../RestaurantMenu/broken-img-v1.png';
import { addItem } from '../../utils/CartSlice';
import { useDispatch } from 'react-redux';

const RecommedRestaurant = ({ name, price, description, imageId }) => {
  const newPrice = !price
    ? Math.round(Math.random() * 100 + 100)
    : Math.round(price / 100);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem({ name, newPrice, description, imageId }));
  };

  return (
    <div>
      <div className='RecommendRestaurantDiv'>
        <div className='Text-Div'>
          <p>{name}</p>
          <p>
            {newPrice}
            <i
              className='fa-solid fa-indian-rupee-sign'
              style={{
                marginLeft: '.2rem',
                fontSize: '.85rem',
              }}></i>
          </p>
          <p>{description}</p>
        </div>
        <div className='Image-Div-Wrapper'>
          <div className='Image-Div'>
            <img
              src={IMG_URL + imageId}
              alt={name}
              onError={(e) => (e.target.src = backupImage)}
            />
          </div>
          <span href='/' className='Add-Link' onClick={handleAddItem}>
            Add +
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default RecommedRestaurant;
