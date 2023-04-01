import './FoodItem.css';

const FoodItem = ({ img, idx }) => {
  return (
    <div className='Image-Div' id={idx && String(idx)}>
      <img src={img} alt={img} />
    </div>
  );
};

export default FoodItem;
