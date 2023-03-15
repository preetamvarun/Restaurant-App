import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../Hooks/useRestaurantMenu';

const RestaurantMenu = () => {
  const { id } = useParams();
  console.log(id);
  const [restaurantMenu, setRestaurantMenu] = useState('');

  const menuData = useRestaurantMenu(id);

  useEffect(() => {
    setRestaurantMenu(menuData);
  }, [menuData]);

  console.log(restaurantMenu);

  return (
    <div>
      <p>Showing {id}'s Restaurant Menu</p>
    </div>
  );
};

export default RestaurantMenu;
