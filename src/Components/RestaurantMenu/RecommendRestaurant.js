import './RecommendRestaurantStyles.css';
import { IMG_URL } from '../../Utils/Config';
import backupImage from '../RestaurantMenu/broken-img-v1.png';

const RecommedRestaurant = ({ name, price, description, imageId }) => {
  return (
    <div>
      <div className='RecommendRestaurantDiv'>
        <div className='Text-Div'>
          <p>{name}</p>
          <p>
            {Math.round(price / 100)}
            <i
              className='fa-solid fa-indian-rupee-sign'
              style={{
                marginLeft: '.2rem',
                fontSize: '.85rem',
              }}></i>
          </p>
          <p>{description}</p>
        </div>
        <div className='Image-Div-Wrapper'>
          <div className='Image-Div'>
            <img
              src={IMG_URL + imageId}
              alt={name}
              onError={(e) => (e.target.src = backupImage)}
            />
          </div>
          <a href='/'>Add +</a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default RecommedRestaurant;
