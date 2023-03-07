import { useState } from 'react';
import logo from '../NavigatorComponent/logo-full.png';
import './Navigator.css';

const Navigator = () => {
  const [searchProduct, setSearchProduct] = useState('');
  const handleOnChange = (evt) => {
    setSearchProduct(evt.target.value);
  };
  return (
    <div className='Navigator'>
      {/*Logo*/}
      <div className='image-logo'>
        <img src={logo} alt='eye-lens-logo' />
      </div>

      {/*List Items in the navigator*/}
      <div>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Featured</li>
          <li>Recommended</li>
        </ul>
      </div>

      {/*Input box for user to search Items*/}
      <div className='input-box'>
        <i class='fa-solid fa-magnifying-glass'></i>
        <input
          type='text'
          value={searchProduct}
          onChange={handleOnChange}
          placeholder='search product here'
        />
      </div>

      {/*Cart Icon*/}
      <div className='cart-icon'>
        <i class='fa-solid fa-cart-shopping'></i>
      </div>
    </div>
  );
};

export default Navigator;
