import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const { name } = useParams();
  return (
    <div>
      <p>Showing {name}'s Restaurant Menu</p>
    </div>
  );
};

export default RestaurantMenu;
