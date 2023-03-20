import { IMG_URL } from '../../utils/Config';
import './FoodCart.css';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../utils/CartSlice';

const FoodCart = ({ imageId, name, newPrice }) => {
  const dispatch = useDispatch();

  function modifyStore(name) {
    dispatch(removeItem(name));
  }

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
        <button
          onClick={() => {
            modifyStore(name);
          }}>
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default FoodCart;
