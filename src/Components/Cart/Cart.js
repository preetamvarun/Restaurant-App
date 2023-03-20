import './Cart.css';
import { useSelector } from 'react-redux';
import cook from '../Cart/cooking.png';
import { Link } from 'react-router-dom';
import FoodCart from './FoodCart';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className='Empty-Cart'>
          <div className='Cook-Food'>
            <img src={cook} alt='cook' />
          </div>
          <div className='Empty-Cart-Text'>
            <p>Your cart is empty</p>
            <p>You can Go to home page to view more restaurants near you</p>
            <Link to='/'>See more restaurants near you</Link>
          </div>
        </div>
      ) : (
        <div className='Food-Cart-Wrapper'>
          {cartItems.map((eachItem) => (
            <FoodCart {...eachItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
