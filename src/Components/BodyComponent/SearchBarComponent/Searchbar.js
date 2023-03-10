import { useState } from 'react';
import './Searchbar.css';

const Searchbar = () => {
  const [searchFood, setSearchFood] = useState('');

  const handleChange = (evt) => {
    setSearchFood(evt.target.value);
  };

  return (
    <div className='CravingsDiv'>
      <p>
        Search For Your Cravings
        <span>🍜🍕</span>
      </p>
      <div className='inputDiv'>
        <input
          type={'text'}
          placeholder={'search food...'}
          value={searchFood}
          onChange={handleChange}
        />
        <button>
          <i class='fa-solid fa-magnifying-glass'></i>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
