import { IMG_URL } from '../../utils/Config';

const Restaurant = ({
  name,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
  meta,
  cloudinaryImageId,
}) => {
  return (
    <div style={{ backgroundColor: 'green', margin: '1rem' }}>
      <div>
        <img src={IMG_URL + cloudinaryImageId} alt={name} />
      </div>
      <div>
        <p>{name}</p>
        <div>
          {cuisines?.map((cuisine) => (
            <p style={{ display: 'inline-block' }} key={cuisine}>
              {cuisine}
            </p>
          ))}
        </div>
      </div>
      <div>
        <span>{avgRating}</span>
        <span>.</span>
        <span>{slaString}</span>
        <span>.</span>
        <span>{costForTwoString}</span>
      </div>
      {/* Here You have to draw a horizontal line */}
      <div>
        <span>{meta}</span>
      </div>
      {/* Here You have to draw a horizontal line */}
      <p>Quick View</p>
    </div>
  );
};

export default Restaurant;
