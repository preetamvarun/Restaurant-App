import { useState } from 'react';
import './Searchbar.css';

const Searchbar = () => {
  const [searchFood, setSearchFood] = useState('');

  const handleChange = (evt) => {
    setSearchFood(evt.target.value);
  };

  return (
    <div className='searchbar'>
      <div className='CravingsDiv'>
        <p>
          Search For Your Cravings
          <span style={{ fontSize: '2rem' }}>🍜🍕</span>
        </p>
        <div className='inputDiv'>
          <input
            type={'text'}
            placeholder={'search food...'}
            value={searchFood}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
