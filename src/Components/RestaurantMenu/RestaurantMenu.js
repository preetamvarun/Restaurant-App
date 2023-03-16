import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../Hooks/useRestaurantMenu';
import './RestaurantMenu.css';
import RecommedRestaurant from './RecommendRestaurant';
import { v4 as uuidv4 } from 'uuid';

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState('');

  const menuData = useRestaurantMenu(id)?.data?.cards;

  useEffect(() => {
    setRestaurantMenu(menuData);
  }, [menuData]);

  const restaurantMenus =
    restaurantMenu &&
    restaurantMenu[
      restaurantMenu.length - 1
    ].groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter((eachCard) => eachCard?.card?.card?.itemCards)
      .map((a) => a?.card?.card?.itemCards)
      .flat(1)
      .map((a) => a?.card?.info);

  console.log(restaurantMenus);

  return (
    <div className='Main-Menu'>
      <div className='Intro-Div'>
        <div className='First-Intro'>
          <p>{restaurantMenu && restaurantMenu[0]?.card?.card?.info?.name}</p>
          <p>
            {restaurantMenu &&
              restaurantMenu[0]?.card?.card?.info?.cuisines.join(' , ')}
          </p>
          <p>
            {restaurantMenu && restaurantMenu[0]?.card?.card?.info?.locality} ,{' '}
            {restaurantMenu &&
              restaurantMenu[0]?.card?.card?.info?.sla?.lastMileTravelString}
          </p>
        </div>
        <div className='Second-Intro' style={{ fontSize: '.85rem' }}>
          <div style={{ color: '#3D9B6D', fontSize: '1rem' }}>
            <i className='fa-solid fa-star'></i>
            <p>
              {restaurantMenu && restaurantMenu[0]?.card?.card?.info?.avgRating}
            </p>
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
            {restaurantMenu &&
              restaurantMenu[0]?.card?.card?.info?.totalRatingsString}
          </p>
        </div>
      </div>

      <hr style={{ marginTop: '1rem' }} />
      {
        <div className='Recommended-Restaurants'>
          {restaurantMenus &&
            restaurantMenus.map((restaurantMenu) => (
              <RecommedRestaurant {...restaurantMenu} key={uuidv4()} />
            ))}
        </div>
      }
    </div>
  );
};

export default RestaurantMenu;
