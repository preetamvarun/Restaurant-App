import './Navigator.css';
import { Link } from 'react-router-dom';

const Navigator = () => {
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
      </div>
    </div>
  );
};

export default Navigator;
