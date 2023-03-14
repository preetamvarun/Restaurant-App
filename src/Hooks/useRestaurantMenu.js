import { useEffect, useState } from 'react';
import { FETCH_MENU_URL } from '../Utils/Config';

const useRestaurantMenu = (id) => {
  const [resMenu, setResMenu] = useState();

  async function getMenu() {
    const res = await fetch(FETCH_MENU_URL + `/${id}`);
    const data = await res.json();
    setResMenu(data);
  }

  useEffect(() => {
    getMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return resMenu;
};

export default useRestaurantMenu;
