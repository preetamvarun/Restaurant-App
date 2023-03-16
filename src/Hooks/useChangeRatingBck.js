const useChangeRatingBck = (avgRating) => {
  let ratingBackgroundColor;

  if (Number(avgRating) >= 4) ratingBackgroundColor = 'green';
  else if (Number(avgRating) >= 3 && Number(avgRating) < 4)
    ratingBackgroundColor = 'orange';
  else ratingBackgroundColor = 'red';

  return ratingBackgroundColor;
};

export default useChangeRatingBck;
