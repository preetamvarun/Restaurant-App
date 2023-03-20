import { IMG_URL } from '../../utils/Config';
import './FoodCart.css';

const FoodCart = ({ imageId, name, newPrice, description }) => {
  return (
    <div className='Food-Cart'>
      <div className='Food-Cart-Img-Div'>
        <img src={IMG_URL + imageId} alt={name} />
      </div>
      <div className='Food-Cart-Text-Div'>
        <p>{name}</p>
        <p>{newPrice}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FoodCart;
