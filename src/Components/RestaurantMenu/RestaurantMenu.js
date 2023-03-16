import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../Hooks/useRestaurantMenu';
import './RestaurantMenu.css';
import RecommedRestaurant from './RecommendRestaurant';

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState('');

  const menuData = useRestaurantMenu(id);

  const menuObj = restaurantMenu?.data?.menu?.items;

  useEffect(() => {
    setRestaurantMenu(menuData);
  }, [menuData]);

  // restaurantMenu?.data?.menu?.items
  // Object.entries(restaurantMenu?.data?.menu?.items)?.map(([key, value]) =>
  //   console.log(key[value])
  // );

  return (
    <div className='Main-Menu'>
      <div className='Intro-Div'>
        <div className='First-Intro'>
          <p>{restaurantMenu?.data?.name}</p>
          <p>{restaurantMenu?.data?.cuisines.join(' , ')}</p>
          <p>
            {restaurantMenu?.data?.locality} ,{' '}
            {restaurantMenu?.data?.sla?.lastMileDistanceString}
          </p>
        </div>
        <div className='Second-Intro' style={{ fontSize: '.85rem' }}>
          <div style={{ color: '#3D9B6D', fontSize: '1rem' }}>
            <i className='fa-solid fa-star'></i>
            <p>{restaurantMenu?.data?.avgRating}</p>
          </div>
          <hr
            style={{
              width: '75%',
              position: 'relative',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
          <p style={{ color: '#848591' }}>
            {restaurantMenu?.data?.totalRatingsString}
          </p>
        </div>
      </div>
      <hr style={{ marginTop: '1rem' }} />
      <div className='Recommended-Restaurants'>
        {menuObj &&
          Object.entries(menuObj).map(([key, value]) => (
            <RecommedRestaurant key={key} {...value} />
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
