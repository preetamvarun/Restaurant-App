import { IMG_URL } from '../../utils/Config';
import './Restaurant.css';

const Restaurant = ({
  name,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
  aggregatedDiscountInfo,
  cloudinaryImageId,
}) => {
  // Changing ratingBackgroundColor

  let ratingBackgroundColor;
  cuisines.length >= 2 && cuisines.splice(3);
  if (Number(avgRating) >= 4) ratingBackgroundColor = 'green';
  else if (Number(avgRating) >= 3 && Number(avgRating) < 4)
    ratingBackgroundColor = 'orange';
  else ratingBackgroundColor = 'red';

  return (
    <div className='Restaurant'>
      <div className='RestaurantImgDiv'>
        <img src={IMG_URL + cloudinaryImageId} alt={name} />
      </div>
      <div>
        <p className='Restaurant-Name'>{name}</p>
        <p className='Cuisines'>{cuisines?.join(', ')}</p>
      </div>
      <div className='Discount-Rating'>
        <div className='Rating-Wrapper'>
          <div
            className='Rating'
            style={{ backgroundColor: `${ratingBackgroundColor}` }}>
            <i className='fa-solid fa-star'></i>
            <span>{avgRating}</span>
          </div>
          <p className='Rating-Dot'></p>
          <span>{slaString}</span>
          <p className='Rating-Dot'></p>
          <span>{costForTwoString}</span>
        </div>

        <hr
          style={{
            width: '90%',
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)',
            margin: '.5rem 0rem',
            backgroundColor: 'red',
            borderWidth: '0.1px',
          }}
        />

        {/* Here You have to draw a horizontal line */}
        <div className='DiscountInfo'>
          <i className='fa-solid fa-tag'></i>
          <span>{aggregatedDiscountInfo.shortDescriptionList[0].meta}</span>
        </div>
        <hr className='horizontalLine' />
        {/* Here You have to draw a horizontal line */}
        <p className='QuickView'>QUICK VIEW</p>
      </div>
    </div>
  );
};

export default Restaurant;
