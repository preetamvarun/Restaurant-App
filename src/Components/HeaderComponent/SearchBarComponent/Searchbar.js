import './Searchbar.css';
import { useContext } from 'react';
import { FoodContext } from '../../../Utils/SearchFoodContext';
import { useLocation } from 'react-router-dom';
import useDisplayText from '../../../Hooks/useDisplayText';

const Searchbar = () => {
  const { handleSearchFood } = useContext(FoodContext);

  const handleChange = (evt) => {
    handleSearchFood(evt.target.value);
  };

  const location = useLocation();

  const showSearchBar = location.pathname === '/';

  const text = useDisplayText(location.pathname);

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
