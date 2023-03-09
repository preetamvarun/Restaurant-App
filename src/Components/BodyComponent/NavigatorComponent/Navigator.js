import logo from '../NavigatorComponent/chef.png';
import './Navigator.css';

const Navigator = () => {
  return (
    <div className='Navigator'>
      {/*Logo*/}
      <div className='image-logo' style={{ flex: 1 }}>
        <a href='/'>
          <img src={logo} alt='eye-lens-logo' />
        </a>
      </div>

      {/*List Items in the navigator*/}
      <div className='Nav-Links' style={{ flex: 2 }}>
        <ul style={{ display: 'flex', justifyContent: 'center' }}>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Offers</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Help</a>
          </li>
        </ul>
      </div>

      {/*Cart Icon*/}
      <div className='cart-icon' style={{ flex: 1 }}>
        <i class='fa-solid fa-cart-shopping'></i>
      </div>
    </div>
  );
};

export default Navigator;
