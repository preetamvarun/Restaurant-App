import './Navigator.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigator = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className='Navigator'>
      {/*List Items in the navigator*/}
      <div className='Nav-Links'>
        <ul style={{ display: 'flex', justifyContent: 'center' }}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/offers'>Offers</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/help'>Help</Link>
          </li>
        </ul>
      </div>

      {/*Cart Icon*/}
      <div className='cart-icon'>
        <Link to='/cart'>
          <i className='fa-solid fa-cart-shopping'></i> - {cartItems.length}
        </Link>
      </div>
    </div>
  );
};

export default Navigator;
