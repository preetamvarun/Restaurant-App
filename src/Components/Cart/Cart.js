import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import cook from '../Cart/cooking.png';
import { Link } from 'react-router-dom';
import FoodCart from './FoodCart';
import { clearCart } from '../../utils/CartSlice';
import { v4 as uuidv4 } from 'uuid';
import Billing from './Billing';

const Cart = () => {
  const cartItems = Array.from(useSelector((store) => store.cart.items));
  const disptach = useDispatch();
  const handleClear = () => {
    disptach(clearCart());
  };

  const mp = new Map();

  cartItems.forEach((foodItem) => {
    if (mp.has(foodItem.name)) {
      mp.set(foodItem.name, mp.get(foodItem.name) + foodItem.newPrice);
    } else {
      mp.set(foodItem.name, foodItem.newPrice);
    }
  });

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
        <div className='Food-Cart-Wrapper-Upper'>
          <h1>Savor the flavors in your cart</h1>
          <div className='Food-Cart-Wrapper'>
            {cartItems.map((eachItem) => (
              <FoodCart {...eachItem} key={uuidv4()} />
            ))}
          </div>
          <button onClick={handleClear}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
