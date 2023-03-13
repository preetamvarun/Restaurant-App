const UseFilterFoods = (arr, filterMode) => {
  const cuisines = [...arr];

  // Filter Based On Rating
  if (filterMode === 'Rating') {
    cuisines.sort(
      (obj1, obj2) =>
        (isNaN(Number(obj2.data.avgRating)) ? 0 : Number(obj2.data.avgRating)) -
        (isNaN(Number(obj1.data.avgRating)) === '--'
          ? 0
          : Number(obj1.data.avgRating))
    );
  }
  // Filter Based On Delivery Time
  if (filterMode === 'Delivery Time') {
    cuisines.sort(
      (obj1, obj2) => obj1.data.deliveryTime - obj2.data.deliveryTime
    );
  }
  // Filter Based On Cost : Low To High
  if (filterMode.includes('Low To High')) {
    cuisines.sort((obj1, obj2) => obj1.data.costForTwo - obj2.data.costForTwo);
  }
  // Filter Based On Cost : High To Low
  if (filterMode.includes('High To Low')) {
    cuisines.sort((obj1, obj2) => obj2.data.costForTwo - obj1.data.costForTwo);
  }

  return cuisines;
};

export default UseFilterFoods;
