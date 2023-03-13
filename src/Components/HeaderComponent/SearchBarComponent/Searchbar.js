import './Searchbar.css';
import { useContext } from 'react';
import { FoodContext } from '../../../Utils/SearchFoodContext';

const Searchbar = () => {
  const { handleSearchFood } = useContext(FoodContext);

  const handleChange = (evt) => {
    handleSearchFood(evt.target.value);
  };

  return (
    <div className='CravingsDiv'>
      <p>
        Search For Your Cravings
        <span>🍕</span>
      </p>
      <div className='inputDiv'>
        <input
          type={'text'}
          placeholder={'search food...'}
          onChange={handleChange}
        />
        <button>
          <i className='fa-solid fa-magnifying-glass'></i>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
