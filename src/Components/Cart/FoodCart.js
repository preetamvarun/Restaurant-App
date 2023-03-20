import { IMG_URL } from '../../utils/Config';
import './FoodCart.css';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../utils/CartSlice';

const FoodCart = ({ imageId, name, newPrice }) => {
  return (
    <div className='Food-Cart'>
      <div className='Food-Cart-Img-Div'>
        <img src={IMG_URL + imageId} alt={name} />
      </div>
      <div className='Food-Cart-Text-Div'>
        <p className='Name'>{name}</p>
        <p className='Price'>
          <strong>price</strong> : {newPrice} rupees
        </p>
        <button>Delete Item</button>
      </div>
    </div>
  );
};

export default FoodCart;
