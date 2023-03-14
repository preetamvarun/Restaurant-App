import './Searchbar.css';
import { useContext } from 'react';
import { FoodContext } from '../../../Utils/SearchFoodContext';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
  const { handleSearchFood } = useContext(FoodContext);

  const handleChange = (evt) => {
    handleSearchFood(evt.target.value);
  };

  const location = useLocation();
  const showSearchBar = location.pathname === '/';

  let text = '';

  if (location.pathname === '/') {
    text = (
      <p>
        Search For Your Cravings
        <span>🍕</span>
      </p>
    );
  } else if (location.pathname === '/about') {
    text = <p>Get To Know Us !</p>;
  } else if (location.pathname === '/offers') {
    text = <p>Know what can we offer you 🏷️</p>;
  } else {
    text = <p>Welcome To Help Section 💁</p>;
  }

  return (
    <div className='CravingsDiv'>
      {text}
      {showSearchBar && (
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
      )}
    </div>
  );
};

export default Searchbar;
