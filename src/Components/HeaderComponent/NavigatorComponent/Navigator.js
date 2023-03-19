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
            <a href='/offers'>Offers</a>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <a href='/help'>Help</a>
          </li>
        </ul>
      </div>

      {/*Cart Icon*/}
      <div className='cart-icon'>
        <i className='fa-solid fa-cart-shopping'></i>
        <span style={{ margin: '1rem' }}>{cartItems.length}</span>
      </div>
    </div>
  );
};

export default Navigator;
