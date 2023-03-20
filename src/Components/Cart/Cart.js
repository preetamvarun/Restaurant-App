import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import cook from '../Cart/cooking.png';
import { Link } from 'react-router-dom';
import FoodCart from './FoodCart';
import { clearCart } from '../../utils/CartSlice';
import { v4 as uuidv4 } from 'uuid';

const Cart = () => {
  const cartItems = Array.from(useSelector((store) => store.cart.items));
  const disptach = useDispatch();
  const handleClear = () => {
    disptach(clearCart());
  };

  const mp = new Map();
  cartItems.forEach((eachItem) => {
    if (mp.has(eachItem.name)) {
      mp.set(eachItem.name, mp.get(eachItem.name) + eachItem.newPrice);
    } else {
      mp.set(eachItem.name, eachItem.newPrice);
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
          <div className='Billing-Details'>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item 1</td>
                  <td>2</td>
                  <td>$10.00</td>
                </tr>
                <tr>
                  <td>Item 2</td>
                  <td>1</td>
                  <td>$5.99</td>
                </tr>
                <tr>
                  <td>Item 3</td>
                  <td>3</td>
                  <td>$15.50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button onClick={handleClear}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
