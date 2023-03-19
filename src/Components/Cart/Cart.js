import './Cart.css';
import { useSelector } from 'react-redux';
import cook from '../Cart/cooking.png';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      {!cartItems.length && (
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
      )}
    </div>
  );
};

export default Cart;
